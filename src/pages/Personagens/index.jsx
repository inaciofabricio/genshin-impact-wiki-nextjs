/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Link from "next/link";

import useApi from "../../hooks/useApi";
import { comparePersonagens } from "../../util";

import Estrelas from "../../components/comum/Estrelas";

import Miniatura from "./Miniatura";
import Filtro from "./Filtro";
import FiltroAtual from "./FiltroAtual";

import { Filtros, Resultado, SemResultado } from "./UI";
import { Card, Cards, Nome } from "../../components/UI";

export default function Personagens() {

    const { data, error, isFetching } = useApi("personagens");

    let [personagens, setPersonagens] = useState([]);  

    let [filtro, setFiltro] = useState(null);
    let [elemento, setElemento] = useState("");
    let [raridade, setRaridade] = useState("");

    data?.sort(comparePersonagens);

    useEffect(() => {

        if(filtro) {
            if(filtro?.tipo === "elemento") {
                setElemento(filtro.valor);
            } else if(filtro?.tipo === "raridade") {
                setRaridade(filtro.valor);
            } else if(filtro?.tipo === "limpar") {
                setElemento("");
                setRaridade("");
            }
        }

        if(elemento || raridade) {
            setPersonagens(data.filter(obj => 
                ( elemento ? obj.elemento === elemento : true) && 
                ( raridade ? obj.raridade === raridade : true)
            ));
        }
        else 
        {
            setPersonagens(data);
        }

    },[filtro, elemento, raridade, data]);
    
    return (
        <>
            <Filtros>
                <Filtro data={data} isFetching={isFetching} filtrar={setFiltro} />
                <Resultado>
                    <FiltroAtual elemento={elemento} raridade={raridade} />
                    { `${personagens?.length}/${data?.length} Personagens` }
                </Resultado>
            </Filtros>
            {
                personagens?.length > 0 &&
                <Cards>
                    {
                        personagens?.map((obj) => {
                            return (
                                <Card key={ obj?.id }>
                                    <Miniatura data={ obj } />
                                    <Estrelas data={obj?.raridade} />
                                    <Link href={`personagens/${obj?.id}`}>
                                        <Nome>{ obj?.nome }</Nome>
                                    </Link>
                                </Card>
                            )
                        })
                    }
                </Cards>
            }
            {
                personagens?.length === 0 &&
                <SemResultado>
                    Sem Resultado
                </SemResultado>
            }
            
        </>
    )
}