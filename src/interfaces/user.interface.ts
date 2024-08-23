export interface User {
  _id?: string;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;
}
export type InputLogin = {
  username: string;
  password: string;
};

export interface InputRegister {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
