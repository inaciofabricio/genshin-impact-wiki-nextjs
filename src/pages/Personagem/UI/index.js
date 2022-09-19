import styled from "styled-components";
import { getElemento } from "../../../util";

export const H1 = styled.h1`
    border-bottom: 1px solid ${props => (props ? props?.theme?.text : "inherit")};
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;

    @media (max-width: 500px) {
        flex-direction: column;
    } 
`;

export const BlocoImgInfo = styled.div`
    border: 1px solid ${props => (props ? props?.theme?.text : "inherit")};
    margin-bottom: 15px;
`;

export const Img = styled.img`
    width: 200px;
    height: auto;
`;

export const ImagemPadrao = styled.div`
    background-color: ${(props) => getElemento(props?.elemento)};
    text-align: center;
`;

export const Informacoes = styled.div`
    padding: 15px;
`;

export const BlocoBuild = styled.div`
    width: 100%;
    padding: 0 0 0 20px;

    @media (max-width: 500px) {
        padding: 0;
    } 
`;

export const Items = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Item = styled.div`
    text-align: center;
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
