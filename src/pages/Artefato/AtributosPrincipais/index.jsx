import { Section, SubTitulo, Texto } from "../../../components/UI";
import { montaUrl } from "../../../util";
import { Atributos, AtributosTexto, Icone, Img, Item, Itens } from "./UI";

export default function AtributosPrincipais() {
    return (
        <Section>
            <SubTitulo>Atributos Principais</SubTitulo>
            <Itens>
                <Item>
                    <Icone>
                        <Img 
                            raridade={[2,2]} 
                            src={ montaUrl("conjuntos-de-artefatos/icones/flor-da-vida.png") }  
                            alt={ "Imagem do ícone do artefato Flor da Vida" } 
                        />                                  
                        <Texto>{ "Flor da Vida" }</Texto>
                    </Icone>
                    <Atributos>
                        <AtributosTexto>{ "Vida" }</AtributosTexto>
                    </Atributos>
                </Item>
                <Item>
                    <Icone>
                        <Img 
                            raridade={[2,2]} 
                            src={ montaUrl("conjuntos-de-artefatos/icones/pluma-da-morte.png") }  
                            alt={ "Imagem do ícone do artefato Pluma da Morte" } 
                        />                                  
                        <Texto>{ "Pluma da Morte" }</Texto>
                    </Icone>
                    <Atributos>
                        <AtributosTexto>{ "Ataque" }</AtributosTexto>
                    </Atributos>
                </Item>
                <Item>
                    <Icone>
                        <Img 
                            raridade={[2,2]} 
                            src={ montaUrl("conjuntos-de-artefatos/icones/areia-do-tempo.png") }  
                            alt={ "Imagem do ícone do artefato Areia do Tempo" } 
                        />                                  
                        <Texto>{ "Areia do Tempo" }</Texto>
                    </Icone>
                    <Atributos>
                        <AtributosTexto>{ "Vida" }</AtributosTexto>
                        <AtributosTexto>{ "Ataque" }</AtributosTexto>
                        <AtributosTexto>{ "Defesa" }</AtributosTexto>
                        <AtributosTexto>{ "Proficiência Elemental" }</AtributosTexto>
                        <AtributosTexto>{ "Recarga de Energia" }</AtributosTexto>
                    </Atributos>
                </Item>
                <Item>
                    <Icone>
                        <Img 
                            raridade={[2,2]} 
                            src={ montaUrl("conjuntos-de-artefatos/icones/calice-de-eratema.png") }  
                            alt={ "Imagem do ícone do artefato Cálice de Erátema" } 
                        />                                  
                        <Texto>{ "Cálice de Erátema" }</Texto>
                    </Icone>
                    <Atributos>
                        <AtributosTexto>{ "Vida" }</AtributosTexto>
                        <AtributosTexto>{ "Ataque" }</AtributosTexto>
                        <AtributosTexto>{ "Defesa" }</AtributosTexto>
                        <AtributosTexto>{ "Proficiência Elemental" }</AtributosTexto>
                        <AtributosTexto>{ "Recarga de Energia" }</AtributosTexto>
                        <AtributosTexto>{ "Dano Físico" }</AtributosTexto>
                        <AtributosTexto>{ "Dano Hydro" }</AtributosTexto>
                        <AtributosTexto>{ "Dano Pyro" }</AtributosTexto>
                        <AtributosTexto>{ "Dano Cryo" }</AtributosTexto>
                        <AtributosTexto>{ "Dano Electro" }</AtributosTexto>
                        <AtributosTexto>{ "Dano Anemo" }</AtributosTexto>
                        <AtributosTexto>{ "Dano Geo" }</AtributosTexto>
                    </Atributos>
                </Item>
                <Item>
                    <Icone>
                        <Img 
                            raridade={[2,2]} 
                            src={ montaUrl("conjuntos-de-artefatos/icones/tiara-de-logos.png") }  
                            alt={ "Imagem do ícone do artefato Tiara de Logos" } 
                        />                                  
                        <Texto>{ "Tiara de Logos" }</Texto>
                    </Icone>
                    <Atributos>
                        <AtributosTexto>{ "Vida" }</AtributosTexto>
                        <AtributosTexto>{ "Ataque" }</AtributosTexto>
                        <AtributosTexto>{ "Defesa" }</AtributosTexto>
                        <AtributosTexto>{ "Proficiência Elemental" }</AtributosTexto>
                        <AtributosTexto>{ "Taxa Crítica" }</AtributosTexto>
                        <AtributosTexto>{ "Dano Crítico" }</AtributosTexto>
                    </Atributos>
                </Item>
            </Itens>
        </Section>
    )
}