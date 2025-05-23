import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment.development';
import { ICursos } from '@models/ICursos';
import { ITarea } from '@models/ITarea';
import { User } from '@models/User';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';

const mockCurso: ICursos[] = [
  {
    id: 1,
    estudiantes: ['jose', 'manuel'],
    descripcion: 'programacion 1',
    nombre: 'C#',
    profesor: ['Fernando'],
  },
  {
    id: 2,
    estudiantes: ['jose', 'manuel'],
    descripcion: 'programacion 1',
    nombre: 'C#',
    profesor: ['Fernando'],
  },
  {
    id: 3,
    estudiantes: ['jose', 'manuel'],
    descripcion: 'programacion 1',
    nombre: 'C#',
    profesor: ['Fernando'],
  },
  {
    id: 4,
    estudiantes: ['jose', 'manuel'],
    descripcion: 'programacion 1',
    nombre: 'C#',
    profesor: ['Fernando'],
  },
];
const mockTarea: ITarea[] = [
  {
    creada_en: new Date('20-10-2025'),
    curso: 1,
    titulo: 'Invectigacion de operaciones',
    fecha_entrega: new Date(),
  },
  {
    creada_en: new Date('20-10-2025'),
    curso: 1,
    titulo: 'Invectigacion de operaciones',
    fecha_entrega: new Date(),
  },
  {
    creada_en: new Date('20-10-2025'),
    curso: 1,
    titulo: 'Invectigacion de operaciones',
    fecha_entrega: new Date(),
  },
  {
    creada_en: new Date('20-10-2025'),
    curso: 1,
    titulo: 'Invectigacion de operaciones',
    fecha_entrega: new Date(),
  },
];
@Injectable({
  providedIn: 'root',
})
export class ProfesorService implements User {
  URL = environment.URL;
  http: HttpClient;
  constructor() {
    this.http = inject(HttpClient);
  }
  get Cursos(): Observable<ICursos[]> {
    return this.http.get<{ cursos: ICursos[] }>(this.URL + '/cursos/').pipe(
      map(({ cursos }) => {
        console.log('en profe', cursos);
        return cursos;
      }),
      catchError((err) => {
        console.error(err);
        return of([]);
      }),
    );
  }
  Tareas(curso_id: number): Observable<ITarea[]> {
    console.log(curso_id);
    // return new BehaviorSubject(mockTarea).asObservable();
    return this.http
      .get<{ tarea: ITarea[] }>(this.URL + '/tareas/')
      .pipe(map((elm) => elm.tarea));
  }
  crearTarea(
    curso_id: number,
    { titulo, descripcion }: { titulo: string; descripcion: string },
  ) {
    const date = new Date();
    return this.http.post(this.URL + `/cursos/${curso_id}/tareas/crear/`, {
      titulo,
      descripcion,
      fecha_entrega: `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`,
    });
  }
  participantes(curso_id: number) {
    return this.http
      .get<{
        particpantes: any[];
        profesor: any;
      }>(this.URL + `/listar-particpantes/${curso_id}`)
      .pipe(tap((e) => console.log('prueba:', e)));
  }
}
