import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListBukuPage } from './list-buku.page';

describe('ListBukuPage', () => {
  let component: ListBukuPage;
  let fixture: ComponentFixture<ListBukuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListBukuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
