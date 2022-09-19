import styled from "styled-components";
import { getRaridade } from "../../../../util";

export const Img = styled.img`
    width: 100%;
    height: auto;
    background: linear-gradient(
        135deg, 
        ${(props) => getRaridade(props?.raridade[0])} 50%, 
        ${(props) => getRaridade(props?.raridade[1])} 50%);
    margin-bottom: 10px;
    cursor: pointer;
`;

export const Flex = styled.div`
    display: flex;
`;
