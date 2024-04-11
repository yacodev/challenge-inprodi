import { TextField, FormControl } from '@mui/material';
import { Controller } from 'react-hook-form';
import { InputFormUserProps } from './types';

export function InputForm({
  label,
  placeholder,
  required,
  name,
  typeError,
  control,
  typeInput,
  disabled,
}: InputFormUserProps) {
  return (
    <FormControl sx={{ width: '100%' }}>
      <Controller
        name={name}
        control={control}
        rules={{ required: required }}
        render={({ field: { value, onChange } }) => {
          return (
            <TextField
              fullWidth
              label={label}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              error={Boolean(typeError)}
              type={typeInput}
              size='small'
              disabled={disabled ?? false}
            />
          );
        }}
      />
    </FormControl>
  );
}
