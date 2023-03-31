import styled from 'styled-components'

export const Container = styled.div`
  max-width: var(--container-width);
  margin: auto;
  color: var(--color-3);
  height: 700px;
  padding-top: 70px;
  overflow: hidden;

  @media only screen and (max-width: 765px) {
    padding-left: 20px;
    height: initial;
  }

  h2 {
    margin-bottom: 75px;
    &::after {
      content: '.';
      color: var(--color-2);
    }

    @media only screen and (max-width: 765px) {
      margin-bottom: 120px;
    }
  }
`

export const List = styled.div`
  /* display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 30px; */
  .splide {
    .splide__track {
      overflow: unset;
    }
    .splide__slide {
      @media only screen and (max-width: 765px) {
        width: 80vw !important;
      }
    }
  }
`