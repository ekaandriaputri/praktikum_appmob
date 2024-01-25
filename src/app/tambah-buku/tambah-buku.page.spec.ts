import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TambahBukuPage } from './tambah-buku.page';

describe('TambahBukuPage', () => {
  let component: TambahBukuPage;
  let fixture: ComponentFixture<TambahBukuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TambahBukuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
