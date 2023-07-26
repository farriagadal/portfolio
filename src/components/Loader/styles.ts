import styled from 'styled-components'


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #141618;
  z-index: 1111111111111111;
  opacity: 1;
  transition: opacity 0.4s ease-in-out; // Animación de 1 segundo para suavidad

  &.fade-out {
    opacity: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
  }
`
