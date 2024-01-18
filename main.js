const customName = document.getElementById("customname");
const uK = document.getElementById("uk");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

randomize.addEventListener("click", storyGenerator);

function storyGenerator() {
    randomIndex = Math.round(Math.random() * 4);
    randomTemp = Math.floor(Math.random() * 100) + 1;
    if(randomIndex >= 4) randomIndex/=4;
    let cName = "Athrav";
    if(customName.value !== ""){
        cName = customName.value;
    }
    
    const uk = [`This is ${cName} reporting from uk 0 ${randomTemp} in Farehnite`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. uk 1 ${randomTemp} in Farehnite`,`This is uk 2 ${randomTemp} in Farehnite Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,`This is uk 3 ${randomTemp}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. in Farehnite`]
    const us = [`This is ${cName} reporting from us 0 ${randomTemp} in Centigrade`, `This is us 1 ${randomTemp} in Centigrade`,`This is us 2 ${randomTemp} in Centigrade`,`This is us 3 ${randomTemp} in Centigrade`]

    if(uK.checked){
        story.textContent = uk[randomIndex];
    }else{
        story.textContent = us[randomIndex];
    }
    story.style.backgroundcolor = "orange"
    story.style.visibility = 'visible';
}