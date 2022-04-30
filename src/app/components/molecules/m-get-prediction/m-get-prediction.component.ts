import { Component, OnInit } from '@angular/core';
import { PredictionService } from 'src/services/prediction.service';

@Component({
  selector: 'app-m-get-prediction',
  templateUrl: './m-get-prediction.component.html',
  styleUrls: ['./m-get-prediction.component.scss']
})
export class MGetPredictionComponent implements OnInit {
  lat: string = '';
  lon: string = '';

  constructor(public _predictionService: PredictionService) { }

  ngOnInit(): void {}

  setValues(value: string, type: string) {
    if(type === 'lat') {
      this.lat = value;
    } else {
      this.lon = value;
    }
  }

  getPrediction() {
    this._predictionService.getWeatherPrediction(this.lat, this.lon);
  }

}
