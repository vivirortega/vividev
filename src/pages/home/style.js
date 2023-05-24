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
    justify-content: center;
  }

  h1 {
    color: #6bd425;
    font-size: 3em;
  }

  h2 {
    color: #ffffff;
    font-weight: 400;
    font-size: 2.20em;
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
    font-weight: bold;
    font-family: "Inter", Arial, Helvetica, sans-serif;
  }

  .contact {
    background-color: #42113c;
  }

  .cv {
    background-color: #6bd425;
  }

  .cv:hover {
    background-color: #618B25;
  }

  .contact:hover {
    background-color: #1C0118;
  }


`

export { Main }
