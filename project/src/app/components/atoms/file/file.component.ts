import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'a-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent {
  @Input() imgSrc: string = '';
  @Input() name: string = '';
  @Input() type: string = '';

  constructor() {}

  async openFile(url: string) {
    window.open(url)
  }
}
