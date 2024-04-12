export interface Information {
  [key: string]: string;
}

export interface InformationCardProps {
  title: string;
  information: Information;
}

export interface UserInformation {
  id: number;
  name: string;
}
