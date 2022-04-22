import styled from "styled-components";

export const HomePage = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr;
  background-color: black;
  height: 100vh;
  
  div{
    margin-top: 2em;
    text-align: center;

    h1, h3{
      color: white;
    }

  button{
      margin-right: 90%;
    }

    img{
      margin-top: 5em;
      height: 40vh;
    }
  }
  
`

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #390202;
  height: 100vh;

  p{
    color: #4C1B1B;
  }

 
`

export const Question = styled.div`
   display: grid;
   grid-template-rows: 1fr 4fr;
   background-color: black;
   height: 100vh;

  div{
    margin-top: 2em;
    text-align: center;

    p{
      color: #403d39;
    }

  button{
      margin-right: 80%;
    }

    img{
      margin-top: 1em;
      height: 40vh;

      @media screen and (min-device-width : 220px) and (max-device-width : 480px) {
        height: 30vh;
  }
    }
`

