import { useRouter } from 'next/router';
import Link from 'next/link';
import { BsInfoSquareFill } from "react-icons/bs";
import { montaUrl } from '../../../util';

import { Img, Itens, Item, Texto, Selecionado, NaoSelecionado } from "./UI";

export default function Links({ props }) {

    const router = useRouter();
    const rotaAtual = router.pathname;

    return (
        <Itens>
            <Link href={"/personagens"}>
                <Item>
                    <Img 
                        src={ montaUrl(`logos/${props.tema ? "lumine" : "aether"}.png`) } 
                        alt={`Logo ${props.tema ? "Lumine" : "Aether"}`} />
                    <Texto>
                        { (rotaAtual === "/personagens") ? <Selecionado>Personagens</Selecionado> : <NaoSelecionado>Personagens</NaoSelecionado> }
                    </Texto>
                </Item>
            </Link>
            <Link href={"/artefatos"}>
                <Item>
                    <Img 
                        src={ montaUrl("conjuntos-de-artefatos/icones/flor-da-vida.png") }
                        alt={`Logo ${props.tema ? "Lumine" : "Aether"}`} />
                    <Texto>
                        { (rotaAtual === "/artefatos") ? <Selecionado>Artefatos</Selecionado> : <NaoSelecionado>Artefatos</NaoSelecionado> }
                    </Texto>
                </Item>
            </Link>
            <Link href={"/sobre"}>
                <Item>
                    <BsInfoSquareFill />
                    <Texto>
                        { (rotaAtual === "/sobre") ? <Selecionado>Sobre</Selecionado> : <NaoSelecionado>Sobre</NaoSelecionado> }
                    </Texto>
                </Item>
            </Link>
        </Itens>
    )
}