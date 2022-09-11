import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/models/branch.model';
import { Rice } from 'src/app/models/rice.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  branchs: Branch[] = [
    {
      id: '1',
      name: 'Cơ sở 1',
      address: '16 Dịch Vọng- Cầu Giấy',
      phone: '0947215788'
    },
    {
      id: '2',
      name: 'Cơ sở 2',
      address: 'Số 6 ngõ 151A Yên Lãng - Thái Hà, Đống Đa',
      phone: '0985925148'
    },
    {
      id: '3',
      name: 'Cơ sở 3',
      address: 'Số 41 Cốm Vòng - Dịch Vọng Hậu - Cầu Giấy',
      phone: '0947215788'
    },
  ];
  rices: Rice[] = [
    {
      id: '1',
      name: 'Cơm thịt nướng sa tế',
      image: 'https://comngon16.com/upload/product/1552195171thit-nuong.jpg',
      cost: 45000
    },
    {
      id: '1',
      name: 'Cơm thịt nướng sa tế',
      image: 'https://comngon16.com/upload/product/1552195171thit-nuong.jpg',
      cost: 45000
    },
    {
      id: '1',
      name: 'Cơm thịt nướng sa tế',
      image: 'https://comngon16.com/upload/product/1552195171thit-nuong.jpg',
      cost: 45000
    },
    {
      id: '1',
      name: 'Cơm thịt nướng sa tế',
      image: 'https://comngon16.com/upload/product/1552195171thit-nuong.jpg',
      cost: 45000
    },
    {
      id: '1',
      name: 'Cơm thịt nướng sa tế',
      image: 'https://comngon16.com/upload/product/1552195171thit-nuong.jpg',
      cost: 45000
    },
    {
      id: '1',
      name: 'Cơm thịt nướng sa tế',
      image: 'https://comngon16.com/upload/product/1552195171thit-nuong.jpg',
      cost: 45000
    },
    {
      id: '1',
      name: 'Cơm thịt nướng sa tế',
      image: 'https://comngon16.com/upload/product/1552195171thit-nuong.jpg',
      cost: 45000
    },
    {
      id: '1',
      name: 'Cơm thịt nướng sa tế',
      image: 'https://comngon16.com/upload/product/1552195171thit-nuong.jpg',
      cost: 45000
    },
    {
      id: '1',
      name: 'Cơm thịt nướng sa tế',
      image: 'https://comngon16.com/upload/product/1552195171thit-nuong.jpg',
      cost: 45000
    },
    {
      id: '1',
      name: 'Cơm thịt nướng sa tế',
      image: 'https://comngon16.com/upload/product/1552195171thit-nuong.jpg',
      cost: 45000
    },
    {
      id: '1',
      name: 'Cơm thịt nướng sa tế',
      image: 'https://comngon16.com/upload/product/1552195171thit-nuong.jpg',
      cost: 45000
    },
    {
      id: '1',
      name: 'Cơm thịt nướng sa tế',
      image: 'https://comngon16.com/upload/product/1552195171thit-nuong.jpg',
      cost: 45000
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
