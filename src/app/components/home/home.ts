import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { ProjectsGrid } from '../projects-grid/projects-grid';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Hero, ProjectsGrid, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
