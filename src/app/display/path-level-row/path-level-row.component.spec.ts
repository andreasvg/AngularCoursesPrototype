import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathLevelRowComponent } from './path-level-row.component';

describe('PathLevelRowComponent', () => {
  let component: PathLevelRowComponent;
  let fixture: ComponentFixture<PathLevelRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathLevelRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathLevelRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
