import { Component } from '@angular/core';
import * as utils from '@betdex/utils';
import * as anchor from '@betdex/anchor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bdex-angular';
  competitions!: utils.Competition[];

  async ngOnInit() {
    const clientKp = anchor.web3.Keypair.fromSecretKey(Uint8Array.from([45,118,117,35,218,16,217,237,59,142,170,29,228,236,227,255,251,249,109,168,119,102,41,68,61,21,105,169,175,78,192,141,
      73,198,131,99,156,107,115,24,227,65,66,48,117,122,26,235,119,243,122,218,150,67,162,213,20,151,187,118,34,142,238,80]));
    let wallet = new anchor.Wallet(clientKp);
    const URL = "http://localhost:8899";
    const connection = new anchor.web3.Connection(URL);
    const provider = new anchor.Provider(connection, wallet, anchor.Provider.defaultOptions());
    anchor.setProvider(provider);
    await utils.setup(provider);
    this.competitions = utils.bdex.getCompetitions();
  }
}
