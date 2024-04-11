import Grid from '@mui/material/Grid';
import { Modal } from '../Modal';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import { UserModalProps, UserForm } from './types';
import { useEffect } from 'react';
import { InputForm, TypeDataUser, TypeInput } from '../InputForm';

const defaultValuesUpdateUser = {
  name: '',
  latitude: 0,
  longitude: 0,
};

export const UserModal = ({
  openModal,
  onCloseModal,
  onUpdate,
  user,
  userId,
}: UserModalProps) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    latitude: yup.number().required(),
    longitude: yup.number().required(),
  });

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<UserForm>({
    defaultValues: defaultValuesUpdateUser,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (!user) return;
    setValue('name', user.name);
    setValue('latitude', user.latitude);
    setValue('longitude', user.longitude);
  }, [user]);

  const onSubmit = async (data: UserForm) => {
    if (!userId) return;

    onUpdate(data);
    willCloseModal();
  };

  const willCloseModal = () => {
    reset();
    onCloseModal();
  };

  return (
    <Modal
      open={openModal}
      onClose={willCloseModal}
      title={'Actualizar usurio'}
    >
      <CardContent>
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputForm
                label={'nombre'}
                placeholder={'Carlos Yaco'}
                required
                name={TypeDataUser.NAME}
                typeInput={TypeInput.STRING}
                typeError={errors.name}
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <InputForm
                label={'Latitude'}
                placeholder={'20.6667'}
                required
                name={TypeDataUser.LATITUDE}
                typeInput={TypeInput.NUMBER}
                typeError={errors.latitude}
                control={control}
              />
            </Grid>

            <Grid item xs={12}>
              <InputForm
                label={'Longitude'}
                placeholder={'-103.3496'}
                required
                name={TypeDataUser.LONGITUDE}
                typeInput={TypeInput.NUMBER}
                typeError={errors.longitude}
                control={control}
              />
            </Grid>
            <Divider />
            <Grid
              container
              justifyContent='space-evenly'
              direction='row'
              mt={4}
            >
              <Grid item>
                <Button onClick={willCloseModal} variant='outlined'>
                  Cancelar
                </Button>
              </Grid>
              <Grid item>
                <Button type='submit' variant='contained'>
                  Actualizar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Modal>
  );
};
