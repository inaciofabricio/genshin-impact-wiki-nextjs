/* eslint-disable @next/next/no-img-element */

import { AiFillStar } from "react-icons/ai";
import { primeiraLetraMaiuscula } from "../../../util";

import { Bloco } from "./UI";

export default function FiltroAtual(props) { 

    const { elemento, raridade } = props;

    return (
        <Bloco>
            [
                {
                    (!elemento && !raridade) ? "..." : 
                    <>
                        { primeiraLetraMaiuscula(elemento) }
                        { (elemento && raridade) && ` / ` }
                        { raridade && <>{raridade}<AiFillStar style={{width:"13px", height:"auto"}} /></> }
                    </>
                }
            ]
        </Bloco>
    )
}