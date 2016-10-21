import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username = 'emaxees';
    private client_id = '394d3bef3dffbb963cc5';
    private client_secret = 'c1704a0e59c22e0661cb021b8277783625b2c6dd';


    constructor(private _http: Http) {
        console.log('Github Service Init...');
    }


    updateUsername(username: string) {
        this.username = username;
    }

    
    // getSearch() {
    //     return this._http.get('https://api.github.com/search/users?q=' + this.username)
    //         .map(res => res.json());
    // }
    getSearch() {
        return this._http.get('http://www.mocky.io/v2/5808147d100000a1172b752f')
            .map(res => res.json());
    }

    // getUser() {
    //     return this._http.get('https://api.github.com/users/' + this.username)
    //         .map(res => res.json());
    // }
    getUser() {
        return this._http.get('http://www.mocky.io/v2/5808150e100000aa172b7531')
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos')
            .map(res => res.json());
    }


}
