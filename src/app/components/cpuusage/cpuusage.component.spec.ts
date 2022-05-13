import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuusageComponent } from './cpuusage.component';

describe('CpuusageComponent', () => {
  let component: CpuusageComponent;
  let fixture: ComponentFixture<CpuusageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuusageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuusageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
