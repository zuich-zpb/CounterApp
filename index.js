class Counter {
  constructor(values = {}) {
    this.startCount = values.startCount === undefined ? 0 : values.startCount;
    this.incrementPlus =
      values.incrementPlus === undefined ? 1 : values.incrementPlus;
    this.decrementMinus =
      values.decrementMinus === undefined ? 1 : values.decrementMinus;
    this.minUp = values.minUp === undefined ? -Infinity : values.minUp;
    this.maxDown = values.maxDown === undefined ? Infinity : values.maxDown;
    this.counter = this.startCount;
  }

  decrement() {
    const conclusionNumber = event.target.parentElement.querySelector(
      ".conclusion-number"
    );
    if (this.counter - this.decrementMinus >= this.minUp) {
      this.counter = this.counter - this.decrementMinus;
      conclusionNumber.innerText = this.counter;
    }
  }

  increment() {
    const conclusionNumber = event.target.parentElement.querySelector(
      ".conclusion-number"
    );
    if (this.counter + this.incrementPlus <= this.maxDown) {
      this.counter = this.counter + this.incrementPlus;
      conclusionNumber.innerText = this.counter;
    }
  }

  render() {
    const minusButton = document.createElement("button");
    minusButton.innerText = "<";
    minusButton.addEventListener("click", this.decrement.bind(this));

    const conclusion = document.createElement("output");
    conclusion.className = "conclusion-number";
    conclusion.append(this.counter);

    const plusButton = document.createElement("button");
    plusButton.innerText = ">";
    plusButton.addEventListener("click", this.increment.bind(this));

    const column = document.createElement("column");
    column.className = "button-column";
    column.append(minusButton, conclusion, plusButton);
    document.body.appendChild(column);

    return column;
  }
}

const count1 = new Counter({
  startCount: 0,
  incrementPlus: 1,
  decrementMinus: 1,
  minUp: 0,
  maxDown: 10
});

const count2 = new Counter({});
const count3 = new Counter({});

count1.render();
count2.render();
count3.render();
