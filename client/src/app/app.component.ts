import { Component } from '@angular/core';
import { ThyRestGetRequest, ThyRestPostRequest } from './shared/thy/thy-network/models/thy-rest-requests.class';
import { ThyNetworkService } from './shared/thy/thy-network/thy-network.service';
import { ThyRestService } from './shared/thy/thy-network/thy-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public login: { username: string, password: string } = { username: 'fuzy@fuzy.com', password: 'fuzy' };

  public users: string[];

  constructor(private restService: ThyRestService, private networkService: ThyNetworkService) {
  }

  public async onSubmit() {
    if (this.login.username && this.login.password) {
      const result: { token: string } = await this.restService.post(new ThyRestPostRequest('login', this.login));
      if (result?.token) {
        this.networkService.token = result.token;
        const users: any[] = await this.restService.get(new ThyRestGetRequest('users'));
        if (users) {
          this.users = users.map(u => u.email);
        }
      }
    }
  }

}
