import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IButtonListOption } from '@models/IButtonListOption';

@Component({
  selector: 'app-button-option',
  imports: [RouterLink],
  schemas: [],
  templateUrl: './button-option.component.html',
  styleUrl: './button-option.component.css',
})
export class ButtonOptionComponent {
  item = input.required<IButtonListOption>();
}
