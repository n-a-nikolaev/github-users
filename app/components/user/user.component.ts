import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit, OnDestroy {
    private name: string;
    private sub: any;
    private user: any;
    constructor(
        private route: ActivatedRoute,
        private usersService: UsersService
    ) { }

    ngOnInit() {
        this.sub = this.route.params
            .flatMap((v: any, index: number) => {
                return this.usersService.getByUsername(v.name);
            })
            .subscribe(data => this.user = data);
    }

    ngOnDestroy() {

    }

}