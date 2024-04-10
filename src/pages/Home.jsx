import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import PokeCards from '../components/PokeCards';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import axios from 'axios';


export const Home = () => {
    const [pokemons, setpokemons] = useState([]);
    useEffect (() => {
        getPoke()
    }, [])

    const getPoke = () => {
        var endpoints = [];
        for(var i = 1; i < 100; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setpokemons(res));
    };

  return (
    <div>
        <Navbar />
        <Container maxWidth="false">
            <Grid container spacing={3}>
                {pokemons.map((pokemon, key) => (
                <Grid item xs={2} key={key}>
                    <PokeCards name={pokemon.data.name} image={pokemon.data.sprites.front_default}/>
                </Grid>
               ))}
            </Grid>
        </Container>
        </div>
  )
}
