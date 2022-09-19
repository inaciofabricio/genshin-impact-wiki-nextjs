import styled from "styled-components";
import { getRaridade } from "../../../../util";

export const Img = styled.img`
    width: 50px;
    height: 50px;
    border: 1px solid ${props => (props ? props?.theme?.text : "inherit")};
    padding: 5px;
    margin-bottom: 5px;
    background-color: ${(props) => getRaridade(props?.raridade)};
`;
