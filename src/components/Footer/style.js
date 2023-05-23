import styled from 'styled-components'

const Foot = styled.footer`
  position: fixed;
  bottom: 1px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  ul {
    list-style-type: none;
    display: flex;
    gap: 3em;
  }

  li {
    color: #6bd425;
  }

  .icon {
    font-size: 2em;
  }

  h3 {
    color: #6bd425;
    font-size: 0.9em;
    font-weight: 300;
    margin-right: 3em;
  }
`

export { Foot }
