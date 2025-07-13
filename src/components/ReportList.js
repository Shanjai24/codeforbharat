import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from '@mui/material';

const statusColors = {
  Pending: 'default',
  'In Progress': 'primary',
  Resolved: 'success',
};

const ReportList = ({ reports }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Animal</TableCell>
          <TableCell>Severity</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {reports.map((report, idx) => (
          <TableRow key={idx}>
            <TableCell>{report.animalType}</TableCell>
            <TableCell>{report.severity}</TableCell>
            <TableCell>
              <Chip label={report.status} color={statusColors[report.status] || 'default'} />
            </TableCell>
            <TableCell>{report.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ReportList; 