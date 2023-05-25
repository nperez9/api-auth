export enum Roles {
  ADMIN = 'ADMIN',
  OWNER = 'OWNER',
  USER = 'USER',
}

export interface User {
  name: string;
  email: string;
  password: string;
  recoveryCode?: string;
  createdAt?: string;
  role?: Roles;
  placesLimit?: number;
}

export interface SharedUser {
  _id: string;
  name: string;
}
