import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageToDoComponent } from './page-to-do.component';

describe('PageToDoComponent', () => {
  let component: PageToDoComponent;
  let fixture: ComponentFixture<PageToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageToDoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
