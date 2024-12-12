import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentGalleryComponent } from './current-gallery.component';

describe('CurrentGalleryComponent', () => {
  let component: CurrentGalleryComponent;
  let fixture: ComponentFixture<CurrentGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
