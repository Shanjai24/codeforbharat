import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ value, onChange }) => (
  <TextField
    label="Search Hospitals"
    variant="outlined"
    fullWidth
    value={value}
    onChange={onChange}
    sx={{ marginBottom: 2 }}
  />
);

export default SearchBar; 