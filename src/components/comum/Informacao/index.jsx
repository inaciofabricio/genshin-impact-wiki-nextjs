import { montaUrl } from "../../../util";
import Estrelas from "../Estrelas";
import { Linha, Titulo, Valor, Img } from "./UI";

export default function Informacao(props) {

    const { titulo, valor, obj, icone } = props;

    return (
        <Linha>
            { titulo && <Titulo>{ titulo }:</Titulo> }
            { valor && <Valor>{ valor }</Valor> }
            { icone && <Img src={ montaUrl(icone) } alt={ `Imagem miniatura do elemento ${obj}` } /> }
            { obj && <Valor><Estrelas data={ obj?.raridade } /></Valor> }
        </Linha>
    )
}