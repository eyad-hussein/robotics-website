import "./mekatro.styles.scss";
import HeaderSection from "../../components/shared/header-section/header-section.component";
import Session from "../../components/shared/session/session.component";
import Footer from "../../components/shared/footer/footer.component";
import { Fragment } from "react";

const content =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed molestias illo ex laboriosam id quis nulla eos dolores, iure esse obcaecati soluta nesciunt alias distinctio, reiciendis nostrum cumque, ipsum nisi!";

const Mekatro = () => {
  return (
    <Fragment>
      <HeaderSection title='Mekatro' content={content} />
      <main className='main'>
        <HeaderSection />

        <section className='sessions-section'>
          <h2>Recorded Sessions</h2>
          <div className='sessions-container'>
            <Session
              src={require("../../assets/imgs/sqr.jpg")}
              to='/mekatro/record/1'
            />
            <Session
              src={require("../../assets/imgs/sqr.jpg")}
              to='/mekatro/record/2'
            />
            <Session
              src={require("../../assets/imgs/sqr.jpg")}
              to='/mekatro/record/3'
            />
            <Session
              src={require("../../assets/imgs/sqr.jpg")}
              to='/mekatro/record/4'
            />
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Mekatro;
