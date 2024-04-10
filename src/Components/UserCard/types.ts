export interface UserCardProps {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  onEdit: () => void;
  onDelete: () => void;
}
