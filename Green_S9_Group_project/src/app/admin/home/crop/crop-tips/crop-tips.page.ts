import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnimationController, ModalController } from '@ionic/angular';
import { AddtipPage } from './addtip/addtip.page';

@Component({
  selector: 'app-crop-tips',
  templateUrl: './crop-tips.page.html',
  styleUrls: ['./crop-tips.page.scss'],
})
export class CropTipsPage implements OnInit {

  constructor(private animationCtrl: AnimationController,private modelCtrl: ModalController) { }

  ngOnInit() {

  }

  cropTips = [
  ]

  async addCropTips()
  {
      const model = await this.modelCtrl.create({
        component: AddtipPage
      });

      model.onDidDismiss().then(newobj=>{
        this.cropTips.push(newobj.data);

      })

      return await model.present();
  }

  async close(){
    await this.modelCtrl.dismiss(this.taskObj);
  }

  taskObj;



}
