import { Component } from '@angular/core';
import { RestGetRequest, RestPostRequest } from './shared/services/network/models/rest-requests.class';
import { NetworkService } from './shared/services/network/network.service';
import { RestService } from './shared/services/network/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public login: { username: string, password: string } = { username: 'fuzy@fuzy.com', password: 'fuzy' };

  public users: string[];

  constructor(private restService: RestService, private networkService: NetworkService) {
  }

  public async onSubmit() {
    if (this.login.username && this.login.password) {
      const result: { token: string } = await this.restService.post(new RestPostRequest('login', this.login));
      if (result?.token) {
        this.networkService.token = result.token;
        const users: any[] = await this.restService.get(new RestGetRequest('users'));
        if (users) {
          this.users = users.map(u => u.email);
        }
      }
    }
  }

}
