import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonsstatusComponent } from './demonsstatus.component';

describe('DemonsstatusComponent', () => {
  let component: DemonsstatusComponent;
  let fixture: ComponentFixture<DemonsstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonsstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonsstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
