import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {ApiService} from "../API/api.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {
  events: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAllEvents().subscribe({
      next: data => this.events = data._embedded?.events || [],
      error: err => console.error(err)
    });
  }}
