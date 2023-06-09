import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { GraphsComponent } from './graphs/graphs.component';
import { AboutComponent } from './about/about.component';
import { LicenseComponent } from './license/license.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartViewComponent } from './chart-view/chart-view.component';
import { NgxCsvParserModule } from 'ngx-csv-parser';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    GraphsComponent,
    AboutComponent,
    LicenseComponent,
    ChartViewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgApexchartsModule,
    NgxCsvParserModule,
    RouterModule.forRoot([
      { path: '', component: GraphsComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent, pathMatch: 'full' },
      { path: 'license', component: LicenseComponent, pathMatch: 'full' }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
