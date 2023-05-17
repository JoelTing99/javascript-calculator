import './App.css';
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

const operators = ["+", "-", "*", "/", "clear", "="];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
/*
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      haveDot: false,
      displayText: '0',
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    document.querySelectorAll("button").forEach(button => {
      button.addEventListener("click", () => this.handleButtonClick(button))
    })
  }

  handleButtonClick(button) 
  {
    const value = button.value;

    console.log(this.state.displayText, value);
    switch (value)
    {
      case 'clear':
        this.Clear();
        break;
      case '=':
        this.Equal();
        break;
      case '.':
        this.Decimal();
        break;
      case 'reverse':
        this.Reverse();
        break;
      case 'percentage':
        this.Percentage();
        break;
      default:
        if (operators.includes(value))
        {
          this.Operators(value);
        }
        else 
        {
          this.Numbers(value);
        }
        break;
    }
  }

  Numbers(value) 
  {
    if (this.state.displayText === "0")
    {
      this.setState({
        displayText: value,
      });

      return;
    }
    this.setState({
      displayText: this.state.displayText + value,
    })
  } 

  Operators(value)
  {
    let text = this.state.displayText;
    let lastChar = text[text.length - 1];

    if (lastChar === value || this.state.displayText === "0")
    {
      return;
    }

    this.setState({
      displayText: this.state.displayText + value,
      haveDot: false,
    })
  }

  Clear() 
  {
    this.setState({
      displayText: "0",
      haveDot: false,
    })
  }

  Reverse() {
    this.setState({
      displayText: this.state.displayText * -1,
    })
  }

  Decimal() 
  {
    let text = this.state.displayText;
    let lastChar = text[text.length - 1];
    

    if (this.state.displayText === "0")
    {
      this.setState({
        displayText: "0.",
      })
    }
    else if (operators.includes(lastChar))
    {
      this.setState({
        displayText: this.state.displayText + "0.",
      })
    }
    else if (!this.state.haveDot)
    {
      this.setState({
        displayText: this.state.displayText + ".",
        haveDot: true,
      })
    }
  }

  Equal()
  {
    let total = eval(this.state.displayText);
  
    this.setState({
      displayText: total,
    })

    console.log(this.state.displayText, total);
  }

  Calculate() {

    let result = '';

    switch (this.state.operator)
    {
      case "/":
        result = parseFloat(this.state.firstNum) / parseFloat(this.state.displayText);
        break;
      case "*":
        result = parseFloat(this.state.firstNum) * parseFloat(this.state.displayText);
        break;
      case "-":
        result = parseFloat(this.state.firstNum) - parseFloat(this.state.displayText);
        break;
      case "+":
        result = parseFloat(this.state.firstNum) + parseFloat(this.state.displayText);
        break;
      default:
        break;
    }

    return result;
  }


  Percentage() {
    this.setState({
      displayText: this.state.displayText / 100,
    });
  }

  render() {
    return (
      <div className='calculator'>
        <div id="display" className='text-end text-light'>{this.state.displayText}</div>
        <Container className='buttons'>
          <Row className='py-2 row-cols-4'>
            <Col className='px-1'>
              <Button id="clear" variant="light" value="clear">AC</Button>
            </Col>
            <Col className='px-1'>
              <Button id="reverse" variant="light" value="reverse">∓</Button>
            </Col>
            <Col className='px-1'>
              <Button id="percentage" variant="light" value="percentage">%</Button>
            </Col>
            <Col className='px-1'>
              <Button id="divide" variant="warning" value="/">⨬</Button>
            </Col>
          </Row>
          <Row className='pb-2 row-cols-4'>
            <Col className='px-1'>
              <Button  id="seven" variant="secondary" value="7">7</Button>
            </Col>
            <Col className='px-1'>
              <Button  id="eight" variant="secondary" value="8">8</Button>
            </Col>
            <Col className='px-1'>
              <Button id="nine" variant="secondary" value="9">9</Button>
            </Col>
            <Col className='px-1'>
              <Button id="multiply" variant="warning" value="*">⨯</Button>
            </Col>
          </Row>
          <Row className='pb-2 row-cols-4'>
            <Col className='px-1'>
              <Button id="four" variant="secondary" value="4">4</Button>
            </Col>
            <Col className='px-1'>
              <Button id="five" variant="secondary" value="5">5</Button>
            </Col>
            <Col className='px-1'>
              <Button id="six" variant="secondary" value="6">6</Button>
            </Col>
            <Col className='px-1'>
              <Button id="subtract" variant="warning" value="-">-</Button>
            </Col>
          </Row>
          <Row className='pb-2 row-cols-4'>
            <Col className='px-1'>
              <Button id="one" variant="secondary" value="1">1</Button>
            </Col>
            <Col className='px-1'>
              <Button id="two" variant="secondary" value="2">2</Button>
            </Col>
            <Col className='px-1'>
              <Button id="three" variant="secondary" value="3">3</Button>
            </Col>
            <Col className='px-1'>
              <Button id="add" variant="warning" value="+">+</Button>
            </Col>
          </Row>
          <Row className='pb-2 row-cols-4'>
            <Col xs={6} className='px-1'>
              <Button id="zero" variant="secondary" value="0">0</Button>
            </Col>
            <Col className='px-1'>
              <Button id="decimal" variant="secondary" value=".">.</Button>
            </Col>
            <Col className='px-1'>
              <Button id="equals" variant="warning" value="=">=</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
*/

