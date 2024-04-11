import { Control, FieldError } from 'react-hook-form';
import { UserForm } from '../UserModal';

export enum TypeInput {
  NUMBER = 'number',
  STRING = 'string',
}

export enum TypeDataUser {
  NAME = 'name',
  LATITUDE = 'latitude',
  LONGITUDE = 'longitude',
}

export interface InputFormUserProps {
  label: string;
  placeholder: string;
  required: boolean;
  name: TypeDataUser.NAME | TypeDataUser.LATITUDE | TypeDataUser.LONGITUDE;
  typeError: FieldError | undefined;
  typeInput: TypeInput.NUMBER | TypeInput.STRING;
  control: Control<UserForm>;
  disabled?: boolean;
}
