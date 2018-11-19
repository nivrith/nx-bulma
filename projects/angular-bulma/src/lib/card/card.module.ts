import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardContentComponent } from './card-content/card-content.component';
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
