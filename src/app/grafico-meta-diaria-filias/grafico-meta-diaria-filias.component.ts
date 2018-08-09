import { Component, OnInit } from '@angular/core';
import { singleCorrect } from '../data';
import { meta_regional } from '../grafico-meta-mensal-regionais/regionais'
import 'rxjs/add/observable/timer';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'graf-grafico-meta-diaria-filias',
  templateUrl: './grafico-meta-diaria-filias.component.html',
  styleUrls: ['./grafico-meta-diaria-filias.component.css']
})
export class GraficoMetaDiariaFiliasComponent implements OnInit {
  title = 'graf';
  single: any[]
  multi: any[]
  red = '#A81106'
  blue = '#498cbc'
  green = '#5ab240'
  view: any[] = [1400, 150]

  teste: any[]

  colorScheme = {
    domain:[this.red, this.blue]
  }
      // options
      showXAxis = false;
      showYAxis = true;
      gradient = false;
      showLegend = false;
      showXAxisLabel = true;
      xAxisLabel = 'Filiais';
      showYAxisLabel = true;
      yAxisLabel = 'Faturamento';

  constructor() {
    Object.assign(this, { singleCorrect }),
    Object.assign(this, { meta_regional })
  }

  onSelect(event) {
    console.log(event);
  }
  
  ngOnInit() {


  }



  }
