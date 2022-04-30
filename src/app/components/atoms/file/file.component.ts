import { Component, Input, OnInit } from '@angular/core';
import { FilesService } from 'src/services/files.service';

@Component({
  selector: 'a-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent {
  @Input() imgSrc: string = '';
  @Input() name: string = '';
  @Input() type: string = '';
  @Input() url: string = '';
  @Input() authenticated: boolean = false;

  constructor(public _filesService: FilesService) {}
  
  async openFile(url: string, name: string) {
    window.open(url)
    window.location.reload()
  }
}
