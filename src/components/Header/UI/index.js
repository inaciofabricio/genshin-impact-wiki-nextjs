import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    padding: 25px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px) {
        padding: 5px 0 15px 0;
        flex-direction: column;
    } 
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

export const LogoImg = styled.img`
    cursor: pointer;
    width: 75px;
    height: 75px;
`;

export const LogoTexto = styled.span`
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
`;

export const Img = styled.img`
    cursor: pointer;
    width: 25px;
    height: 25px;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
`;

export const MenuResponsivo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Itens = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

export const Texto = styled.div`
    cursor: pointer;
    font-weight: 600;
`;

export const Selecionado = styled.div`
    border-bottom: 1px solid ${props => (props ? props?.theme?.text : "inherit")};
`;

export const NaoSelecionado = styled.div`
    border-bottom: 1px solid ${props => (props ? props?.theme?.body : "inherit")};
`;

export const LinksNaoResponsivo = styled.div`
    display:block;

    @media (max-width: 500px) {
        display:none;
    } 
`;

export const LinksResponsivo = styled.div`
    display:none;

    @media (max-width: 500px) {
        margin: 10px 0 0 0;
        display:block;
    } 
`;
