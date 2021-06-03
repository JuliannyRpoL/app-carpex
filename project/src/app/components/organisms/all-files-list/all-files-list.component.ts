import { Component, Input, OnInit } from '@angular/core';
import { FilesService } from 'src/services/files.service';

@Component({
  selector: 'o-all-files-list',
  templateUrl: './all-files-list.component.html',
  styleUrls: ['./all-files-list.component.scss'],
})
export class AllFilesListComponent implements OnInit {
  files: any;
  openRecently: any;

  constructor(public _filesService: FilesService) {}

  handleFileInput(file: any) {
    console.log(file)
    this._filesService.uploadFile(file[0])
  }

  async getFiles() {
    try {
      this.files = await this._filesService.getAllFiles();
      this.openRecently = await this._filesService.getOpenRecently();
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.getFiles();
  }
}
