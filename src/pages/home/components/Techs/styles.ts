import styled from 'styled-components'

type ContainerProps = {
  isActive?: boolean;
}

export const Container = styled.div<ContainerProps>`
  max-width: var(--container-width);
  margin: auto;
  color: var(--color-3);
  padding: 120px 0 250px 0;
  opacity: ${(props) => (props.isActive ? '1' : '0')};
  transform: ${(props) => (props.isActive ? 'translateY(0px)' : 'translateY(250px)')};
  transition: all 0.4s linear;
  display: flex;


  @media only screen and (max-width: 1200px) {
    overflow: hidden;
    display: block;
    padding: 0px 20px 120px 20px;
    opacity: 1;
    transform: translateY(0px);
  }
`

export const Text = styled.div`
  max-width: 600px;
  align-self: center;
  z-index: 1;
  position: relative;

  @media only screen and (max-width: 1200px) {
    margin-bottom: 60px;
    max-width: 100%;
    padding: 100px 0;
  }

  label {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-2);
    text-shadow: 0px 0px 1px #ff0000;
  }


  h2  {
    line-height: 100%;
    letter-spacing: 0.04em;
    &::after {
      content: '.';
      color: var(--color-2);
    }
  }

  p {
    line-height: 25px;
    letter-spacing: 0.04em;
  }
`

export const List = styled.div`
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 30px;
  row-gap: 30px;
  transition: all 0.4s linear;
  /* max-width: 570px; */
  transform: rotate3d(-17, 10, 15, 70deg);
  position: absolute;
  right: 0;
  top: 0;
  /* opacity: 0.5; */

  @media only screen and (max-width: 1200px) {
    column-gap: 24px;
    row-gap: 26px;
    transform: none;
    width: 120vw;
    right: -10vw;
  }
`

export const Tech = styled.div`
  position: relative;
  width: 170px;
  height: 125px;
  background: var(--color-3);
  border-radius: 30px 0px;
  opacity: 0.2;
  transition: all 0.4s linear;
  cursor: pointer;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    height: 100px;
    opacity: 0.02;
  }


  &:hover, &:nth-child(1), &:nth-child(11) {
    opacity: 1;
    transform: scale(1.1) translateZ(100px);

    @media only screen and (max-width: 1200px) {
      transform: none;
      opacity: 0.1;
    }
  }

  img {
    max-height: 83px;
    max-width: 110px;
    left: 50% !important;
    top: 50% !important;
    width: initial !important;
    height: initial !important;
    transform: translateX(-50%) translateY(-50%) !important;

    @media only screen and (max-width: 1200px) {
      max-height: 50px;
    }
  }
`