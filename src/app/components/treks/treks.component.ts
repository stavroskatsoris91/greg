import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-treks',
    templateUrl: './treks.component.html',
    styleUrls: ['./treks.component.scss']
})
export class TreksComponent implements OnInit {

    photos = 'Photots';
    treks = [
        {
            title1: this.language.treks.trek+' 1',
            title2: this.language.treks.trek1.title2,
            time: '45 '+this.language.treks.min,
            price: '€30 / '+this.language.treks.horse,
            level: this.language.treks.level1,
            images: [
                require('src/assets/images/treks/trek1/trek1_1.jpg'),
                require('src/assets/images/treks/trek1/trek1_2.jpg'),
                require('src/assets/images/treks/trek1/trek1_3.jpg'),
                require('src/assets/images/treks/trek1/trek1_4.jpg')
            ],
            text: this.language.treks.trek1.text
        },
        {
            title1: this.language.treks.trek+' 2',
            title2: this.language.treks.trek2.title2,
            time: '1'+this.language.treks.hour+'40'+this.language.treks.min,
            price: '€58 / '+this.language.treks.horse,
            level: this.language.treks.level1,
            images: [
                require('src/assets/images/treks/trek2/trek2_1.jpg'),
                require('src/assets/images/treks/trek2/trek2_2.jpg'),
                require('src/assets/images/treks/trek2/trek2_3.jpg'),
                require('src/assets/images/treks/trek2/trek2_4.jpg'),
                require('src/assets/images/treks/trek2/trek2_5.jpg'),
                require('src/assets/images/treks/trek2/trek2_6.jpg')
            ],
            text: this.language.treks.trek2.text
        },
        {
            title1: this.language.treks.trek+' 3',
            title2: this.language.treks.trek3.title2,
            time: '2'+this.language.treks.hour+'15'+this.language.treks.min,
            price: '€69 / '+this.language.treks.horse,
            level: this.language.treks.level1,
            images: [
                require('src/assets/images/treks/trek3/trek3_1.jpg'),
                require('src/assets/images/treks/trek3/trek3_2.jpg'),
                require('src/assets/images/treks/trek3/trek3_3.jpg'),
                require('src/assets/images/treks/trek3/trek3_4.jpg'),
                require('src/assets/images/treks/trek3/trek3_5.jpg')
            ],
            text: this.language.treks.trek3.text
        },
        {
            title1: this.language.treks.trek+' 4',
            title2: this.language.treks.trek4.title2,
            time: '2'+this.language.treks.hour+'35'+this.language.treks.min,
            price: '€77 / '+this.language.treks.horse,
            level: this.language.treks.level1,
            images: [
                require('src/assets/images/treks/trek4/trek4_1.jpg'),
                require('src/assets/images/treks/trek4/trek4_2.jpg'),
                require('src/assets/images/treks/trek4/trek4_3.jpg')
            ],
            text: this.language.treks.trek4.text
        },
        {
            title1: this.language.treks.trek+' 5',
            title2: this.language.treks.trek5.title2,
            time: '3'+this.language.treks.hour+'10'+this.language.treks.min,
            price: '€95 / '+this.language.treks.horse,
            level: this.language.treks.level1,
            images: [
                require('src/assets/images/treks/trek5/trek5_1.jpg'),
                require('src/assets/images/treks/trek5/trek5_2.jpg'),
                require('src/assets/images/treks/trek5/trek5_3.jpg'),
                require('src/assets/images/treks/trek5/trek5_4.jpg'),
                require('src/assets/images/treks/trek5/trek5_5.jpg'),
                require('src/assets/images/treks/trek5/trek5_6.jpg')
            ],
            text: this.language.treks.trek5.text
        },
        {
            title1: this.language.treks.trek+' 6',
            title2: this.language.treks.trek6.title2,
            time: '4 '+this.language.treks.hourFull,
            price: '€122 / '+this.language.treks.horse,
            level: this.language.treks.level2,
            images: [
                require('src/assets/images/treks/trek6/trek6_1.jpg')
            ],
            text: this.language.treks.trek6.text
        },
    ];
    info = this.language.treks.info;
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
