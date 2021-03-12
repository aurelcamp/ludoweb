import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  emailVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  afficheEmail() {
    this.emailVisible = !this.emailVisible;
  }

}
