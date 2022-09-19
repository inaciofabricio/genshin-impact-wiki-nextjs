import { useRouter } from "next/router";
import Personagem from "../../src/pages/Personagem";

export default function PersonagensPage() {

    const router = useRouter();

    return (
        <div>
            <Personagem id={router?.query?.id} />
        </div>
    )
}