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
    await this._filesService.updateOpen({name})
    window.open(url)
    window.location.reload()
  }

  async authenticateFile(name: string, url: string){
    url = encodeURIComponent(url)
    console.log(url)

    try{
      await this._filesService.getAutentication(url, name)
      await this._filesService.autenticateFile({name})
      window.location.reload()
    }
    catch(error){
      console.log(error)
    }
  }
}
