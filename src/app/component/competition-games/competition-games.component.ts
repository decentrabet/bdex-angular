import { Component, Input, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import * as utils from '@betdex/utils';
import * as anchor from '@betdex/anchor';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { type } from 'os';

export interface teste {
  home: string,
  away: string
}

const ELEMENT_DATA: teste[] = [
  {home: "casa", away: "fora"},
  {home: "casa", away: "fora"},
  {home: "casa", away: "fora"},
  {home: "casa", away: "fora"},
  {home: "casa", away: "fora"},
  {home: "casa", away: "fora"},
  {home: "casa", away: "fora"}
];

@Component({
  selector: 'app-competition-games',
  templateUrl: './competition-games.component.html',
  styleUrls: ['./competition-games.component.css']
})
export class CompetitionGamesComponent implements OnInit {

  comp!: utils.Competition;
  games!: teste[];

  constructor(private location:Location) {

  }

  displayedColumns: string[] = ['home', 'away'];

  expandedElement: utils.Competition | null = null;
  title = 'bdex-angular';
  dataSource!: utils.Competition[];

  async ngOnInit() {
    this.comp = this.location.getState() as utils.Competition;
    this.games = ELEMENT_DATA;
  }

}
