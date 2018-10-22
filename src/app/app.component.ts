import { Component } from '@angular/core';
import {TemplateService} from "./services/template.service";
import {Guest} from "./models/guest";
import {Company} from "./models/company";
import {Template} from "./models/template";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedGuest: Guest;
  selectedCompany: Company;
  selectedTemplate: Template;
  guests: Guest[];
  companies: Company[];
  templates: Template[];
  constructor(private templateService: TemplateService) {}

  createTemplate() {
    let label = prompt("New template label", `Template #${this.templates.length}`);
    console.log(label);
    if (label) {
      this.templates.push({id: this.templates.length, label: label, html:'Type here'} as Template);
    }
  }

  submit() {
    this.templateService.postTemplates(JSON.stringify(this.templates)).subscribe((response) => {
      console.log(response);
      this.ngOnInit();
    });
  }

  delete(template) {
    this.templates.splice( this.templates.indexOf(template), 1 );
    this.templateService.postTemplates(JSON.stringify(this.templates)).subscribe((response) => {
      console.log(response);
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.templateService.getGuests().subscribe((data: any) => {
      this.guests = JSON.parse(data.body);
      this.selectedGuest = this.guests[0];
    });
    this.templateService.getCompanies().subscribe((data: any) => {
      this.companies = JSON.parse(data.body);
      this.selectedCompany = this.companies[0];
    });
    this.templateService.getTemplates().subscribe((data: any) => {
      this.templates = JSON.parse(data.body);
      this.selectedTemplate = this.templates[0];
    });
  }
}
