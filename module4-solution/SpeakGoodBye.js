// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2

(function (window) { //STEP6-Wrap, line1

// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
var byeSpeaker = {}; //STEP7-New Object

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
byeSpeaker.speak = function (name) { //STEP8-Attach Speak function, line1
  console.log(speakWord + " " + name); //STEP8-Attach Speak function, line2
}

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
window.byeSpeaker = byeSpeaker; //STEP9-Expose To Global

})(window); //STEP6-Wrap, line2