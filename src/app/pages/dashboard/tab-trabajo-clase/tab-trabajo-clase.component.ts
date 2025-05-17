import { Component, OnInit } from '@angular/core';
import { ButtonListComponent } from '@component/button-list/button-list.component';
import { IButtonListOption } from '@models/IButtonListOption';

@Component({
  selector: 'app-tab-trabajo-clase',
  imports: [ButtonListComponent],
  templateUrl: './tab-trabajo-clase.component.html',
  styleUrl: './tab-trabajo-clase.component.css',
})
export class TabTrabajoClaseComponent implements OnInit {
  listButton: IButtonListOption[] = [];
  ngOnInit(): void {
    this.listButton = [
      { title: 'una cosa', imgSrc: '', imgAlt: 'una cosa' },
      { title: 'una cosa', imgSrc: '', imgAlt: 'una cosa' },
      { title: 'una cosa', imgSrc: '', imgAlt: 'una cosa' },
      { title: 'una cosa', imgSrc: '', imgAlt: 'una cosa' },
      { title: 'una cosa', imgSrc: '', imgAlt: 'una cosa' },
    ];
  }
}
