import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  emailVisible = false;

  stat: any;

  constructor(
    public apiService: ApiService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.stat = await this.apiService.getStats();

    console.log(this.stat);
  }

  afficheEmail() {
    this.emailVisible = !this.emailVisible;
  }

}
