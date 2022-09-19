/* eslint-disable @next/next/no-img-element */
import { AiOutlineCloseSquare, AiFillStar } from "react-icons/ai";
import { montaUrl } from "../../../util";

import { Titulo, Elementos, Bloco, Img, Estrelas, Estrela, Limpar } from "./UI";

export default function Filtro(props) { 

    const { data, isFetching, filtrar } = props;

    let elementos = [];
    let raridades = [];
    
    if (!isFetching) {
        data.forEach(i => {
            !elementos.find(e => e === i.elemento) ? elementos.push(i.elemento) : null;
            !raridades.find(e => e === i.raridade) ? raridades.push(i.raridade) : null;
        });
    }

    return (
        <Bloco>
            <Titulo>
                Filtros:
            </Titulo>
            <Elementos>
                {
                    elementos?.map((obj, x) => {
                        return (
                            <Img 
                                key={x} 
                                src={montaUrl(`elementos/${ obj }.png`)} 
                                alt={`Imagem miniatura do elemento ${obj}`} 
                                onClick={() => filtrar({ tipo: "elemento", valor: obj })}
                            />
                        )
                    })
                }
            </Elementos>
            <Estrelas>
                {
                    raridades?.map((obj, x) => {
                        return (
                            <Estrela key={x} onClick={() => filtrar({ tipo: "raridade", valor: obj })}>  
                                { obj }<AiFillStar style={{width:"15px", height:"auto", cursor: "pointer"}} />
                            </Estrela> 
                        )
                    })
                }
            </Estrelas>
            <Limpar>
                <AiOutlineCloseSquare 
                    style={{width:"25px", height:"auto", cursor: "pointer"}} 
                    onClick={() => filtrar({ tipo: "limpar" })} />
            </Limpar>
        </Bloco>
    )
}