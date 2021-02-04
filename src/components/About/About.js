import React from 'react';
import authorImage from '../../images/author.jpg';

function About() {
  return (
    <section className='about'>
      <img className='about__image' src={authorImage} alt='Автор'/>
      <div className='about__text'>
        <h2 className='about__title'>Об авторе</h2>
        <p className='about__description'>
          Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, 
          чем вы занимаетесь, какими технологиями разработки владеете.
        </p>
        <p className='about__description'>
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, 
          и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </section>
  )
}

export default About;
