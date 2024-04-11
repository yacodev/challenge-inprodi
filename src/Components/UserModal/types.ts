export interface UserForm {
  name: string;
  latitude: string;
  longitude: string;
}

export interface UserModalProps {
  openModal: boolean;
  onCloseModal(): void;
  onUpdate: (data: UserForm) => void;
  onCreate: (data: UserForm) => void;
  user: UserForm | null;
  userId: number | null;
}
