'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:TreksCtrl
 * @description
 * # TreksCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
    .controller('TreksCtrl', function ($templateCache) {
        $templateCache.get('views/treks.html');
        var Ctrl = this;
        Ctrl.treks = [
            {
                title1: 'Trek 1',
                title2: 'Coastal Road',
                time: '45 min',
                price: '€30 / horse',
                level: 'All levels',
                text: 'From the stables we ride a 20 minute outbound trek along the high coastal road, over looking the beautiful view of the neighbouring private Island Spetsopoula. Break for photographs, then the return journey along the same route.'
            },
            {
                title1: 'Trek 2',
                title2: 'Panagia Elonas',
                time: '1h 40min',
                price: '€58 / horse',
                level: 'All levels',
                text: 'To Panagia Elonas (the Virgin Mary of Elonas). From the stables at the area known as \'Zastano\', we travel along the coastal road (1.5km). Then we turn off on to the country tracks through mountains to the beautiful church of Panagia Elonas. This outbound journey will take 40 minutes. On arrival we will rest for 20 minutes for refreshments (not included) and an opportunity to take photographs of the fantastic views. The return journey is 40 minutes along the same route.'
            },
            {
                title1: 'Trek 3',
                title2: 'Hara Estate',
                time: '2h 15min',
                price: '€69 / horse',
                level: 'All levels',
                text: 'To The Hara Estate. From the stables we ride a 55 minute outbound trek, travelling along the coastal road (1.5km) then we turn off on to the country track through the mountains. Along the route we will stop off at Panagia Elonas (10 mins) for photographs if wished, then we will head to The Hara Estate. Here we will take a 15 minute rest for photographs and refreshments (not included). The return journey is 55 minutes via the same route.'
            },
            {
                title1: 'Trek 4',
                title2: 'Hunters\' Refuge',
                time: '2h 35min',
                price: '€77 / horse',
                level: 'All levels',
                text: 'To Hunters\' Refuge. From the stables we ride a 60 minute outbound trek, along the coastal road (1.5km) then we turn off on to the country tracks through the mountains. We will make a stop on the hill of  Elonas (10 mins) if wished and also a stop at The Hara Estate (10 mins) for an opportunity to take photographs of the gorgeous views. We ride through pine forests to reach the Hunters\' Refuge where we will rest (15 mins) for photograhs and refreshments (not included). The return journey is 60 minutes via the same route.'
            },
            {
                title1: 'Trek 5',
                title2: 'Panagia Daskalaki',
                time: '3h 10min',
                price: '€95 / horse',
                level: 'All levels',
                text: 'To Panagia Daskalaki (Virgin Mary of Daskalaki). From the stables we ride a 75 minute outbound trek, along the coastal road (1.5 km) then we turn off on to the country tracks through the mountains. Along the way we will make stops at Panagia Elonas (10 mins), The Hara Estate (5 mins) and the Hunters\' refuge (5 mins) for photograph opportunities if wished. At our destination we will rest (20 mins) for refreshments (not included) and an opportunity to photograph the stunning views! This may be the most forested area of Spetses,  it offers the wonderful natural beauty of the pines, as well as a beautiful view. The return journey is 75 minutes via the same route.'
            },
            {
                title1: 'Trek 6',
                title2: 'Profitis Ilias',
                time: '4 hours',
                price: '€122 / horse',
                level: 'level experienced',
                text: 'To Profitis Ilias (the Prophet Elias, or Elijah. From the stables we ride a 1 hour 30 minute trek, going along the coastal road (1.5km) then turning off on to the country tracks through the mountains. Along the way we will visit Panagia Elonas (15 mins), The Hara Estate (5 mins) and The Hunters\' Refuge (5 mins). On reaching Panagia Daskalaki we will rest (20 mins), to take in the stunning scenery and an opportunity for photograhs and refreshments (not included). At the destination Profitis Ilias, the highest point of the Island, there will chance to rest (15 mins), for refreshments (not included) and for gorgeous photographs of the most fantastic views. The return journey is 1 hour 30 minutes via the same route.'
            },
        ];
        Ctrl.info = '*Any additional time required will be charged at €12.30 per half hour.';
    });
