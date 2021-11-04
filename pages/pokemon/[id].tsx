import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Pokemon } from "../../types";


function PokeDetailPage({ pokemon }: { pokemon: Pokemon }) {
    const router = useRouter();
    console.log(router.query.id)


    return (
        <>

        </>
    );
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${context.query.id}`
    );
    console.log(res);
    const pokemon = await res.json();

    return {
        props: {
            pokemon,
        },
    };
};

export default PokeDetailPage;
