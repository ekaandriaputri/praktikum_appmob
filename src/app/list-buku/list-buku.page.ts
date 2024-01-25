import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../service/tutorial.service';
@Component({
  selector: 'app-list-buku',
  templateUrl: './list-buku.page.html',
  styleUrls: ['./list-buku.page.scss'],
})
export class ListBukuPage implements OnInit {

  buku:any;

  constructor(
    private TutorialService : TutorialService
  ) { 
    this.getbuku();
  }

  ngOnInit() {
  }

  getbuku(){
    this.TutorialService.getBuku().subscribe((respon:any)=>{
      this.buku=respon;
      console.log(this.buku);
    })
  }

}
