import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsBuildingComponent } from './ups-building.component';

describe('UpsBuildingComponent', () => {
  let component: UpsBuildingComponent;
  let fixture: ComponentFixture<UpsBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpsBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
