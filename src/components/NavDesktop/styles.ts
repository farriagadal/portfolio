import styled from 'styled-components'

type ContainerProps = {
  isTop: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-top: 44px;
  position: sticky;
  top: 0;
  z-index: 111;
  background: var(--color-1);
  transition: background 0.2s ease-in-out;

  nav {
    align-items: flex-end;
    max-width: var(--container-width);
    margin: auto;
    display: flex;
    align-items: center;
    height: 60px;

    .full-logo {
      animation: 0.3s appear-logo linear;
      display: ${props => props.isTop ? 'block' : 'none'};
      font-size: 35px;
    }
  
    .short-logo {
      /* position: absolute; */
      animation: 0.2s appear-logo linear;
      /* left: 47px;
      top: 15px; */
      line-height: 100%;
      margin: auto;
      display: ${props => props.isTop ? 'none' : 'block'};

      span {
        font-size: 28px;
        padding: 2px 10px;
        border-radius: 13px 0;
        margin-right: 7px;
      }
    }

    .short-logo-black {
      position: absolute;
      left: 47px;
      top: 22px;
      display: none;
    }

    @keyframes appear-logo {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }


  &:hover {
    background: ${props => props.isTop ? 'var(--color-1)' : 'var(--color-2)'};

    /* .short-logo {
      color: var(--color-1);
    } */
  }
`
export const Logo = styled.div`
  margin-right: auto;

  h2 {
    color: var(--color-3);
    font-size: 25px;

    span {
      font-size: 40px;
      background: var(--color-2);
      padding: 2px 13px;
      border-radius: 17px 0;
      font-family: 'Poppins';
      font-weight: 800;
      line-height: 75px;
      letter-spacing: 0;
      margin-right: 15px;
    }
  }
`

export const MenuOption = styled.div`
  font-family: 'Poppins';
  color: var(--color-3);  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.1em;
  margin-left: 76px;
`

export const ContactBtn = styled.div`
  background: var(--color-1);
  border: 1px solid var(--color-2);
  border-radius: 0px 20px;
  width: 188px;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  transform: rotate(-90deg);
  z-index: 1111;
  position: fixed;
  bottom: 30vh;
  right: -30px;

  &:hover {
    background: var(--color-2);

    img {
      filter: brightness(0) invert(1);
    }
  }

  span {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-3);
  }

  img {
    margin-right: 18px;
    transform: rotate(90deg);
    transition: all 0.2s;
  }
`

export const ThemeButton = styled.div`
`
