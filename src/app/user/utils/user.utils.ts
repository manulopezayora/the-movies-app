import { Login } from "../models/Login.model";
import { User } from "../models/User.model";

export const checkIfUserExist = (user: User | Login, userList: User[]): boolean => {
    return userList.some((storageUser: User) => storageUser.username === user.username);
}

export const checkPasswordsMatch = (password1: string, password2: string): boolean => {
    return password1 === password2;
  }