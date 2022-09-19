import Estrelas from "../../../components/comum/Estrelas";
import Informacao from "../../../components/comum/Informacao";
import { montaUrl } from "../../../util";
import { Section, SubTitulo, Itens, Item, Texto, SemDados } from "../../../components/UI";
import { Bloco, Bonus, Conjunto, ItemUl, Hr, Img, Flex } from "./UI";
import Link from "next/link";
import Lupa from "../../../components/comum/Lupa";

export default function Artefatos(props) {

    const conjuntos = props?.data;

    return (
        <Section>
            <SubTitulo>Artefatos</SubTitulo>
            { conjuntos && 
                <>
                {
                    conjuntos?.map((conjunto, x) => {
                        return (
                            <Conjunto key={x}>
                                <Informacao titulo={ "Tipo" } valor={ conjunto?.tipo } />
                                <Bloco>
                                    <Itens>
                                        {
                                            conjunto?.artefatos?.map((artefato, y) => {
                                                return (
                                                    <div key={y}>
                                                        <Item>
                                                            <Link href={`/artefatos/${artefato?.id}`}>
                                                            <Img 
                                                                raridade={ artefato?.raridade } 
                                                                src={ montaUrl(`conjuntos-de-artefatos/${ artefato?.id }.png`) }  
                                                                alt={ `Imagem do artefato ${ artefato?.nome }` } />
                                                            </Link>
                                                            <Estrelas data={ artefato?.raridade } />
                                                            <Texto>{ artefato?.quantidade }x</Texto>
                                                            <Texto>{ artefato?.nome }</Texto>
                                                        </Item>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Itens>
                                    <Bonus>
                                        {
                                            conjunto?.bonus?.map((b, y) => {
                                                return (
                                                    <ItemUl key={y}>
                                                        { b }
                                                    </ItemUl>
                                                )
                                            })
                                        }
                                    </Bonus>
                                </Bloco>
                                { x < (conjuntos.length - 1) && <Hr />}
                            </Conjunto>
                        )
                    })
                }
                </>                 
            }
            { !conjuntos && <SemDados>...</SemDados>}
        </Section>
    )
}