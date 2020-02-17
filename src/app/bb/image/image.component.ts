import { Component, OnInit } from '@angular/core';
import { BbService } from '../bb.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var require: any
declare var $ :any;

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  gallery : any;
  photoDetail : any;
  constructor(private serve: BbService, private route: ActivatedRoute, private router: Router) { }

  fetch_data() {
    this.serve.getData().subscribe(
      res => {
        let data:any =  res;
        this.gallery =  data.photos.photo;
        console.log(this.gallery);
      }
    )
  }

  selectedImage(index){
    this.photoDetail = this.gallery[index];
    console.log(this.photoDetail);
    $('#showModal').click();
  }


  Logout(){
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    this.router.navigate(['B&B/login']);;
  }

  ngOnInit() {
    this.fetch_data();
  }
}
