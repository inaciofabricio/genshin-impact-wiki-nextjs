import Link from "next/link";
import Estrelas from "../../../components/comum/Estrelas";
import Miniatura from "../Miniatura";
import { Card, Cards, Nome } from "../../../components/UI";
import { Conteudo, Titulo } from "./UI"

export default function Lista(props) {

    const { titulo, data } = props;

    return (
        <Conteudo>
            <Titulo>{ titulo }</Titulo>
            <Cards>
                {
                    data.length > 0 && 
                    data?.map((obj) => {
                        return ( 
                            <Card key={ obj?.id }>
                                <Miniatura rota={"armas"} data={ obj } />
                                <Estrelas data={obj?.raridade} />
                                <Link href={`/armas/${obj?.id}`}>
                                    <Nome>{ obj?.nome }</Nome>
                                </Link>
                            </Card>
                        )
                    })                    
                }
            </Cards> 
        </Conteudo>  
    )
}