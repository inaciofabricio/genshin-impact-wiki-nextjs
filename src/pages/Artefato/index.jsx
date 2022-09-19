import useApi from "../../hooks/useApi";
import { montaUrl } from "../../util";

import { H1, SemDados, Item, Texto, Section, SubTitulo, Caminho, TextoComLink, BarraLink, TextoSemLink } from "../../components/UI";
import { Bonus, BonusObj, Efeito, Img, Itens, Quantidade, Local, LocalImg, LocalNome } from "./UI";
import Estrelas from "../../components/comum/Estrelas";
import Link from "next/link";
import { useRouter } from "next/router";
import AtributosPrincipais from "./AtributosPrincipais";
import OndeAdquirir from "./OndeAdquirir";

export default function Artefato(props) {

    const router = useRouter();

    const { data, error, isFetching } = useApi("conjuntoDeArtefatos");

    const { id } = props;

    let conjunto = null;

    if(!isFetching) {
        conjunto = data.find((obj) => obj.id === id);  
    }

    return (
        <>
            {
                conjunto && 
                <>
                    <H1>{ conjunto?.nome }</H1>
                    <Caminho>
                        <Link href={"/"}>
                            <TextoComLink>Principal</TextoComLink> 
                        </Link>
                        <BarraLink>/</BarraLink>
                        <Link href={"/artefatos"}>
                            <TextoComLink>Artefatos</TextoComLink> 
                        </Link>
                        <BarraLink>/</BarraLink>
                        <TextoSemLink>{ conjunto?.nome }</TextoSemLink>
                    </Caminho>
                    <OndeAdquirir locais={conjunto?.locais}/>
                    { conjunto?.artefatos &&
                        <Section>
                            <SubTitulo>Artefatos</SubTitulo>
                            <Itens>
                                {
                                    conjunto?.artefatos?.map((obj, x) => {
                                        return (
                                            <Item key={x}>
                                                <Img 
                                                    raridade={conjunto?.raridades} 
                                                    src={ montaUrl(`conjuntos-de-artefatos/artefatos/${ obj?.id }.png`) }  
                                                    alt={ `Imagem do artefato ${ obj?.nome }` } 
                                                />                                  
                                                {
                                                    conjunto?.raridades?.map((raridade, y) => {
                                                        return (
                                                            <Estrelas key={y} data={raridade} />
                                                        )
                                                    })
                                                }
                                                <Texto>{ obj?.nome }</Texto>
                                            </Item>
                                        )
                                    })
                                }
                            </Itens>
                        </Section> 
                    }
                    {
                        conjunto?.bonus &&
                        <Section>
                            <SubTitulo>Bonus</SubTitulo>
                            <Bonus>
                                {
                                    conjunto?.bonus?.map((obj, x) => {
                                        return (
                                            <BonusObj key={x}>
                                                <Quantidade>{obj?.quantidade}x:</Quantidade>
                                                <Efeito>{obj?.efeito}</Efeito>
                                            </BonusObj>
                                        )
                                    })
                                }
                            </Bonus>
                        </Section>
                    }
                    <AtributosPrincipais />
                </>

            }
            { !conjunto && <SemDados>...</SemDados>}
        </>
    )
}