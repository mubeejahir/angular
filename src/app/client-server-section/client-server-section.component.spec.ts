import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServerSectionComponent } from './client-server-section.component';

describe('ClientServerSectionComponent', () => {
  let component: ClientServerSectionComponent;
  let fixture: ComponentFixture<ClientServerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientServerSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientServerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
