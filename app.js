var app = angular.module('PuppyStore', ['ui.router']);

app.config(function ($stateProvider) {

    $stateProvider.state('home', {
        url: '/home',
        template: '<h1>Welcome to the puppy store!</h1>',
        controller: 'HomePageController'
    });

    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'about.html',
        controller: 'AboutPageController'
    });

    $stateProvider.state('puppy', {
        url: '/puppies/:breed',
        templateUrl: 'puppy.html',
        controller: 'PuppyController'
    });

    $stateProvider.state('puppy.about', {
        url: '/about',
        templateUrl: 'about-puppy.html',
        controller: 'AboutPuppyController'
    });

    $stateProvider.state('puppy.gallery', {
        url: '/gallery',
        templateUrl: 'gallery-puppy.html',
        controller: 'GalleryPuppyController'
    });

});

app.controller('HomePageController', function ($scope) {
    console.log('Ran controller!');
});

app.controller('AboutPageController', function ($scope) {
    $scope.favoriteThing = 'Puppies!';
});

app.controller('PuppyController', function ($scope, $stateParams, PuppyData) {
    $scope.puppy = PuppyData[$stateParams.breed]
});

app.controller('AboutPuppyController', function ($scope, $stateParams, PuppyData) {
});

app.controller('GalleryPuppyController', function ($scope, $stateParams, PuppyData) {
});

app.factory('PuppyData', function () {

    var puppies = {};

    puppies.golden = {
        name: 'Golden Retriever',
        description: 'Joe\'s favorite dog. Sheds a lot, but totally worth it. Best friend forever. If Superman had a dog, it would be this one. As American as hot dogs and baseball. If you don\'t like Goldens, you hate basically America and also happiness.',
        imageUrl: 'images/golden.jpg'
    };

    puppies.pug = {
        name: 'Pug',
        description: 'Proof that being dopey is endearing. Struggles to breath often, all-around stupid as hell, but extremely lovable anyway.',
        imageUrl: 'images/pug.jpg'
    };

    puppies.doodle = {
        name: 'Goldendoodle',
        description: 'Like Hansel: so hot right now. This designer breed is currently trending because they are somewhat hypo-allergenic, intelligent and look like teddy bears. Other breeds never stood a chance.',
        imageUrl: 'images/doodle.jpg'
    };

    puppies.corgi = {
        name: 'Corgi',
        description: 'Notoriously sassy and strong-willed -- a very cat-like dog. Has a history of being a herding dog, still tries to herd other dogs. Tendency to sleep on their back, in the sun.',
        imageUrl: 'images/corgi.jpg'
    };

    return puppies;

});