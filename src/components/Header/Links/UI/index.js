import styled from "styled-components";

export const Itens = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    @media (max-width: 500px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

export const Texto = styled.div`
    cursor: pointer;
    font-weight: 600;
`;

export const Img = styled.img`
    cursor: pointer;
    width: 25px;
    height: 25px;
`;

export const Selecionado = styled.div`
    border-bottom: 1px solid ${props => (props ? props?.theme?.text : "inherit")};
`;

export const NaoSelecionado = styled.div`
    border-bottom: 1px solid ${props => (props ? props?.theme?.body : "inherit")};
`;
