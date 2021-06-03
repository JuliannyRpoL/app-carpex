import { Component, Input, OnInit } from '@angular/core';
import { PlaylistService } from 'src/services/playlist.service';

@Component({
  selector: 'a-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent {
  @Input() imgSrc: string = '';
  @Input() name: string = '';
  @Input() type: string = '';

  constructor(public _playlistService: PlaylistService) {}

  async openFile(url: string) {
    window.open(url)
  }
}
