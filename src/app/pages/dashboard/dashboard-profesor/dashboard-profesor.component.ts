import { Component, inject, input, signal } from '@angular/core';
import { TabPersonasComponent } from './tab-personas/tab-personas.component';
import { TabCalificacionesComponent } from './tab-calificaciones/tab-calificaciones.component';
import { TabTablonComponent } from './tab-tablon/tab-tablon.component';
import { ICursos } from '@models/ICursos';
import { ITarea } from '@models/ITarea';
import { ProfesorService } from '@services/profesor.service';
import { TabTrabajoClaseComponent } from './tab-trabajo-clase/tab-trabajo-clase.component';

const tabComponents = [
  TabTrabajoClaseComponent,
  TabPersonasComponent,
  TabCalificacionesComponent,
  TabTablonComponent,
];
@Component({
  selector: 'app-dashboard-profesor',
  imports: [tabComponents],
  templateUrl: './dashboard-profesor.component.html',
  styleUrl: './dashboard-profesor.component.css',
})
export class DashboardProfesorComponent {
  curso = input.required<ICursos>();
  tareas = input.required<ITarea[]>();
  descripcion = input.required<string>();
  user: ProfesorService;
  constructor() {
    this.user = inject(ProfesorService);
  }
  option = signal('tablon');
}
