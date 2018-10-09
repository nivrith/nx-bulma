import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroImageDirective } from './hero-image.directive';
import { HeroComponent } from './hero/hero.component';
import { HeroBodyComponent } from './hero-body/hero-body.component';
import { HeroFooterComponent } from './hero-footer/hero-footer.component';
import { HeroHeaderComponent } from './hero-header/hero-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeroComponent, HeroBodyComponent, HeroFooterComponent, HeroHeaderComponent, HeroImageDirective],
  exports: [HeroComponent, HeroBodyComponent, HeroFooterComponent, HeroHeaderComponent, HeroImageDirective]

})
export class HeroModule { }
