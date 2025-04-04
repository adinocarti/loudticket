import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {FRIEDL} from '../../../../model/person';

@Component({
  selector: 'app-mainpages-header-friedl',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './mainpages-header-friedl.component.html',
  styleUrl: './mainpages-header-friedl.component.scss',
  standalone: true
})
export class HeaderFriedlComponent {

  protected readonly me = FRIEDL;
}
