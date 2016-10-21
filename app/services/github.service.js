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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var GithubService = (function () {
    function GithubService(_http) {
        this._http = _http;
        this.username = 'emaxees';
        this.client_id = '394d3bef3dffbb963cc5';
        this.client_secret = 'c1704a0e59c22e0661cb021b8277783625b2c6dd';
        console.log('Github Service Init...');
    }
    GithubService.prototype.updateUsername = function (username) {
        this.username = username;
    };
    GithubService.prototype.getSearch = function () {
        return this._http.get('https://api.github.com/search/users?q=' + this.username)
            .map(function (res) { return res.json(); });
    };
    // getSearch() {
    //     return this._http.get('http://www.mocky.io/v2/5808147d100000a1172b752f')
    //         .map(res => res.json());
    // }
    GithubService.prototype.getUser = function () {
        return this._http.get('https://api.github.com/users/' + this.username)
            .map(function (res) { return res.json(); });
    };
    // getUser() {
    //     return this._http.get('http://www.mocky.io/v2/5808150e100000aa172b7531')
    //         .map(res => res.json());
    // }
    GithubService.prototype.getRepos = function () {
        return this._http.get('https://api.github.com/users/' + this.username + '/repos')
            .map(function (res) { return res.json(); });
    };
    return GithubService;
}());
GithubService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], GithubService);
exports.GithubService = GithubService;
var _a;
//# sourceMappingURL=github.service.js.map