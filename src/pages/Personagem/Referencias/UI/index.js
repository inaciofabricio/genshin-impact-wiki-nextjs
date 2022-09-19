import styled from "styled-components";

export const Valor = styled.div`
    font-weight: 600;
`;

export const Item = styled.div`
    display: flex;
    gap: 5px;
    padding: 10px 5px;
    text-align: center;
`;

export const Link = styled.a`
    text-decoration: underline;
    color: ${props => (props ? props?.theme?.link : "inherit")};
`;
