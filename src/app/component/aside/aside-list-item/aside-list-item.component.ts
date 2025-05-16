import { Component, input, OnInit } from '@angular/core';
import { IAsideItem } from '@models/IAsideItem';
import { AsideItemComponent } from '../aside-item/aside-item.component';
@Component({
  selector: 'app-aside-list-item',
  imports: [AsideItemComponent],
  templateUrl: './aside-list-item.component.html',
  styleUrl: './aside-list-item.component.css',
})
export class AsideListItemComponent implements OnInit {
  title = input.required<string>();
  item = input<IAsideItem>();
  ngOnInit() {}
}
