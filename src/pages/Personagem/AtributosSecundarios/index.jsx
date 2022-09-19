import { Section, SubTitulo, Itens, Item, SemDados } from "../../../components/UI";
import { Valor } from "./UI";

export default function AtributosSecundarios(props) {

    const atributos = props?.data;

    return (
        <Section>
            <SubTitulo>Atributos Secundários</SubTitulo>
            { atributos && 
                <Itens>
                    {
                        atributos?.map((obj, x) => {
                            return (
                                <Item key={x}>
                                    <Valor>{ obj }</Valor>
                                </Item>
                            )
                        })
                    }
                </Itens>
            }
            { !atributos && <SemDados>...</SemDados>}
        </Section>
    )
}