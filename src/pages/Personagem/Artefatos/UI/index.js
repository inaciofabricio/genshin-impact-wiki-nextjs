import styled from "styled-components";
import { getRaridade } from "../../../../util";

export const Bloco = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Bonus = styled.ul`
    margin-left: 15px;
    padding: 10px 5px;
`;

export const ItemUl = styled.li`
    margin-bottom: 5px;
    list-style: square;
    line-height: 20px;
`;

export const Conjunto = styled.div`
    padding: 10px 0 0;
`;

export const Hr = styled.hr`
    width: 90%;
`;

export const Img = styled.img`
    background-color: ${(props) => getRaridade(props?.raridade)};
    border: 1px solid ${props => (props ? props?.theme?.text : "inherit")};
    cursor: pointer;
    margin-bottom: 5px;
    padding: 5px;
    height: 50px;
    width: 50px;
`;

export const Flex = styled.div`
    display: flex;
`;