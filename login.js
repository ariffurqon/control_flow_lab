/*Create a userLogin object with one key for a user's name and one key for the user's password. 
Just make up a user name and password. Write a code snippet that prompts the user for their password with a message customized to the user. 
For example, if the user name you created is octocat_rules, the message should be "Enter password for user octocat_rules."

Extend your previous snippet to check whether the password the user gives matches the password in the userLogin object. 
The snippet should communicate whether the passwords matched to the user with console logs or JavaScript alert.
*/

var userLogin = {
    userName : "arif",
    password : "furqon"
}

var userInput = prompt("enter password for" + " " + userLogin.userName);

if (userInput !== userLogin.password){
        alert("invalid password, please enter the correct one");
    } 
    else {
       var signInPrompt = ("Hello" + " " + userLogin.userName + "you've been signed in!");
    		alert(signInPrompt);
    }


console.log(userInput);