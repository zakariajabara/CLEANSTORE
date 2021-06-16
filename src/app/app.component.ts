import { Component } from '@angular/core';

@Component({
  selector: "app",
  //template: "<store></store>"
  template: "<router-outlet></router-outlet>"
})
export class AppComponent {
  title = 'CleanStore';
  header="Clening Articles Store"
}
