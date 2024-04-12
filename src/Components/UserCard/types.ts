export interface UserCardProps {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  onDelete: (userId: number) => void;
  onUpdate: (userId: number) => void;
  onWeather: (userId: number) => void;
}
