const appDatabase = [
    {name:"photoshop", minRam:"8"},
    {name:"illustrator", minRam:"8"},
    {name:"premiere-pro", minRam:"16"},
    {name:"blender", minRam:"4"},
    {name:"davinci", minRam:"16"}
]
// console.log(appDatabase.length)

const deviceRam = document.getElementById("ram");
const deviceOS = document.getElementById("os");
const softwareReq = document.getElementById("software");
const btn = document.getElementById("show-btn");
const resultDiv = document.querySelector(".result");

let counter = 0

btn.addEventListener("click", check);

// check function
function check(){
    // console.log(deviceRam.value)
    // console.log(deviceOS.value)
    // console.log(softwareReq.value)
    if(counter>0){
        document.querySelector(".message").remove();
        document.querySelector(".message-image").remove();
    }
    appDatabase.forEach((i) => {
        if(softwareReq.value === i.name){
            if(parseInt(deviceRam.value) >= parseInt(i.minRam)){
                return showResult(true);
            }else{
                return showResult(false);
            }
        }
    })
}

// resulut displaying function
function showResult(res){
    let msgEl = document.createElement("h3")
    msgEl.className = "message"
    let gifEl = document.createElement("img")
    gifEl.className = "message-image"
    if(res){
        // console.log("will work")
        msgEl.innerHTML = "Software will Works Smoothly On Your Device";
        msgEl.style.color = "green"
        gifEl.src = "https://media.giphy.com/media/kz6cm1kKle2MYkHtJF/giphy.gif"        
    }else{
        // console.log("will not work")
        msgEl.innerHTML = "Software will NOT work Smoothly On Your Device";
        msgEl.style.color = "red"
        gifEl.src = "https://media.giphy.com/media/bPCwGUF2sKjyE/giphy.gif" 
    }
    resultDiv.appendChild(msgEl)
    resultDiv.appendChild(gifEl)
    counter++;
}

