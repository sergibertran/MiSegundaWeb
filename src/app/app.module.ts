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
import { DetalleTrabajadorComponent } from './quisom/detalle-trabajador/detalle-trabajador.component';
import { ElementoTrabajadorComponent } from './quisom/elemento-trabajador/elemento-trabajador.component';
import { ListaTrabajadorComponent } from './quisom/lista-trabajador/lista-trabajador.component';

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
    EliminareventComponent,
    DetalleTrabajadorComponent,
    ElementoTrabajadorComponent,
    ListaTrabajadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
