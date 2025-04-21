import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';                 // WICHTIG für Strukturdirektiven :contentReference[oaicite:3]{index=3}
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]  // damit *ngFor in tab1.page.html funktioniert :contentReference[oaicite:4]{index=4}
})
export class Tab1PageModule {}
