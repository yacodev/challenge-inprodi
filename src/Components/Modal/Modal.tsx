import { PropsWithChildren } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { ModalProps } from './types';
import { Divider } from '@mui/material';

export const Modal = ({
  open,
  onClose,
  title,
  description,
  children,
}: PropsWithChildren<ModalProps>) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
      <DialogTitle sx={{ color: 'text.primary' }} id='form-dialog-title'>
        {title}
      </DialogTitle>
      <Divider />
      <DialogContent>
        {description && (
          <DialogContentText
            sx={{
              textAlign: 'center',
              color: 'text.primary',
              padding: '0 1.25rem 0 1.25rem',
            }}
          >
            {description}
          </DialogContentText>
        )}
        {children}
      </DialogContent>
    </Dialog>
  );
};
