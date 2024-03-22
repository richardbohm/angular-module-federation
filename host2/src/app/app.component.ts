import { Component } from '@angular/core';
import {RemoteEntryComponent} from 'remote/component'


@Component({
  standalone: true,
  imports: [RemoteEntryComponent],
  selector: 'app-root',
  template: `
  <app-remote-entry></app-remote-entry>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'host2';
}
