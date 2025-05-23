import { Component, input, signal } from '@angular/core';
import { TabPersonasComponent } from '../dashboard-profesor/tab-personas/tab-personas.component';
import { TabNovedadesComponent } from './tab-novedades/tab-novedades.component';
import { TabTrabajoDeClaseComponent } from './tab-trabajo-de-clase/tab-trabajo-de-clase.component';
import { ICursos } from '@models/ICursos';

const tabComponents = [
  TabPersonasComponent,
  TabNovedadesComponent,
  TabTrabajoDeClaseComponent,
];
@Component({
  selector: 'app-dashboard-estudiante',
  imports: [tabComponents],
  templateUrl: './dashboard-estudiante.component.html',
  styleUrl: './dashboard-estudiante.component.css',
})
export class DashboardEstudianteComponent {
  option = signal('novedades');
  curso = input.required<ICursos>();
}
