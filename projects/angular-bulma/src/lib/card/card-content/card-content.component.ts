import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bulma-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {
  @Input() backgroundImage = '';
  constructor() { }

  ngOnInit() {
  }

}
