import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card';
import { CardHeaderComponent } from './card-header';
import { CardFooterComponent } from './card-footer';
import { CardContentComponent } from './card-content';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CardComponent, CardHeaderComponent, CardFooterComponent, CardContentComponent],
  exports: [CardComponent, CardHeaderComponent, CardFooterComponent, CardContentComponent]
})
export class CardModule { }
