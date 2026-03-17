import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})

export class ProjectService {
  private projects: Project[] = [
    { id: 1, name: 'My Project' },
    { id: 2, name: 'My Project 2' },
    { id: 3, name: 'My Project 3' },
    { id: 4, name: 'My Project 4' }
  ];

  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }

  addProject(newProject: Project): void {
    this.projects.push(newProject);
  }
  
  getProjectId(index: number, project: Project): number {
    return project.id;
  }
}
