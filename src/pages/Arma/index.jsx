import useApi from "../../hooks/useApi";
import { BarraLink, Caminho, H1, SemDados, SubTitulo, TextoComLink, TextoSemLink } from "../../components/UI";
import Link from "next/link";
import { montaUrl } from "../../util";
import { Conteudo, Imagem, Img, Informacoes, Passiva } from "./UI";
import Informacao from "../../components/comum/Informacao";

export default function Arma(props) {

    const { data, error, isFetching } = useApi("armas");

    const { id } = props;

    let arma = null;

    if(!isFetching) {
        arma = data.find((obj) => obj.id === id);  
    }

    return (
        <>
            {
                arma &&
                <>
                    <H1>{ arma?.nome }</H1>
                    <Caminho>
                        <Link href={"/"}>
                            <TextoComLink>Principal</TextoComLink> 
                        </Link>
                        <BarraLink>/</BarraLink>
                        <Link href={"/armas"}>
                            <TextoComLink>Armas</TextoComLink> 
                        </Link>
                        <BarraLink>/</BarraLink>
                        <TextoSemLink>{ arma?.nome }</TextoSemLink>
                    </Caminho>
                    <Conteudo>
                        <Imagem raridade={ arma?.raridade }>
                            <Img src={ montaUrl(`armas/${ id }.png`) }  alt={ `Imagem da arma ${ arma?.nome }` } />
                        </Imagem>
                        <Informacoes>
                            <SubTitulo>Informações</SubTitulo>
                            { arma?.tipo?.nome && <Informacao titulo={ "Tipo" } valor={ arma?.tipo?.nome } /> }
                            { arma?.obter && <Informacao titulo={ "Onde Obter" } valor={ arma?.obter } /> }
                            { arma?.atributoSecundario && <Informacao titulo={ "Atributo Secundário" } valor={ arma?.atributoSecundario } /> }
                            {
                                arma?.passiva &&
                                <>
                                    <SubTitulo>Habilidade Passiva</SubTitulo>
                                    {
                                        arma?.passiva?.map((obj, y) => {
                                            return (
                                                <Passiva key={y}>{ obj }</Passiva>
                                            )
                                        })
                                    }
                                </>
                            }
                        </Informacoes>
                    </Conteudo>
                                
                </>
            }
            { !arma && <SemDados>...</SemDados>}
        </>
    )
}