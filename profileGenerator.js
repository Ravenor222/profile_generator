const readline = require('readline');


const survey = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

survey.question("What's ya name \n", (name) => {
    survey.question("Favourite activity \n", (activity) => {
        survey.question("What do you listen to while doing said activity? \n", (music) => {
            survey.question("whats your favourite meal \n", (meal) => {
                survey.question("Favourite food for that meal \n", (food) => {
                    survey.question("Which sport is your absolute favourite \n", (sport) => {
                        survey.question("Whats your superpower boi? \n", (superPower) => {
                            
                            console.log(`${name} loves to ${activity} while listening to ${music} and he eats ${food} at ${meal} and playing ${sport} at the same time, he can even ${superPower}`);
                        survey.close();
                        })

                    })

                })

            })

        })

    })

});


