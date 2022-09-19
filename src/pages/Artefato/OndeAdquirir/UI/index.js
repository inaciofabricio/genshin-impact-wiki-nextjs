import styled from "styled-components";

export const Local = styled.div`
    text-align: center;
    margin: 25px 0 5px 0;
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
    max-width: 1000px;
`;

export const Nome = styled.div`
    font-size: 18px;
    margin-top: 5px;
`;

export const Itens = styled.div`
    border: 2px solid ${props => (props ? props?.theme?.text : "inherit")};
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    margin-bottom: 15px;
    padding: 5px;
`;

export const Item = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    
`;

export const Miniatura = styled.img`
    border: 2px solid ${props => (props && props?.id === props?.atual ? props?.theme?.text : "inherit")};
    border-radius: 10px;
	height: auto;
    width: 75px;
`;

