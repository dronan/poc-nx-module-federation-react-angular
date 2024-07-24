import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'app-web-component-wrapper',
  template: '<div id="web-component-container"></div>',
})
export class WebComponentWrapper implements OnInit {
  private module: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      const reactComponentPath = data['reactComponentPath'];
      this.loadModule(reactComponentPath);
    });
  }

  private async loadModule(reactComponentPath: string) {
    try {
      if (typeof reactComponentPath === 'string') {
        console.log('caiu aqui', reactComponentPath == 'react-remote-a/Module');
        if (reactComponentPath == 'react-remote-a/Module') {
          this.module = await import('react-remote-a/Module');
        }
        if (reactComponentPath == 'react-remote-b/Module') {
          this.module = await import('react-remote-b/Module');
        }
        // this.module = await import(reactComponentPath);
      } else {
        console.error('O caminho do componente não é uma string válida');
      }

      // console.log('aqui >> ', reactComponentPath);
      // this.module = await import('react-remote-a/Module');
      console.log('Module loaded successfully', this.module);
      this.renderWebComponent();
    } catch (err) {
      console.error('Error loading module', err);
    }
  }

  private renderWebComponent() {
    if (this.module && this.module.default) {
      const WebComponent = this.module.default;
      const container = document.getElementById('web-component-container');
      if (container) {
        ReactDOM.render(React.createElement(WebComponent), container);
      }
    }
  }
}
