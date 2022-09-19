import { 
  anemo, cryo, electro, dendro, geo, hydro, pyro,
  cinza, verde, azul, roxo, laranja, indefinido
} from "../components/UI/variaveis";

export function trataDecimal(valor) {
  return typeof valor === "number" ? String(valor.toFixed(1).replace(".", ",")) : valor;
}

export function montaUrl(url) {  
    const baseUrlImagens = "https://raw.githubusercontent.com/inaciofabricio/anotacoes/main/genshin-impact-wiki/imagens/";
    return baseUrlImagens + url;
}

export function primeiraLetraMaiuscula(texto) {
  if(texto) {
    return texto.substring(0,1).toUpperCase() + texto.substring(1);    
  } else {
    return texto;
  }
}

export function comparePersonagens( a, b ) {
        
  if ( a.nome < b.nome ) {
    return -1;
  }

  if ( a.nome > b.nome ) {
    return 1;
  }

  return 0;
}

export function compareRaridade( a, b ) {
        
  if ( a.raridade < b.raridade ) {
    return -1;
  }

  if ( a.raridade > b.raridade ) {
    return 1;
  }

  return 0;
}

export function getElemento(elemento) {
  switch (elemento) {
      case "anemo":
          return anemo
      case "cryo":
          return cryo
      case "electro":
          return electro
      case "dendro":
          return dendro
      case "geo":
          return geo
      case "hydro":
          return hydro
      case "pyro":
          return pyro
      case "indefinido":
          return indefinido
      default:
          break;
  }
}

export function getRaridade(raridade) {
  switch (raridade) {
      case 1:
          return cinza
      case 2:
          return verde
      case 3:
          return azul
      case 4:
          return roxo
      case 5:
          return laranja
      default:
          break;
  }
}