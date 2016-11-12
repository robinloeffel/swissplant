angular.module('swissPlant', ['pascalprecht.translate'])
    .config(function ($translateProvider) {
        /* @ngInject */
        $translateProvider.useStaticFilesLoader({
            prefix: '../json/locale-',
            suffix: '.json'
        }).useSanitizeValueStrategy('escape');
    })
    .controller('langCtrl', function ($scope, $translate) {
        /* @ngInject */
        determineLang();

        function determineLang() {
            if (localStorage.swissPlantLang) {
                $translate.use(localStorage.swissPlantLang);
            } else {
                var userLang = navigator.language;
                if (userLang.indexOf('de') > -1) {
                    $translate.use('de');
                    localStorage.swissPlantLang = 'de';
                } else {
                    $translate.use('en');
                    localStorage.swissPlantLang = 'en';
                }
            }
        }

        $scope.changeLang = function (langKey) {
            $translate.use(langKey);
            localStorage.swissPlantLang = langKey;
        };
    });
