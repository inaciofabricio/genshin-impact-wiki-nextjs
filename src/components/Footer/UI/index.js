import styled from "styled-components";

export const Section = styled.section`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 25px 15px;
    margin-top: 15px;
    width: 100%;

    @media (max-width: 500px) {
        flex-direction: column;
        gap: 15px;
        padding: 25px 0;
    }    
`;

export const Link = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

export const Referencia = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const Icone = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
`;

export const Texto = styled.span`
    font-size: 10px;
`;
