export interface Users {
  username: string;
  classe: string;
  level: number;
  password: string,
}  

// export type UsersPreview = Omit<Users, 'password'>;

export interface UsersId extends Users {
  id: number
}