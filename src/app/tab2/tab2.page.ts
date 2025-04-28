import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonLabel,
  IonButton, IonIcon, IonToggle
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {ApiService} from "../API/api.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItem, IonInput, IonLabel, IonButton, IonIcon, IonToggle],
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page {
  events: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAllEvents().subscribe({
      next: data => this.events = data._embedded?.events || [],
      error: err => console.error(err)
    });
  }}
