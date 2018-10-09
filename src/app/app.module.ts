import { BulmaModule } from './../../projects/angular-bulma/src/lib/angular-bulma.module';
import { BulmaComponent } from './../../projects/angular-bulma/src/lib/angular-bulma.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
