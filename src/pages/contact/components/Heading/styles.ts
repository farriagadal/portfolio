import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  max-width: var(--container-width);
  display: flex;
  align-items: center;
  padding: 55px 0;

  @media only screen and (max-width: 765px) {
    display: block;
    padding: 55px 20px;
  }
`

export const BgImg = styled.div`
  position: relative;
  min-width: 540px;
  height: 330px;
  box-shadow: 0px 30px 100px rgba(18, 7, 35, 0.3);
  overflow: hidden;
  border-radius: 80px 0;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    animation: opacityless linear 5s;
    opacity: 0.5;
    background: linear-gradient(44deg,rgb(1 24 34 / 26%) 0%,var(--color-1) 100%);
    z-index: 1;
  }

  @media only screen and (max-width: 765px) {
    width: 100%;
    min-width: initial;
    margin-bottom: 30px;
    border-radius: 150px 0;
  }

  img {
    object-fit: cover;
    animation: expand linear 12s;
    transform: scale(1.2);
  }

  @keyframes opacityless {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  @keyframes expand {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`


export const Text = styled.div`
  width: 100%;
  margin-left: 118px;

  @media only screen and (max-width: 765px) {
    margin-left: 0;
  }

  h2 {
    margin-top: 0;
    font-family: 'Poppins';
    font-weight: 800;
    font-size: 46px;
    line-height: 100%;
    color: var(--color-3);
    max-width: 457px;

    &::after {
      content: '.';
      color: var(--color-2);
    }
  }

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0.04em;
    color: var(--color-3);
    padding-right: 42px;
    margin-bottom: 0;
  }
`

export const Bar = styled.div`
  width: var(--container-width);
  margin: auto;
  margin-top: 30px;
  position: relative;

  @media only screen and (max-width: 765px) {
    width: 100%;
    margin-top: 0;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 9px;
    width: 100%;
    border-bottom: 1px solid var(--color-4);

    @media only screen and (max-width: 765px) {
      left: 20px;
      width: calc(100vw - 40px);
    }
  }
  
`

export const BackBtn = styled.div`
  font-family: 'Nunito';
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-3);
  display: flex;
  align-items: center;
  background: var(--color-1);
  z-index: 1;
  position: relative;
  width: fit-content;
  padding-right: 37px;

  img {
    margin-right: 16px;
  }
  @media only screen and (max-width: 765px) {
    padding-left: 20px;
  }
`