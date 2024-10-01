<<<<<<< HEAD
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { TrainingComponent } from './components/training/training.component';

export const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  { path: 'training', component: TrainingComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
=======
import { Routes } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';

export const routes: Routes = [
    {path:'footer' , component: FooterComponent},
    { path: '', redirectTo: '/footer', pathMatch: 'full' }
];
>>>>>>> Rawan-01-10-2024-Sections-Footer
