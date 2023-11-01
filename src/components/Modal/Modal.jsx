import { useEffect } from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';

export const Modal = ({ closeModal, data }) => {
  useEffect(() => {
    window.addEventListener('keydown', keyboardPress);

    return () => {
      window.removeEventListener('keydown', keyboardPress);
    };
  }, []);

  const keyboardPress = evt => {
    if (evt.code === 'Escape') {
      closeModal();
    }
  };

  const clickOverlay = evt => {
    if (evt.currentTarget === evt.target) {
      closeModal();
    }
  };

  return (
    <StyledOverlay onClick={clickOverlay}>
      <StyledModal>
        <img src={data} alt="The same img but large" />
      </StyledModal>
    </StyledOverlay>
  );
};
