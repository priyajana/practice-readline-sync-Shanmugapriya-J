const readline = require("readline-sync");

let user_name = readline.question("Hello, What is your name? \n");
let question = readline.question("Greetings, "+user_name+ "! Shall we play a knowledge quiz? Y or N \n");
let correct_answers=0;
if(question=="Y" || question=="y")
    {
        console.log("Lets test your knowledge on Values, Datatypes and Operations!\n");
        // Q1
        let q1 = readline.questionInt("Identify the value in the code sample --> let year = 2025 \n");
            if (q1 === 2025){
                console.log("Well done!\n");
                correct_answers+=1;
            }
            else{
                console.log("The correct answer is 2025.\n");

            }
        // Q2
        let q2 = readline.question("What is the datatype of the above variable? \n");
            if (q2 == "Number" || q2 == "number"){
                console.log("Good Job!\n");
                correct_answers+=1;
            }
            else {
                console.log("The correct answer is Number.\n");
                    }
        // Q3
        let q3 = readline.
        questionInt("What would this code snippet print ?\n let year = 2025;\n let a = 3;\n let new_year = a + year\n console.log(new_year);\n"); 
            if(q3===2028){
                console.log("Well done!");
                correct_answers+=1;
            }
            else{
                console.log("The correct answer is 2028");
            } 
        //Q4
        console.log("What would this evaluate to?\n");
        let q4 = readline.question("\"0\"== 0 \n"+"True or False?\n");
       
            if(q4==="false")
                {
                    console.log("Good Job !")
                    correct_answers+=1;
                }
            else
            {
                console.log("The correct answer is false.")
            }
        console.log("You have answered "+correct_answers+" out of 4 questions correct!\nWell Played!");
    }
else
{
    console.log("Nice meeting you! Bye!");
}