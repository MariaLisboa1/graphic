import { Component, OnInit } from '@angular/core';
import { single } from '../data';

@Component({
  selector: 'graf-meta-diarias-filiais',
  templateUrl: './meta-diarias-filiais.component.html',
  styleUrls: ['./meta-diarias-filiais.component.css']
})
export class MetaDiariasFiliaisComponent implements OnInit {
  
  nomes = []
  
  constructor() { Object.assign(this, { single }) }

  ngOnInit() {

    // single.forEach(element => this.nome = (element.name))
  
    single.forEach(element => {
      if(!element.name.includes('meta')){
        this.nomes.push(element)
   }
   })

  }

}
