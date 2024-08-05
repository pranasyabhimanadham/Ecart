import { Type } from '@angular/core';

export enum Path {
  Home = '/',
  Register = 'register',
  Login = 'login',
  Cart = 'cart',
  NotFound = '**',
}

export enum Title {
  Home = 'home',
  Register = 'register',
  Login = 'login',
  Cart = 'cart',
  NotFound = '404 - Not Found',
}

export interface IUrl {
  path: Path;
  title: Title;
}

export const urlsList: IUrl[] = [
  {
    path: Path.Home,
    title: Title.Home,
  },
  {
    path: Path.Register,
    title: Title.Register,
  },
  {
    path: Path.Login,
    title: Title.Login,
  },
  {
    path: Path.Cart,
    title: Title.Cart,
  },
];
