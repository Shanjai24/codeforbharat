import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from '@mui/material';

const animalTypes = ['Dog', 'Cat', 'Bird', 'Other'];
const severities = ['Low', 'Medium', 'High'];

const ReportForm = ({ open, onClose, onSubmit, formData, onChange }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Report Injury/Accident</DialogTitle>
    <DialogContent>
      <TextField
        select
        label="Animal Type"
        name="animalType"
        value={formData.animalType}
        onChange={onChange}
        fullWidth
        margin="normal"
      >
        {animalTypes.map((type) => (
          <MenuItem key={type} value={type}>{type}</MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Severity"
        name="severity"
        value={formData.severity}
        onChange={onChange}
        fullWidth
        margin="normal"
      >
        {severities.map((sev) => (
          <MenuItem key={sev} value={sev}>{sev}</MenuItem>
        ))}
      </TextField>
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={onChange}
        fullWidth
        multiline
        rows={3}
        margin="normal"
      />
      {/* Image upload and location fields can be added here */}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onSubmit} variant="contained">Submit</Button>
    </DialogActions>
  </Dialog>
);

export default ReportForm; 