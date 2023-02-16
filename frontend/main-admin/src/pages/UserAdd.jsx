import * as React from 'react';
import { Home } from '@mui/icons-material';
import { Breadcrumbs, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import axios from 'axios';

const breadCrumbs = [
  {
    label: '',
    link: '/',
    icon: <Home />,
  },
  {
    label: 'Categories',
    link: '/categories',
  },
  {
    label: 'UserAdd',
    link: '/userAdd',
  },
];
export const UserAdd = () => {
  const [categories, setCategories] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  useEffect(() => {
    axios.get('http://localhost:8000/categories').then((res) => {
      setCategories(res.data);
    });
  }, []);
  return (
    <>
      <Breadcrumbs items={breadCrumbs} />
      <Stack
        sx={{
          mt: 3,
          bgcolor: 'white',
          p: 3,
          borderRadius: 2,
          boxShadow: '0 0 5px rgba(0,0,0,.1)',
        }}
      >
        <Typography variant="h5">Add Users</Typography>
        <Stack spacing={3} sx={{ justifyContent: 'flex-start' }}>
          <TextField id="outlined-basic" label="First Name" variant="outlined" />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
          <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
          <TextField id="outlined-basic" label="E-Mail" variant="outlined" />
          <FormControl>
            <FormLabel>Role</FormLabel>
            <RadioGroup row>
              <FormControlLabel control={<Radio />} label="Female" />
              <FormControlLabel control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <Checkbox {...label} defaultChecked color="default" />
          <FormControlLabel value="top" control={<Checkbox />} label="Disabled" labelPlacement="top" {...label} defaultChecked color="default" sx={{ width: '45px' }} />
        </Stack>
      </Stack>
    </>
  );
};
