import styled from "styled-components";

export const Container = styled.div`
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;

    @media (max-width: 500px) {
        padding: 10px;
    }
`;

export const H1 = styled.h1`
    border-bottom: 1px solid ${props => (props ? props?.theme?.text : "inherit")};
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;
`;

export const Section = styled.section`
    margin-bottom: 10px;
`;

export const SubTitulo = styled.h2`
    border-bottom: 1px solid ${props => (props ? props?.theme?.text : "inherit")};
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 5px;
`;

export const Itens = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    padding: 10px 5px;
    text-align: center;
    width: 100px;
`;

export const Img = styled.img`
    width: 50px;
    height: 50px;
    border: 1px solid ${props => (props ? props?.theme?.text : "inherit")};
    padding: 5px;
    margin-bottom: 5px;
`;

export const Texto = styled.div`
    margin-bottom: 5px;
    line-height: 20px;
`;

export const SemDados = styled.div`
    padding: 5px 15px;
`;

export const Caminho = styled.section`
    margin: 0 0 15px 15px;
`;

export const BarraLink = styled.span`
    margin: 0 5px;
`;

export const TextoComLink = styled.span`
    cursor: pointer;
    text-decoration: underline;
    font-weight: 600;
`;

export const TextoSemLink = styled.span`
    cursor: no-drop;
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Card = styled.div`
    border: 1px solid ${props => (props ? props?.theme?.text : "inherit")};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    margin: 5px;
    width: 100px;
    height: auto;
    text-align: center;
`;

export const Nome = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-top: 5px;
    line-height: 20px;
`;