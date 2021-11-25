import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as utils from '@betdex/utils';
import { AppComponent } from './app.component';
import { CompetitionGamesComponent } from './component/competition-games/competition-games.component';
import { CompetitionComponent } from './component/competition/competition.component';

const routes: Routes = [
  {
    path: "competitions", component: CompetitionComponent, pathMatch: 'full'
  },
  {
    path: "games", component: CompetitionGamesComponent,pathMatch: 'full', data: utils.Competition
  },
  {
    path: "", component: AppComponent, pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
