import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-treks',
    templateUrl: './treks.component.html',
    styleUrls: ['./treks.component.scss']
})
export class TreksComponent implements OnInit {

    treks = [
        {
            title: 'treks.trek1.title',
            time: {h:0,m:45},
            price: '€30 / ',
            level: 'treks.level1',
            images: [
                require('src/assets/images/treks/trek1/trek1_1.jpg'),
                require('src/assets/images/treks/trek1/trek1_2.jpg'),
                require('src/assets/images/treks/trek1/trek1_3.jpg'),
                require('src/assets/images/treks/trek1/trek1_4.jpg')
            ],
            text: 'treks.trek1.text'
        },
        {
            title: 'treks.trek2.title',
            time: {h:0,m:40},
            price: '€58 / ',
            level: 'treks.level1',
            images: [
                require('src/assets/images/treks/trek2/trek2_1.jpg'),
                require('src/assets/images/treks/trek2/trek2_2.jpg'),
                require('src/assets/images/treks/trek2/trek2_3.jpg'),
                require('src/assets/images/treks/trek2/trek2_4.jpg'),
                require('src/assets/images/treks/trek2/trek2_5.jpg'),
                require('src/assets/images/treks/trek2/trek2_6.jpg')
            ],
            text: 'treks.trek2.text'
        },
        {
            title: 'treks.trek3.title',
            time: {h:2,m:15},
            price: '€69 / ',
            level: 'treks.level1',
            images: [
                require('src/assets/images/treks/trek3/trek3_1.jpg'),
                require('src/assets/images/treks/trek3/trek3_2.jpg'),
                require('src/assets/images/treks/trek3/trek3_3.jpg'),
                require('src/assets/images/treks/trek3/trek3_4.jpg'),
                require('src/assets/images/treks/trek3/trek3_5.jpg')
            ],
            text: 'treks.trek3.text'
        },
        {
            title: 'treks.trek4.title',
            time: {h:2,m:35},
            price: '€77 / ',
            level: 'treks.level1',
            images: [
                require('src/assets/images/treks/trek4/trek4_1.jpg'),
                require('src/assets/images/treks/trek4/trek4_2.jpg'),
                require('src/assets/images/treks/trek4/trek4_3.jpg')
            ],
            text: 'treks.trek4.text'
        },
        {
            title: 'treks.trek5.title',
            time: {h:3,m:10},
            price: '€95 / ',
            level: 'treks.level1',
            images: [
                require('src/assets/images/treks/trek5/trek5_1.jpg'),
                require('src/assets/images/treks/trek5/trek5_2.jpg'),
                require('src/assets/images/treks/trek5/trek5_3.jpg'),
                require('src/assets/images/treks/trek5/trek5_4.jpg'),
                require('src/assets/images/treks/trek5/trek5_5.jpg'),
                require('src/assets/images/treks/trek5/trek5_6.jpg')
            ],
            text: 'treks.trek5.text'
        },
        {
            title: 'treks.trek6.title',
            time: {h:4,m:0},
            price: '€122 / ',
            level: 'treks.level2',
            images: [
                require('src/assets/images/treks/trek6/trek6_1.jpg')
            ],
            text: 'treks.trek6.text'
        },
    ];
    imagePhotos = require('src/assets/images/photos.svg');
    constructor(private ModalService: ModalService,
        private readonly language: LanguageService) { }

    ngOnInit(): void {
    }
    public showModal(images) {
        var list = images.map((x) => {
            return { img: x };
        });
        this.ModalService.triggerEvent([list, 0]);
    };

}
