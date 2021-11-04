import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Image from 'next/image'
import { Pokemon } from "../../types";
import React from "react";
import Link from 'next/link';


function PokeDetailPage({ pokemon }: { pokemon: Pokemon }) {
    const router = useRouter();
    console.log(router.query.id)


    return (
        <div className="bg-pink-500 h-100 w-100 pt-5">
            <Link href="/">
                <button className='p-2 cursor-pointer bg-pink-700 rounded-3xl mx-4'> <h3>Go back to home</h3></button>
            </Link>

            <div className="flex flex-col items-center justify-center ">
                <div><h1 className="text-6xl">{pokemon.name}</h1> </div>
                <div> <img src={pokemon.sprites.front_default} alt={pokemon.name} width={300} height={300} /></div>

            </div>

            <div className='flex flex-wrap justify-evenly my-4'>
                <div className='mx-5'>
                    <h2 className='text-4xl my-4'>Species</h2>
                    {pokemon.species.name}
                </div>
                <div className='mx-5'>
                    <h2 className='text-4xl my-4'>Stats</h2>
                    {pokemon.stats.map(stat => (
                        <div key={stat.stat.name}>
                            {stat.stat.name}: {stat.base_stat}
                        </div>

                    ))}
                </div>



                <div className='mx-5'>
                    <h2 className='text-4xl my-4'>Types</h2>
                    {pokemon.types.map(type => (
                        <div key={type.type.name}>
                            {type.type.name}
                        </div>

                    ))}
                </div>

                <div className='mx-5'>
                    <h2 className='text-4xl my-4'>Weight</h2>
                    {pokemon.weight}
                </div>

            </div>

            <div className='flex flex-col item-center justify-center py-5 bg-pink-400'>
                <h2 className='text-4xl py-4 text-center'>Moves</h2>
                <div className='flex flex-wrap mx-5'>
                    {pokemon.moves.map(move => (

                        <div key={move.move.name} className='m-5'>
                            {move.move.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>);
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
