class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    
    this.intervalId = setInterval (() => {
      this.currentTime++;
      console.log(this.currentTime)
    },1000);
    
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return Math.floor(this.currentTime%60);
  }
  twoDigitsNumber(num) {
    if(num/10 < 1){
    return '0'+num;
    } else { return String(num);}
  } 
  stopClick() {}
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {}
}

let start = new Chronometer();