function App()
{
  const [displayText, setDisplayText] = useState("0");
  const [calculatorData, setCalculatorData] = useState("")

  function handleButtonClick(event) 
  {
    const value = event.target.value;

    const operator = operators.find(op => op === value);
    const number = numbers.find(num => num === value);
    console.log(calculatorData, value);
    switch (value)
    {
      case 'clear':
        Clear();
        break;
      case '=':
        Equal();
        break;
      case '.':
        Decimal();
        break;
      case 'reverse':
        Reverse();
        break;
      case 'percentage':
        Percentage();
        break;
      case number:
        Numbers(value);
        break;
      case operator:
        Operators(value);
      default:
        break;
    }
  }

  function Numbers(value) 
  {
    if (!calculatorData.length) {
      setDisplayText(value);
      setCalculatorData(value);
    }
    else {
      if (value === "0" && (calculatorData === "0" || displayText === "0")) 
      {
        setCalculatorData(calculatorData);
      } 
      else 
      {
        const lastChat = calculatorData.charAt(calculatorData.length - 1);
        const isLastChatOperator = operators.includes(lastChat);

        setDisplayText(isLastChatOperator ? value : displayText + value);
        setCalculatorData(calculatorData + value);
      }
    }
  } 

  function Operators(value)
  {
    if (calculatorData.length) {
      setDisplayText(value);

      const beforeLastChat = calculatorData.charAt(calculatorData.length - 2);
      const beforeLastChatIsOperator = operators.includes(beforeLastChat);

      const lastChat = calculatorData.charAt(calculatorData.length - 1);
      const lastChatIsOperator = operators.includes(lastChat);

      if ((lastChatIsOperator && value !== "-") || beforeLastChatIsOperator && lastChatIsOperator
      ) 
      {
        if (beforeLastChatIsOperator) {
          setCalculatorData(calculatorData.substring(0, calculatorData.length - 2
            ) + value);
        } 
        else 
        {
          setCalculatorData(calculatorData.substring(0, calculatorData.length - 1) + value);
        }
      } 
      else 
      {
        setCalculatorData(calculatorData + value);
      }
    }
  }

  function Clear() 
  {
    setDisplayText("0");
    setCalculatorData("");
  }

  function Reverse() {
    setDisplayText(displayText * -1)
  }

  function Decimal() 
  {
    const lastChat = calculatorData.charAt(calculatorData.length - 1);
    if (!calculatorData.length) {
      setDisplayText("0.");
      setCalculatorData("0.");
    } else {
      if (operators.includes(lastChat)) 
      {
        setDisplayText("0.");
        setCalculatorData(calculatorData + "0.");
      } 
      else
      {
        setDisplayText(lastChat === "." || displayText.includes(".") ? displayText : displayText + ".");

        setCalculatorData(lastChat === "." || displayText.includes(".") ? calculatorData : calculatorData + ".");
      }
    }
  }

  function Equal()
  {
    let total = eval(calculatorData).toString();
    
    console.log( total, typeof(total));
    
    setDisplayText(total);
    setCalculatorData(total.toString());
  }

  function Percentage() {
    setDisplayText(displayText / 100);
  }


  return(
    <div className='calculator'>
        <div id="display" className='text-end text-light'>{displayText}</div>
        <Container className='buttons'>
          <Row className='py-2 row-cols-4'>
            <Col className='px-1'>
              <Button id="clear" variant="light" value="clear" onClick={handleButtonClick}>AC</Button>
            </Col>
            <Col className='px-1'>
              <Button id="reverse" variant="light" value="reverse" onClick={handleButtonClick}>∓</Button>
            </Col>
            <Col className='px-1'>
              <Button id="percentage" variant="light" value="percentage" onClick={handleButtonClick}>%</Button>
            </Col>
            <Col className='px-1'>
              <Button id="divide" variant="warning" value="/" onClick={handleButtonClick}>⨬</Button>
            </Col>
          </Row>
          <Row className='pb-2 row-cols-4'>
            <Col className='px-1'>
              <Button  id="seven" variant="secondary" value="7" onClick={handleButtonClick}>7</Button>
            </Col>
            <Col className='px-1'>
              <Button  id="eight" variant="secondary" value="8" onClick={handleButtonClick}>8</Button>
            </Col>
            <Col className='px-1'>
              <Button id="nine" variant="secondary" value="9" onClick={handleButtonClick}>9</Button>
            </Col>
            <Col className='px-1'>
              <Button id="multiply" variant="warning" value="*" onClick={handleButtonClick}>⨯</Button>
            </Col>
          </Row>
          <Row className='pb-2 row-cols-4'>
            <Col className='px-1'>
              <Button id="four" variant="secondary" value="4" onClick={handleButtonClick}>4</Button>
            </Col>
            <Col className='px-1'>
              <Button id="five" variant="secondary" value="5" onClick={handleButtonClick}>5</Button>
            </Col>
            <Col className='px-1'>
              <Button id="six" variant="secondary" value="6" onClick={handleButtonClick}>6</Button>
            </Col>
            <Col className='px-1'>
              <Button id="subtract" variant="warning" value="-" onClick={handleButtonClick}>-</Button>
            </Col>
          </Row>
          <Row className='pb-2 row-cols-4'>
            <Col className='px-1'>
              <Button id="one" variant="secondary" value="1" onClick={handleButtonClick}>1</Button>
            </Col>
            <Col className='px-1'>
              <Button id="two" variant="secondary" value="2" onClick={handleButtonClick}>2</Button>
            </Col>
            <Col className='px-1'>
              <Button id="three" variant="secondary" value="3" onClick={handleButtonClick}>3</Button>
            </Col>
            <Col className='px-1'>
              <Button id="add" variant="warning" value="+" onClick={handleButtonClick}>+</Button>
            </Col>
          </Row>
          <Row className='pb-2 row-cols-4'>
            <Col xs={6} className='px-1'>
              <Button id="zero" variant="secondary" value="0" onClick={handleButtonClick}>0</Button>
            </Col>
            <Col className='px-1'>
              <Button id="decimal" variant="secondary" value="." onClick={handleButtonClick}>.</Button>
            </Col>
            <Col className='px-1'>
              <Button id="equals" variant="warning" value="=" onClick={handleButtonClick}>=</Button>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default App;