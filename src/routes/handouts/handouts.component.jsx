import "./handouts.styles.scss";
import HeaderSection from "../../components/shared/header-section/header-section.component";
import { Button } from "../../components/shared/button/button.component";
import Carousel from "../../components/shared/carousel/carousel.component";
import Window from "../../components/shared/window/window.component";
import Project from "../../components/projects/project/project.component";
import Session from "../../components/shared/session/session.component";
import Footer from "../../components/shared/footer/footer.component";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { WorkshopsRepository } from "../../services/api";

const content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque cumque sit accusamus neque. Tempore odio commodi dolorem ullam, possimus quo maiores molestiae explicabo error. Culpa quasi sequi debitis omnis?";
const Handouts = () => {
  const { id } = useParams();
  const [workshop, setWorkshop] = useState([]);
  const [materialsImages, setMaterialImages] = useState([]);
  const [sessionsImages, setSessionsImages] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await WorkshopsRepository.getWorkshop(id);
  //     setWorkshop(response.workshop);
  //     setMaterialImages(response.materialsImages);
  //     setSessionsImages(response.sessionsImages);
  //     console.log(response.workshop);
  //   };
  //   fetchData();
  // }, []);
  return (
    <Fragment>
      <main className='main'>
        <HeaderSection title={workshop.title} content={workshop.description}>
          <Button type='red' content='Participate Now!' to=''></Button>
        </HeaderSection>

        <section className='carousel-section'>
          {workshop.images && <Carousel images={workshop.images} />}
        </section>

        <Fragment>
          <h1 className='u-margin-bottom-large'>Materials Used</h1>
          <Window>
            {workshop.materials &&
              workshop.materials.map((material, index) => {
                // console.log(materialsImages[index], "material");
                return (
                  <Project
                    key={material.id}
                    state={{
                      material: material,
                      materialImage: materialsImages[index],
                    }}
                  />
                );
              })}
          </Window>
        </Fragment>

        <section className='recorded-section'>
          <h1 className='u-margin-bottom-large'>Recorded Sessions</h1>

          <Window>
            <div className='sessions-container'>
              {workshop.sessions &&
                workshop.sessions.map((session, index) => {
                  return (
                    <Session
                      key={session.id}
                      state={{
                        session: session,
                        sessionImage: sessionsImages[index],
                      }}
                    />
                  );
                })}
              {/* <Session
                src={require("../../assets/imgs/sqr.jpg")}
                to=''></Session>
              <Session
                src={require("../../assets/imgs/sqr.jpg")}
                to=''></Session>
              <Session
                src={require("../../assets/imgs/sqr.jpg")}
                to=''></Session>
              <Session
                src={require("../../assets/imgs/sqr.jpg")}
                to=''></Session> */}
            </div>
          </Window>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Handouts;
