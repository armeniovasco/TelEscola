import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';

import { UniversityPage } from '../university/university.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  private universityPage = UniversityPage;
  private rootPage;

  constructor(public navCtrl: NavController) {
    this.universityPage = UniversityPage;
  }

  openPage(p) {
    this.universityPage = p;
  }

}
