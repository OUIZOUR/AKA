import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTodoListeComponent } from './details-todo-liste.component';

describe('DetailsTodoListeComponent', () => {
  let component: DetailsTodoListeComponent;
  let fixture: ComponentFixture<DetailsTodoListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTodoListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTodoListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
