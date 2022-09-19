import styled from "styled-components";
import { getRaridade } from "../../../util";

export const Imagem = styled.div`
    background-color: ${(props) => getRaridade(props?.raridade)};
    text-align: center;

    @media (max-width: 500px) {
        width: 100%;
        margin: 0 15px;
    }
`;

export const Img = styled.img`
    width: 250px;
    height: auto;
`;

export const Conteudo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 500px) {
        flex-wrap: wrap;
    }     
`;

export const Informacoes = styled.div`
    padding: 5px 10px;
    width: 100%;
`;

export const Passiva = styled.div`
    margin: 10px 5px;
    text-align: justify;
`;





