import React from 'react';
import Navigation from '../Navigation/Navigation';
import facebookIcon from '../../images/facebook-icon.svg';
import githubIcon from '../../images/github-icon.svg';


function Footer() {
  return (
    <div className='footer'>
      <p className="footer__copyright">&copy; 2021 Supersite, Powered by News API</p>
      <Navigation linkClassName='navigation__link_type_footer' />
      <ul className="footer__links">
        <li><a href="https://praktikum.yandex.ru" className="footer__link" rel='noreferrer' target="_blank">Яндекс.Практикум</a></li>
        <li>
          <a href="https://github.com" className="footer__link" rel='noreferrer' target="_blank">
            <img className="footer__social-icon" src={githubIcon} alt="Github"/>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com" className="footer__link" rel='noreferrer' target="_blank">
            <img className="footer__social-icon" src={facebookIcon} alt="Facebook"/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer;
