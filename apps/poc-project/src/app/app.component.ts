import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { WebComponentWrappeModule } from './web-component-wrapper.module';

import('react-remote-a/Module')
  .then((module) => console.log('Module loaded successfully', module))
  .catch((err) => console.error('Error loading module', err));

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, WebComponentWrappeModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'poc-project';
}
