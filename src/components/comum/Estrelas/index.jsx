/* eslint-disable @next/next/no-img-element */
import { AiFillStar } from "react-icons/ai";

export default function Estrelas(props) { 

    const raridade = props?.data;

    return (
        <div>
            { raridade > 0 && <AiFillStar /> }
            { raridade > 1 && <AiFillStar /> }
            { raridade > 2 && <AiFillStar /> }
            { raridade > 3 && <AiFillStar /> }
            { raridade > 4 && <AiFillStar /> }
        </div>
    )
}