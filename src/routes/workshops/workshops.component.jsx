// import './workshops.styles.scss';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderSection from '../../components/header-section/header-section.component';
import Cards from '../../components/cards/cards.component';
import Footer from '../../components/footer/footer.component';

const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque cumque sit accusamus neque. Tempore odio commodi dolorem ullam, possimus quo maiores molestiae explicabo error. Culpa quasi sequi debitis omnis?";
const Workshops = () => {
    return (
        <Fragment>
            <main class="main">
                <HeaderSection title="Workshops" content={content}/>
                <Cards />
            </main>
            <Footer />
            <Outlet />
        </Fragment>
    );
}

export default Workshops;