import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MonsterService } from '../services/monster.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-add-monster',
  templateUrl: './add-monster.page.html',
  styleUrls: ['./add-monster.page.scss'],
})
export class AddMonsterPage implements OnInit {
  monsterForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = '';

  constructor(
    public formBuilder: FormBuilder,
    private monsterService: MonsterService,
    private photoService: PhotoService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.monsterForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = '';
  }

  ngOnInit() {
    this.monsterForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      title: ['', [Validators.required]],
      weakness: ['', [Validators.required]],
    });
  }

  get errorControl() {
    return this.monsterForm.controls;
  }

  takePhoto() {
    // DECOMMENT:
    this.photoService.takePhoto().then((data) => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    // DECOMMENT:
    this.photoService.pickImage().then((data) => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    // DECOMMENT:
    this.capturedPhoto = null;
  }

  async submitForm() {
    // DECOMMENT:
    this.isSubmitted = true;
    if (!this.monsterForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != '') {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      this.monsterService
        .createMonster(this.monsterForm.value, blob)
        .subscribe((data) => {
          console.log('Photo sent!');
          this.router.navigateByUrl('/list-monsters');
        });
    }
  }
}
