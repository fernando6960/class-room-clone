import { Component, signal } from '@angular/core';
import { TabPersonasComponent } from '../tab-personas/tab-personas.component';
import { TabTrabajoClaseComponent } from '../tab-trabajo-clase/tab-trabajo-clase.component';
import { TabCalificacionesComponent } from '../tab-calificaciones/tab-calificaciones.component';
import { TabTablonComponent } from '../tab-tablon/tab-tablon.component';

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
  option = signal('tablon');
}
