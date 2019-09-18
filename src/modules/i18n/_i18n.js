import 'angular';
import 'angular-cookies';
import 'angular-translate';
import 'angular-translate-storage-local';
import 'angular-translate-storage-cookie';
import translations from '../data/translations';

angular.module('swissPlant', ['ngCookies', 'pascalprecht.translate'])
    .config(['$translateProvider', ($translateProvider) => {
        /* @ngInject */
        $translateProvider
            .translations('de', translations.german)
            .translations('en', translations.english)
            .preferredLanguage('de')
            .fallbackLanguage('en')
            .useLocalStorage()
            .useSanitizeValueStrategy(null);
    }])
    .controller('langCtrl', ['$translate', '$scope', ($translate, $scope) => {
        /* @ngInject */
        $scope.changeLang = (langKey) => {
            $translate.use(langKey);
        };
    }]);
