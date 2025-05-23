import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tab-tablon',
  imports: [],
  templateUrl: './tab-tablon.component.html',
  styleUrl: './tab-tablon.component.css',
})
export class TabTablonComponent {
  curso = input.required<string>();
  descripcion = input.required<string>();
}
