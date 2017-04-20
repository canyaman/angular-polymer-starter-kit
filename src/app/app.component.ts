import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CustomStyleService, PolymerChanges } from '@codebakery/origami';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Polymer & Angular can be working together!';
  @PolymerChanges() page: string;

  constructor(private customStyle: CustomStyleService) { }

  ngOnInit() {
    this.customStyle.updateCustomStyles();
  }
}
