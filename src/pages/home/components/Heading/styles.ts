import styled from 'styled-components'

export const Container = styled.div`
  color: var(--color-3);  //
  position: relative;
  margin-top: 170px;
  margin-bottom: 100px;
  background: linear-gradient(100.79deg, var(--color-2) 6.96%, var(--color-1) 98.01%);
  max-width: calc(100vw - ((100vw - var(--container-width)) / 2));
  margin-left: calc((100vw - var(--container-width)) / 2);
  border-top-left-radius: 125px;
  background: var(--color-1);
  position: relative;

  @media only screen and (max-width: 765px) {
    padding-top: 25px;
    padding-left: 0;
    padding-bottom: 120px;
    border-top-left-radius: 90px;
    margin-left: 20px;
    margin-top: 76px;

    img {
      display: none;
    }
  }

  p {
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.04em;
    max-width: 494px;
    height: 300px;
    @media only screen and (max-width: 765px) {
      padding-right: 20px;
      max-width: 100%;
      height: 150px;
    }
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0px;
    max-width: 400px;
    line-height: 100%;
    overflow-wrap: anywhere;
    font-size: 60px;

    @media only screen and (max-width: 765px) {
      padding-right: 20px;
    }

    b {
      font-family: 'Poppins';
      overflow-wrap: anywhere;
      font-size: 75px;
      line-height: 110%;
    }

    &::after {
      content: '.';
      color: var(--color-2);
    }
  }

  h3 {
    font-weight: 100;
    height: 40px;
    font-size: 20px;
    margin: 10px 0;

    b {
      font-family: 'Poppins';
      overflow-wrap: anywhere;
      font-weight: 100;
      font-size: 20px;
      color: var(--color-2);
    }
  }

  label {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-2);
    display: flex;
    white-space: nowrap;
    margin-bottom: 40px;

    &::after {
      content: '';
      width: 100%;
      border-bottom: solid 1px var(--color-2);
      margin-bottom: 11px;
      margin-left: 32px;
      opacity: 0.3;
    }
  }
`

export const BgImg2 = styled.img`
  position: absolute;
  right: calc(((100vw - var(--container-width)) / 2) - 30px);
  width: calc(var(--container-width) / 1.8);
  top: -19%;
  animation: float 7s infinite;
  margin-top: 60px;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(30px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`

export const BgImg = styled.img`
  position: absolute;
  right: calc(((100vw - var(--container-width)) / 2) - 30px);
  width: calc(var(--container-width) / 1.8);
  top: -18%;
  filter: brightness(0.5);
  animation: float 7s infinite;
  margin-top: 60px;
`

export const BgImgShadow = styled.img`
  position: absolute;
  right: calc(((100vw - var(--container-width)) / 2) - 30px);
  width: calc(var(--container-width) / 1.8);
  top: 00px;
  filter: brightness(0.1) blur(10px) opacity(0.5);
  animation: float-shadow 7s infinite;
  margin-top: 60px;

  @keyframes float-shadow {
    0% {
      transform: scale(1.1);
      filter: brightness(0.1) blur(20px) opacity(0.5);
    }
    50% {
      transform: scale(1);
      filter: brightness(0.1) blur(10px) opacity(0.5);
    }
    100% {
      transform: scale(1.1);
      filter: brightness(0.1) blur(20px) opacity(0.5);
    }
  }
`

export const ArrowDown = styled.a`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  width: 45px;
  height: 45px;
  margin: -120px auto 150px auto;
  display: block;

  img {
    filter: brightness(0) invert(1);
    animation: updown infinite 2s ease-in-out;
  }

  @media only screen and (max-width: 765px) {
    margin-bottom: 80px;
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