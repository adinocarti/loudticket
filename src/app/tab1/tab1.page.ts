import {Component, OnInit} from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ApiService } from '../API/api.service';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [CommonModule, IonList, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  events: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAllEvents().subscribe({
      next: data => this.events = data._embedded?.events || [],
      error: err => console.error(err)
    });
  }
}
