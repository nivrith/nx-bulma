import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFooterComponent } from './hero-footer.component';

describe('HeroFooterComponent', () => {
  let component: HeroFooterComponent;
  let fixture: ComponentFixture<HeroFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
