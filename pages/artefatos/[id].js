import { useRouter } from "next/router";
import Artefato from "../../src/pages/Artefato";

export default function ArtefatosPage() {

    const router = useRouter();

    return (
        <div>
            <Artefato id={router?.query?.id} />
        </div>
    )
}