var footer = angular.module('footer', []);

footer.controller('footerController', function() {
  footer = this;
  footer.info = {
    version: '0.0.1',
    status: 'building'
  };
});

footer.directive('footerInfo', function() {
  return {
    restrict: 'E',
    templateUrl: './views/footerInfo.html'

  };
});
