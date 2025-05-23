import { Observable } from 'rxjs';
import { ICursos } from './ICursos';
import { ITarea } from './ITarea';

export interface User {
  Cursos: Observable<ICursos[]>;
  Tareas: (curso_id: number) => Observable<ITarea[]>;
}
