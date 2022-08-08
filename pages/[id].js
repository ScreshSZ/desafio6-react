import React from 'react'
import {useRouter} from 'next/router'
import { useEffect,useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

const detallesPokemones = ()=>{

   const router = useRouter()

   const { id } = router.query

   const[pokemones, setPokemones] = useState()

  const obtenerData = async ()=>{
     const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
     setPokemones(respuesta.data)
  }
   
  useEffect(()=>{
    obtenerData()
  },[])

    return (
        pokemones ? (
        <>
        <Image src={pokemones.sprites.front_shiny} width="100px" height="100px"></Image>
        <h3>Nombre: {pokemones.name}</h3>
        <h3>Peso: {pokemones.weight}</h3>
        </>
        ) : <p>Cargando</p>
    )
}

export default detallesPokemones