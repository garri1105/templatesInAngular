import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOutputComponent } from './template-output.component';

describe('TemplateOutputComponent', () => {
  let component: TemplateOutputComponent;
  let fixture: ComponentFixture<TemplateOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
