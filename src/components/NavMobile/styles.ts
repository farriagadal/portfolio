import styled from 'styled-components'


export const Container = styled.div`
  margin-top: 24px;
  position: sticky;
  top: 24px;
  z-index: 111;
  /* background: var(--color-1);
  transition: background 0.2s ease-in-out; */
`
export const Isotipo = styled.div`

  h2 {
    margin-left: 20px;
    margin-top: 45px;
    color: white;
    font-size: 40px;
    background: var(--color-2);
    padding: 5px 10px;
    width: fit-content;
    border-radius: 17px 0;
  }
`

export const Logo = styled.div`
  position: absolute;
  top: 50px;
  left: 85px;

  h2 {
    margin-top: 0;
    color: white;
    font-size: 37px;
  }
`

export const MenuButton = styled.button`
  position: fixed;
  bottom: 0px;
  right: 0px;
  background: var(--color-2);
  border-radius: 16px 0px 0px 0px;
  width: 60px;
  height: 60px;
  border: none;
  z-index: 11;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.7);
  }
`

export const MenuList = styled.div`
  background: var(--color-2);
  width: 275px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 1111;
  display: grid;
  padding: 73px 30px 35px 40px;
  border-top-left-radius: 80px;
  animation: 0.2s slideleft linear;

  a {
    margin-bottom: 45px;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.1em;
    color: white;
  }

  @keyframes slideleft {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`

export const CloseBtn = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  border: 1px solid var(--color-2);

  span {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.1em;
    color: var(--color-3);
    display: block;
    margin-right: 20px;
  }

  &:hover {
    background: var(--color-2);
    border-color: var(--color-1);

    img {
      filter: brightness(0) invert(1);
    }
  }
`

export const LangBtn = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.1em;
  color: white;
  cursor: pointer;
  margin-bottom: 45px;
  img {
    width: 25px;
    margin-left: 10px;
  }
`
