import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, createContext } from 'react';
import { useToast } from '../hooks';

export const DialogContext = createContext(null);
export const DialogProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const ShowToast = useToast();
  return (
    <DialogContext.Provider value={{ setOpen }}>
      {children}
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button 
          onClick={() => {
            ShowToast("Hello Toast")
            handleClose ();
          }} 
          autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </DialogContext.Provider>
  );
};
