import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const AWS_URL = 'https://06fhgxlj2a.execute-api.us-east-1.amazonaws.com/default';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http: HttpClient) { }

  getGuests() {
    return this.http.get(`${AWS_URL}/guests`);
  }

  getCompanies() {
    return this.http.get(`${AWS_URL}/companies`);
  }

  getTemplates() {
    return this.http.get(`${AWS_URL}/templates`);
  }

  postTemplates(body) {
    return this.http.post(`${AWS_URL}/templates`, body);
  }
}
