import styled from 'styled-components'

export const Container = styled.div`
  max-width: 700px;
  margin: auto;
  padding-top: 70px;
  padding-bottom: 120px;
  color: var(--color-3);  /* background: black; */

  @media only screen and (max-width: 765px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  h3 {
    margin-top: 40px;
  }
`