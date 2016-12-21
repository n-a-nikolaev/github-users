import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
    constructor(private router: Router) { }

    private onSubmit(form: any) {
        if (form.valid) {
            this.router.navigate(['/user', form.value.username]);
        }
    }

}