import './handouts.styles.scss';
import HeaderSection from '../../components/header-section/header-section.component';
import { Button } from '../../components/button/button.component';
import Carousel from '../../components/carousel/carousel.component';
import Window from '../../components/window/window.component';
import Project from '../../components/project/project.component';
import Session from '../../components/session/session.component';
import Footer from '../../components/footer/footer.component';
import { Fragment } from 'react';

const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque cumque sit accusamus neque. Tempore odio commodi dolorem ullam, possimus quo maiores molestiae explicabo error. Culpa quasi sequi debitis omnis?";

const Handouts = () => {
    return (
        <Fragment>
        <main class="main">
            
            <HeaderSection title="Workshop Title" content={content}>
                <Button type="red" content="Participate Now!" to=""></Button>
            </HeaderSection>

            <section className="carousel-section">
                <Carousel />
            </section>
    
            <Fragment>
                <h1 class="u-margin-bottom-large">Materials Used</h1>
                <Window> 
                    <Project src={require("../../assets/imgs/project.jpg")} alt="" title="Lorem Ipsum" content={content} />
                    <Project src={require("../../assets/imgs/project.jpg")} alt="" title="Lorem Ipsum" content={content} />
                    <Project src={require("../../assets/imgs/project.jpg")} alt="" title="Lorem Ipsum" content={content} />
                    <Project src={require("../../assets/imgs/project.jpg")} alt="" title="Lorem Ipsum" content={content} />
                </Window>
            </Fragment>

            <section class="recorded-section">
                <h1 class="u-margin-bottom-large">Recorded Sessions</h1>

                <Window>
                    <div className='sessions-container'>
                        <Session src={require("../../assets/imgs/sqr.jpg")} to=""></Session>
                        <Session src={require("../../assets/imgs/sqr.jpg")} to=""></Session>
                        <Session src={require("../../assets/imgs/sqr.jpg")} to=""></Session>
                        <Session src={require("../../assets/imgs/sqr.jpg")} to=""></Session>
                    </div>
                </Window>
            </section>
        </main>

        <Footer />
        </Fragment>
    );
}

export default Handouts;