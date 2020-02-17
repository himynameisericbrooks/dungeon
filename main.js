// var username = document.getElementById('usernameInput');
username.addEventListener('keypress', function enterKey(e) {
    if(e.keyCode == 13) {
        nameSave();
    };
}, false);
function nameSave() {
username = username.value;
    console.log(username)
};


var scenes = [
    // scene 0
    {
    location: 'Vegetable Field',
    mainText: 'Welcome, adventurer. What is your name?',
    choice1: 'Begin',
    choice1Result: function () {
        var username = document.getElementById('username').value;
        document.getElementById('choice2').style.display = 'inline-block';
        document.getElementById('username').style.display = 'none';
        document.getElementById('mainText').style.textAlign = 'left';
        document.getElementById('gameplay-bottom').style.display = 'inline-block';
        document.getElementById('body').style.backgroundImage = "url('../javascript-dungeon-crawler/img/smoke.jpg')";
        document.getElementById('nameDisplay').textContent =username
        if(username.length > 0) {        
        updateGame(scenes[1].location, scenes[1].mainText, scenes[1].prompt, scenes[1].choice1, scenes[1].choice1Result, scenes[1].choice2, scenes[1].choice2Result, scenes[1].illustration, scenes[1].description)
        }
            else {
                document.getElementById('username').style.border = '4px solid green';
                document.getElementById('mainText').innerHTML = "You must enter a name.";
            }
        },
    choice2: '',
    choice2Result: '',
    illustration: 'img/TTYAFUniShirtpants.png',
    description: 'This is you. Whether you like it or not.',

    },

    // scene 1
    {
    location: 'Your Cottage',
    mainText: 'While you were out in the field harvesting vegetables, your family disappeared and your cottage burned to the ground. You arrive at the charred rubble of your home, now surrounded by a crowd of passersby who stopped to speculate about what must have happened. An elderly neighbor tells you that they saw some shadowy figures sneak in through the back door just before the smoke started to fill the skies. Your neighbor also points you in the direction that they went. “East, toward the Wandering Hills,” he says. In a fit of rage,you take off running toward the hills. With tears streaming down your face, you sprint until the jabbing pain in your side won’t allow you to run anymore. As you start to slow down, you hear voices and laughter.',
    prompt: 'Do you charge over the next hill and fight whomever you find?',
    choice1: 'Yes',
    choice1Result: '',
    choice2: 'No',
    choice2Result: '',
    illustration: 'img/BurnedHouse.png',
    description: 'Your house is so burned.',
    }
]

// function to update page content and go to correct scene
function updateGame(location, mainText, prompt, choice1text, choice2text, choice1Result, choice2Result, illustration, description) {
    // update the page content
    document.getElementById('location').textContent = location;
    document.getElementById('mainText').textContent = mainText;
    document.getElementById('prompt').textContent = prompt;
    document.getElementById('choice1').textContent = choice1text;
    document.getElementById('choice1').onclick = choice2text;
    document.getElementById('choice2').textContent = choice1Result;
    document.getElementById('choice2').onclick = choice2Result;
    document.getElementById('illustration').src = illustration;
    document.getElementById('description').textContent = description;
}

updateGame(scenes[0].location, scenes[0].mainText, scenes[0].prompt, scenes[0].choice1, scenes[0].choice1Result, scenes[0].choice2, scenes[0].choice2Result, scenes[0].illustration, scenes[0].description);







// var scenes = [
//     // index 0    Done except for getting button to dissapear
//     {
//         title: 'Quest',
//         mainText: 'Start the Game',
//         description: 'This is you. Whether you like it or not.'
//         choice1: 'Yes',
//         choice1Result : function() {
//             changeScene(scenes[1].title, scenes[1].content, scenes[1].choice1, scenes[1].choice1Result, scenes[1].choice2, scenes[1].choice2Result)
//         },
//         choice2: 'Yes',
//         choice2Result : function() {
//             changeScene(scenes[1].title, scenes[1].content, scenes[1].choice1, scenes[1].choice1Result, scenes[1].choice2, scenes[1].choice2Result)
//         },
//     },
//     // index 1
//     {
//         title: 'The Tavern',
//         content: 'You enter a tavern and stuff happens',
//         choice1: 'Get food',
//         choice1Result : function() {
//             changeScene(scenes[2].title, scenes[2].content, scenes[2].choice1, scenes[2].choice1Result, scenes[2].choice2, scenes[2].choice2Result)
//         },
//         choice2: 'Run away',
//         choice2Result : function() {
//             document.getElementById(choice2).style.display = 'inline-block';
//             changeScene(scenes[2].title, scenes[2].content, scenes[2].choice1, scenes[2].choice1Result, scenes[2].choice2, scenes[2].choice2Result)
//         }
//     },
//     // index 2
//     {
//         title: 'You Lose',
//         content: 'You enter a tavern and stuff happens',
//         choice1: 'Get food',
//         choice1Result : function() {
//             document.getElementById(choice2).style.display = 'none';
//             changeScene(scenes[0].title, scenes[0].content, scenes[0].choice1, scenes[0].choice1Result, scenes[0].choice2, scenes[0].choice2Result)
//         },
//     },

// ];

// // Load in scene 0
// changeScene(scenes[0].title, scenes[0].content, scenes[0].choice1, scenes[0].choice1Result, scenes[0].choice2, scenes[0].choice2Result)



// // document.getElementById(choice1).style.display = 'inline-block';

// var gameOver = [

// ]

// function changeScene(title, content, choice1, choice1Result, choice2, choice2Result) {
// document.getElementById('sceneTitle').textContent = title;
// document.getElementById('sceneContent').textContent = content;
// document.getElementById('choice1').textContent = choice1;
// document.getElementById('choice1').onclick = choice1Result;
// document.getElementById('choice2').textContent = choice2;
// document.getElementById('choice2').onclick = choice2Result;
// }