import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'github-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public appName: string = 'Github Users';
}
