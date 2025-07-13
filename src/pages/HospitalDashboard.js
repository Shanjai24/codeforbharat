import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Map from '../components/Map';
import ReportList from '../components/ReportList';
import { Box, Grid } from '@mui/material';

const HospitalDashboard = () => {
  const [reports, setReports] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  // TODO: Fetch hospital location, nearby reports, and rescuers

  return (
    <Box display="flex">
      <Sidebar onNavigate={() => {}} />
      <Box flex={1} p={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Map center={center} markers={markers} onMarkerClick={() => {}} />
          </Grid>
          <Grid item xs={12} md={4}>
            <ReportList reports={reports} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HospitalDashboard; 