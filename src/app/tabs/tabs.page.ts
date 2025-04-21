import { Component, EnvironmentInjector, inject, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, RouterOutlet],
})
export class TabsPage implements AfterViewInit {
  public environmentInjector = inject(EnvironmentInjector);

  @ViewChild(RouterOutlet) outlet: RouterOutlet | undefined;


  constructor() {
    addIcons({ triangle, ellipse, square });
  }

  ngAfterViewInit() {
    if (this.outlet && this.outlet.isActivated) {
      this.outlet.deactivate();
    }
  }
}
