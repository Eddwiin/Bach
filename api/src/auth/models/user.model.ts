export interface UserModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createAt: Date;
  updatedAt: Date;
}

export type UserSignUpPayload = Pick<
  UserModel,
  'firstName' | 'lastName' | 'email' | 'password'
>;
