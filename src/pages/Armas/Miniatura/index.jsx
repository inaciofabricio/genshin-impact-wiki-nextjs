/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Lupa from "../../../components/comum/Lupa";
import { montaUrl } from "../../../util";

import { Img, Flex } from "./UI";

export default function Miniatura(props) { 

    const { id, nome, raridade } = props?.data;

    return (
        <Link href={`armas/${id}`}>
            <Img 
                src={ montaUrl(`armas/${ id }.png`) } 
                alt={`Imagem miniatura da arma ${ nome }`} 
                raridade={raridade} />
        </Link>
    )
}