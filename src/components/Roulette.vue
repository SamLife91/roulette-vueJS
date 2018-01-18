<template>
  <div class="hello">
    <header class="header">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header col-xs-12">
            <a class="navbar-brand" href="/">
              <img alt="Roulette" src="" class="hidden">Roulette
            </a>
            <p class="navbar-text" v-if="statusBar">
              <i class="glyphicon glyphicon-user"></i>
              <strong>{{userName}}</strong>
              <i class="glyphicon glyphicon-credit-card"></i>
              <strong>{{userCredit}}</strong>
              <button class="btn-danger" @click="checkOut()">End</button>
            </p>
          </div>
        </div>
      </nav>
    </header>

    <div class="main container">
      <section class="section step0 jumbotron col-sm-10" v-show="stepZero">
        <div class="form-group col-xs-12 col-sm-6">
          <label for="">Name:</label>
          <input type="text" class="form-control" v-model="userName">
        </div>
        <div class="form-group col-xs-12 col-sm-6">
          <label for="">Enter Credit:</label>
          <input type="text" class="form-control" v-model.number="userCredit">
        </div>
        <p v-if="userName && userCredit">
          Your name is <strong>{{userName}}</strong> and you enter the game with <strong>{{userCredit}}</strong> Credit
        </p>
        <div class="form-group col-xs-12">
          <button class="btn btn-primary col-xs-12" @click="chooseType()">Confirm</button>
        </div>
        <div class="clearfix"></div>
      </section>

      <section class="section step1 jumbotron col-sm-10" v-show="stepOne">

        <div class="col-xs-12">
          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail">
              <img src="../assets/br.jpg" alt="" class="card-image-top">
              <div class="caption">
                <h4 class="bet_type_title">
                  Red/Black
                </h4>
                <div class="form-group progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:48.8%">48.8%
                </div>
                <button class="btn btn-primary col-xs-12" @click="initGameType(redOrBlackGame=true)">Play</button>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail">
              <img src="../assets/br.jpg" alt="" class="card-image-top">
              <div class="caption">
               <h4 class="bet_type_title">
                 Odd/Even
               </h4>
               <div class="form-group progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:48.8%">48.8%
               </div>
               <button class="btn btn-primary col-xs-12" @click="initGameType(evenOrOddGame=true)">Play</button> 
              </div>
              <div class="clearfix"></div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail">
              <img src="../assets/br.jpg" alt="" class="card-image-top">
              <div class="caption">
                <h4 class="bet_type_title">
                  High/Low
                </h4>
                <div class="form-group progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:48.8%">48.8%
                </div>
                <button class="btn btn-primary col-xs-12" @click="initGameType(highOrLowGame=true)">Play</button>    
              </div>
              <div class="clearfix"></div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail">
              <img src="../assets/br.jpg" alt="" class="card-image-top">
              <div class="caption">
                <h4 class="bet_type_title">
                  Columns
                </h4>
                <div class="form-group progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:32.40%">32.40%
                </div>
                <button class="btn btn-primary col-xs-12" @click="initGameType(columnsGame=true)">Play</button>    
              </div>
              <div class="clearfix"></div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail">
              <img src="../assets/br.jpg" alt="" class="card-image-top">
              <div class="caption">
                <h4 class="bet_type_title">
                  Dozens
                </h4>
                <div class="form-group progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:32.40%">32.40%
                </div>
                <button class="btn btn-primary col-xs-12" @click="initGameType(dozensGame=true)">Play</button>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <button class="btn-danger col-xs-12 hidden">back</button>
      </section>

      <section v-if="redOrBlackGame" class="jumbotron col-sm-10">
        <h4>Red or Black</h4>
        <div class="col-xs-12" v-if="entryBet">
          <div class="form-group col-xs-12 col-sm-6">
            <label for="">Type bet amount</label>
            <input type="number" class="form-control" v-model.number="bet">
          </div>
          <div class="form-group-addon hidden">
            <input type="radio" id="selectRed" value="red" v-model="selectedColor">
            <label for="selectRed">Red</label>
            <br>
            <input type="radio" id="selectBlack" value="black" v-model="selectedColor">
            <label for="selectBlack">Black</label>
            <br>
          </div>
          <div class="form-group col-xs-12 col-sm-6">
            <label for="">Choose Color</label>
            <select name="" id="" v-model="selectedColor" class="form-control">
              <option value="null" selected>Choose</option>
              <option value="red">Red</option>
              <option value="black">Black</option>
            </select>
          </div>
          <div class="form-group col-xs-12">
            <button class="btn-primary col-xs-12" @click="colorGame()">play</button>
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
          <div class="form-group col-xs-12 col-sm-6">
            <button class="btn-primary col-xs-12" @click="playAgain()">Play Again</button>
          </div>
          <div class="form-group col-xs-12 col-sm-6">
            <button class="btn-danger col-xs-12" @click="checkOut()">End</button>
          </div>
        </div>
        <div class="clearfix"></div>
      </section>

      <section v-if="evenOrOddGame" class="jumbotron col-sm-10">
        <div class="col-xs-12" v-if="entryBet">
          <div class="form-group col-xs-12 col-sm-6">
            <label for="">Type bet amount</label>
            <input type="number" class="form-control" v-model.number="bet" number>
          </div>
          <div class="form-group col-xs-12 col-sm-6">
            <label for="">Even or Odd bet</label>
            <select name="" id="" class="form-control" v-model="selectNumberType">
              <option value="null" selected>Choose</option>
              <option value="even">Even</option>
              <option value="odd">Odd</option>
            </select></div>
          <div class="form-group col-xs-12">
            <button class="btn-primary col-xs-12" @click="evenOddGame()">play</button>
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
          <div class="form-group col-xs-12 col-sm-6">
            <button class="btn-primary col-xs-12" @click="playAgain()">Play Again</button>
          </div>
          <div class="form-group col-xs-12 col-sm-6">
            <button class="btn-danger col-xs-12" @click="checkOut()">End</button>
          </div>
        </div>
      </section>

      <section v-if="highOrLowGame" class="jumbotron col-sm-10">
        <div class="col-xs-12" v-if="entryBet">
          <div class="form-group col-xs-12 col-sm-6">
            <label for="">Type bet amount</label>
            <input type="number" class="form-control" v-model.number="bet">
          </div>
          <div class="form-group col-xs-12 col-sm-6">
            <label for="">High or Low</label>
            <select name="" id="" class="form-control" v-model="selectHighLow">
              <option value="null" selected>Choose</option>
              <option value="high">High</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div class="form-group col-xs-12">
            <button class="btn-primary col-xs-12" @click="highLowGame()">play</button>
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
          <div class="form-group col-xs-12 col-sm-6">
            <button class="btn-primary col-xs-12" @click="playAgain()">Play Again</button>
          </div>
          <div class="form-group col-xs-12 col-sm-6">
            <button class="btn-danger col-xs-12" @click="checkOut()">End</button>
          </div>
        </div>
      </section>

      <section v-if="columnsGame" class="jumbotron col-sm-10">
        <div class="col-xs-12" v-if="entryBet">
          <div class="form-group col-xs-12 col-sm-6">
            <label for="">Type bet amount</label>
            <input type="number" class="form-control" v-model.number="bet" number>
          </div>
          <div class="form-group col-xs-12 col-sm-6">
            <label for="">Choose column</label>
            <select name="" id="" class="form-control" v-model="selectColumn">
              <option value="null" selected>Choose</option>
              <option value="1">1:[ 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34]</option>
              <option value="2">2:[ 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35]</option>
              <option value="3">3:[ 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]</option>
            </select>
          </div>
          <div class="form-group col-xs-12">
            <button class="btn-primary col-xs-12" @click="columnGame()">play</button>
          </div>
        </div>
        <div class="col-xs-12" v-if="result">
          <p class="col-xs-12">
            Your Bet: {{selectColumn}} 
            <span v-show="selectColumn == 1">[ 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34]</span>
            <span v-show="selectColumn == 2">[ 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35]</span>
            <span v-show="selectColumn == 3">[ 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]</span>
          </p>
          <p class="col-xs-12">
            Draw: {{resultNumber}} is from {{betColumn}}
          </p>
          <p class="col-xs-12">
            {{gameResult}}
          </p>
          <div class="form-group col-xs-12 col-sm-6">
            <button class="btn-primary col-xs-12" @click="playAgain()">Play Again</button>
          </div>
          <div class="form-group col-xs-12 col-sm-6">
            <button class="btn-danger col-xs-12" @click="checkOut()">End</button>
          </div>
        </div>
      </section>

      <section v-if="dozensGame" class="jumbotron col-sm-10">
        <div class="col-xs-12" v-if="entryBet">
          <div class="form-group col-xs-12 col-sm-6">
            <label for="">Type bet amount</label>
            <input type="number" class="form-control" v-model.number="bet" number>
          </div>
          <div class="form-group col-xs-12 col-sm-6">
            <label for="">Choose Dozen column</label>
            <select name="" id="" class="form-control" v-model="selectDozen">
              <option value="null">Choose</option>
              <option value="1">1:[ 1 - 12 ]</option>
              <option value="2">2:[ 13 - 24 ]</option>
              <option value="3">3:[ 25 - 36 ]</option>
            </select>
          </div>
          <div class="form-group col-xs-12">
            <button class="btn-primary col-xs-12" @click="dozenGame()">play</button>
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
          <div class="form-group col-xs-12 col-sm-6">
            <button class="btn-primary col-xs-12" @click="playAgain()">Play Again</button>
          </div>
          <div class="form-group col-xs-12 col-sm-6">
            <button class="btn-danger col-xs-12" @click="checkOut()">End</button>
          </div>
        </div>
      </section>

      <aside class="col-sm-2" v-if="checkout == false">
        <div class="col-xs-12 panel">
          <p class="col-xs-12">
            <span class="col-xs-12 badge">
              {{userName}}
            </span>
          </p>
          <p class="col-xs-12">
            Games:
            <span class="col-xs-12 badge">
              {{gamesCounter}}
            </span>
          </p>
          <p class="col-xs-12">
            Wins:
            <span class="col-xs-12 badge">
              {{gameWinCounter}}
            </span>
          </p>
          <p class="col-xs-12">
            Loses:
            <span class="col-xs-12 badge">
            {{gameLoseCounter}}
            </span>
          </p>
          <p class="col-xs-12">
            Credit:
            <span class="col-xs-12 badge">
              {{userCredit}}
            </span>
          </p>
          <div class="clearfix"></div>
        </div>
      </aside>

      <section v-if="checkout" class="col-xs-12 col-sm-12">
        <div class="col-xs-12">
          <h2>End game stats</h2>
          <table class="table table-striped">
            <tr>
              <td>Name:</td>
              <td>{{userName}}</td>
            </tr>
            <tr>
              <td>Games:</td>
              <td>{{gamesCounter}}</td>
            </tr>
            <tr>
              <td>Wins:</td>
              <td>{{gameWinCounter}}</td>
            </tr>
            <tr>
              <td>Loses:</td>
              <td>{{gameLoseCounter}}</td>
            </tr>
          </table>
          <div class="col-xs-12" v-for="(game, index) in gamesHistory">
            Game #{{index + 1}} - {{game}}
          </div>
          <div class="form-group col-xs-12">
            <a href="/">
              <button class="btn-success col-xs-12">New Game</button>
            </a>
          </div>
          <div class="clearfix"></div>
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
      betColumn: null,
      checkout: false,
      gamesHistory: []
    }
  },
  methods: {
    chooseType: function () {
      if (this.userName && this.userCredit) {
        this.statusBar = true
        this.stepOne = true
        this.stepZero = false
      }
    },
    betValid: function (data) {
      if (this.bet <= this.userCredit && data !== null) {
        return true
      }
    },
    colorGame: function () {
      if (this.betValid(this.selectedColor)) {
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
      if (this.betValid(this.selectNumberType)) {
        this.initGame()
        let randomNumber = this.randomNumberGenerator()
        this.resultNumber = this.numbersArr[randomNumber].value
        this.drawNumberType = this.oddOrEvenHelper(this.resultNumber)
        console.log(this.drawNumberType)
        if (this.selectNumberType === this.drawNumberType) {
          this.won(1.15)
        } else {
          this.lose()
        }
      } else {
        alert('wrong bet')
      }
    },
    highLowGame: function () {
      if (this.betValid(this.selectHighLow)) {
        this.initGame()
        let randomNumber = this.randomNumberGenerator()
        this.resultNumber = this.numbersArr[randomNumber].value
        this.drawHighLow = this.highOrLowHelper(this.resultNumber)
        if (this.selectHighLow === this.drawHighLow) {
          this.won(1.15)
        } else {
          this.lose()
        }
      } else {
        alert('bad bet')
      }
    },
    columnGame: function () {
      if (this.betValid(this.selectColumn)) {
        this.initGame()
        let randomNumber = this.randomNumberGenerator()
        this.resultNumber = this.numbersArr[randomNumber].value
        let column = this.columnHelper(this.resultNumber)
        console.log(this.selectColumn)
        if (this.selectColumn === column) {
          this.won(1.50)
        } else {
          this.lose()
        }
      }
    },
    dozenGame: function () {
      if (this.betValid(this.selectDozen)) {
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
    oddOrEvenHelper: function (number) {
      console.log(number)
      if (number % 2 === 0) {
        return 'even'
      } else {
        return 'odd'
      }
    },
    highOrLowHelper: function (number) {
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
      this.gamesHistory.push('Win')
    },
    lose: function () {
      this.gameResult = 'Lose'
      this.gameLoseCounter++
      this.gamesHistory.push('Lost')
    },
    playAgain: function () {
      this.resetData()
    },
    zeroCredit: function (credit) {
      if (credit === 0) {
        console.log('checkout')
        this.checkOut()
      }
    },
    checkOut: function () {
      this.resetData()
      this.stepOne = false
      this.checkout = true
    }
  }
}
</script>

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
.clearfix {
  float: none;
  clear: both;
}
.navbar-text {
  float: right;
}
</style>
