import { Component, Input } from '@angular/core';

@Component({
  selector: 'm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  profile_name: string = '';
  @Input() imgSrc: string = '';

  constructor() {
    const user_data = localStorage.getItem('user_data');
    user_data
      ? (this.profile_name = JSON.parse(user_data).name)
      : (this.profile_name = '');

  }
}
