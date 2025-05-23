import { Component, inject, signal } from '@angular/core';
import { ProfesorService } from '@services/profesor.service';

@Component({
  selector: 'app-tab-personas',
  imports: [],
  templateUrl: './tab-personas.component.html',
  styleUrl: './tab-personas.component.css',
})
export class TabPersonasComponent {
  personas: any;
  service: ProfesorService;
  constructor() {
    this.service = inject(ProfesorService);
    this.service.participantes(1).subscribe({
      next: (elm) => (this.personas = signal(elm)),
    });
  }
}
