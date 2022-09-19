/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import useApi from "../../hooks/useApi";
import Estrelas from "../../components/comum/Estrelas";
import Miniatura from "./Miniatura";

import { Card, Cards, H1, Nome } from "../../components/UI";

export default function Artefatos() {

    const { data, error, isFetching } = useApi("conjuntoDeArtefatos");

    let artefatos = null;

    if(!isFetching) {
        artefatos = data;   
    }

    return (
        <>
            <H1>Conjuntos de Artefatos</H1>
            {
                artefatos && 
                <Cards>
                    {
                        artefatos?.map((obj) => {
                            return (
                                <Card key={ obj?.id }>
                                    <Miniatura rota={"conjuntos-de-artefatos"} data={ obj } />
                                    {
                                        obj?.raridades?.map((raridade, y) => {
                                            return (
                                                <Estrelas key={y} data={raridade} />
                                            )
                                        })
                                    }
                                    <Link href={`/artefatos/${obj?.id}`}>
                                        <Nome>{ obj?.nome }</Nome>
                                    </Link>
                                </Card>
                            )
                        })
                    }
                </Cards>
            }
        </>
    )
}