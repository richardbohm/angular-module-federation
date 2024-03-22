import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RemoteComponent } from './remote.component';
import { ViewComponent } from './view.component';


@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    RemoteComponent,
    ViewComponent
  ],
  selector: 'app-root',
  template: `
    <div>Host</div>

    <app-remote />
    <app-view />

    <div>hello</div>
  `,
  styles: `
    `,
})
export class AppComponent {
  title = 'host';

}
