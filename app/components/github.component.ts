import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import {GithubService} from '../services/github.service';
import {User} from './user';

declare var jQuery: any

@Component({
    selector: 'github',
    templateUrl: './app/components/github.component.html',
    providers: [GithubService]
})
export class GithubComponent {

    loading: boolean;
    repos: any;
    username: string;
    users: User[] = [];
    user: User;
    favorites: User[] = [];


    constructor(private _githubService: GithubService) {
        console.log('Github Component Init...');
        this.loading = false;
    }

    search() {

        var users = [];

        document.getElementById("mySidenav").style.width = "255px";
        jQuery('#favorite-scroll').optiscroll();

        this._githubService.updateUsername(this.username);
        this.loading = true;
        this._githubService.getSearch().subscribe(response => {

            users = response.items.slice(0, 20);

            for (var i in users) {
                this._githubService.updateUsername(users[i].login);

                this._githubService.getUser().subscribe(response => {

                    var user = {
                        id: response.id,
                        name: response.name,
                        login: response.login,
                        following: response.following,
                        followers: response.followers,
                        date: response.created_at,
                        avatarUrl: response.avatar_url,
                        location: response.location,
                        email: response.email,
                        favorite: false
                    }
                    this.users.push(user);

                });

            }
            this.loading = false;

        });

    }

    orderAZ() {
        this.users.sort(function(a, b) {
            if (a.followers > b.followers) {
                return 1;
            }
            if (a.followers < b.followers) {
                return -1;
            }

            return 0;
        });
    }

    orderZA() {
        this.users.sort(function(a, b) {
            if (a.followers > b.followers) {
                return -1;
            }
            if (a.followers < b.followers) {
                return 1;
            }

            return 0;
        });

    }

    addFavorites(user) {
        var flag: boolean;

        flag = true;
        for (var i in this.favorites) {
            if (user == this.favorites[i].login) {
                flag = false;
            }

        }

        if (flag) {
            for (var i in this.users) {
                if (user == this.users[i].login) {
                    this.users[i].favorite = true;
                }
            }

            this._githubService.updateUsername(user);
            this._githubService.getUser().subscribe(response => {

                var user = {
                    id: response.id,
                    name: response.name,
                    following: response.following,
                    followers: response.followers,
                    date: response.created_at,
                    avatarUrl: response.avatar_url,
                    login: response.login,
                    location: response.location,
                    email: response.email,
                    favorite: true
                };
                this.favorites.push(user);

            });
        } else {
            alert(user+" is already in your favorite list!");
        }

    }

    @ViewChild('myModal')
    modal: ModalComponent;

    close() {
        this.modal.close();
    }

    open(user, favorite) {
        this._githubService.updateUsername(user);
        this._githubService.getUser().subscribe(response => {

            var user = {
                id: response.id,
                name: response.name,
                following: response.following,
                followers: response.followers,
                date: response.created_at,
                avatarUrl: response.avatar_url,
                login: response.login,
                location: response.location,
                email: response.email,
                favorite: response.favorite
            };

            this.user = user;

        });
        this._githubService.getRepos().subscribe(response => {

            this.repos = response;

        });

    }


}
