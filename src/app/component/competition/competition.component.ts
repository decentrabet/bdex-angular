import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import * as utils from '@betdex/utils';
import * as anchor from '@betdex/anchor';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CompetitionComponent implements OnInit {

  constructor(private router: Router) {
  }

  columnsToDisplay = ['name'];
  columnsLabelsToDisplay = ['Competições'];
  expandedElement: utils.Competition | null = null;
  title = 'bdex-angular';
  dataSource!: utils.Competition[];


  async ngOnInit() {
    const clientKp = anchor.web3.Keypair.fromSecretKey(Uint8Array.from([45,118,117,35,218,16,217,237,59,142,170,29,228,236,227,255,251,249,109,168,119,102,41,68,61,21,105,169,175,78,192,141,
      73,198,131,99,156,107,115,24,227,65,66,48,117,122,26,235,119,243,122,218,150,67,162,213,20,151,187,118,34,142,238,80]));
    let wallet = new anchor.Wallet(clientKp);
    const URL = "https://api.devnet.solana.com";
    const connection = new anchor.web3.Connection(URL);
    const provider = new anchor.Provider(connection, wallet, anchor.Provider.defaultOptions());
    anchor.setProvider(provider);
    await utils.setup(provider);
    this.dataSource = utils.bdex.getCompetitions();
  }


}
