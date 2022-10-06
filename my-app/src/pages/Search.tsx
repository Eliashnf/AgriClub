import React from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Search = () => {
    return (
    <Box className='center'>
      
      <SearchBar />
      
        <Card/>
    </Box>
    );
};

export default Search;