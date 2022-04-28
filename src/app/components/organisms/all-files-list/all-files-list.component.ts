import { Component, Input, OnInit } from '@angular/core';
import { FilesService } from 'src/services/files.service';

@Component({
  selector: 'o-all-files-list',
  templateUrl: './all-files-list.component.html',
  styleUrls: ['./all-files-list.component.scss'],
})
export class AllFilesListComponent implements OnInit {
  charging: boolean = false;
  files: any = [
    {
      name: 'reporte',
      url: '',
      type: 'pdf'
    }
  ];

  constructor(public _filesService: FilesService) {}

  async getFiles() {
    try {
      //this.files = await this._filesService.getAllFiles();
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.getFiles();
  }
}
