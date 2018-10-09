import { CardModule } from './card/card.module';
import { NgModule } from '@angular/core';
import { BulmaComponent } from './angular-bulma.component';

@NgModule({
  imports: [
    CardModule
  ],
  declarations: [BulmaComponent],
  exports: [BulmaComponent, CardModule]
})
export class BulmaModule { }
