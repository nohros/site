angular
  .module('site.contact', [
    'ui.router'
  ])

  .config(function($stateProvider) {
    $stateProvider.state('contact', {
      url: '/contact',
      views: {
        "header": {
          controller: 'TopBarCtrl',
          templateUrl: 'topbar/topbar.tpl.html'
        },
        "content": {
          controller: 'ContactCtrl',
          templateUrl: 'contact/contact.tpl.html'
        },
        "footer": {
          controller: 'FooterCtrl',
          templateUrl: 'footer/footer.tpl.html'
        }
      },
      data:{ pageTitle: 'Fale conosco' }
    });
  })

  .controller('ContactCtrl', function($scope) {

  });