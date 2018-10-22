import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {Guest} from "../models/guest";
import {Company} from "../models/company";
import {Template} from "../models/template";
import {TIMEZONES} from "../models/timezones";

@Component({
  selector: 'template-output',
  templateUrl: './template-output.component.html',
  styleUrls: ['./template-output.component.css']
})
export class TemplateOutputComponent implements OnInit, OnChanges {

  @Input() guest: Guest;
  @Input() company: Company;
  @Input() template: Template;
  output: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.guest && this.company && this.template) {
      this.output = this.template.html
        .replace(
          /{(\w*)}/g, // or /{(\w*)}/g for "{this} instead of %this%"
          ( m, key ) => {
            if (key === 'greeting') {
              let time = (new Date().getUTCHours() + TIMEZONES[this.company.timezone] + 24) % 24;
              if (time >= 0 && time < 12) {
                return 'Good morning';
              }
              else if (time >= 12 && time < 18) {
                return 'Good afternoon';
              }
              else if (time >= 18 && time < 24) {
                return 'Good evening';
              }
            }
            else if (this.guest.hasOwnProperty(key)) {
              return this.guest[ key ];
            }
            else if (this.guest.reservation.hasOwnProperty(key)) {
              return this.guest.reservation[ key ];
            }
            else if (this.company.hasOwnProperty(key)) {
              return this.company[ key ];
            }
            else return "";
          }
        );
    }
  }

  ngOnInit() {}
}
