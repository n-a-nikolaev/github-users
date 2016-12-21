import { RouterModule, Routes } from '@angular/router';

import { NoContentComponent } from './components/no-content/no-content.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: ListUsersComponent },
    { path: 'user/:name', component: UserComponent },
    { path: '**', component: NoContentComponent }
];

export const appRouting = RouterModule.forRoot(routes);