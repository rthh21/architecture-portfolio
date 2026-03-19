import { Component } from '@angular/core';
import { ProjectsGrid } from '../projects-grid/projects-grid';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectsGrid],
  templateUrl: "./project-page.html",
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {}
