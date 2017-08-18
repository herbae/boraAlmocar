angular.module('starter.controllers', [])

.controller('AlmocoCtrl', function($scope, Chats) {
  var self = this;
self.nota = 10;
  self.existeSala = false;
  self.contatos = Chats.all();
  self.options = {
        showSelectionBar: true,
        ceil: 5
    }
  self.restaurantes = [
      {
        nome: "Govinda", nota: 0
      },
      {
        nome: "Salsalito", nota: 0
      },
      {
        nome: "Reino Vegetal", nota: 0
      },
      {
        nome: "Conexão Filé e Folhas", nota: 0
      },
      {
        nome: "Franz Café", nota: 0
      }
    ];

  self.criarSala = function() {
    self.existeSala = true;
  }

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
