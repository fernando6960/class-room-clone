import {
  AfterContentInit,
  Component,
  ContentChildren,
  output,
  OutputRefSubscription,
  QueryList,
} from '@angular/core';
import { AsideItemComponent } from './aside-item/aside-item.component';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent implements AfterContentInit {
  @ContentChildren(AsideItemComponent, { descendants: true })
  items!: QueryList<AsideItemComponent>;
  getId = output<number>();
  private subscriptions: OutputRefSubscription[] = [];
  ngAfterContentInit(): void {
    this.items.changes.subscribe(() => {
      this.setUpSubscripcions();
    });
  }
  setUpSubscripcions() {
    // Limpia suscripciones previas si es necesario
    this.subscriptions.forEach((sub: any) => sub.unsubscribe());
    this.subscriptions = [];

    this.items.map((item) => {
      item.getId.subscribe((evt) => {
        console.log(evt);
        this.getId.emit(evt);
      });
    });
  }
}
