import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

console.log('NxWelcomeComponent is being loaded');

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div>
      <h1>Bem-vindo ao POC Project</h1>
      <ul>
        <li><a [routerLink]="['/remoteA']">Angular Remote A</a></li>
        <li><a [routerLink]="['/remoteB']">Angular Remote B</a></li>
        <li><a [routerLink]="['/remote-a']">React Remote A</a></li>
        <li><a [routerLink]="['/remote-b']">React Remote B</a></li>
      </ul>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
