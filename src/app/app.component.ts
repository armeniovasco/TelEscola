import { Component } from '@angular/core';

import { HomePage } from '../app/home/home.page';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatabaseService } from '../app/providers/database.service'
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage: any = null;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    dbProvider: DatabaseService
  ) {
    this.initializeApp();

    /*//Criando o banco de dados
    dbProvider.createDatabase()
    .then(() => {
      // fechando a SplashScreen somente quando o banco for criado
      this.openHomePage(splashScreen);
    })
    .catch(() => {
      // ou se houver erro na criação do banco
      this.openHomePage(splashScreen);
    });*/
  }

  private openHomePage(splashScreen: SplashScreen) {
    splashScreen.hide();
    this.rootPage = HomePage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
