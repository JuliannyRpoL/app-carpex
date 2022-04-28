import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/services/files.service';

@Component({
  selector: 'o-all-files-list',
  templateUrl: './all-files-list.component.html',
  styleUrls: ['./all-files-list.component.scss'],
})
export class AllFilesListComponent implements OnInit {
  charging: boolean = false;

  constructor(public _filesService: FilesService) {}

  async handleFileInput(file: any) {
    this.charging = true;

    try {
      await this._filesService.uploadFile(file[0]);
    }catch(error) {
      console.log(error)
    }

    this.charging = false;
  }

  ngOnInit(): void {}
}
