import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'o-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent {
  searchValue: string = ""

  @Input() openMenu: boolean = false;

  @Output() searchValueEvent: EventEmitter<string> = new EventEmitter()
  @Output() openMenuEvent: EventEmitter<boolean> = new EventEmitter<boolean>(
    this.openMenu
  );

  constructor() {}

  handleStatusMenuEvent() {
    this.openMenu = !this.openMenu;
    this.openMenuEvent.emit(this.openMenu);
  }

  setSearchedFile(value) {
    this.searchValueEvent.emit(value)
  }
}
