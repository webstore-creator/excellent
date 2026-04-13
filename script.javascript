const webhookURL = "https://discord.com/api/webhooks/1493365597763797143/vwQHZhmopuSXdu-yzJXbHtYWUk1MA_OMMYDg2-FH1iF7gnAMz5CO4FdxmWD4j3YeoIZ9";
const ip = 'excellentsmp.mineserver.uno';

function sendRequest(){
  const discord=document.getElementById('discord').value;
  const mc=document.getElementById('minecraft').value;
  const rank=document.getElementById('rank').value;
  if(!discord||!mc){alert('Fill all fields');return;}
  fetch(webhookURL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({content:`🛒 **Purchase Request**\nDiscord: ${discord}\nMinecraft: ${mc}\nRank: ${rank}`})})
  .then(()=>alert('Request sent! Check Discord.'))
  .catch(()=>alert('Failed to send.'));
}

function sendItem(){
  const discord=document.getElementById('discord2').value;
  const mc=document.getElementById('minecraft2').value;
  if(!discord||!mc){alert('Fill all fields');return;}
  fetch(webhookURL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({content:`🛒 **Item Purchase**\nItem: Amethyst Pickaxe\nDiscord: ${discord}\nMinecraft: ${mc}\nPrice: 4.99 GEL`})})
  .then(()=>alert('Request sent!'))
  .catch(()=>alert('Failed to send.'));
}

fetch('https://api.mcsrvstat.us/3/'+ip)
.then(r=>r.json())
.then(d=>{
 const el=document.getElementById('serverStatus');
 if(d.online){el.innerHTML=`🟢 Online • ${d.players.online}/${d.players.max}`}
 else{el.innerHTML='🔴 Offline'}
})
.catch(()=>document.getElementById('serverStatus').innerText='Unavailable');
