import React from 'react';
import Navigation from '../Navigation/Navigation';
import facebookIcon from '../../images/facebook-icon.svg';
import githubIcon from '../../images/github-icon.svg';


function Footer() {
  return (
    <footer className='footer'>
      <p className="footer__copyright">&copy; 2021 Supersite, Powered by News API</p>
      <Navigation rootLinkClass='navigation__link_type_footer' />
      <a href="https://praktikum.yandex.ru" className="footer__link" rel='noreferrer' target="_blank">Яндекс.Практикум</a>
      <ul className="footer__links">
        <li>
          <a href="https://github.com/Evgeny-Proskurnikov" className="footer__link" rel='noreferrer' target="_blank">
            <img className="footer__social-icon" src={githubIcon} alt="Github"/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ev_haxt/" className="footer__link" rel='noreferrer' target="_blank">
            <img className="footer__social-icon" src={facebookIcon} alt="Facebook"/>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
