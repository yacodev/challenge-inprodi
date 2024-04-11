export interface UserForm {
  name: string;
  latitude: number;
  longitude: number;
}

export interface UserModalProps {
  openModal: boolean;
  onCloseModal(): void;
  onUpdate: (data: UserForm) => void;
  user: UserForm | null;
  userId: number | null;
}
