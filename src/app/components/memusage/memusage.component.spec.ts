import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemusageComponent } from './memusage.component';

describe('MemusageComponent', () => {
  let component: MemusageComponent;
  let fixture: ComponentFixture<MemusageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemusageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemusageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
