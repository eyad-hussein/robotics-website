// import './workshops.styles.scss';
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import HeaderSection from "../../components/shared/header-section/header-section.component";
import Cards from "../../components/workshops/cards/cards.component";
import Footer from "../../components/shared/footer/footer.component";
import { WorkshopsRepository } from "../../services/api";
import { useEffect, useState } from "react";

const content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque cumque sit accusamus neque. Tempore odio commodi dolorem ullam, possimus quo maiores molestiae explicabo error. Culpa quasi sequi debitis omnis?";
const Workshops = () => {
  const [activeWorkshops, setActiveWorkshops] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await WorkshopsRepository.getActiveWorkshops();
      setActiveWorkshops(response);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <main className='main'>
        <HeaderSection title='Workshops' content={content} />
        <Cards activeWorkshops={activeWorkshops} />
      </main>
      <Footer />
      <Outlet />
    </Fragment>
  );
};

export default Workshops;
