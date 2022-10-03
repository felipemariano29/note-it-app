import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItModalComponent } from './post-it-modal.component';

describe('PostItModalComponent', () => {
  let component: PostItModalComponent;
  let fixture: ComponentFixture<PostItModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostItModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostItModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
