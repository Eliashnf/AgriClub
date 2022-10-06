import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tracteur from "../assets/imgAccueil1.png"
import Phone from "../assets/imgAccueil2.png"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SearchBar from '../components/SearchBar';
import Partenaires from '../components/Partenaires';

const Home = () => {
    return (
        <div className='middle'>
            <Typography
                    align='center'
                    paragraph
                    variant='h4'
                    sx={{marginTop: "30px"}}   
                    >
                        Agriclub l’expert du monde agricole
            </Typography>
            <div className='align'>
                <SearchBar/>
            </div>
            <Typography
                    align='center'
                    paragraph
                    variant='h4'
                    sx={{ fontWeight:"900px",marginTop: "30px"}}   
                    >
                        Qui sommes-nous ?
            </Typography>

            <div className='Grid'>

            
                <Grid container sx={{ width: "1200px", margin: "0px "}} >
                        <Grid item xs={7} sx={{ paddingLeft: "20px", paddingTop: "20px" }}>  
                            <Typography
                            align='left'
                            paragraph
                            variant='h4'   
                            >
                                AgriClub c’est votre <span style={{ color:'#2DDE34'}}>comparateur de prix </span> d’équipements et d’outillages agricole. Notre but est de simplifier la <span style={{ color:'#2DDE34'}}>mise en relation</span> entre particuliers et professionnels, avec transparence et fiabilité.
                            </Typography>
                        </Grid>
                        <Grid item xs={5} sx={{ marginTop: "20px", marginBottom: "20px" }}>
                        <Box
                            component={"img"}
                            sx={{
                            height: "250px",
                            marginRight: "8px",
                            borderRadius: 2
                                }}
                            src={Tracteur}
                            />{" "}
                        </Grid>
                    </Grid>

                    <Grid container sx={{ width: "1200px", margin: "20px"}} >
                        <Grid item xs={5} sx={{ marginTop: "20px", marginBottom: "20px", marginRight: "-250px" }}>
                        <Box
                            component={"img"}
                            sx={{
                            height: "250px",
                            marginRight: "0px",
                            borderRadius: 2
                                }}
                            src={Phone}
                            />{" "}
                        </Grid>
                        <Grid item xs={7} sx={{  paddingLeft: "20px", paddingTop: "20px" }}>  
                            <Typography
                            align='left'
                            paragraph
                            variant='h4'   
                            >
                                Devenez<span style={{ color:'#2DDE34'}}> membre </span>et ayez un accès illimité à nos offres, notre sélection du mois et le produit le plus apprécié par nos agriculteurs.
                            </Typography>
                        </Grid>
                </Grid>
                </div>

                    <Typography
                    align='center'
                    paragraph
                    variant='h4'   
                    >
                        Ils nous font confiance:
                    </Typography>

                    <Partenaires/>
        </div>
    );
};

export default Home;