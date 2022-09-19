import Link from 'next/link';
import { BsFillSunFill, BsFillMoonFill, BsInfoSquareFill } from "react-icons/bs";
import { montaUrl } from "../../util";
import Links from './Links';
import { Section, Logo, LogoImg, LogoTexto, Menu, LinksNaoResponsivo, LinksResponsivo, MenuResponsivo } from "./UI";

export default function Header(props) {

    return (
        <Section>
            <MenuResponsivo>
                <Link href={"/"}>
                    <Logo>
                        <LogoImg src={ montaUrl("logos/padrao.png") } alt={"Logo padrão"} />
                        <LogoTexto>Genshin Impact Builds</LogoTexto>
                    </Logo>
                </Link>
                <Menu>
                    <LinksNaoResponsivo>
                        <Links props={props}/>
                    </LinksNaoResponsivo>
                    <div onClick={props.mudarThema}>
                        { props.tema && <BsFillSunFill style={{width:"20px", height:"auto", cursor: "pointer"}} /> }
                        { !props.tema && <BsFillMoonFill style={{width:"20px", height:"auto", cursor: "pointer"}} /> }
                    </div>
                </Menu>
            </MenuResponsivo>
            <LinksResponsivo>
                <Links props={props}/>
            </LinksResponsivo>
        </Section>
    )
}