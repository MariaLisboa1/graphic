import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { MetaDiariasFiliaisComponent } from './meta-diarias-filiais/meta-diarias-filiais.component';

import { GraficoMetaDiariaFiliasComponent } from './grafico-meta-diaria-filias/grafico-meta-diaria-filias.component';
import { GraficoMetaMensalRegionaisComponent } from './grafico-meta-mensal-regionais/grafico-meta-mensal-regionais.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MetaDiariasFiliaisComponent,
    GraficoMetaDiariaFiliasComponent,
    GraficoMetaMensalRegionaisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}