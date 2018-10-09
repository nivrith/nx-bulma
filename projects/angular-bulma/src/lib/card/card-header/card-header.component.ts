import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bulma-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent implements OnInit {
  @Input('heading') heading = 'Heading';
  constructor() { }

  ngOnInit() {
  }

}
