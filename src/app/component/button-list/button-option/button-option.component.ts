import { Component, input } from '@angular/core';
import { IButtonListOption } from '@models/IButtonListOption';

@Component({
  selector: 'app-button-option',
  imports: [],
  templateUrl: './button-option.component.html',
  styleUrl: './button-option.component.css',
})
export class ButtonOptionComponent {
  item = input.required<IButtonListOption>();
}
