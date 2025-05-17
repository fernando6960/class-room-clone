import { Component, signal } from '@angular/core';
import { AsideItemComponent } from '@component/aside/aside-item/aside-item.component';
import { AsideListItemComponent } from '@component/aside/aside-list-item/aside-list-item.component';
import { AsideSectionComponent } from '@component/aside/aside-section/aside-section.component';
import { AsideComponent } from '@component/aside/aside.component';
import { ProfileComponent } from '@component/profile/profile.component';
import { DashboardProfesorComponent } from './dashboard-profesor/dashboard-profesor.component';

const asideComponents = [
  AsideComponent,
  AsideSectionComponent,
  AsideItemComponent,
  AsideListItemComponent,
];
@Component({
  selector: 'app-dashboard',
  imports: [asideComponents, ProfileComponent, DashboardProfesorComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  option = signal('tablon');
}
