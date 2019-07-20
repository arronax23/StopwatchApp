class Stopwatch1 {
  constructor() {
    this.start = function() {
      this.date = new Date();
      this.startTime = this.date.getTime();
      console.log(this.startTime);
    };

    this.stop = function() {
      this.date = new Date();
      this.stopTime = this.date.getTime();
      console.log(this.stopTime);
    };

    this.result = function() {
      let duration = (this.stopTime - this.startTime) / 1000;
      return duration + "s";
    };

    this.resultLive = function() {
      let duration = (Date.now() - this.startTime) / 1000;
      return duration + "s";
    };
  }
}

class Stopwatch2 {
  constructor() {
    this.start = function() {
      this.startTime = Date.now();
      console.log(this.startTime);
    };

    this.stop = function() {
      this.stopTime = Date.now();
      console.log(this.stopTime);
    };

    this.result = function() {
      let duration = (this.stopTime - this.startTime) / 1000;
      return duration + "s";
    };
  }
}

let stopwatch1 = new Stopwatch1();
let stopwatch2 = new Stopwatch2();
console.log("Stopwatch App");

let startBtn = document.querySelector(".btn-success");
let stopBtn = document.querySelector(".btn-danger");
let spinners = document.querySelector(".spinners");
let time = document.querySelector(".time");
let running;

startBtn.addEventListener("click", function() {
  spinners.style.display = "block";
  stopwatch1.start();
  time.textContent = "";
  running = true;
});

stopBtn.addEventListener("click", function() {
  if (running) {
    spinners.style.display = "none";
    stopwatch1.stop();
    time.textContent = stopwatch1.result();
    running = false;
  } else {
    time.textContent = "0s";
  }
});

setInterval(function() {
  if (running) time.textContent = stopwatch1.resultLive();
}, 100);
