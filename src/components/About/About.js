import React from 'react';
import authorImage from '../../images/author.jpg';

function About() {
  return (
    <section className='about'>
      <img className='about__image' src={authorImage} alt='Автор'/>
      <div className='about__text'>
        <h2 className='about__title'>Об авторе</h2>
        <p className='about__description'>
          Привет!<br/>
          На фоне прекрасных гор и заходящего солнца - Евгений Проскурников.
          Веб-разработчик, дружелюбный сосед и любитель зимних видов спорта.
          Это мой дипломный проект.
        </p>
        <p className='about__description'>
          Закончил годовое обучение в Яндекс.Практикум и нахожусь в активном поиске работы.<br/>
          Мой стек: HTML5/CSS3 JS/React/Redux/Redux-thunk Node/Express/MongoDB.<br/>
          Напишите мне в telegram: @evgenypros.
          Буду рад сотрудничеству!
        </p>
      </div>
    </section>
  )
}

export default About;
