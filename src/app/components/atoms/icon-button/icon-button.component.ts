import { Component, Input } from '@angular/core';

@Component({
  selector: 'a-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() label: string = '';
  @Input() imgSrc: string = '';
  @Input() style: any = '';
  @Input() variant: any = '';

  constructor() {}
}
