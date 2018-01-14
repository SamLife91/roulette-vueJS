<template>
  <div class="hello">
    <header class="header">
      <h1>
        roulette
      </h1>
      <ul v-if="statusBar">
        <li>{{userName}}</li>
        <li>{{userCredit}}</li>
      </ul>
    </header>

    <div class="main container">
      <section class="section step0" v-show="stepZero">
        <div class="form-group">
          <label for="">Name:</label>
          <input type="text" class="form-control" v-model="userName">
        </div>
        <div class="form-group">
          <label for="">Enter Credit:</label>
          <input type="text" class="form-control" v-model.number="userCredit">
        </div>
        <p v-if="userName && userCredit">
          Your name is <strong>{{userName}}</strong> and you enter the game with <strong>{{userCredit}}</strong> Credit
        </p>
        <div class="form-group">
          <button class="btn btn-primary col-xs-12" @click="chooseType()">Confirm</button>
        </div>
      </section>

      <section class="section step1" v-show="stepOne">

        <div class="col-xs-12">
          <div class="col-xs-4 col-sm-4">
            <h4 class="bet_type_title">
              Red/Black
            </h4>
            <button class="btn btn-primary" @click="initGameType(redOrBlackGame=true)">enter</button>
          </div>
          <div class="col-xs-4 col-sm-4">
            <h4 class="bet_type_title">
              Odd/Even
            </h4>
            <button class="btn btn-primary" @click="initGameType(evenOrOddGame=true)">enter</button>
          </div>
          <div class="col-xs-4 col-sm-4">
            <h4 class="bet_type_title">
              High/Low
            </h4>
            <button class="btn btn-primary" @click="initGameType(highOrLowGame=true)">enter</button>
          </div>
          <div class="col-xs-4 col-sm-4">
            <h4 class="bet_type_title">
              Columns
            </h4>
            <button class="btn btn-primary" @click="initGameType(columnsGame=true)">enter</button>
          </div>
          <div class="col-xs-4 col-sm-4">
            <h4 class="bet_type_title">
              Dozens
            </h4>
            <button class="btn btn-primary" @click="initGameType(dozensGame=true)">enter</button>
          </div>
        </div>
        <button class="btn-danger col-xs-12">back</button>
      </section>

      <section v-if="redOrBlackGame">
        <h4>Red or Black</h4>
        <div class="col-xs-12" v-if="entryBet">
          <div class="form-group">
            <label for="">Type bet amount</label>
            <input type="text" class="form-control" v-model.number="bet">
          </div>
          <div class="form-group">
            <input type="radio" id="selectRed" value="red" v-model="selectedColor">
            <label for="selectRed">Red</label>
            <br>
            <input type="radio" id="selectBlack" value="black" v-model="selectedColor">
            <label for="selectBlack">Black</label>
            <br>
          </div>
          <div class="form-group">
            <button class="btn-primary" @click="colorGame()">play</button>
          </div>  
        </div>
        <div class="col-xs-12" v-if="result">
          <p class="col-xs-12">
            Your Bet: {{selectedColor}}
          </p>
          <p class="col-xs-12">
            Draw: {{resultNumber}} - {{resultColor}}
          </p>
          <p class="col-xs-12">
            {{gameResult}}
          </p>
          <div class="form-group">
            <button class="btn-primary col-xs-12" @click="playAgain()">Play Again</button>
          </div>
        </div>
      </section>

      <section v-if="evenOrOddGame">
        <div class="col-xs-12" v-if="entryBet">
          <div class="form-group">
            <label for="">Type bet amount</label>
            <input type="number" class="form-control" v-model.number="bet" number>
          </div>
          <div class="form-group">
            <input type="radio" id="selectEven" value="even" v-model="selectNumberType">
            <label for="selectEven">even</label>
            <br>
            <input type="radio" id="selectOdd" value="odd" v-model="selectNumberType">
            <label for="selectOdd">odd</label>
            <br>
          </div>
          <div class="form-group">
            <button class="btn-primary" @click="evenOddGame()">play</button>
          </div>  
        </div>
        <div class="col-xs-12" v-if="result">
          <p class="col-xs-12">
            Your Bet: {{selectNumberType}}
          </p>
          <p class="col-xs-12">
            Draw: {{resultNumber}} - {{drawNumberType}}
          </p>
          <p class="col-xs-12">
            {{gameResult}}
          </p>
          <div class="form-group">
            <button class="btn-primary col-xs-12" @click="playAgain()">Play Again</button>
          </div>
        </div>
      </section>

      <section v-if="highOrLowGame">
        <div class="col-xs-12" v-if="entryBet">
          <div class="form-group">
            <label for="">Type bet amount</label>
            <input type="number" class="form-control" v-model.number="bet" number>
          </div>
          <div class="form-group">
            <input type="radio" id="selectHigh" value="high" v-model="selectHighLow">
            <label for="selectEven">high</label>
            <br>
            <input type="radio" id="selectLow" value="low" v-model="selectHighLow">
            <label for="selectOdd">low</label>
            <br>
          </div>
          <div class="form-group">
            <button class="btn-primary" @click="evenOddGame()">play</button>
          </div>
        </div>
        <div class="col-xs-12" v-if="result">
          <p class="col-xs-12">
            Your Bet: {{selectHighLow}}
          </p>
          <p class="col-xs-12">
            Draw: {{resultNumber}}
          </p>
          <p class="col-xs-12">
            {{gameResult}}
          </p>
          <div class="form-group">
            <button class="btn-primary col-xs-12" @click="playAgain()">Play Again</button>
          </div>
        </div>
      </section>

      <section v-if="columnsGame">
        <div class="col-xs-12" v-if="entryBet">
          <div class="form-group">
            <label for="">Type bet amount</label>
            <input type="number" class="form-control" v-model.number="bet" number>
          </div>
          <div class="form-group">
            <input type="radio" id="selectCol1" value="1" v-model="selectColumn">
            <label for="selectCol1">1</label>
            <br>
            <input type="radio" id="selectCol2" value="2" v-model="selectColumn">
            <label for="selectCol2">2</label>
            <br>
            <input type="radio" id="selectCol3" value="3" v-model="selectColumn">
            <label for="selectCol3">3</label>
          </div>
          <div class="form-group">
            <button class="btn-primary" @click="columnGame()">play</button>
          </div>
        </div>
        <div class="col-xs-12" v-if="result">
          <p class="col-xs-12">
            Your Bet: {{betColumn}}
          </p>
          <p class="col-xs-12">
            Draw: {{resultNumber}}
          </p>
          <p class="col-xs-12">
            {{gameResult}}
          </p>
          <div class="form-group">
            <button class="btn-primary col-xs-12" @click="playAgain()">Play Again</button>
          </div>
        </div>
      </section>

      <section v-if="dozensGame">
        <div class="col-xs-12" v-if="entryBet">
          <div class="form-group">
            <label for="">Type bet amount</label>
            <input type="number" class="form-control" v-model.number="bet" number>
          </div>
          <div class="form-group">
            <input type="radio" id="dozen1" value="1" v-model="selectDozen">
            <label for="dozen1">1</label>
            <br>
            <input type="radio" id="dozen2" value="2" v-model="selectDozen">
            <label for="dozen2">2</label>
            <br>
            <input type="radio" id="dozen3" value="3" v-model="selectDozen">
            <label for="dozen3">3</label>
          </div>
          <div class="form-group">
            <button class="btn-primary" @click="dozenGame()">play</button>
          </div>
        </div>
        <div class="col-xs-12" v-if="result">
          <p class="col-xs-12">
            Your Bet: {{selectDozen}}
          </p>
          <p class="col-xs-12">
            Draw: {{resultNumber}}
          </p>
          <p class="col-xs-12">
            {{gameResult}}
          </p>
          <div class="form-group">
            <button class="btn-primary col-xs-12" @click="playAgain()">Play Again</button>
          </div>
        </div>
      </section>

    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import numbers from '../components/data/numbers.js'
