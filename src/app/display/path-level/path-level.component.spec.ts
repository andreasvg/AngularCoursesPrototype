import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathLevelComponent } from './path-level.component';

describe('PathLevelComponent', () => {
  let component: PathLevelComponent;
  let fixture: ComponentFixture<PathLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
