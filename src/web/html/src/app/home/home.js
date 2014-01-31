angular
  .module( 'site.home', [
    'ui.router'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'home', {
      url: '/home',
      views: {
        "header": {
          controller: 'TopBarCtrl',
          templateUrl: 'topbar/topbar.tpl.html'
        },
        "content": {
          controller: 'HomeCtrl',
          templateUrl: 'home/home.tpl.html'
        },
        "footer": {
          controller: 'FooterCtrl',
          templateUrl: 'footer/footer.tpl.html'
        }
      },
      data:{ pageTitle: 'Home' }
    });
  })

  .controller( 'HomeCtrl', function HomeController( $scope ) {
  });

