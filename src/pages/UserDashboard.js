import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import Map from '../components/Map';
import ReportList from '../components/ReportList';
import { Box, Grid } from '@mui/material';

const defaultCenter = { lat: 37.7749, lng: -122.4194 }; // San Francisco

const UserDashboard = () => {
  const [search, setSearch] = useState('');
  const [reports, setReports] = useState([]);
  const [center, setCenter] = useState(defaultCenter);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => {
          setCenter(defaultCenter);
        }
      );
    }
  }, []);

  return (
    <Box display="flex">
      <Sidebar onNavigate={() => {}} />
      <Box flex={1} p={3}>
        <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
        <Grid container spacing={2}>
          <Grid>
            <Map center={center} />
          </Grid>
          <Grid>
            <ReportList reports={reports} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserDashboard; 