import styled from "styled-components";

export const ImagemPrincipal = styled.div`
    padding: 15px;
`;

export const Img = styled.img`
	height: auto;
	width: 100%;
    border: 2px solid ${props => (props ? props?.theme?.text : "inherit")};
    border-radius: 10px;
`;

export const Itens = styled.div`
    border: 2px solid ${props => (props ? props?.theme?.text : "inherit")};
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    margin-top: 10px;
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