'use strict';
/**
 * @ngdoc directive
 * @name gregApp.directive:metaData 
 * @description Generates meta data for social meta tags in <head>
 * # header
 */
angular.module('gregApp').directive('metaData', function () {

  return {
    controllerAs: 'meta',
    bindToController: true,
    controller: function ($location, $rootScope) {
      var meta = this;
      
      var baseUrl = $location.$$protocol + '://' + $location.$$host;
      /**
       * @function setMetaDefaults
       * @description Resets all meta data to defaults
       */
      var title = 'Greg\'s Spetses Horses | Do something different while visiting Spetses!',
        description = 'Try horse trekking to see the island’s countryside and enjoy the panoramic views of the sparkling sea from above.',
        location = $location.$$absUrl,
        image = baseUrl + '/images/background/home.jpg';
      function initMeta() {
        location = $location.$$absUrl;
        meta.data = {
          type: 'website',
          name: 'gregsspetseshorses',
          brand: 'gregsspetseshorses',
          twitter: '@GregoryThimaras',
          fallback: true,
          title: title,
          image: image,
          location: location,
          fbDescription: description,
          twDescription: description,
          keywords: 'spetses, horse riding, horseback riding, horseback trekking, horse trekking, horse, horse riding, horse riding lessons, picnic',
          showImageDimensions: false
        };
        document.title = title;
      }
      $rootScope.$on('$routeChangeSuccess', function () {
        initMeta();
      });
      this.$onInit = function () {
        initMeta();
      };
      initMeta();
    }
  };
});