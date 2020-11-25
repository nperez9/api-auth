export enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface User {
  name: string,
  email: string,
  password: string,
  date?: string,
  role?: Roles 
}
