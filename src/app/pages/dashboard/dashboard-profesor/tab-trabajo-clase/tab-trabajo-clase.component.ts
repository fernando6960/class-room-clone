import { Component, inject, input, OnInit } from '@angular/core';
import { ButtonListComponent } from '@component/button-list/button-list.component';
import { TaskComponent } from '@component/task/task.component';
import { IButtonListOption } from '@models/IButtonListOption';
import { ICursos } from '@models/ICursos';
import { ITarea } from '@models/ITarea';
import { ProfesorService } from '@services/profesor.service';

@Component({
  selector: 'app-tab-trabajo-clase',
  imports: [ButtonListComponent, TaskComponent],
  templateUrl: './tab-trabajo-clase.component.html',
  styleUrl: './tab-trabajo-clase.component.css',
})
export class TabTrabajoClaseComponent implements OnInit {
  listButton: IButtonListOption[] = [];
  userService: ProfesorService;
  tareas: ITarea[] = [];
  curso = input.required<ICursos>();
  constructor() {
    this.userService = inject(ProfesorService);
    this.userService.Tareas(1).subscribe({
      next: (elm) => (this.tareas = elm),
    });
  }

  ngOnInit(): void {
    this.listButton = [
      {
        title: 'Tarea',
        imgSrc: 'assets/list-clipboard.svg',
        imgAlt: 'una cosa',
        link: 'create-task/',
        value: '1',
      },
    ];
  }
}
