import styled from "styled-components";

export const Titulo = styled.div`
    font-size: 20px;
    margin: 0 5px;
`;

export const Bloco = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0;

    @media (max-width: 500px) {
        margin-bottom: 10px;
    }
`;

export const Elementos = styled.div`
    border-bottom: 1px solid;
`;

export const Img = styled.img`
    width: 25px;
    height: auto;
    cursor: pointer;
`;

export const Estrelas = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 5px;
    border-bottom: 1px solid;
    cursor: pointer;
`;

export const Estrela = styled.div`
    display: flex;
    align-items: center;
    font-size: 27px;
    margin-left: 5px;
`;

export const Limpar = styled.div`
    margin: 0 5px;
`;
