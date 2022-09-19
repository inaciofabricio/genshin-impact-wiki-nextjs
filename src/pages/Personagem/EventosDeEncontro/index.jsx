import { montaUrl } from "../../../util";
import { Section, SemDados, SubTitulo } from "../../../components/UI";
import { Itens, Item, Miniatura, ImagemPrincipal, Img } from "./UI";
import { useEffect, useState } from "react";

export default function EventosDeEncontro(props) {

    const id = props?.id;
    const eventos = props?.data;

    const [atual, setAtual] = useState(1); 

    useEffect(() => {
        
        window.interval = setInterval(
          () => {
            setAtual(state => state + 1)
            eventos?.length <= atual ? setAtual(1) : null;
          }, 5000);

        return () => {
          clearInterval(window?.interval);
        }

     }, [atual, eventos]);

    return (
        <Section>
            <SubTitulo>Eventos de Encontros</SubTitulo>
            { eventos && 
                <>
                    <ImagemPrincipal>
                        <Img 
                            src={ montaUrl(`eventos-de-encontros/${id}/${atual}.jpg`) }  
                            alt={ `Imagem do Eventos de Encontros da(o) barbara.` } />
                        <Itens>
                            {
                                eventos.map((obj) => {
                                    return (
                                        <Item key={obj}>
                                            <Miniatura id={obj} atual={atual}
                                                onClick={() => setAtual(obj)}
                                                src={ montaUrl(`eventos-de-encontros/${id}/${obj}.jpg`) }  
                                                alt={ `Imagem do Eventos de Encontros da(o) ${id}.` } />
                                        </Item>
                                    )
                                })                
                            }
                        </Itens>  
                    </ImagemPrincipal>
                </>
            }         
            { !eventos && <SemDados>...</SemDados>}
        </Section>
    )
}