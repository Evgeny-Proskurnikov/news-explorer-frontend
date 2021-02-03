import React from 'react';
import { useForm } from 'react-hook-form';

function SearchForm({ submitForm, formSubmitState, setFormSubmitState }) {
  const { register, handleSubmit } = useForm({mode: 'onChange'});

  const onSubmit = data => {
    // setFormSubmitState(true);
    // submitForm(data);
    console.log(data);
  };

  return (
    <section className='search-form'>
      <form className='form' name='search-form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1 className='form__title'>Что творится в мире?</h1>
        <p className='form__about'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <div className='form__input-container'>
          <input
            name="search"
            type="text"
            className='form__input'
            ref={register({
              required: {value: true, message: 'Заполните это поле'},
            })}
            placeholder="Введите тему новости"
            autoComplete="off"
          />
          <button type="submit" className='form__button'>
            {formSubmitState ? 'Загрузка...' : 'Искать'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;
