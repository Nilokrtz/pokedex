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
      <div className={`flex flex-wrap gap-4 justify-center`}>
      <Box /* type1={} type2={} name={} number={} */ />
      <Box /* type1={} type2={} name={} number={} */ />
      <Box /* type1={} type2={} name={} number={} */ />
      <Box /* type1={} type2={} name={} number={} */ />
      <Box /* type1={} type2={} name={} number={} */ />
      <Box /* type1={} type2={} name={} number={} */ />
      <Box /* type1={} type2={} name={} number={} */ />
      <Box /* type1={} type2={} name={} number={} */ />
      <Box /* type1={} type2={} name={} number={} */ />
      </div>
    </main>    
  )
}
