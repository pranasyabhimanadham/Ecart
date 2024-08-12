import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';


export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'E-Cart',
  },
  {
    path: 'details/:id',
    component: ProductDetailsComponent,
    title: 'Details',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found Page',
  },
];
