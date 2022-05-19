let ms = 0;
let seg = 0;
let min = 0;
let hour = 0;

function Main(){
  ms++;
  if(ms===1000){seg++;ms=0;}
  if(seg===60){seg=0;min++;}
  if(min===60){min=0;hour++;}
  return [hour,min,seg,ms];
}

setInterval(()=>console.log(Main()),1);