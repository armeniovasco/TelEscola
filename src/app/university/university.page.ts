import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-university',
  templateUrl: './university.page.html',
  styleUrls: ['./university.page.scss'],
})
export class UniversityPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
  }
}
