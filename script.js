const form = document.getElementsByTagName("form")[0];
const message = document.getElementById("message");
const sendBtn = document.getElementById("send-btn");
const container = document.getElementsByClassName("container")[0];

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    form.style.display = "none";
    document.body.style.background = "white";
    container.style.display = "flex";
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