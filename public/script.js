const form = document.getElementsByTagName("form")[0];
const message = document.getElementById("message");
const sendBtn = document.getElementById("send-btn");
const container = document.getElementsByClassName("container")[0];
const username = document.getElementById("user-name");
const messageContainer = document.getElementsByClassName("message-container")[0];
const userHead = document.getElementsByClassName("user-head")[0];

var socket = io();

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    form.style.display = "none";
    document.body.style.background = "white";
    container.style.display = "flex";
    userHead.innerText = `Hi ${username.value}, Welcome to our chat room.`
})

function enableBtn()
{
   
    if(message.value.length>0)
    {
        sendBtn.style.display = "block";
    }
    else
    {
        sendBtn.style.display = "none";
    }
  
}

sendBtn.addEventListener("click",(e) => {
    e.preventDefault();
    let data = {
        id: socket.id,
        username: username.value,
        message: message.value,
    }

    socket.emit("chat message", data);
    appendMessage(data, "sender");
  
    sendBtn.style.display = "none";
})

socket.on('emit message', (data) => { // io emit 
    if(data.id !== socket.id)
    {
        appendMessage(data, "receive");
    }
})

function appendMessage(data, type)
{
    let div = document.createElement("div");

    if(type == "sender")
    {
        div.className = "sender";
        div.innerHTML = `<p class="username">${data.username}</p>
        <p class="text">${data.message}</p>`

        message.value = "";
    }
    else
    {
        div.className = "receive";
        div.innerHTML = `<p class="username">${data.username}</p>
        <p class="receive-text">${data.message}</p>`

        message.value = "";
    }
    messageContainer.appendChild(div);
    

    messageContainer.scrollTop = messageContainer.scrollHeight;
}