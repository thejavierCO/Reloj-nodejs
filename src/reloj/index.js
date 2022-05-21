function isFloat(a){
  return getFloat(a)>0&&getFloat(a)<1?true:false;
}
function getFloat(a){
  return a-parseInt(a);
}

class Reloj{
  constructor(time){
    this.sm = time|0;
  }
  get sec(){
    return this.sm/1000;
  }
  set sec(a){
    this.sm = a*1000;
  }
  get min(){
    return this.sec/60;
  }
  set min(a){
    this.sm = (a*60)*1000;
  }
  get hour(){
    return this.min/60;
  }
  set hour(a){
    this.sm = ((a*60)*60)*1000
  }
}

module.exports = {
  Reloj,
  isFloat,
  getFloat
}