import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UserComponent } from './components/user/user.component';
import { NoContentComponent } from './components/no-content/no-content.component';

// Services
import { UsersService } from './services/users.service';

// Routes
import { appRouting } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    appRouting
  ],
  declarations: [
    AppComponent,
    ListUsersComponent,
    UserComponent,
    NavbarComponent,
    NoContentComponent
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
