angular.module('swissPlant', ['pascalprecht.translate'])
    .config(function($translateProvider) {
        /* @ngInject */
        $translateProvider.useStaticFilesLoader({
                prefix: '../json/locale-',
                suffix: '.json'
            })
            .preferredLanguage('de')
            .fallbackLanguage('en')
            .useSanitizeValueStrategy('escape');
    })
    .controller('langCtrl', function($scope, $translate) {
        /* @ngInject */
        determineLang();

        function determineLang() {
            if (localStorage.swissPlantLang) {
                $translate.use(localStorage.swissPlantLang);
            } else {
                if (navigator.language.match(/de/g)) {
                    $translate.use('de');
                    localStorage.swissPlantLang = 'de';
                } else {
                    $translate.use('en');
                    localStorage.swissPlantLang = 'en';
                }
            }
        }

        $scope.changeLang = function(langKey) {
            $translate.use(langKey);
            localStorage.swissPlantLang = langKey;
        };
    });
