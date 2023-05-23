import styled from 'styled-components'

const Main = styled.body`
  background-color: #000000;

  .info {
    display: flex;
    gap: 3em;
    justify-content: center;
    margin-top: 10em;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    color: #6bd425;
  }

  h2 {
    color: #ffffff;
  }

  img {
    width: 27em;
    height: 28em;
    border-radius: 10px;
  }

  .buttons {
    display: flex;
    gap: 1em;
    margin-top: 5em;
  }

  .contact, .cv {
    width: 7em;
    height: 2em;
    border: none;
    border-radius: 10px;
    color: #ffffff;
    font-size: 1.80em;
  }

  .contact {
    background-color: #42113c;
  }

  .cv {
    background-color: #6bd425;
  }


`

export { Main }
