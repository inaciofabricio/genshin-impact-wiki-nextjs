import styled from "styled-components";

export const Conteudo = styled.div`
    padding: 10px;
`;


export const Titulo = styled.h2`
    border-bottom: 1px solid ${props => (props ? props?.theme?.text : "inherit")};
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
`;
