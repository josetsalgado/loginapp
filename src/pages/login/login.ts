import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, 
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User){
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      if(result){
        //localStorage.setItem('email', this.user.email);
        //localStorage.setItem('password', this.user.password);
        this.navCtrl.setRoot("PerfilPage");
      }
    }catch(e){
      if(e.code){
        this.toast.create({
          message: "Usuario o contraseña incorrecta ",
          duration: 3000
        }).present();
      }else{
        this.toast.create({
          message: "Error inesperado vuelva a intentarlo por favor ",
          duration: 3000
        }).present();
      }
    }
  }

  register(){
    this.navCtrl.push("RegisterPage");
  }

}
