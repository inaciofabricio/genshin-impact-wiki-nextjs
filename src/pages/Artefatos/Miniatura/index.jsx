/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Lupa from "../../../components/comum/Lupa";
import { montaUrl } from "../../../util";

import { Img, Flex } from "./UI";

export default function Miniatura(props) { 

    const { id, nome, raridades } = props?.data;

    return (
        <Link href={`artefatos/${id}`}>
            <Flex>
                <Img 
                    src={ montaUrl(`conjuntos-de-artefatos/${ id }.png`) } 
                    alt={`Imagem miniatura do artefato ${ nome }`} 
                    raridade={raridades}
                />
                <Lupa w={20}/>
            </Flex>
        </Link>
    )
}