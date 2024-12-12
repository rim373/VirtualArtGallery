import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastGalleryComponent } from './past-gallery.component';

describe('PastGalleryComponent', () => {
  let component: PastGalleryComponent;
  let fixture: ComponentFixture<PastGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
