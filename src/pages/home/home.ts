import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  user = {} as User;
  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
      //this.user.email = localStorage.getItem('email');
      //this.user.password = localStorage.getItem('password');
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
        console.log("no");
        this.toast.create({
          message: "Bienvenido: "+data.email,
          duration: 3000
        }).present();
      }
    });
  }

  async register(user: User){
    try{
      /*const result = await this.afAuth.auth.on({
        displayName: 'display name',
        photoURL: 'some/url'
      }).then(() => {
        ...
      });
      */
    }catch(e){
      
    }

  }

}
