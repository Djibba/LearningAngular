import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  title = 'LearningAngular';

  isAuth = true;

  constructor(private appareilsService: AppareilService) {
  }

  appareils: any[];

  ngOnInit() {
    this.appareils = this.appareilsService.appareils;
  }

  onAllumer() {
    this.appareilsService.AllumerTout();
  }

  onEteindre() {
    this.appareilsService.EteindreTout();
  }

}
