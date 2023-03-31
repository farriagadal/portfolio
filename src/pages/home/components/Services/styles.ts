import styled from 'styled-components'

export const Container = styled.div`
  max-width: var(--container-width);
  margin: auto;
  color: white;
  height: 750px;
  padding-top: 70px;

  h2 {
    margin-bottom: 75px;
    &::after {
      content: '.';
      color: #23D4AA;
    }
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 30px;
`