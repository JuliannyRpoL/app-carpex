import { Component, Input, OnInit } from '@angular/core';
import { Prediction } from 'src/app/models/prediction';

@Component({
  selector: 'app-m-view-prediction',
  templateUrl: './m-view-prediction.component.html',
  styleUrls: ['./m-view-prediction.component.scss']
})
export class MViewPredictionComponent implements OnInit {
  @Input() prediction: Prediction = {
    pais: '',
    ciudad: '',
    temp: '',
    descripcion: '',
    img: ''
  };

  img: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
