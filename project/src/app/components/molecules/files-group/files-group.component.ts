import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'm-files-group',
  templateUrl: './files-group.component.html',
  styleUrls: ['./files-group.component.scss'],
})
export class FilesGroupComponent {
  @Input() title: string = '';
  @Input() variant: string = '';
  @Input() files: any = '';

  constructor() {}
}
