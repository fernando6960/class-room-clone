import { Component, input, InputSignal } from '@angular/core';
import { IAsideItem } from '@models/IAsideItem';
@Component({
  selector: 'app-aside-item',
  imports: [],
  templateUrl: './aside-item.component.html',
  styleUrl: './aside-item.component.css',
})
export class AsideItemComponent {
  item: InputSignal<IAsideItem | undefined> = input<IAsideItem>();
  title: InputSignal<string | undefined> = input<string>();
}
