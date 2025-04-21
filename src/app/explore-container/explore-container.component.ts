import { Component, OnInit } from '@angular/core';
import { ApiService } from '../API/api.service';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
  imports:[CommonModule],
})
export class ExploreContainerComponent implements OnInit {
  name: string = 'Meine Ticketmaster-App';  // Property für {{ name }} im Template :contentReference[oaicite:6]{index=6}
  events: any[] = [];                      // Property für *ngFor="let e of events" :contentReference[oaicite:7]{index=7}

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAllEvents().subscribe(res => {
      this.events = res._embedded?.events || [];
    });
  }
}
