import styled from 'styled-components'

type ContainerProps = {
  isActive?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: block;

  p {
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.04em;
    color: #7E888D;
  }

  h4 {
    &::after {
      content: '.';
      color: var(--color-2);
    }
  }
`

export const IconContainer = styled.div`
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    max-height: 100%;
  }

  svg, path{
    fill: var(--color-2);
  }
`


export const Title = styled.div`
  display: flex;
  align-items: center;

  span {
    font-family: 'Poppins';
    font-weight: 300;
    font-size: 60px;
    color: var(--color-4);
  }

  h4 {
    font-family: 'Poppins';
    font-weight: 800;
    font-size: 26px;
    line-height: 100%;
    margin: 0;
    margin-left: 40px;
  }
`
