import { montaUrl } from "../../../util";
import { Section, SubTitulo, Itens, Item, Texto, SemDados } from "../../../components/UI";
import { Img } from "./UI";

export default function Talentos(props) {

    const talentos = props?.data;

    return (
        <Section>
            <SubTitulo>Talentos</SubTitulo>
            { talentos && 
                <Itens>
                    {
                        talentos?.map((obj, x) => {
                            return (
                                <Item key={x}>
                                    <Img src={ montaUrl(`talentos/${ obj?.id }.png`) }  alt={ `Imagem do talento ${ obj?.nome }` } />
                                    <Texto>{ obj?.nivel }</Texto>
                                    <Texto>{ obj?.tipo }</Texto>
                                    <Texto>{ obj?.nome }</Texto>
                                </Item>
                            )
                        })
                    }
                </Itens>
            }
            { !talentos && <SemDados>...</SemDados>}
        </Section>
    )
}