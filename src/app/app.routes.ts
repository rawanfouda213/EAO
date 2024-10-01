import { Routes } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';

export const routes: Routes = [
    {path:'footer' , component: FooterComponent},
    { path: '', redirectTo: '/footer', pathMatch: 'full' }
];
