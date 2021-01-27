import React from 'react';
import { useForm } from 'react-hook-form';
import cn from 'classnames';

function SearchForm({ submitForm, formSubmitState, setFormSubmitState }) {
  const { register, handleSubmit, errors } = useForm({mode: 'onChange'});

  const onSubmit = data => {
    // setFormSubmitState(true);
    // submitForm(data);
  };

  return (
    <div className='search-container'>
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
            maxLength="40"
            placeholder="Введите тему новости"
            autoComplete="off"
          />
          <button
            type="submit"
            className={cn('form__button', { "form__button_inactive": errors.search})}
            disabled={errors.search}
          >
            {formSubmitState ? 'Загрузка...' : 'Искать'}
          </button>
        </div>
        {errors.search && <span className="form__input-error">{errors.search.message}</span>}
      </form>
    </div>
  )
}

export default SearchForm;
