/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.atendimento')
      .directive('switcher', switchDirective);
      //.directive('status', status);


  function switchDirective($timeout) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        ngModel: '='
      },
      template: function(el, attrs) {
        return '<div class="switch-container ' + (attrs.color || '') + '"><input type="checkbox" ng-model="ngModel"></div>';
      },
      link: function (scope, elem, attr) {
        $timeout(function(){
          var input = $(elem).find('input');
          input.bootstrapSwitch({
            size: 'small',
            onColor: 'success',
            offText: 'Não',
            onText: 'Sim'
          });
          input.on('switchChange.bootstrapSwitch', function(event, state) {
            scope.ngModel = state;
            scope.$apply();
          });

        });
      }
    };
    }
})();
