import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { NagbarComponent } from './nagbar/nagbar.component';
import { BarComponent } from './bar/bar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    NagbarComponent,
    BarComponent,
    FooterComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
