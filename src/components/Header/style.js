import styled from 'styled-components'

const Head = styled.header`
  display: flex;
  justify-content: flex-end;

  a {
    text-decoration: none;

  }

  ul {
    display: flex;
    gap: 1em;
    list-style-type: none;
    color: white;
    margin-right: 2em;
    margin-top: 2em;
    color: #6BD425;
    font-size: 1.30em;
  }

  li {
    color: #6BD425;
  }
`

export { Head }
