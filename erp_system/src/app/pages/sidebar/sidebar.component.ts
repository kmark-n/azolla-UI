import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() contentClicked = new EventEmitter<string>();

  showContent(section: string) {
    this.contentClicked.emit(section);
  }
}
