import { Component } from '@angular/core';
import {NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
declare var open_target_blank: boolean;
@Component({
	selector: 'about-footer',
	templateUrl: 'about-footer.html'
})
export class AboutFooterComponent {
	constructor(
		private navCtrl: NavController,
		private InAppBrowser: InAppBrowser
		) {

	}
	openLink(url: string, external: boolean = false) {
		if (!url) return;
		else this.InAppBrowser.create(url, open_target_blank ? "_blank" : "_system", "location=no");
	}
}