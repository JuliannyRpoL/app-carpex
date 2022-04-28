import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 't-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  @Input() page: string = "login"

  constructor() { }

  ngOnInit(): void {
  }

}
