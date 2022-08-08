import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../components/Cards'
import Head from 'next/document'

const Home = ()=>{
    
  const[pokemones, setPokemones] = useState([])

  const obtenerData = async ()=>{
     const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
     setPokemones(respuesta.data.results)
  }
   
  useEffect(()=>{
    obtenerData()
  },[])

  return(
    <>
    <Head>
      <title>Lista de Pokemones</title>
    </Head>
    <h1>LISTA DE POKEMONES</h1>
    {pokemones.map((item, index)=> 
    <Cards key={index} name={item.name} />
    )}
    </>
  )
}

export default Home