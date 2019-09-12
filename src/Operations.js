import React from 'react'






let numberA = document.querySelector('.num-a')
let numberB = document.querySelector('.num-b')
let currentNumber = '0'
let operator 
let operatorSet = false 
let theTotalIsInNumberA = false 


const getOperator = (x) => {
    operator = x
    document.querySelector('.operator').innerHTML = x
    currentNumber = '0'
    operatorSet = true 
    theTotalIsInNumberA = false
} 

const concatenateTwoNumbers = (x) => (y) => {
    currentNumber = y+x
    if (currentNumber.length != 1 && currentNumber[0] == '0')currentNumber = currentNumber.slice(1)
}

// const displayScreen = () => {
//     return(
//         <div className="display-screen"> 
//             <div class="num-a"></div>
//             <div class="operator"></div>
//             <div class="num-b"></div>
//         </div> 
//     )
// }

const addOneString = concatenateTwoNumbers('1')
const addTwoString = concatenateTwoNumbers('2')
const addThreeString = concatenateTwoNumbers('3')
const addFourString = concatenateTwoNumbers('4')
const addFiveString = concatenateTwoNumbers('5')
const addSixString = concatenateTwoNumbers('6')
const addSevenString = concatenateTwoNumbers('7')
const addEightString = concatenateTwoNumbers('8')
const addNineString = concatenateTwoNumbers('9')
const addZeroString = concatenateTwoNumbers('0')
const addDecimalString = concatenateTwoNumbers('.')

const doMath = (a, operation, b) => {
    if (operation === '+') return parseFloat(a)+parseFloat(b)
    if (operation === '-') return parseFloat(a)-parseFloat(b)
    if (operation === '*') return parseFloat(a)*parseFloat(b)
    if (operation === '/') return parseFloat(a)/parseFloat(b)
}

function setNumberB(x){
    numberB = parseInt(currentNumber.slice())
    currentNumber = x
}


class Operations extends React.Component {
    render(){
    const {} = this.props
    return(
            <div class="calculator-wrap">
                <div class="calculator">
                    <div class="one button-key">1</div>
                    <div class="two button-key">2</div>
                    <div class="three button-key">3</div>
                    <div class="four button-key">4</div>
                    <div class="five button-key">5</div>
                    <div class="six button-key">6</div>
                    <div class="seven button-key">7</div>
                    <div class="eight button-key">8</div>
                    <div class="nine button-key">9</div>
                    <div class="number-zero button-key">0</div>
                    <div class="add-num button-key">+</div>
                    <div class="subtract-num button-key">-</div>
                    <div class="multiply-num button-key">X</div>
                    <div class="divide-num button-key">/</div>
                    <div class="decimal-point button-key">.</div>
                    {/* <div class="display-screen">
                        <div class="num-a"></div>
                        <div class="operator"></div>
                        <div class="num-b"></div>
                    </div> */}
                    render(){
                        {displayScreen}
                    }
                    <div class="equals button-key">=</div>
                    <div class="all-clear button-key">AC</div>
                </div>
            </div>
        )   
    }
}

export default Operations

