import { Grid, Typography, Rating, Box, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import React from 'react';
import tracteur from '../assets/unknown.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Card = () => {
    return (
    
    <Grid container sx={{ width: "600px", margin: "20px", boxShadow: 1, borderRadius: 1, backgroundColor: "#FAFAFA" }}>

        <Grid item xs={7} sx={{ paddingLeft: "20px", paddingTop: "20px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Titre</Typography>
            <Typography sx={{ fontWeight: "light" }} >12k agriculteurs aiment ce produit</Typography>
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
                    <Typography sx={{ textAlign: "center", color: "#FFFFFF" }}>15 500 € - 22 500 €</Typography>
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
                </Grid>
        </AccordionDetails>
      </Accordion>
        </Grid>

    </Grid>

    );
};

export default Card;