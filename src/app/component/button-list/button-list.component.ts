import { Component, input, signal, WritableSignal } from '@angular/core';
import { IButtonListOption } from '@models/IButtonListOption';
import { ButtonOptionComponent } from './button-option/button-option.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-button-list',
  imports: [ButtonOptionComponent, JsonPipe],
  templateUrl: './button-list.component.html',
  styleUrl: './button-list.component.css',
})
export class ButtonListComponent {
  activate: WritableSignal<boolean>;
  listItem = input.required<IButtonListOption[]>();
  constructor() {
    this.activate = signal(false);
    console.log(this.activate());
  }
}
