import { Component, OnInit } from '@angular/core';
import { MenuDay } from 'src/app/models/menu.model';

@Component({
  selector: 'app-menu-day',
  templateUrl: './menu-day.component.html',
  styleUrls: ['./menu-day.component.scss']
})
export class MenuDayComponent implements OnInit {
  foods: MenuDay[] = [
    {
      id: '1',
      day: 'Thứ hai',
      list: [
        'Đùi gà kho gừng',
        'Bò hầm khoai tây',
        'Thịt băm trưng mắm tép',
        'Chả lá lốt',
        'Thịt rang cháy cạnh',
        'Móng Giò nấu giả cầy'
      ]
    },
    {
      id: '2',
      day: 'Thứ ba',
      list: [
        'Thịt viên nướng zim tiêu',
        'Cánh gà rang muối',
        'Cá kho tiêu',
        'Thịt quay vừng lá chanh',
        'Thịt kho củ cải',
        'Tôm chiên bơ'
      ]
    },
    {
      id: '3',
      day: 'Thứ tư',
      list: [
        'Sườn sốt chua ngọt',
        'Gà xào nấm',
        'Móng giò nấu giả cầy',
        'Cá kìm sốt chua ngọt',
        'Thịt sốt cà chua',
        'Bò xào cần tỏi'
      ]
    },
    {
      id: '4',
      day: 'Thứ năm',
      list: [
        'Thịt chân giò luộc',
        'Thịt viên nướng zim tiêu',
        'Thịt băm trưng mắm tép',
        'Cá kho tiêu',
        'Tôm rang lá chanh',
        'Cánh gà chiên mắm'
      ]
    },
    {
      id: '5',
      day: 'Thứ sáu',
      list: [
        'Thịt kho nước dừa',
        'Sườn sốt chua ngọt',
        'Chả lá lốt',
        'Gà xào sả ớt',
        'Bò hầm khoai tây',
        'Cá chim chiên xù'
      ]
    },
    {
      id: '6',
      day: 'Thứ bảy',
      list: [
        'Thịt viên nướng zim tiêu',
        'Thịt chân giò luộc',
        'Gà kho dưa chua',
        'Cá kho tiêu',
        'Cánh gà rang muối',
        'Chả thịt sốt cay'
      ]
    },
    {
      id: '7',
      day: 'Chủ nhật',
      list: [
        'Đậu nhồi thịt sốt cà chua',
        'Thịt kho trứng cút',
        'Cá chim sốt cà chua',
        'Gà xào nấm',
        'Chả cá sốt cà chua',
        'Móng Giò nấu giả cầy'
      ]
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
