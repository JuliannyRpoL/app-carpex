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

  constructor(public _filesService: FilesService) {}

  openFile(url: string, name: string) {
    this._filesService.updateOpen({name})
    window.open(url)
  }

  async authenticateFile(name: string, url: string){
    url = url.replace(":", "%3A")
    url = url.replace("%2F", "%252")
    url = url.replace("/", "%2F")
    url = url.replace("?", "%3F")
    url = url.replace("=", "%3D")

    try{
      const response = await this._filesService.getAutentication(url, name)
      console.log(response)
    }
    catch(error){
      console.log(error)
    }
  }
}
