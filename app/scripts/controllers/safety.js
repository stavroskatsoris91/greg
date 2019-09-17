'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:SafetyCtrl
 * @description
 * # SafetyCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('SafetyCtrl', function ($templateCache) {
    $templateCache.get('views/about.html');
    var Ctrl = this;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    Ctrl.safety = [{
      title:'Your safety is our concern',
      list:[
        'Safety Helmets',
        'Modern up-to-date equipment',
        'Specialist child stirrups',
        'First aid kit carried',
        'Certified First Aider',
        'Rider ability assessment',
        'Treks matched to experience'
      ],
      text:[
        'Riding at any standard has inherent risk that you may fall off and could be injured. Please note that by using my service you accept that risk and agree that Greg\'s Spetses Horses will not be liable for injury or damage to property.',
        'We therefore recommend that you ensure that you have adequate medical cover with your travel insurance. I also reserve the right to refuse accepting a booking if in my opinion the rider would be putting themselves, others or my horses at risk due to physical disability, behavioral or attitude issues, or appear to be under the influence of alcohol or drugs.'
        ]
    },
    // {
    //   title:'Do\'s and Don\'ts',
    //   list:[
    //     'Do bring a small rucksack with water and snacks for longer treks.',
    //     'Do wear sunblock because even in Spring and Autumn you can burn easily.',
    //     'Do wear longer shorts or leggings even in the Summer so you don\'t get sore legs from chaffing on the saddle.',
    //     'Do spray yourself with mosquito repellant as a precaution.',
    //     'You won\'t need a sun hat or cap because you will be wearing a safety helmet!',
    //     'Do not wear flipflops or strappy sandals (it is not safe footwear for riding and you may have to dismount and walk in places).',
    //     'Don\'t forget your camera!'
    //   ],
    //   text:[]
    // }
    {
      title:'Rules and Regulations',
      list:[
        'Always arrive at least five minutes before your lesson start time. Lessons will not be extended as this will affect the following student.',
        'If upon arrival you decide you do not wish to ride you will be required to pay for the number of horses originally booked as they are prepared and saddled waiting specifically for you.',
        'No feeding the horses or carrying treats and bags near the arena during the lessons. Horses will only be fed when the instructors allow you to do so.',
        'Helmets MUST be worn (no exceptions). All riders must wear long trousers or leggings and appropriate closed shoes or boots.',
        'For your own safety and that of the riders, children must not shout or run around close to the arena fencing.',
        'Children should not be left unsupervised before or after their lessons. We are only responsible for your child for the duration of their lesson'
      ],
      text:[]
    }
  ];
  });