export default {
  name: 'Roulette',
  data () {
    return {
      userName: null,
      userCredit: null,
      stepZero: true,
      stepOne: false,
      statusBar: false,
      bet: null,
      numbersArr: numbers,
      selectedColor: null,
      redOrBlackGame: false,
      evenOrOddGame: false,
      highOrLowGame: false,
      columnsGame: false,
      dozensGame: false,
      gamesCounter: 0,
      gameWinCounter: 0,
      gameLoseCounter: 0,
      entryBet: true,
      result: false,
      gameResult: null,
      selectNumberType: null,
      selectHighLow: null,
      selectColumn: null,
      selectDozen: null,
      drawNumberType: null,
      drawHighLow: null,
      betColumn: null
    }
  },
  methods: {
    chooseType: function () {
      console.log('tes')
      if (this.userName && this.userCredit) {
        this.statusBar = true
        this.stepOne = true
        this.stepZero = false
      }
    },
    betValid: function () {
      if (this.bet < this.userCredit) {
        console.log('tru')
        return true
      }
    },
    colorGame: function () {
      if (this.betValid()) {
        this.initGame()
        let randomNumber = this.randomNumberGenerator()
        let userColor = this.selectedColor
        let drawNumber = this.numbersArr[randomNumber].value
        let drawColor = this.numbersArr[randomNumber].color
        this.resultNumber = drawNumber
        this.resultColor = drawColor
        console.log('enter the game with:    ' + drawNumber)
        console.log(this.numbersArr[randomNumber].color)
        if (userColor === drawColor) {
          this.won(1.50)
        } else {
          this.lose()
        }
      } else {
        alert('wrong')
      }
    },
    evenOddGame: function () {
      if (this.betValid()) {
        this.initGame()
        let randomNumber = this.randomNumberGenerator()
        this.resultNumber = this.numbersArr[randomNumber].value
        this.drawNumberType = this.oddOrEven(this.resultNumber)
        console.log(this.drawNumberType)
        if (this.selectNumberType === this.drawNumberType) {
          this.won(1.50)
        } else {
          this.lose()
        }
      } else {
        alert('wrong bet')
      }
    },
    highLowGame: function () {
      if (this.betValid()) {
        this.initGame()
        let randomNumber = this.randomNumberGenerator()
        this.resultNumber = this.numbersArr[randomNumber].value
        this.drawHighLow = this.highOrLow(this.resultNumber)
        if (this.selectHighLow === this.drawHighLow) {
          this.won(1.50)
        } else {
          this.lose()
        }
      }
    },
    columnGame: function () {
      if (this.betValid()) {
        this.initGame()
        let randomNumber = this.randomNumberGenerator()
        this.resultNumber = this.numbersArr[randomNumber].value
        let column = this.columnHelper(this.resultNumber)
        if (this.selectColumn === column) {
          this.won(1.50)
        } else {
          this.lose()
        }
      }
    },
    dozenGame: function () {
      if (this.betValid()) {
        this.initGame()
        let randomNumber = this.randomNumberGenerator()
        this.resultNumber = this.numbersArr[randomNumber].value
        let drawDozen = this.dozenHelper(this.resultNumber)
        if (drawDozen === this.selectDozen) {
          this.won(1.50)
        } else {
          this.lose()
        }
      }
    },
    randomNumberGenerator: function () {
      let min = 0
      let max = 36
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    oddOrEven: function (number) {
      console.log(number)
      if (number % 2 === 0) {
        return 'even'
      } else {
        return 'odd'
      }
    },
    highOrLow: function (number) {
      if (number > 18) {
        return 'high'
      } else {
        return 'low'
      }
    },
    columnHelper: function (number) {
      let column1 = []
      let column2 = []
      let column3 = []
      let i = 1
      while (i <= 35) {
        column1.push(i)
        i += 3
      }
      let j = 2
      while (j <= 36) {
        column2.push(j)
        j += 3
      }
      let k = 3
      while (k <= 37) {
        column3.push(k)
        k += 3
      }
      console.log(column1)
      console.log(column2)
      console.log(column3)
      if (column1.includes(number)) {
        this.betColumn = column1
        return '1'
      } else if (column2.includes(number)) {
        this.betColumn = column2
        return '2'
      } else {
        this.betColumn = column3
        return '3'
      }
    },
    dozenHelper: function (number) {
      if (number <= 12) {
        return '1'
      } else if (number > 12 && number <= 24) {
        return '2'
      } else {
        return '3'
      }
    },
    resetData: function () {
      this.bet = null
      this.redOrBlackGame = false
      this.evenOrOddGame = false
      this.highOrLowGame = false
      this.columnsGame = false
      this.dozensGame = false
      this.selectDozen = null
      this.stepOne = true
      this.entryBet = true
      this.result = false
    },
    initGame: function () {
      this.userCredit -= this.bet
      this.gamesCounter++
      this.entryBet = false
      this.result = true
    },
    initGameType: function (gameType) {
      this.stepOne = false
    },
    won: function (coef) {
      this.coef = coef
      this.gameResult = 'Won'
      this.userCredit = this.userCredit + (this.bet * coef)
      this.gameWinCounter++
    },
    lose: function () {
      this.gameResult = 'Lose'
      this.gameLoseCounter++
    },
    playAgain: function () {
      this.resetData()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.step1 {
 /* min-height: 100px;
  background:green;*/
}
</style>
