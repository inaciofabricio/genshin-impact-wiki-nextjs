import { useRouter } from "next/router";
import Arma from "../../src/pages/Arma";

export default function ArmasPage() {

    const router = useRouter();

    return (
        <div>
            <Arma id={router?.query?.id} />
        </div>
    )
}