import React from 'react'
import Navbar from '../components/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import PokeCards from '../components/PokeCards';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Container maxWidth="false">
            <Grid container>
                <Grid item xs={3}>
                    <PokeCards />
                </Grid>
                <Grid item xs={3}>
                    <PokeCards />
                </Grid>
                <Grid item xs={3}>
                    <PokeCards />
                </Grid>
                <Grid item xs={3}>
                    <PokeCards />
                </Grid>
            </Grid>
        </Container>
        </div>
  )
}
