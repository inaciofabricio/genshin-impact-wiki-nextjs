import { Section, SubTitulo, Itens, SemDados } from "../../../components/UI";
import { Valor, Item, Link } from "./UI";

export default function Referencias(props) {

    const referencias = props?.data;

    return (
        <Section>
            <SubTitulo>Referências</SubTitulo>
            { referencias && 
                <Itens>
                    {
                        referencias?.map((obj, x) => {
                            return (
                                <Item key={x}>
                                    <Valor>Canal:</Valor>
                                    <Link  href={ obj?.link } 
                                        target="_blank" 
                                        rel="noopener noreferrer">
                                            { obj?.nome }
                                    </Link>
                                </Item>
                            )
                        })
                    }
                </Itens>
            }
            { !referencias && <SemDados>...</SemDados>}
        </Section>
    )
}