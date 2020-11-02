import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import * as trek1_1 from 'src/assets/images/treks/trek1/trek1_1.jpg';
import * as trek1_2 from 'src/assets/images/treks/trek1/trek1_2.jpg';
import * as trek1_3 from 'src/assets/images/treks/trek1/trek1_3.jpg';
import * as trek1_4 from 'src/assets/images/treks/trek1/trek1_4.jpg';
import * as trek2_1 from 'src/assets/images/treks/trek2/trek2_1.jpg';
import * as trek2_2 from 'src/assets/images/treks/trek2/trek2_2.jpg';
import * as trek2_3 from 'src/assets/images/treks/trek2/trek2_3.jpg';
import * as trek2_4 from 'src/assets/images/treks/trek2/trek2_4.jpg';
import * as trek2_5 from 'src/assets/images/treks/trek2/trek2_5.jpg';
import * as trek2_6 from 'src/assets/images/treks/trek2/trek2_6.jpg';
import * as trek3_1 from 'src/assets/images/treks/trek3/trek3_1.jpg';
import * as trek3_2 from 'src/assets/images/treks/trek3/trek3_2.jpg';
import * as trek3_3 from 'src/assets/images/treks/trek3/trek3_3.jpg';
import * as trek3_4 from 'src/assets/images/treks/trek3/trek3_4.jpg';
import * as trek3_5 from 'src/assets/images/treks/trek3/trek3_5.jpg';
import * as trek4_1 from 'src/assets/images/treks/trek4/trek4_1.jpg';
import * as trek4_2 from 'src/assets/images/treks/trek4/trek4_2.jpg';
import * as trek4_3 from 'src/assets/images/treks/trek4/trek4_3.jpg';
import * as trek5_1 from 'src/assets/images/treks/trek5/trek5_1.jpg';
import * as trek5_2 from 'src/assets/images/treks/trek5/trek5_2.jpg';
import * as trek5_3 from 'src/assets/images/treks/trek5/trek5_3.jpg';
import * as trek5_4 from 'src/assets/images/treks/trek5/trek5_4.jpg';
import * as trek5_5 from 'src/assets/images/treks/trek5/trek5_5.jpg';
import * as trek5_6 from 'src/assets/images/treks/trek5/trek5_6.jpg';
import * as trek5_7 from 'src/assets/images/treks/trek5/trek5_7.jpg';
import * as trek6_1 from 'src/assets/images/treks/trek6/trek6_1.jpg';
import * as photosIcon from 'src/assets/images/treks/photos.svg';
@Component({
    selector: 'app-treks',
    templateUrl: './treks.component.html',
    styleUrls: ['./treks.component.scss']
})
export class TreksComponent implements OnInit {
    public imagePhotos = photosIcon.default;
    public treks = [
        {
            title: 'treks.trek1.title',
            time: {h:0,m:45},
            price: '€30 / ',
            level: 'treks.level1',
            images: [
                trek1_1.default,
                trek1_2.default,
                trek1_3.default,
                trek1_4.default
            ],
            text: 'treks.trek1.text'
        },
        {
            title: 'treks.trek2.title',
            time: {h:1,m:40},
            price: '€58 / ',
            level: 'treks.level1',
            images: [
                trek2_1.default,
                trek2_2.default,
                trek2_3.default,
                trek2_4.default,
                trek2_5.default,
                trek2_6.default
            ],
            text: 'treks.trek2.text'
        },
        {
            title: 'treks.trek3.title',
            time: {h:2,m:15},
            price: '€69 / ',
            level: 'treks.level1',
            images: [
                trek3_1.default,
                trek3_2.default,
                trek3_3.default,
                trek3_4.default,
                trek3_5.default
            ],
            text: 'treks.trek3.text'
        },
        {
            title: 'treks.trek4.title',
            time: {h:2,m:35},
            price: '€77 / ',
            level: 'treks.level1',
            images: [
                trek4_1.default,
                trek4_2.default,
                trek4_3.default
            ],
            text: 'treks.trek4.text'
        },
        {
            title: 'treks.trek5.title',
            time: {h:3,m:10},
            price: '€95 / ',
            level: 'treks.level1',
            images: [
                trek5_1.default,
                trek5_2.default,
                trek5_3.default,
                trek5_4.default,
                trek5_5.default,
                trek5_6.default,
                trek5_7.default
            ],
            text: 'treks.trek5.text'
        },
        {
            title: 'treks.trek6.title',
            time: {h:4,m:0},
            price: '€122 / ',
            level: 'treks.level2',
            images: [
                trek6_1.default
            ],
            text: 'treks.trek6.text'
        },
    ];
    constructor(private ModalService: ModalService) { }

    ngOnInit(): void {
    }
    public showModal(images) {
        var list = images.map((x) => {
            return { img: x };
        });
        this.ModalService.triggerEvent([list, 0]);
    };
    public trekTime(trek){
        return trek.time.h?trek.time.m?'treks.time':'treks.hour':'treks.min';
    }

}
