import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
      
  }

  async register(user: User){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if(result){
        this.navCtrl.setRoot("LoginPage");
      }
    }catch(e){
      switch(e.code) {
        case "auth/email-already-in-use":
            this.toast.create({
              message: "Correo actualmente en uso ",
              duration: 3000
            }).present();
            break;
        case "auth/invalid-email":
          this.toast.create({
            message: "Correo invalido",
            duration: 3000
          }).present();
            break;
        case "auth/weak-password":
          this.toast.create({
            message: "La contraseña ingresada debe tener al menos 6 caracteres",
            duration: 3000
          }).present();
            break;
        default:
          this.toast.create({
            message: "Error inesperado vulva a intentarlo por favor",
            duration: 3000
          }).present();
          break;
      }
    }
  }
}
