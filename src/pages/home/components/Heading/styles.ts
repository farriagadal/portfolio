import styled from 'styled-components'

export const Container = styled.div`
  color: white;
  //
  position: relative;
  margin-top: 175px;
  background: linear-gradient(100.79deg, #23D4AA 6.96%, #021720 98.01%);
  max-width: calc(100vw - ((100vw - var(--container-width)) / 2));
  margin-left: calc((100vw - var(--container-width)) / 2);
  padding-top: 92px;
  padding-left: 100px;
  padding-bottom: 80px;
  border-top-left-radius: 125px;

  @media only screen and (max-width: 765px) {
    padding-top: 78px;
    padding-left: 33px;
    padding-bottom: 72px;
    border-top-left-radius: 90px;
  }

  p {
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.04em;
    max-width: 494px;
    opacity: 0.7;
  }

  h1 {
    margin-top: 38px;
    margin-bottom: 40px;
    max-width: 565px;

    /* @media only screen and (max-width: 765px) {

    } */

    &::after {
      content: '.';
      color: #021720;
    }
  }

  label {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #200D3F;
    display: flex;
    white-space: nowrap;

    &::after {
      content: '';
      width: 100%;
      border-bottom: solid 1px #200D3F;
      margin-bottom: 8px;
      margin-left: 32px;
    }
  }

  .splide__track {
    overflow: initial;
  }
`

type BgImgProps = {
  show: boolean;
}

export const BgImg = styled.div<BgImgProps>`
  overflow: hidden;
  position: relative;
  width: 540px;
  height: 537px;
  position: absolute;
  top: -170px;
  right: calc((99vw - var(--container-width)) / 2);
  border-top-left-radius: 110px;
  border-bottom-right-radius: 110px;
  background: #021720;
  box-shadow: 0px 30px 100px rgba(18, 7, 35, 0.3);

  @media only screen and (max-width: 765px) {
    display: none;
  }

  img {
    object-fit: cover;
    animation: expand linear 12s;
    display: ${props => props.show ? 'block' : 'none'};
    transform: scale(1.2);
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

export const ArrowDown = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  width: 45px;
  height: 45px;
  margin: auto;
  margin-top: 45px;
  display: block;

  img {
    filter: brightness(0) invert(1);
    animation: updown infinite 2s ease-in-out;
  }

  @keyframes updown {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(25px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`