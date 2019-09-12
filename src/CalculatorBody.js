import React from 'react'


// let add2 = (x) => x+'2'

const displayScreen = () => {
    return(
        <h1>Display Screen</h1>
    )
}



let x = 'hello'
class CalculatorBody extends React.Component {
    // add2 = (x) => currentNumber = x+'2'
    render() { 
        let {currentNumber, concatenateNumTwo} = this.props
        // const {currentNumber, concatenateTwoStringNums, concatenateNumZero, concatenateNumOne,
        //     concatenateNumTwo, concatenateNumThree, concatenateNumFour, concatenateNumFive,
        // concatenateNumSix, concatenateNumSeven, concatenateNumEight, concatenateNumNine} = this.props 

        
        return ( 
            <div class="calculator-wrap">
                <div class="calculator">
                    <div class="one button-key">1</div>
                    <div class="two button-key" onClick={()=>alert(x)}>2</div>
                    <div class="three button-key" onClick={()=>{
                        currentNumber=453
                        // alert(currentNumber)
                    }}>3</div>
                    <div class="four button-key" onClick={
                        ()=>{
                        currentNumber = currentNumber/2
                        // alert(currentNumber)
                        }
                    }>4</div>
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
                    <div class="display-screen">
                        <div class="num-a">{currentNumber}</div>
                        <div class="operator"></div>
                        <div class="num-b"></div>
                    </div>
                    <div class="equals button-key">=</div>
                    <div class="all-clear button-key">AC</div>
                </div>
            </div>
         )
    }
}
 
export default CalculatorBody