import { Component, input, signal, WritableSignal } from '@angular/core';
import { IButtonListOption } from '@models/IButtonListOption';
import { ButtonOptionComponent } from './button-option/button-option.component';

@Component({
  selector: 'app-button-list',
  imports: [ButtonOptionComponent],
  templateUrl: './button-list.component.html',
  styleUrl: './button-list.component.css',
})
export class ButtonListComponent {
  activate: WritableSignal<boolean>;
  listItem = input.required<IButtonListOption[]>();
  constructor() {
    this.activate = signal(false);
  }
}
