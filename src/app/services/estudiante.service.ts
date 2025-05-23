import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment.development';
import { ICursos } from '@models/ICursos';
import { ITarea } from '@models/ITarea';
import { User } from '@models/User';
import { Observable, map, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstudianteService implements User {
  private http: HttpClient;
  private URL = environment.URL;
  constructor() {
    this.http = inject(HttpClient);
  }
  get Cursos(): Observable<ICursos[]> {
    return this.http
      .get<{ cursos: ICursos[] }>(this.URL + '/cursos_inscrito/')
      .pipe(
        map(({ cursos }) => {
          console.log('en profesor', cursos);
          return cursos ? cursos : [];
        }),
        catchError((err) => {
          console.error(err);
          return of([]);
        }),
      );
  }
  Tareas(curso_id: number): Observable<ITarea[]> {
    return this.http
      .get<{ tarea: ITarea[] }>(this.URL + '/tareas/')
      .pipe(map((elm) => elm.tarea));
  }
  participantes(curso_id: number) {
    this.http
      .get<{
        particpantes: any[];
        profesor: any;
      }>(this.URL + `/listar-particpantes/${curso_id}`)
      .pipe(tap((e) => console.log('prueba:', e)));
  }
  get UserInfo() {
    return this.http.get(this.URL);
  }
}
