import React from 'react';
import ModalRegForm from '../ModalRegForm/ModalRegForm';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function RegisterModal({ isOpen, onClose, onUpdateUser, formSubmitState, openAuthModal }) {
  return (
    <ModalWithForm 
      title='Регистрация' 
      name='register' 
      modalState={isOpen ? 'modal_opened' : ''} 
      onClose={onClose}
      children={
        <ModalRegForm
          onUpdateUser={onUpdateUser} 
          formSubmitState={formSubmitState} 
          openModal={openAuthModal}
        />
      }
    />
  );
}

export default RegisterModal;
