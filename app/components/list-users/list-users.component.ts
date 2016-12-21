import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Response } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'list-users',
    templateUrl: 'list-users.component.html'
})
export class ListUsersComponent implements OnInit {
    public users: Array<any> = [];

    constructor(private usersService: UsersService) { }

    ngOnInit() {
        this.usersService.getAll().subscribe((res: any[]) => this.users = res);
    }

    public generateUserRoute(name: string) {
        return `../user/${name}`;
    }
}