import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { BasicHighLightDirective } from './topic-directives/shared/directives/basic-highlight.directive';
import { BetterHighLightDirective } from './topic-directives/shared/directives/better-highlight.directive';
import { UnlessDirective } from './topic-directives/shared/directives/unless.directive';
import { PrincipalDirectiveComponent } from './topic-directives/components/principal-directive/principal-directive.component';

import { AccountComponent } from './topic-services/components/account/account.component';
import { NewAccountComponent } from './topic-services/components/new-account/new-account.component';
import { PrincipalServiceComponent } from './topic-services/components/principal-service/principal-service.component';
 
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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
