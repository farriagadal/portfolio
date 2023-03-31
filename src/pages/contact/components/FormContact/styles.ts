import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  max-width: 816px;
  padding: 55px 0;

  & > h2 {
    @media only screen and (max-width: 765px) {
      padding: 0 20px;
    }
  }

  h2 {
    color: var(--color-3);
    margin-bottom: 25px;
    font-size: 30px;
    line-height: 45px;

    &::after {
      content: '.';
      color: var(--color-2);
    }
  }
`

export const Fields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 30px;
  row-gap: 40px;

  @media only screen and (max-width: 765px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 0 20px;
  }
`

type BtnContactProps = {
  isDisabled: boolean;
}

export const BtnContact = styled.button<BtnContactProps>`
  margin-top: 40px;
  background: none;
  border: 1px solid var(--color-2);
  border-radius: 20px 0px;
  width: 214px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--color-3);
  cursor: ${(props: BtnContactProps) => props.isDisabled ? 'none' : 'pointer'};
  filter: ${(props: BtnContactProps) => props.isDisabled ? 'brightness(0.5) grayscale(1)' : 'none'};

  &:hover {
    background: var(--color-2);
  }
  @media only screen and (max-width: 765px) {
    margin-left: 20px;
  }
`