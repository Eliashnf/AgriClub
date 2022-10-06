import React from 'react';
import "./SearchBar.css"
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const SearchBar = () => {

    return(
        <div className='searchBar' style={{marginTop: "30px"}}>

            <Autocomplete
                disablePortal
                freeSolo={true}
                id="Search"
                className='menu'
                options={['Loire','La Somme','Auvergne','Alpes Maritimes','Tracteur','Horiculture','Ostreiculture','Outillage']}
                sx={{ width: 200 }}
                renderInput={(params) => <TextField {...params} label="Rechercher" />}
            />

            <Autocomplete
                disablePortal
                options={['Loire','La Somme','Auvergne','Alpes Maritimes']}
                sx={{ width: "200px" , borderRadius: 0 }}
                renderInput={(params) => <TextField {...params} label="Régions" />}
            />

            <Autocomplete
                disablePortal
                options={['Tracteur','Horiculture','Ostreiculture','Outillage']}
                sx={{ width: 200 }}
                renderInput={(params) => <TextField {...params} label="Catégories" />}
            />
            <a href='/search'>
                <SearchIcon sx={{width: 55 ,height: 55}} />
            </a>

        </div>

    )

}

export default SearchBar;