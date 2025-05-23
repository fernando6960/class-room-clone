import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tab-novedades',
  imports: [],
  templateUrl: './tab-novedades.component.html',
  styleUrl: './tab-novedades.component.css',
})
export class TabNovedadesComponent {
  curso = input.required<string>();
  descripcion = input.required<string>();
}
