const {Reloj,getFloat} = require("./src/reloj");

let num = 0;

setInterval(()=>{
    num++;
    const contador = new Reloj(num);
    console.log([
      contador.hour-getFloat(contador.hour),
      (getFloat(contador.hour)*60)-getFloat(getFloat(contador.hour)*60),
      (getFloat(getFloat(contador.hour)*60)*60)-getFloat(getFloat(getFloat(contador.hour)*60)*60),
      getFloat(getFloat(getFloat(contador.hour)*60)*60)*1000
    ]);
  },1);

// let ms = 7009900;
// let seg = 0;
// let min = 0;
// let hour = 0;

// function Main(){
//   ms++;
//   if(ms===1000){seg++;ms=0;}
//   else if(ms>1000){
//     seg=parseInt(ms/1000)
//     ms=0;
//   }
//   if(seg===60){seg=0;min++;}
//   else if(seg>60){
//     min=parseInt(seg/60)
//     seg=0;
//   }
//   if(min===60){min=0;hour++;}
//   else if(min>60){
//     hour=parseInt(min/60)
//     min=0;
//   }
//   return [hour,min,seg,ms];
// }

// setInterval(()=>console.log(Main()),1);