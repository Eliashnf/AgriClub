import { Grid, Typography, Rating, Box, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import React from 'react';
import tracteur from '../assets/unknown.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Card.css"
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material'; 
import tracteur2 from '../assets/unknown2.png'
import tracteur3 from '../assets/unknown3.png'


const Card = () => {
    return (
    <>
    <Grid container sx={{ width: "600px", margin: "20px", boxShadow: 1, borderRadius: 1, backgroundColor: "#FAFAFA"}} className="center" >

        <Grid item xs={7} sx={{ paddingLeft: "20px", paddingTop: "20px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Tracteur Fiat SEGEMA 1400HP</Typography>
            <Typography sx={{ fontWeight: "light" }} >12k agriculteurs aiment ce produit</Typography>
            <Rating name="read-only" value={4} readOnly />
            <Typography>Rating: 4/5</Typography>
        </Grid>
        
        <Grid item xs={5} sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <Box
            component={"img"}
            sx={{
            height: "150px",
            marginRight: "8px",
            borderRadius: 2
                }}
            src={tracteur}
            />{" "}
        </Grid>

        <Grid container>
        <Accordion sx={{ backgroundColor: "#4D9D39" }}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ color: "#FFFFFF"}}>Comparateur de prix</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "#4D9D39", width: "570px"}}>
                <Grid container sx={{ width: "100%" }}>
                    <Grid xs={12}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>15 500 € - 27 500 €</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>Agrizone</Typography>
                    </Grid>
                    <Grid xs={4}>
                    <Divider sx={{paddingTop: "12px", color: "#61CD46" }}/>
                    </Grid>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>15 500 €</Typography>
                    </Grid>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>AgriColors</Typography>
                    </Grid>
                    <Grid xs={4}>
                    <Divider sx={{paddingTop: "12px", color: "#61CD46" }}/>
                    </Grid>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>25 500 €</Typography>
                    </Grid>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>Agriaffaires</Typography>
                    </Grid>
                    <Grid xs={4}>
                    <Divider sx={{paddingTop: "12px", color: "#61CD46" }}/>
                    </Grid>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>27 500 €</Typography>
                    </Grid>
                    <FormControl sx={{ width: "1000px",  marginTop:"20px"}}>
                    <InputLabel htmlFor="my-input" >Commentaire</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">Laissez un avis.</FormHelperText>
                    </FormControl>
                
                </Grid>
        </AccordionDetails>
      </Accordion>
        </Grid>

    </Grid>


    <Grid container sx={{ width: "600px", margin: "20px", boxShadow: 1, borderRadius: 1, backgroundColor: "#FAFAFA"}} className="center" >

        <Grid item xs={7} sx={{ paddingLeft: "20px", paddingTop: "20px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Fendh multifonction 1200HP </Typography>
            <Typography sx={{ fontWeight: "light" }} >10k agriculteurs aiment ce produit</Typography>
            <Rating name="read-only" value={3} readOnly />
            <Typography>Rating: 3/5</Typography>
        </Grid>
        
        <Grid item xs={5} sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <Box
            component={"img"}
            sx={{
            height: "150px",
            marginRight: "8px",
            borderRadius: 2
                }}
            src={tracteur2}
            />{" "}
        </Grid>

        <Grid container>
        <Accordion sx={{ backgroundColor: "#4D9D39" }}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ color: "#FFFFFF"}}>Comparateur de prix</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "#4D9D39", width: "570px"}}>
                <Grid container sx={{ width: "100%" }}>
                    <Grid xs={12}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>20 500 € - 30 500 €</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>Agricolors</Typography>
                    </Grid>
                    <Grid xs={4}>
                    <Divider sx={{paddingTop: "12px", color: "#61CD46" }}/>
                    </Grid>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>20 500 €</Typography>
                    </Grid>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>Agrizone</Typography>
                    </Grid>
                    <Grid xs={4}>
                    <Divider sx={{paddingTop: "12px", color: "#61CD46" }}/>
                    </Grid>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>25 500 €</Typography>
                    </Grid>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>Agrifournitures</Typography>
                    </Grid>
                    <Grid xs={4}>
                    <Divider sx={{paddingTop: "12px", color: "#61CD46" }}/>
                    </Grid>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>30 500 €</Typography>
                    </Grid>
                    <FormControl sx={{ width: "1000px",  marginTop:"20px"}}>
                    <InputLabel htmlFor="my-input" >Commentaire</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">Laissez un avis.</FormHelperText>
                    </FormControl>
                </Grid>
        </AccordionDetails>
      </Accordion>
        </Grid>

    </Grid>



    <Grid container sx={{ width: "600px", margin: "20px", boxShadow: 1, borderRadius: 1, backgroundColor: "#FAFAFA"}} className="center" >

        <Grid item xs={7} sx={{ paddingLeft: "20px", paddingTop: "20px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Honda Electrique 1000HP</Typography>
            <Typography sx={{ fontWeight: "light" }} >9k agriculteurs aiment ce produit</Typography>
            <Rating name="read-only" value={3} readOnly />
            <Typography>Rating: 3/5</Typography>
        </Grid>
        
        <Grid item xs={5} sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <Box
            component={"img"}
            sx={{
            height: "150px",
            marginRight: "8px",
            borderRadius: 2
                }}
            src={tracteur3}
            />{" "}
        </Grid>




        <Grid container>
        <Accordion sx={{ backgroundColor: "#4D9D39" }}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ color: "#FFFFFF"}}>Comparateur de prix</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "#4D9D39", width: "570px"}}>
                <Grid container sx={{ width: "100%" }}>
                    <Grid xs={12}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>35 500 € - 40 500 €</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>Agrizone</Typography>
                    </Grid>
                    <Grid xs={4}>
                    <Divider sx={{paddingTop: "12px", color: "#61CD46" }}/>
                    </Grid>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>35 500 €</Typography>
                    </Grid>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>Agricolors</Typography>
                    </Grid>
                    <Grid xs={4}>
                    <Divider sx={{paddingTop: "12px", color: "#61CD46" }}/>
                    </Grid>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>37 500 €</Typography>
                    </Grid>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>Agrifournitures</Typography>
                    </Grid>
                    <Grid xs={4}>
                    <Divider sx={{paddingTop: "12px", color: "#61CD46" }}/>
                    </Grid>
                    <Grid xs={4}>
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>40 500 €</Typography>
                    </Grid>
                    <FormControl sx={{ width: "1000px",  marginTop:"20px"}}>
                    <InputLabel htmlFor="my-input" >Commentaire</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">Laissez un avis.</FormHelperText>
                    </FormControl>


                </Grid>
        </AccordionDetails>
      </Accordion>
        </Grid>

    </Grid>
</>   

    );
};

export default Card;