import styled from "styled-components";

export const sectionNav = styled.section`
width: 98.6vw;
display: flex;
justify-content: center;
justify-content: space-between;
align-items: center;
position: fixed;
background-color: aliceblue;

h2 {
    width: 20%;
    text-align: center;
    font-size: calc(100% + 1.5vw);
    font-family: "Dancing Script", cursive;
    color: #f5cc14;
}

nav {
    width: 50%;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;

    button {
        width: 20%;
        background-color: #ff0000;
        color: #ffffff;
        font-size: 1vw;
        border: 0;
    }

    button:hover {
    background-color: #ffffff;
    color: black;
}

    input {
        width: 30%;
        border-radius: 5ch;
        border: 0;
        text-align: center;
        font-size: 1vw;
    }
}
`

export const sectionFilmes = styled.section`
width: 98.6vw;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-top: 10%;

div {
    max-width: calc(250px + 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1vw;

    img {
        width: 70%;
        padding-bottom: 1vw;
        border-radius: 2vw 0vw ;
    }

    figcaption {
        font-size: large;
        font-family: "Josefin Sans", sans-serif;
    }
}
`

export const footer = styled.footer`
width: 98.6vw;
background-color: aliceblue;
text-align: center;
color: black;
font-family: "Josefin Sans", sans-serif;
padding: 0.5%;
`