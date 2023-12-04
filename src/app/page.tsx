'use client'

import Box from "./components/box";

export default function Home() {
  async function getData() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    console.log(res.json());
    /* return res.json() */
  }

  return (
    <main>
      <Box /* element={} description={} height={} width={} type1={} type2={} name={} moves={} */ />
    </main>    
  )
}
