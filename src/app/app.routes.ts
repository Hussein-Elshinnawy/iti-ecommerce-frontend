import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'home' },
    { path: 'login', component: LoginComponent, title: 'login' },
    { path: 'register', component: RegisterComponent, title: 'register' },
    { path: 'cart', component: CartComponent, title: 'cart' },
    { path: 'productdetails/:id', component: ProductDetailsComponent, title: 'productDetails' },
    { path: '**', component: NotFoundComponent, title: '404' },
];
