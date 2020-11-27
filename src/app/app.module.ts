import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { BasicHighLightDirective } from './topic-directives/shared/directives/basic-highlight.directive';
import { BetterHighLightDirective } from './topic-directives/shared/directives/better-highlight.directive';
import { UnlessDirective } from './topic-directives/shared/directives/unless.directive';
import { PrincipalDirectiveComponent } from './topic-directives/components/principal-directive/principal-directive.component';

import { AccountComponent } from './topic-services/components/principal-service/account/account.component';
import { NewAccountComponent } from './topic-services/components/principal-service/new-account/new-account.component';
import { PrincipalServiceComponent } from './topic-services/components/principal-service/principal-service.component';
import { AccountsService } from './topic-services/shared/services/accounts.service';
import { AssignmentPrincipalComponent } from './topic-services/assignment/components/assignment-principal/assignment-principal.component';
import { ActiveUserComponent } from './topic-services/assignment/components/assignment-principal/active-user/active-user.component';
import { InactiveUserComponent } from './topic-services/assignment/components/assignment-principal/inactive-user/inactive-user.component';
import { UsersService } from './topic-services/assignment/shared/services/users.services';
 
@NgModule({
  declarations: [
    AppComponent,
    BasicHighLightDirective,
    BetterHighLightDirective,
    UnlessDirective,
    PrincipalDirectiveComponent,

    AccountComponent,
    NewAccountComponent,
    PrincipalServiceComponent,

    ActiveUserComponent,
    InactiveUserComponent,
    AssignmentPrincipalComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AccountsService,
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
