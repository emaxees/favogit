"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var github_service_1 = require("../services/github.service");
var GithubComponent = (function () {
    function GithubComponent(_githubService) {
        this._githubService = _githubService;
        this.users = [];
        this.favorites = [];
        console.log('Github Component Init...');
        this.loading = false;
    }
    GithubComponent.prototype.search = function () {
        var _this = this;
        var users = [];
        document.getElementById("mySidenav").style.width = "255px";
        this._githubService.updateUsername(this.username);
        this.loading = true;
        this._githubService.getSearch().subscribe(function (response) {
            users = response.items.slice(0, 20);
            for (var i in users) {
                _this._githubService.updateUsername(users[i].login);
                _this._githubService.getUser().subscribe(function (response) {
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
                    };
                    _this.users.push(user);
                });
            }
            _this.loading = false;
        });
    };
    GithubComponent.prototype.orderAZ = function () {
        this.users.sort(function (a, b) {
            if (a.followers > b.followers) {
                return 1;
            }
            if (a.followers < b.followers) {
                return -1;
            }
            return 0;
        });
    };
    GithubComponent.prototype.orderZA = function () {
        this.users.sort(function (a, b) {
            if (a.name > b.name) {
                return -1;
            }
            if (a.name < b.name) {
                return 1;
            }
            return 0;
        });
    };
    GithubComponent.prototype.addFavorites = function (user) {
        var _this = this;
        for (var i in this.users) {
            if (user == this.user[i].login) {
                this.user[i].favorite = true;
            }
        }
        this._githubService.updateUsername(user);
        this._githubService.getUser().subscribe(function (response) {
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
            _this.favorites.push(user);
        });
    };
    GithubComponent.prototype.close = function () {
        this.modal.close();
    };
    GithubComponent.prototype.open = function (user) {
        var _this = this;
        this._githubService.updateUsername(user);
        this._githubService.getUser().subscribe(function (response) {
            var user = {
                id: response.id,
                name: response.name,
                following: response.following,
                followers: response.followers,
                date: response.created_at,
                avatarUrl: response.avatar_url,
                login: response.login,
                location: response.location,
                email: response.email
            };
            _this.user = user;
        });
        this._githubService.getRepos().subscribe(function (response) {
            _this.repos = response;
        });
    };
    return GithubComponent;
}());
__decorate([
    core_1.ViewChild('myModal'),
    __metadata("design:type", typeof (_a = typeof ng2_bs3_modal_1.ModalComponent !== "undefined" && ng2_bs3_modal_1.ModalComponent) === "function" && _a || Object)
], GithubComponent.prototype, "modal", void 0);
GithubComponent = __decorate([
    core_1.Component({
        selector: 'github',
        templateUrl: './app/components/github.component.html',
        providers: [github_service_1.GithubService]
    }),
    __metadata("design:paramtypes", [github_service_1.GithubService])
], GithubComponent);
exports.GithubComponent = GithubComponent;
var _a;
//# sourceMappingURL=github.component.js.map