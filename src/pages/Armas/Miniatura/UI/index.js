import styled from "styled-components";
import { getRaridade } from "../../../../util";

export const Img = styled.img`
    background-color: ${(props) => getRaridade(props?.raridade)};
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 10px;
    height: auto;
    width: 100%;
`;

export const Flex = styled.div`
    display: flex;
`;
