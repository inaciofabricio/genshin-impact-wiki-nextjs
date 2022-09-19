import styled from "styled-components";
import { getRaridade } from "../../../util";

export const Img = styled.img`
    width: 50px;
    height: 50px;
    border: 1px solid ${props => (props ? props?.theme?.text : "inherit")};
    padding: 5px;
    margin-bottom: 5px;
    background: linear-gradient(
        135deg, 
        ${(props) => getRaridade(props?.raridade[0])} 50%, 
        ${(props) => getRaridade(props?.raridade[1])} 50%);
`;

export const Itens = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Bonus = styled.div`
    padding: 15px;
`;

export const BonusObj = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-bottom: 10px;
    text-align: justify;
`;

export const Quantidade = styled.div`
    font-weight: 600;
`;

export const Efeito = styled.div`
    text-align: justify;
`;

export const Local = styled.div`
    text-align: center;
    margin: 25px 0;
`;

export const LocalImg = styled.img`
    width: 100%;
    height: auto;
    max-width: 1000px;
`;

export const LocalNome = styled.div`
    font-size: 18px;
    margin-top: 10px;
`;

export const AtributosPrincipais = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
`;

export const TipoArtefato = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Icone = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20vw;
`;

export const Atributos = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    width: 75vw;
`;

export const AtributosTexto = styled.div`
    line-height: 20px;
    text-decoration: underline;
    font-weight: 600;
`;




