import useApi from "../../hooks/useApi";
import { H1 } from "../../components/UI";
import { compareRaridade } from "../../util";
import Lista from "./Lista";

export default function Armas() {

    const { data, error, isFetching } = useApi("armas");

    let espadas = [];
    let espadoes = [];
    let lancas = [];
    let arcos = [];
    let catalizadores = [];

    if(!isFetching) {      
        espadas = data.filter(obj => obj.tipo.id === "espada");
        espadoes = data.filter(obj => obj.tipo.id === "espadao");
        lancas = data.filter(obj => obj.tipo.id === "lanca");
        arcos = data.filter(obj => obj.tipo.id === "arco");
        catalizadores = data.filter(obj => obj.tipo.id === "catalizador");

        espadas?.sort(compareRaridade);
        espadoes?.sort(compareRaridade);
        lancas?.sort(compareRaridade);
        arcos?.sort(compareRaridade);
        catalizadores?.sort(compareRaridade);

    }

    return (
        <>
            <H1>Armas</H1>
            <Lista titulo={"Espadas"} data={espadas} />
            <Lista titulo={"Espadões"} data={espadoes} />
            <Lista titulo={"Lanças"} data={lancas} />
            <Lista titulo={"Arcos"} data={arcos} />
            <Lista titulo={"Catalizadores"} data={catalizadores} />
        </>
    )
}