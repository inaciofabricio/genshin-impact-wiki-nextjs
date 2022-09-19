import styled from "styled-components";

export const Filtros = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    @media (max-width: 500px) {
        flex-direction: column;
    } 
`;

export const Resultado = styled.div`
    margin-right: 5px;
`;

export const SemResultado = styled.div`
    padding: 15px;
`;
