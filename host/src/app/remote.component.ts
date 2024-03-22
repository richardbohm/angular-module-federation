import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  standalone: true,
  //encapsulation: ViewEncapsulation.None,
  imports: [
    RouterOutlet
  ],
  selector: 'app-remote',
  template: `
    <div>1. option router outlet</div>
    <router-outlet/>
  `,
  styles: `

  `,
})
export class RemoteComponent {
  title = 'remote';
}
