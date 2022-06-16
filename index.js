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