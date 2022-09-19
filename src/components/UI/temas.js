import { textoClaro, textoEscuro, fundoClaro, fundoEscuro, fontFamily, azulEscuro, azulClaro } from "./variaveis";

export const temaClaro = {
    body: fundoClaro,
    text: textoEscuro,
    white: true,
    fontFamily: fontFamily,
    link: azulEscuro
}

export const temaEscuro = {
    body: fundoEscuro,
    text: textoClaro,
    white: false,
    fontFamily: fontFamily,
    link: azulClaro
}
