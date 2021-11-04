import type { NextPage, GetStaticProps } from 'next'
import { useState } from 'react';
import { Form, FormGroup } from 'react-bootstrap'
import Head from 'next/head'
import Image from 'next/image'
import { AllPokemons, Result } from '../types';


interface Query {
  name: string;
}

const Home: NextPage<{ pokemons: Result[] }> = ({ pokemons }) => {

  const [query, setQuery] = useState<Query>({
    name: "",
  });




  const handleSearchedQuery = () => {


  }

  console.log(query.name);

  return (
    <div className='bg-green-900 flex flex-col items-center justify-center w-screen h-screen'>
      <Head>
        <title>Pokemon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col items-center justify-center '>
        <div>

          <h1 className='text-5xl my-3 shadow-2xl p-5 rounded-xl text-gray-100'>
            Welcome to Pokemon's World!
          </h1>
        </div>
        <div className='my-5 py-5'>


          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Pokemon name"
                value={query.name}
                onChange={(e) => setQuery({ ...query, name: e.target.value })}
                onKeyUp={() => handleSearchedQuery()}

              />

            </Form.Group>
          </Form>


        </div>

        <div className='flex flex-wrap justify-center my-5'>

          {
            pokemons.map((poke) => {
              return (
                <>
                  <div key={poke.name} className='m-4 bg-green-500 p-6 shadow-2xl text-gray-100 rounded-2xl hover:bg-green-700 hover:text-gray-100 cursor-pointer'>
                    <a>
                      <h3>{poke.name}</h3>
                    </a>
                  </div>
                </>);
            })
          }
        </div>
      </main>
      <hr />
      <footer className='my-5 py-5 text-gray-200'>
        <span>Built by Emmanuel</span>
      </footer>
    </div>
  )
}



export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  console.log(res)
  const { results }: AllPokemons = await res.json();

  return {
    props: {
      pokemons: results,
    },
  };
};

export default Home
