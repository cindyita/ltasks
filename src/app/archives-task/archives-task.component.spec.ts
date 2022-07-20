import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesTaskComponent } from './archives-task.component';

describe('ArchivesTaskComponent', () => {
  let component: ArchivesTaskComponent;
  let fixture: ComponentFixture<ArchivesTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivesTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
