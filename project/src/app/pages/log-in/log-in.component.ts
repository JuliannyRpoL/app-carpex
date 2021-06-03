import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit(): void {}
}
