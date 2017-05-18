(function() {
    'use strict';

    angular
        .module('myApp')
        .component('myComponent', myComponent());

    function myComponent() {
        var component = {
            templateUrl: 'my-component.template.html',
            controller: controller
        };

        return component;
    }

    controller.$inject = ['$http'];

    function controller($http) {
      var ctrl = this;

      ctrl.posts = [];

      ctrl.$onInit = function() {
        $http.get('https://jsonplaceholder.typicode.com/posts').then(function(response) {
           ctrl.posts = response.data;
        })
      }

      ctrl.addPost = function(post) {
        $http.post('https://jsonplaceholder.typicode.com/posts', {
          title: ctrl.newPost.title,
          body: ctrl.newPost.body
        }).then(function(response) {
           ctrl.posts.push(response.data)
           ctrl.newPost = null;
        })
      }

      ctrl.editPost = function(post, index) {
        $http.patch('https://jsonplaceholder.typicode.com/posts', {
          title: ctrl.somePost.title,
          body: ctrl.somePost.body
        }).then(function(response) {

           ctrl.newPost = null;
        })
      }

      ctrl.deletePost = function(post) {
        $http.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then(function() {
          // do something
        })
      }

    }
})();
