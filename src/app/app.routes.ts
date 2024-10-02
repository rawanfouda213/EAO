import { Routes } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';
import { EventInsuranceComponent } from './Components/event-insurance/event-insurance.component';

export const routes: Routes = [
  { path: 'footer', component: FooterComponent },
  {path:'eventInsurance' , component: EventInsuranceComponent},
    { path: '', redirectTo: '/footer', pathMatch: 'full' }
];

