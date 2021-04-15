import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThyNetworkModule } from './shared/thy/thy-network/thy-network.module';
import { ThyButtonModule } from './shared/thy/thy-button/thy-button.module';
import { ThyChart2Module } from './shared/thy/thy-chart2/thy-chart2.module';
import { ThyLayoutModule } from './shared/thy/thy-layout/thy-layout.module';
import { ThyFormFieldModule } from './shared/thy/thy-form-field/thy-form-field.module';
import { ThyTranslateModule } from './shared/thy/thy-translate/thy-translate.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThyTranslateService } from './shared/thy/thy-translate';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    ThyNetworkModule,
    ThyButtonModule,
    ThyChart2Module,
    ThyLayoutModule,
    ThyFormFieldModule,
    ThyTranslateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(translateService: ThyTranslateService) {
  }

}
