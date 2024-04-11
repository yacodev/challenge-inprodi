export interface UserCardProps {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  onDelete: (userId: number) => void;
  onUpdate: (userId: number) => void;
}
