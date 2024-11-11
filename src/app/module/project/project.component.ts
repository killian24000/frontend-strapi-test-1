import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projets: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjets().subscribe(data => {
      console.log(data); // Affiche la réponse pour vérifier sa structure
      if (data && Array.isArray(data.data)) { // Assurez-vous que data.data est un tableau
        this.projets = data.data
      } else {
        console.log("Aucun projet trouvé ou structure des données incorrecte");
        this.projets = [];
      }
    }, error => {
      console.error("Erreur de récupération des projets", error);
    });
  }

}
