//The “Hitchhiker’s Guide to the Galaxy” Game
//Usage: Use a combination of simple conditional, nested if/else if, and switch statements

let answer = prompt("Are you ready to play the game? ");

if (answer === "yes") {
    alert(" You are in a dark, dingy, and humid cave searching for the lost treasure of\n Captain Chingadera. You are disoriented, lost, hungry and extremely thirs\n You see a speck of light in the distance ahead of you, something shimmering to\nyour right, and the sound of running water to your left. Your back is against\n the wall.");

    let way = prompt("Which direction would you like to head \(please enter forward, left, or right\) ");
    switch (way) {
        case "left" :
                alert("Your thirst has gotten the better of you. You trip on a rock, hit your\n head, and fall into a pool of water and drown!");
                break;
        case "forward" :
                alert("You walk 100 yards and safely make your way out of the cave");
                break;
        case "right" :    
                alert("You found the gold! You walk into a small room and see thousands of\n gold coins, jewels, chalices, and more. You jump into the pile of gold in\n celebration and immediately a hidden door slams down and traps you in the room \n forever!");
                break;
         default :
                alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you\n shall now burn in the hot excoriation for lifeless lowlifes for not choosin\n the correct option.");
    }
    
       let rategame = parseInt(prompt("Thank you for playing with us. Would you like to rate the game between 1 and 10? "));
       if (rategame < 1 || rategame > 10) {
            alert("Thank you for step by, I hope see you again soon, bye !");    
       }
       else if (rategame >= 6 && rategame <= 10) {
            alert("Do you want to play again? !");
       }
       else if (rategame >= 1 && rategame <= 5) {
        alert("Thank you for play with us, we are working hard to improve the game !");
       }
       
}
else {
    alert("Thank you for stopping by, we hope see you again soon, bye !");    
}


