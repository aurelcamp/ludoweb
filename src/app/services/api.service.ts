import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  async getStats() {
    const data = await this.http.get<any>('http://ludo-api.les-combien.com/api/open/get-fake-stats').toPromise();
    return data;
  }
}
