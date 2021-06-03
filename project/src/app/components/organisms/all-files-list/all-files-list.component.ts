import { Component, Input, OnInit } from '@angular/core';
import { FilesService } from 'src/services/files.service';

@Component({
  selector: 'o-all-files-list',
  templateUrl: './all-files-list.component.html',
  styleUrls: ['./all-files-list.component.scss'],
})
export class AllFilesListComponent implements OnInit {
  charging: boolean = false;
  files: any;
  openRecently: any;

  constructor(public _filesService: FilesService) {}

  async handleFileInput(file: any) {
    this.charging = true;
    await this._filesService.uploadFile(file[0])
    await this.getFiles()
    this.charging = false;
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
