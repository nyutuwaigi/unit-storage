import { Component } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FcmService } from './services/fcm.service';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { AnalyticsService } from './services/analytics.service';


const { Network} = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
  })
export class AppComponent {

  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;

  constructor(
    public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public _loader: LoadingController,
    public fcmService: FcmService,
    public analyticsService: AnalyticsService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.analyticsService.startTrackerWithId('278622255');
    this.platform.ready().then(async () => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.networkListener = Network.addListener('networkStatusChange', (status) => {
        this.networkStatus = status;
        if (this.networkStatus.connected) {
          this._loader.dismiss();
        } else {
          this.presentLoading('You are offline. Waiting for internet connection.');
          }
      });
      this.networkStatus = await Network.getStatus();
      // Trigger the push setup 

      this.fcmService.initPush();
    });
  }
  async presentLoading(message) {
    const loading = await this._loader.create({
      message,
    });
    return await loading.present();
  }
}
