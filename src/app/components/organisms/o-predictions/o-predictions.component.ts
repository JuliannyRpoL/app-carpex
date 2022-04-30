import { Component, OnInit } from '@angular/core';
import { PredictionService } from 'src/services/prediction.service';

@Component({
  selector: 'app-o-predictions',
  templateUrl: './o-predictions.component.html',
  styleUrls: ['./o-predictions.component.scss']
})
export class OPredictionsComponent implements OnInit {

  constructor(public _predictionService: PredictionService) { }

  ngOnInit(): void {
  }

}
