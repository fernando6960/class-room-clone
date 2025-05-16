import { Component } from '@angular/core';
import { AsideItemComponent } from '@component/aside/aside-item/aside-item.component';
import { AsideListItemComponent } from '@component/aside/aside-list-item/aside-list-item.component';
import { AsideSectionComponent } from '@component/aside/aside-section/aside-section.component';
import { AsideComponent } from '@component/aside/aside.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    AsideComponent,
    AsideSectionComponent,
    AsideItemComponent,
    AsideListItemComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
