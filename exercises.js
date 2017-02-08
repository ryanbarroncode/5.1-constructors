console.log($);
// Hey Iron Yard Hackers! Enjoy!
// Make sure to open your js consoles!

//          __  _ ___ __  _
//   __  __/ /_(_) (_) /_(_)__  _____
//  / / / / __/ / / / __/ / _ \/ ___/
// / /_/ / /_/ / / / /_/ /  __(__  )
// \__,_/\__/_/_/_/\__/_/\___/____/

// a simple "it" function for naming groups of expectations
function it(description, contents){
  console.log('\n\n"It '+ description + '"');
  contents();
}

// A simple function for expecting values
// Ex: expect(kepler.color).toBe('red'); // should return true
function expect(target) {
  return {
    toBe: function(expectation) {
      if (target === expectation) {
        console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation );
        return true;
      } else {
        console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation );
        return false;
      }
    }
  }
}

//                          __                  __
//   _________  ____  _____/ /________  _______/ /_____  __________
//  / ___/ __ \/ __ \/ ___/ __/ ___/ / / / ___/ __/ __ \/ ___/ ___/
// / /__/ /_/ / / / (__  ) /_/ /  / /_/ / /__/ /_/ /_/ / /  (__  )
// \___/\____/_/ /_/____/\__/_/   \__,_/\___/\__/\____/_/  /____/
//
// Only add code to *THIS* section!


// it("should make Kepler happy when Dan pets him", function(){
//   expect(kepler.status).toBe('normal');
//   dan.pet(kepler);
//   expect(kepler.status).toBe('happy');
// });

//Make the test code above work correctly by making a constuctor

// function declaration (shorter way to express function definition)
// var $ = require('jquery');

function Dog(dog){
  if(!dog){
    dog = {};
  }
  var defaults = {hungry: true, status: 'normal'};
  var dogConfig = $.extend({}, defaults, dog);
  console.log(dogConfig);

  this.status = dogConfig.status;
  this.color = dogConfig.color;
  this.hungry = dogConfig.hungry
  // if(dog.hungry === false){
  //   this.hungry = false; //construtor defaults. look in notes.
  // }else{
  //   this.hungry = true; //construtor defaults. look in notes.
  // };

  console.log(dog);
}

function Human(config){
  var defaults = {cool: false};
  var humanConfig = $.extend({}, defaults, config);

  this.pet = function(dog){
    dog.status = 'happy';
    console.log("pet was run");
  }
  this.feed = function(dog){
    dog.hungry = false;
    console.log('pet was fed');
  }

  this.cool = humanConfig.cool;
}


// function definition
// var Dog = function(){
//
// };



// ????????
// ????????
// ????????


//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

var kepler = new Dog({
  color: "red",
  hungry: false
});

var moonshine = new Dog({
  color: "blue-red"
});

var atticus = new Dog();


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

var dan = new Human();

var faith = new Human({
  cool: true
});


//                     __           __  __    _                             __
//    ____ ___  ____ _/ /_____     / /_/ /_  (_)____   _      ______  _____/ /__
//   / __ `__ \/ __ `/ //_/ _ \   / __/ __ \/ / ___/  | | /| / / __ \/ ___/ //_/
//  / / / / / / /_/ / ,< /  __/  / /_/ / / / (__  )   | |/ |/ / /_/ / /  / ,<
// /_/ /_/ /_/\__,_/_/|_|\___/   \__/_/ /_/_/____/    |__/|__/\____/_/  /_/|_|
//
// Don't edit this section. Instead make these tests pass by writing
// constructors in the constructor section above ;D

it("should make Kepler happy when Dan pets him", function(){
  expect(kepler.status).toBe('normal');
  dan.pet(kepler);
  expect(kepler.status).toBe('happy');
});

it("should make Kepler red", function(){
  expect(kepler.color).toBe('red');
});

it("should make Moonshine hungry and Kepler not hungry", function(){
  expect(moonshine.hungry).toBe(true);
  expect(kepler.hungry).toBe(false);
});

it("should make Moonshine no longer hungry when you feed him", function(){
  faith.feed(moonshine);
  expect(moonshine.hungry).toBe(false);
});


it("should not affect Atticus and Moonshine's owner properties when setting Dan as Kepler's owner ", function(){
  kepler.owner = dan;
  expect(moonshine.owner).toBe(undefined);
  expect(atticus.owner).toBe(undefined);
});

it("should make Faith cool and Dan not cool", function(){
  kepler.owner = dan;
  expect(faith.cool).toBe(true);
  expect(dan.cool).toBe(false);
});
