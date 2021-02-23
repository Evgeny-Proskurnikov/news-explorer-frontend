import React from 'react';
import { useForm } from 'react-hook-form';

function SearchForm({ submitForm, formLoadingState }) {
  const { register, handleSubmit, errors } = useForm({mode: 'onChange'});

  const onSubmit = data => {
    submitForm(data.search);
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
              required: {value: true, message: 'Нужно ввести ключевое слово'},
            })}
            placeholder="Введите тему новости"
            autoComplete="off"
          />
          <button type="submit" className='form__button'>
            {formLoadingState ? 'Загрузка...' : 'Искать'}
          </button>
        </div>
        {errors.search && <span className="form__input-error">{errors.search.message}</span>}
      </form>
    </section>
  )
}

export default SearchForm;
