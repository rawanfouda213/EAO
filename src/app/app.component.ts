import { Component } from '@angular/core';
<<<<<<< HEAD

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../HeaderAndServices/header/header.component";
import { LandingComponent } from "../HeaderAndServices/landing/landing.component";
import { ServicesSectionComponent } from "../HeaderAndServices/services-section/services-section.component";

import { CommonModule } from '@angular/common';
import { NewsComponent } from './components/news/news.component';
import { TrainingComponent } from './components/training/training.component';

=======
import { RouterOutlet } from '@angular/router';
>>>>>>> Rawan-01-10-2024-Sections-Footer

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, NewsComponent, TrainingComponent,RouterOutlet, HeaderComponent, LandingComponent, ServicesSectionComponent]
})
export class AppComponent {
  title = 'Training and News Application';
=======
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EAO';
>>>>>>> Rawan-01-10-2024-Sections-Footer
}
