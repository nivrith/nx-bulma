import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageDirective } from './directives/background-image.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BackgroundImageDirective],
  exports: [BackgroundImageDirective]
})
export class SharedModule { }
