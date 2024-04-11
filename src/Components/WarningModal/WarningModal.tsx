import { Modal } from '../Modal/Modal';
import CardContent from '@mui/material/CardContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { WarningModalProps } from './types';

export const WarningModal = ({
  open,
  onCloseModal,
  onAccept,
}: WarningModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      title={'Eliminar Usuario'}
      description={'¿Está seguro de eliminar el usuario?'}
    >
      <CardContent>
        <DialogActions
          sx={{
            justifyContent: 'space-evenly',
            marginTop: '20px',
          }}
        >
          <Button variant='outlined' onClick={onAccept}>
            Eliminar
          </Button>
          <Button variant='contained' onClick={onCloseModal}>
            Cancelar
          </Button>
        </DialogActions>
      </CardContent>
    </Modal>
  );
};
