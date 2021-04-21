import { IAction } from 'src/app/shared/interfaces';

export const ActionTypes = {
  Register: '[AUTH] Register',
  RegisterSuccess: '[AUTH] Register Success',
  RegisterFailed: '[AUTH] Register Failed',

  Login: '[AUTH] Login',
  LoginSuccess: '[AUTH] Login Success',
  LoginFailed: '[AUTH] Login Failed',

  Logout: '[AUTH] Logout',
  LogoutSuccess: '[AUTH] Logout Success',
  LogoutFailed: '[AUTH] Logout Failed',

  SetToken: '[AUTH] Set Token'
};

export class Register implements IAction<{ username: string, password: string }> {
  type = ActionTypes.Register;
  constructor(public payload: { username: string, password: string }) { }
}

export class RegisterSuccess implements IAction<null> {
  type = ActionTypes.RegisterSuccess;
  constructor(public payload: null = null) { }
}

export class RegisterFailed implements IAction<{ error: any }> {
  type = ActionTypes.RegisterFailed;
  constructor(public payload: { error: any }) { }
}

export class Login implements IAction<{ username: string, password: string }> {
  type = ActionTypes.Login;
  constructor(public payload: { username: string, password: string }) { }
}

export class LoginSuccess implements IAction<{ userId: string, username: string }> {
  type = ActionTypes.LoginSuccess;
  constructor(public payload: { userId: string, username: string, token: string }) { }
}

export class LoginFailed implements IAction<{ error: any }> {
  type = ActionTypes.LoginFailed;
  constructor(public payload: { error: any }) { }
}

export class Logout implements IAction<null> {
  type = ActionTypes.Logout;
  constructor(public payload: null = null) { }
}

export class LogoutSuccess implements IAction<null> {
  type = ActionTypes.LogoutSuccess;
  constructor(public payload: null = null) { }
}

export class LogoutFailed implements IAction<{ error: any }> {
  type = ActionTypes.LogoutFailed;
  constructor(public payload: { error: any }) { }
}

export class SetToken implements IAction<{ token: string }> {
  type = ActionTypes.SetToken;
  constructor(public payload: { token: string }) { }
}

export type Actions = Register |
  RegisterSuccess |
  RegisterFailed |
  Login |
  LoginSuccess |
  LoginFailed | SetToken;
