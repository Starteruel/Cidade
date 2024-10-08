import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCidadeComponent } from './id-cidade.component';

describe('IdCidadeComponent', () => {
  let component: IdCidadeComponent;
  let fixture: ComponentFixture<IdCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdCidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
