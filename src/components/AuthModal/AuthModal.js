import React from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import ModalForm from '../ModalForm/ModalForm';

function AuthModal({ isOpen, onClose, onUpdateUser, formSubmitState, openRegModal }) {
  return (
    <ModalWithForm 
      title='Вход' 
      name='auth' 
      modalState={isOpen ? 'modal_opened' : ''} 
      onClose={onClose}
      children={
        <ModalForm 
          onUpdateUser={onUpdateUser} 
          formSubmitState={formSubmitState} 
          openModal={openRegModal}
        />
      }
    />
  );
}

export default AuthModal;
