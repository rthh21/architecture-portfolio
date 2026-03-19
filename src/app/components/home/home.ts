import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { ProjectsGrid } from '../projects-grid/projects-grid';

@Component({
  selector: 'app-home',
  imports: [Hero, ProjectsGrid],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
