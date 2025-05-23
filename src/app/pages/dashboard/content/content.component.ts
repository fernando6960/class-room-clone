import { Component, inject, signal, WritableSignal } from '@angular/core';
import { AsideItemComponent } from '@component/aside/aside-item/aside-item.component';
import { AsideSectionComponent } from '@component/aside/aside-section/aside-section.component';
import { AsideComponent } from '@component/aside/aside.component';
import { ProfileComponent } from '@component/profile/profile.component';
import { DashboardEstudianteComponent } from '../dashboard-estudiante/dashboard-estudiante.component';
import { DashboardProfesorComponent } from '../dashboard-profesor/dashboard-profesor.component';
import { ICursos } from '@models/ICursos';
import { EstudianteService } from '@services/estudiante.service';
import { ProfesorService } from '@services/profesor.service';
import { ITarea } from '@models/ITarea';
import { AuthService } from '@services/auth.service';

const asideComponents = [
  AsideComponent,
  AsideSectionComponent,
  AsideItemComponent,
];
const dashboardComponents = [
  DashboardProfesorComponent,
  DashboardEstudianteComponent,
];
@Component({
  selector: 'app-content',
  imports: [asideComponents, ProfileComponent, dashboardComponents],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  protected user = signal<'profesor' | 'estudiante' | undefined>('profesor');
  option = signal('tablon');
  cursos: ICursos[];
  tareas: ITarea[];
  obj: WritableSignal<{ curso: ICursos; tarea: ITarea[] }>;
  userService: EstudianteService | ProfesorService;
  authService = inject(AuthService);

  constructor() {
    this.cursos = [];
    this.tareas = [];
    this.user.set(this.authService.getRol);
    if (this.user() === 'profesor') this.userService = inject(ProfesorService);
    else this.userService = inject(EstudianteService);
    this.userService.Cursos.subscribe({
      next: (elm) => {
        this.cursos = elm;
        this.obj = signal({ curso: this.cursos[0], tarea: this.tareas });
      },
      error: (err) => console.error('error:', err),
    });
    this.userService.Tareas(1).subscribe((elm) => {
      this.tareas = elm;
    });
    this.obj = signal({
      curso: {
        nombre: '',
        descripcion: '',
        estudiantes: [],
        id: 1,
        profesor: [],
      },
      tarea: this.tareas,
    });
    console.log('el undefined se encuentraa aqui', this.obj());
  }
  setId(evt: any) {
    this.obj().curso.id = evt;
    console.log('dame mi evento cojollo');
  }
}
