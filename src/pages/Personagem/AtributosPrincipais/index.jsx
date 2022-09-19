import { Section, SemDados, SubTitulo } from "../../../components/UI";
import { Itens, Item, Titulo, Valor } from "./UI";

export default function AtributosPrincipais(props) {

    const atributos = props?.data;

    return (
        <Section>
            <SubTitulo>Atributos Principais</SubTitulo>
            { atributos && 
                <Itens>
                    {
                        atributos?.map((obj, x) => {
                            return (
                                <Item key={x}>
                                    <Titulo>{ obj?.titulo }:</Titulo>
                                    <Valor>{ obj?.valor }</Valor>
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