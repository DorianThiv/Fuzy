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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ThyNetworkModule,
    ThyButtonModule,
    ThyChart2Module,
    ThyLayoutModule,
    ThyFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
