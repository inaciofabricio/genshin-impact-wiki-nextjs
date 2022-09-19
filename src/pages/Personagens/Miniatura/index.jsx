/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IoSearchCircleSharp } from "react-icons/io5";
import Lupa from "../../../components/comum/Lupa";
import { montaUrl } from "../../../util";

import { Flex, Img } from "./UI";

export default function Miniatura(props) { 

    const { id, nome, elemento } = props?.data;

    return (
        <Link href={`personagens/${id}`}>
            <Flex>
                <Img 
                    elemento={ elemento }
                    src={ montaUrl(`personagens/${ id }-miniatura.png`) } 
                    alt={`Imagem miniatura do personagem ${ nome }`} 
                />
                <Lupa w={20}/>
            </Flex>
        </Link>
    )
}