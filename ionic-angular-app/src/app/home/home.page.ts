import { Component, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService, Article } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
// export class HomePage {
//   constructor(private data: DataService) {}

//   refresh(ev: any) {
//     setTimeout(() => {
//       (ev as RefresherCustomEvent).detail.complete();
//     }, 3000);
//   }

//   getArticles(): Observable<Article[]> {
//     return this.data.getArticles();
//   }
// }
export class HomePage implements OnInit {
  articlesList: Article[] | undefined;

  constructor(private data: DataService) {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  ngOnInit() {
    this.data.getArticles().subscribe((data: Article[]) => {
      this.articlesList = data;
    });
  }
}
