import { Injectable } from '@angular/core';
import { Picture } from './interfaces/picture.interface';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  pictures: Picture[] = [
    {
      imgUrl: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/-kq_4ZhbQv2X7dy8_AjlHA.jpg',
      word: 'car'
    },
    {
      imgUrl: 'https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg',
      word: 'house'
    },
    {
      imgUrl: 'https://www.virginexperiencedays.co.uk/content/img/product/large/PHELCI_01.jpg',
      word: 'helicopter'
    }
  ];
}
