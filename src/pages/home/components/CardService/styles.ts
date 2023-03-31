import styled from 'styled-components'

type ContainerProps = {
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  border: 1px solid #072C3C;
  position: relative;
  border-radius: 50px 0px 0px 0px;
  overflow: hidden;
  display: block;
  text-align: center;
  padding: 42px 38px;
  background: ${(props) => (props.isActive ? '#23D4AA' : 'none')};
  min-height: 340px;
  height: 480px;
  max-height: ${(props) => (props.isActive ? '480px' : '340px')};
  transition: all 0.3s ease-in;
  transform: ${(props) => (props.isActive ? 'translateY(-60px)' : 'none')};

  h4 {
    font-family: 'Poppins';
    font-weight: 800;
    font-size: 26px;
    line-height: 100%;
    color: #FFFFFF;
    text-align: center;
    margin: 20px 0;
  }

  p {
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.04em;
    color: #021720;
    opacity: 0.7;
    display: ${(props) => (props.isActive ? 'block' : 'none')};
    animation: 0.2s appear linear;
  }

  svg, path{
    stroke: ${(props) => (props.isActive ? '#021720' : '#23D4AA')};
  }

  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

type IconMoreProps = {
  isActive: boolean;
}

export const IconMore = styled.div<IconMoreProps>`
  position: absolute;
  bottom: 42px;
  left: 50%;
  transform: translateX(-50%);

  img {
    opacity: ${(props) => (props.isActive ? '1' : '0.1')};
    filter: ${(props) => (props.isActive ? 'brightness(0) invert(1)' : 'none')};
  }
`