import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProfesorService } from '@services/profesor.service';

@Component({
  selector: 'app-create-task',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css',
})
export class CreateTaskComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  fg: FormGroup;
  user: ProfesorService;
  router: Router;
  curso_id: any;
  ngOnInit(): void {
    this.curso_id = this.route.snapshot.paramMap.get('id');
  }
  constructor() {
    this.user = inject(ProfesorService);
    this.router = inject(Router);
    this.fg = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      descripcion: new FormControl('', [Validators.required]),
    });
    console.log(this.fg.valid);
  }
  Publish(): void {
    if (!this.fg.valid) return;
    const titulo: string = this.fg.get('titulo')?.value;
    const descripcion = this.fg.get('descripcion')?.value;
    this.user.crearTarea(this.curso_id, { titulo, descripcion }).subscribe({
      next: () => {
        alert('Tarea creada con exito');
        this.fg.reset();
      },
      error: (err) => {
        console.error(err);
        alert('ha ocurrido un error en la creacion de la tarea.');
      },
    });
  }
}
