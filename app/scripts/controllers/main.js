'use strict';

angular.module('myClinerApp')
  .controller('MainCtrl', function ($scope) {



    $scope.quotes = [
       '1 + 1 = No homo',
       'Best comeback to an insult: “Ur face is” - whatever the previous person called you - This should actually just be the result of an Insult Generator',
       'WE ARE GONE FUCK SHIT UP DOWN THERE!!!',
       'its kinda like taking a school trip without the teachers or chaperones!!!',
       'I’ve got a stitch guy',
       'ill be bringing a nice bottle of grape vodka and jay-mo!!!',
       'u damn ppl with fake jobs that just sit on a computer all day and chat back and forth kill my damn inbox everyday lol...........ill get u fuckers.......and ya im wayyyyy down to camp!!!',
       'you guys rip on me 13 or 14 more times, i’m outta here',
       'I may have just sharted',
    ];


    $scope.workout = [
        'Right arm bicep curls - 1000 reps',
        'End workout'

    ]

    $scope.facts = [
        'Abraham Lincoln founded Lincoln town cars',
        'Argentina is in Europe',
        'Its gotta be ur bull',
        'I HAVE WHITE PANTS',
        'I HAVE MULTIPLE PAIRS of WHITE PANTS',
        'The capital of the good ol’ US of A is Shartlesville'
    ];

    $scope.tatoos = [];

    $scope.food = [
        'pizza',
        'mound of ketchup'
    ];
    
     $scope.texts = [
     		'testing'
     ];

    $scope.nav = [];


    $scope.tabs = [
        { title:'Workout plan', content:$scope.workout },
        { title:'Quotes', content:$scope.quotes},
        { title:'Tattoo ideas', content:$scope.tatoos},
        { title:'Food ideas', content:$scope.food},
        { title:'GPS navigator', content:$scope.nav},
        { title:'Fun facts', content:$scope.facts},
        { title:'Texts', content:$scope.texts}
    ];



});
