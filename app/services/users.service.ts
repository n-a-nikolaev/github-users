import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    private url: string = 'https://api.github.com/users';

    constructor(private http: Http) { }

    /**
     * @description
     * Make http GET request to retrieve all users
     * 
     * @returns Observable<any[]>
     * 
     * @memberOf UsersService
     */
    public getAll(): Observable<any[]> {
        return this.http.get(this.url).map((res: Response) => res.json());
    }

    /**
     * @description
     * Make http GET request to retrieve user, by it's username
     * 
     * @param {string} username
     * @returns Observable<any[]>
     * 
     * @memberOf UsersService
     */
    public getByUsername(username: string): Observable<any[]> {
        return this.http
            .get(`${this.url}/${username}`)
            .map((res: Response) => res.json());
    }
}