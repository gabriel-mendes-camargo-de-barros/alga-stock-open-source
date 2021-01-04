import http from '../utils/http';

declare interface Credentials {
  user: string;
  pass: string;
};

declare interface User {
  id: string;
  name: string;
  email: string;
}

type Token = string;

export const login = (credentials: Credentials) => 
  http  
    .post<User & { token: Token } >('/authentication/login', credentials)
    .then(res => res.data)


export const storeToken = (token: Token) => {
  window.localStorage.setItem('token', token)
}

export const getToken = () => {
  return window.localStorage.getItem('token')
}