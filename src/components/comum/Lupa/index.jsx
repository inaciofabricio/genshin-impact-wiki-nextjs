import { IoSearchCircleSharp } from "react-icons/io5";
import { Icone } from "./UI";

export default function Lupa({ w }) {
    return (
        <Icone>
            <IoSearchCircleSharp style={{width: `${w}px`, height:"auto"}}/>
        </Icone>
    )
}