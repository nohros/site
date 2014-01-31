angular
  .module( 'site.topbar', [
    'ui.router',
    'nsTopBar'
  ])

  .controller('TopBarCtrl', function($scope) {
    $scope.menu = [{
      text: "Suporte" ,
      href: "#/suporte"
    }];
  });