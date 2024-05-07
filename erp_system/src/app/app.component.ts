import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'erp_system';
  selectedContent: string = '';

  showSubMenu(item: string) {
    this.selectedContent = item;
    // Implement submenu logic and update subMenuButtons content as needed
  }
}
