import Link from "next/link";
import useApi from "../../hooks/useApi";
import Informacao from "../../components/comum/Informacao";
import { montaUrl, primeiraLetraMaiuscula } from "../../util";

import { 
    H1, Box, Img, Informacoes, ImagemPadrao, BlocoImgInfo, BlocoBuild,
    Caminho, BarraLink, TextoComLink, TextoSemLink
} from "./UI";

import Armas from "./Armas";
import Artefatos from "./Artefatos";
import Talentos from "./Talentos";
import AtributosPrincipais from "./AtributosPrincipais";
import AtributosSecundarios from "./AtributosSecundarios";
import Referencias from "./Referencias";
import EventosDeEncontro from "./EventosDeEncontro";

export default function Personagem(props) {
    
    const { data, error, isFetching } = useApi("personagens");
    const { id } = props;

    let personagem = null;

    if(!isFetching) {
        personagem = data.find((obj) => obj.id === id);    
    }

    return (
        <>
            { personagem && 
                <>
                    <H1>{ personagem?.nomeCompleto }</H1>
                    <Caminho>
                        <Link href={"/"}>
                            <TextoComLink>Personagens</TextoComLink> 
                        </Link>
                        <BarraLink>/</BarraLink>
                        <TextoSemLink>{ personagem?.nomeCompleto }</TextoSemLink>
                    </Caminho>
                    <Box>
                        <div>
                            <BlocoImgInfo>
                                <ImagemPadrao elemento={ personagem?.elemento }>
                                    <Img src={ montaUrl(`personagens/${ id }-padrao.png`) }  alt={ `Imagem do personagem ${ personagem?.nomeCompleto }` } />
                                </ImagemPadrao>
                                <Informacoes>
                                    <Informacao titulo={ "Nome" } valor={ personagem?.nomeCompleto } />
                                    <Informacao titulo={ "Elemento" } valor={ primeiraLetraMaiuscula(personagem?.elemento) } icone={ `elementos/${ personagem?.elemento }.png` } />
                                    <Informacao titulo={ "Raridade" } obj={ personagem } />
                                </Informacoes>
                            </BlocoImgInfo>
                        </div>
                        <BlocoBuild>
                            <Talentos data={ personagem?.talentos }/>
                            <Armas data={personagem?.armas} />
                            <Artefatos data={personagem?.conjuntosDeArtefatos} />
                            <AtributosPrincipais data={personagem?.atributosPrincipais} />
                            <AtributosSecundarios data={personagem?.atributosSecundarios} />
                            <Referencias data={personagem?.referencias} />
                            <EventosDeEncontro id={personagem?.id} data={personagem?.eventosDeEncontro}/>
                        </BlocoBuild>
                    </Box>   
                </>
            }
        </>
    )
}