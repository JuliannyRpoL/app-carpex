import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss'],
})
export class CommonButtonComponent {
  @Input() charging: boolean = false;
  @Input() label: string = '';
  @Input() variant: string = 'content';
  @Input() style: any = '';

  constructor() {}
}
