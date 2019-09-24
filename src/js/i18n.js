import 'angular';
import 'angular-cookies';
import 'angular-translate';
import 'angular-translate-storage-local';
import 'angular-translate-storage-cookie';
import { german, english } from './langs.data.js';

angular.module('swissPlant', ['ngCookies', 'pascalprecht.translate'])
  .config(['$translateProvider', ($translateProvider) => {
    /* @ngInject */
    $translateProvider
      .translations('de', german)
      .translations('en', english)
      .preferredLanguage('de')
      .fallbackLanguage('en')
      .useLocalStorage()
      .useSanitizeValueStrategy(null);
  }])
  .controller('langCtrl', ['$translate', '$scope', ($translate, $scope) => {
    /* @ngInject */
    $scope.changeLang = (langKey) => {
      $translate.use(langKey);
      document.documentElement.lang = langKey + '-ch';
    };
  }]);
