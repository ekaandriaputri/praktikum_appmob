import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../service/tutorial.service';
import { NavController,ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tambah-buku',
  templateUrl: './tambah-buku.page.html',
  styleUrls: ['./tambah-buku.page.scss'],
})
export class TambahBukuPage implements OnInit {

  private apiUrl = 'http://localhost/ionic/add-buku.php';

  data: any={
    judul:'',
    pengarang:'',
    stokbuku:'',
  }

  constructor(
    private tutorialService : TutorialService,
    private navcontroller: NavController,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  addBuku(){
    console.log(this.data)
    this.tutorialService.addBuku(this.data).subscribe(
      (response) => {
        console.log('Data berhasil ditambahkan:', response);
        // Tambahkan logika atau tindakan lainnya setelah data ditambahkan
      },
      (error) => {
        console.error('Gagal menambahkan data:', error);
        // Tambahkan penanganan kesalahan jika diperlukan
      }
    );
  }

}
