import { CardModule } from './card/card.module';
import { NgModule } from '@angular/core';
import { BulmaComponent } from './bulma.component';

@NgModule({
  imports: [
    CardModule
  ],
  declarations: [BulmaComponent],
  exports: [BulmaComponent, CardModule]
})
export class BulmaModule { }
