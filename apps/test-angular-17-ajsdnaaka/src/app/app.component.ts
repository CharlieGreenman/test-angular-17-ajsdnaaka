import { Component } from '@angular/core';

@Component({
  selector: 'test-angular-17-ajsdnaaka-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'test-angular-17-ajsdnaaka';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
