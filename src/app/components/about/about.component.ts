import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about=[
    'Greg is the owner of Greg\'s Spetses horses which was founded in 2016. He and his siblings grew up very close to nature with many pets and farm animals. His mum has had a love for horses since she was a little girl and started riding from a young age. His Grandfather was a farmer and a carriage driver, and he owned many horses throughout the years. So, although he has been around horses most of his life, it was at the age of thirteen that his passion for horses was ignited, when his dad gifted his mum a foal, Olivia. Shortly after Olivia’s arrival more horses were added to the family.',
    'After that he took it upon himself to become educated on all aspects of horsemanship, the horse’s groundwork and ridden training, their everyday care and welfare, to ensure the horses are happy and healthy on a daily basis. Greg completely trained all the horses himself, following a very thorough process of horsemanship that is as close to the horse’s natural way as possible. This ensures they are confident, reliable, content, but most important of all, safe to be ridden by riders of all ages and abilities.'
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
