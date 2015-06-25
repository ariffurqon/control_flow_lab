/*Exercise 1: Sing!

Hint: Be mindful of infinite loops. They will crash your browser, and you'll lose your snippets! 
When you're working with a loop that might not end, keep a copy of your code in Sublime Text, too.

Write code that console logs the "Bottles of beer on the wall" song:

5 bottles of beer on the wall,
5 bottles of beer!
Take one down and pass it around,
4 bottles of beer on the wall!
How would you fix "1 bottles of beer"?
How would you change "0" to "No more"?
Use a JavaScript prompt to ask the user how many verses they want to hear.
*/

var userInput = prompt("How many verses of the song do you want to hear?");
  for (i = userInput; i > 0 ; i--) {
       j = i - 1;
            if (i != 1) { 
                  iLine = "bottles"; 
            } else { 
                  iLine = "bottle";
            }
            
            if (j != 1) {
                  jLine = "bottles";
            } else {
                  jLine = "bottle";
            }
    
    console.log(i + " " + iLine + " of beer on the wall,");
    console.log(i + " " + iLine + " of beer!");
    console.log("Take one down and pass it around,");
    
    if (j != 0) {
      console.log(j + " " + jLine + " of beer on the wall.");
    } else {
      console.log("No more bottles of beer on the wall!");
    }
}

//console.log(userInput);
