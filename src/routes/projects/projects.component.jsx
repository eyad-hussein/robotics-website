import "./projects.styles.scss";
import HeaderSection from "../../components/header-section/header-section.component";
import Project from "../../components/project/project.component";
import Footer from "../../components/footer/footer.component";
import { Fragment } from "react";

const Projects = () => {
  return (
    <Fragment>
      <main className='main'>
        <HeaderSection
          title='Projects'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque cumque sit accusamus neque. Tempore odio commodi dolorem ullam, possimus quo maiores molestiae explicabo error. Culpa quasi sequi debitis omnis?'
        />
        <section className='projects-section'>
          <Project
            src={require("../../assets/imgs/project.jpg")}
            alt=''
            title='Title'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam impedit doloribus quos amet veniam repellat quibusdam harum. Voluptatibus cupiditate, iure architecto error ullam reprehenderit, fugit deleniti debitis, officia natus atque.'
          />
          <Project
            src={require("../../assets/imgs/project.jpg")}
            alt=''
            title='Title'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam impedit doloribus quos amet veniam repellat quibusdam harum. Voluptatibus cupiditate, iure architecto error ullam reprehenderit, fugit deleniti debitis, officia natus atque.'
          />
          <Project
            src={require("../../assets/imgs/project.jpg")}
            alt=''
            title='Title'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam impedit doloribus quos amet veniam repellat quibusdam harum. Voluptatibus cupiditate, iure architecto error ullam reprehenderit, fugit deleniti debitis, officia natus atque.'
          />
          <Project
            src={require("../../assets/imgs/project.jpg")}
            alt=''
            title='Title'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam impedit doloribus quos amet veniam repellat quibusdam harum. Voluptatibus cupiditate, iure architecto error ullam reprehenderit, fugit deleniti debitis, officia natus atque.'
          />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Projects;
