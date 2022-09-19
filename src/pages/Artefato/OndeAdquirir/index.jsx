import { useState } from "react";
import { SubTitulo } from "../../../components/UI";
import { montaUrl } from "../../../util";
import { Img, Item, Itens, Local, Miniatura, Nome } from "./UI";

export default function OndeAdquirir(props) {

    const locais = props.locais;

    const [atual, setAtual] = useState(locais[0]);

    return (
        <>
            <SubTitulo>Onde Adquirir</SubTitulo>
            <Local>
                <Img 
                    src={ montaUrl(`onde-conseguir/${ atual?.id }.jpg`) }  
                    alt={ `Imagem do local ${ atual?.nome }` } />
                <Nome>{ atual?.nome }</Nome>
            </Local>
            {
                locais?.length > 1 && 
                <Itens>
                    {
                        locais?.map((obj) => {
                            return (
                                <Item key={obj?.id}>
                                    <Miniatura id={obj?.id} atual={atual?.id}
                                        onClick={() => setAtual(obj)}
                                        src={ montaUrl(`onde-conseguir/${obj?.id}.jpg`) }  
                                        alt={ `Imagem do local do ${obj?.nome}.` } />
                                </Item>
                            )
                        })                
                    }
                </Itens> 
            }
        </>
    )
}