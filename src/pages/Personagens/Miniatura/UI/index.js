import styled from "styled-components";
import { getElemento } from "../../../../util";

export const Img = styled.img`
    width: 100%;
    height: auto;
    background-color: ${(props) => getElemento(props?.elemento)};
    margin-bottom: 10px;
    cursor: pointer;
`;

export const Flex = styled.div`
    display: flex;
`;
