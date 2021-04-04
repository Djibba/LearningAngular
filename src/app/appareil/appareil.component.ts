import { Component, Input, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;

  @Input() appareilStatus: string;

  @Input() indexOfAppareil: number;

  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumer') {
      return 'green';
    } else if (this.appareilStatus === 'eteint') {
      return 'red';
    }
  }

  onAllumerUn(){
    this.appareilService.AllumerUn(this.indexOfAppareil);
  }

  onEteindreUn(){
    this.appareilService.EteindreUn(this.indexOfAppareil);
  }

}
