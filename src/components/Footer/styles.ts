import styled from 'styled-components'


export const Container = styled.div`
  max-width: var(--container-width);
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ff004c47;
  padding: 60px 0;
  position: relative;

  
  @media only screen and (max-width: 765px) {
    width: calc(100% - 40px);
    display: grid;
    justify-items: center;
    justify-content: center;
    padding-bottom: 80px;
  }

  p {
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: var(--color-5);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media only screen and (max-width: 765px) {
      bottom: 40px;
      text-align: center;
      width: 100%;
    }
  }

  h2 {
    color: var(--color-3);    font-size: 25px;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }

  @media only screen and (max-width: 765px) {
    margin: 20px 0;
  }

  a {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    &:first-child {
      img {
        width: 36px;
        height: 36px;
      }
    }
  }
`