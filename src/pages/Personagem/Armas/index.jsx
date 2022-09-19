import { montaUrl } from "../../../util";
import Estrelas from "../../../components/comum/Estrelas";
import { Section, SubTitulo, Itens, Item, Texto, SemDados } from "../../../components/UI";
import { Img } from "./UI";

export default function Armas(props) {

    const armas = props?.data;

    return (
        <Section>
            <SubTitulo>Armas</SubTitulo>
            { armas && 
                <Itens>
                    {
                        armas?.map((obj, x) => {
                            return (
                                <Item key={x}>
                                    <Img 
                                        raridade={obj?.raridade} 
                                        src={ montaUrl(`armas/${ obj?.id }.png`) }  
                                        alt={ `Imagem da arma ${ obj?.nome }` } 
                                    />                                  
                                    <Estrelas data={obj?.raridade} />
                                    <Texto>{ obj?.nome }</Texto>
                                </Item>
                            )
                        })
                    }
                </Itens>
            }
            { !armas && <SemDados>...</SemDados>}
        </Section>
    )
}