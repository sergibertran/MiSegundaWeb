import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciComponent } from './inici/inici.component';
import { EventsComponent } from './events/events.component';
import { QuisomComponent } from './quisom/quisom.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AltaeventComponent } from './altaevent/altaevent.component';
import { ModificareventComponent } from './modificarevent/modificarevent.component';
import { EliminareventComponent } from './eliminarevent/eliminarevent.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciComponent,
    EventsComponent,
    QuisomComponent,
    HeaderComponent,
    FooterComponent,
    AltaeventComponent,
    ModificareventComponent,
    EliminareventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
