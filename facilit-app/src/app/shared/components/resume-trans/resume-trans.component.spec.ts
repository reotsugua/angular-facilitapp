import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTransComponent } from './resume-trans.component';

describe('ResumeTransComponent', () => {
  let component: ResumeTransComponent;
  let fixture: ComponentFixture<ResumeTransComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeTransComponent]
    });
    fixture = TestBed.createComponent(ResumeTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
