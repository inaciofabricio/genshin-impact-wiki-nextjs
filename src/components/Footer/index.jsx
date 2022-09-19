import { Link, Section, Referencia, Icone, Texto } from "./UI";
import { BsGithub, BsFillTriangleFill } from "react-icons/bs";
import { SiNextdotjs, SiHtml5, SiJavascript, SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";


export default function Footer() {
    return (
        <Section>
            <Link 
                href="https://github.com/inaciofabricio" 
                target="_blank" 
                rel="noopener noreferrer">
                    <BsGithub />
                    @inaciofabricio
            </Link>   
            <Referencia>
                <Icone>
                    <SiHtml5 />
                    <Texto>HTML5</Texto>
                </Icone>
                <Icone>
                    <SiCss3 />
                    <Texto>CSS3</Texto>
                </Icone> 
                <Icone>
                    <SiJavascript />
                    <Texto>JAVASCRIPT</Texto>
                </Icone>  
                <Icone>
                    <FaReact />
                    <Texto>REACTJS</Texto>
                </Icone> 
                <Icone>
                    <SiNextdotjs />
                    <Texto>NEXTJS</Texto>
                </Icone>
                
            </Referencia>
            <Referencia>
                <Link 
                    href="https://vercel.com/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <BsFillTriangleFill />
                        Vercel
                </Link>
            </Referencia>
        </Section>
    )
}