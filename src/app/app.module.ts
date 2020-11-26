import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';  
import { BasicHighLightDirective } from './topic-directives/shared/directives/basic-highlight.directive';
import { BetterHighLightDirective } from './topic-directives/shared/directives/better-highlight.directive';
import { UnlessDirective } from './topic-directives/shared/directives/unless.directive';
import { GeneralComponent } from './topic-directives/components/general/general.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighLightDirective,
    BetterHighLightDirective,
    UnlessDirective,
    GeneralComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
