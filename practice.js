//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //used when you want a function to refer to a different object each time it is called

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      // Four Rules:
      //1. default = this refers to the global object (window)
      //2. when a function is called as a property on a parent obj, this refers to parent obj inside func
      //3. when a function is called w/ the new operator, this refers to the newly created obj inside that func
      //4. When a function is called using call or apply, this refers to the first argument passed to call or
            //apply. If the first argument is null or not an object, this refers to the global object.

  // 3) What is the difference between call and apply?

      //BOTH call a function that let you explicitly set the value of this.

      //THE APPLY method takes two arguments: an object to set 'this' to,
          //and an (optional) array of arguments to pass to the function
          //SYNTAX :: func.call(thisVal, [arg1, arg2, etc])

      //THE CALL method works exactly the same as apply, but you pass the
          //arguments individually rather than in an array
          //SYNTAX :: func.call(thisVal, arg1, agr2, etc)

  // 4) What does .bind do?

      //The bind() method creates a new function that, when called, has
          //its this keyword set to the provided value, with a given sequence
          //of arguments preceding any provided when the new function is called.
          //SYNTAX :: fun.bind(thisArg[, arg1[, arg2[, ...]]])


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property.
    //*Don't use 'user' instead use the 'this' keyword*

    var user = {
    username: 'theusername',
    email: 'the@email.com',
    getUsername: function() {
      return this.username;
    }
  }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

function Car(make, model, year) {

  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    return (this.move + 10);
  }

}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being
//returned from the Car function. You'll also need to use the 'this' keyword properly in order
//to make sure you're invoking moveCar on the right object (prius vs mustang).


//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the
//proper syntax that will allow for you to call the getYear function with the prius then the mustang
//objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)

getYear.call(prius);
getYear.call(mustang);


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

function getUsername () {
  console.log(this.username);

};




setTimeout(function () { return(getUsername.call(myUser)) }, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will
//the getUsername function return?

//Note(no tests)
  //Answer Here

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
