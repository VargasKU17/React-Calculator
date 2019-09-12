import React from 'react'
import {render} from 'react-dom' 
import './index.css'
import { tsImportEqualsDeclaration } from '@babel/types'



const Empty = ({numberA}) => <div className="display-screen"> {numberA}</div> 
    
const MiddleOfOperation = ({numberA, operator, numberB}) => <div className="display-screen"> {`${numberA} ${operator} ${numberB}`}</div> 

const Answer = ({answer}) => <div className="display-screen">{answer}</div>


class Calculator extends React.Component {
    state = {
        numberA: '', 
        numberB: '', 
        operator: '', 
        currentNumber: '0', 
        answered: false, 
        operatorPressed: false 
         
    }

    concatenateNumbers = (x) => {
        this.setState({currentNumber: this.state.currentNumber === '0'? this.state.currentNumber = x: this.state.currentNumber += x})
        if (this.state.operator === '') this.setState({numberA: this.state.numberA = this.state.currentNumber})
        if (this.state.numberA !== '' && this.state.operator !== '') this.setState({numberB: this.state.numberB = this.state.currentNumber})
        
    }

    clearAll = () => {
        window.location.reload()
    }

    setNumberA = () => {
        this.setState({setNumberA: this.state.numberA = this.state.currentNumber})
        // this.setState({currentNumber: this.state.currentNumber = '0'})
    }

    setNumberB = () => this.setState({setNumberB: this.state.numberB = this.state.currentNumber})
    

    setOperator = (x) => {
        if (this.state.answered === false && this.state.operator === ''){
            this.setState({operator: this.state.operator = x})
            this.setState({numberA: this.state.numberA = this.state.currentNumber})
            this.setState({currentNumber: this.state.currentNumber = '0'})
        }else if (this.state.answered === true && this.state.operator === '') {
            this.setState({numberB: this.state.numberB = ''})
            this.setState({operator: this.state.operator = x})
            this.setState({answered: this.state.answered = false})
            this.setState({currentNumber: this.state.currentNumber = '0'})
        } else if (this.state.operator !== '' && this.state.numberB !== ''){
            this.setState({
                numberB: this.state.numberB = this.state.numberB, 
                operator: this.state.operator = this.state.operator, 
                numberA: this.state.numberA = this.state.numberA
            })
        }
    }
  
    doMath = (operator) => {
        this.setState({numberB: this.state.numberB = this.state.currentNumber})
        this.setState({currentNumber: this.state.currentNumber = '0'})
        if(operator === '+')this.setState({numberA: this.state.numberA = parseFloat(this.state.numberA)+parseFloat(this.state.numberB)})
        if(operator === '-')this.setState({numberA: this.state.numberA = parseFloat(this.state.numberA)-parseFloat(this.state.numberB)})
        if(operator === '*')this.setState({numberA: this.state.numberA = parseFloat(this.state.numberA)*parseFloat(this.state.numberB)})
        if(operator === '/')this.setState({numberA: this.state.numberA = parseFloat(this.state.numberA)/parseFloat(this.state.numberB)})
        this.setState({answered: this.state.answered = true})
    }
    
   
    
    render(){
    return(
            <div class="calculator-wrap">
                <div class="calculator">
                    <div class="one button-key" onClick={()=>this.concatenateNumbers('1')}>1</div>
                    <div class="two button-key" onClick={()=>this.concatenateNumbers('2')}>2</div>
                    <div class="three button-key" onClick={()=>this.concatenateNumbers('3')}>3</div>
                    <div class="four button-key" onClick={()=>this.concatenateNumbers('4')}>4</div>
                    <div class="five button-key" onClick={()=>this.concatenateNumbers('5')}>5</div>
                    <div class="six button-key" onClick={()=>this.concatenateNumbers('6')}>6</div>
                    <div class="seven button-key" onClick={()=>this.concatenateNumbers('7')}>7</div>
                    <div class="eight button-key" onClick={()=>this.concatenateNumbers('8')}>8</div>
                    <div class="nine button-key" onClick={()=>this.concatenateNumbers('9')}>9</div>
                    <div class="number-zero button-key" onClick={()=>this.concatenateNumbers('0')}>0</div>
                    <div class="add-num button-key" onClick={()=>this.setOperator('+')}>+</div>
                    <div class="subtract-num button-key" onClick={()=>this.setOperator('-')}>-</div>
                    <div class="multiply-num button-key" onClick={()=>this.setOperator('*')}>X</div>
                    <div class="divide-num button-key" onClick={()=>this.setOperator('/')}>/</div>
                    <div class="decimal-point button-key" onClick={()=>this.concatenateNumbers('.')}>.</div>
                   
                    {
                    this.state.answered === true
                    ? <Answer answer = {this.state.numberA}/>
                    : 
                    <MiddleOfOperation 
                    numberA = {this.state.numberA}
                    operator = {this.state.operator}
                    numberB = {this.state.numberB}
                /> 
                    }
                    
                    <div class="equals button-key" onClick={()=>{
                      this.doMath(this.state.operator)
                      this.setState({operator: this.state.operator = ''})
                    }}>=</div>
                    <div class="all-clear button-key" onClick={this.clearAll}>AC</div>
                </div>
            </div>
        )   
    }
}



render(
    <
    Calculator
    />, 
    document.getElementById('root')
)
