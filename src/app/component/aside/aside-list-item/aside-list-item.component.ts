import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  imports: [],
  templateUrl: './aside-list-item.component.html',
  styleUrl: './aside-list-item.component.css',
})
export class AsideListItemComponent implements OnInit {
  title = input<string>();
  item = input<IAsideItem>();
  ngOnInit() {}
}
