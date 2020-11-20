import styled from 'styled-components';

export const Container = styled.div`
    margin: 0.5vh;

    img {
        height: 200px;
    }
`;

export const Header = styled.div`
    height: 10vh;
    text-align: center;
    align-self: center;

    h1 {
        font-size: 2.5rem;
        padding-top: 1.2rem;
    }
`;

export const Content = styled.div`

    padding: 0.8rem;    

    h1 {
        margin-top: 1.8rem;
        font-size: 24px;
        text-align: center;
    }
`;

export const Card = styled.div`
    display: flex;
    margin-top: 6rem;
    margin-left: 3rem;
    margin-right: 3rem;


    align-items: center;
    justify-content: center;

    div {
        padding: 1rem;
        background: #5F5B6B;
        border-radius: 30px;
    }

    img {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }

    h1 {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        margin-top: 0rem;
        font-size: 20px;
        max-width: 40vw;
    }

`;

