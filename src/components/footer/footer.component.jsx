import './footer.styles.scss';
import { ReactComponent as RoboticsBigLogo } from '../../assets/logos/robo-horizontal-white.svg';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Fragment>
            <footer class="footer">
            <RoboticsBigLogo className="footer__logo"/>
                <div class="footer__social-box">
                    <Link class="footer__icon footer__icon--1" to="https://www.facebook.com" target='_blank'></Link>
                    <Link class="footer__icon footer__icon--2" tp="https://instagram.com" target='_blank'></Link>
                    <Link class="footer__icon footer__icon--3" to="https://whatsapp.com" target='_blank'></Link>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;