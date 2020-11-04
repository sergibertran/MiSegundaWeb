import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { EventsComponent } from './events/events.component';
import { QuisomComponent } from './quisom/quisom.component';
import { ModificareventComponent } from './modificarevent/modificarevent.component';
import { EliminareventComponent } from './eliminarevent/eliminarevent.component';
import { AltaeventComponent } from './altaevent/altaevent.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inici' },
  { path: 'inici', component: IniciComponent },
  { path: 'events', component: EventsComponent },
  { path: 'quisom', component: QuisomComponent },
  { path: 'modificarevent', component: ModificareventComponent },
  { path: 'eliminarevent', component: EliminareventComponent },
  { path: 'altaevent', component: AltaeventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
