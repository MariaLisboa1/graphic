import { Component, OnInit } from '@angular/core';
import { meta_regional } from './regionais'

@Component({
  selector: 'graf-grafico-meta-mensal-regionais',
  templateUrl: './grafico-meta-mensal-regionais.component.html',
  styleUrls: ['./grafico-meta-mensal-regionais.component.css']
})
export class GraficoMetaMensalRegionaisComponent implements OnInit {
  
  single: any[]
  multi: any[]
  red = '#A81106'
  blue = '#498cbc'
  green = '#5ab240'
  view: any[] = [450, 250]

  color = {
    domain: [this.red, this.blue]
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
    Object.assign(this, { meta_regional })
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
