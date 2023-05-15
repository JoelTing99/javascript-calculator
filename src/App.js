import './App.css';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNum: 0,
      operator: '',
      displayText: '0',
      haveDot: false,
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }


  handleButtonClick(event) {
    let input = event.target.value
    switch (input){
      case "clear": 
        this.Clear();
        break;
      case "reverse":
        this.Reverse();
        break;
      case "=":
        this.Equal();
        break;
      case ".":
        this.Decimal(input);
        break;
      default:
        if (this.state.displayText === '0' || ["/", "*", "-", "+"].indexOf(this.state.displayText) !== -1)
        {
          if (input === "percentage") break;

          this.setState({
            displayText: input,
          }) 
        }
        else if (["/", "*", "-", "+"].indexOf(input) !== -1)
        {
          this.setState({
            firstNum: parseFloat(this.state.displayText),
            operator: input,
            displayText: input,
          }) 
        }
        else 
        {
          if (input === "percentage") {
            this.Percentage();
            break;
          }

          this.setState({
            displayText: this.state.displayText + input,
          })
        }
        break;
    }
  }

  Clear() {
    this.setState({
      firstNum: 0,
      operator: '',
      displayText: '0',
      haveDot: false,
    });
  }

  Reverse() {
    this.setState({
      displayText: this.state.displayText * -1
    });
  }

  Decimal(input) {
    if (this.state.haveDot) return;

        this.setState({
          displayText: this.state.displayText + input,
          haveDot: true,
        });
  }

  Equal() {
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

    this.setState({
      displayText: result,
      haveDot: false,
    });
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
            <Col id="clear" className='px-1'>
              <Button variant="light" value="clear" onClick={this.handleButtonClick}>AC</Button>
            </Col>
            <Col id="reverse" className='px-1'>
              <Button variant="light" value="reverse" onClick={this.handleButtonClick}>∓</Button>
            </Col>
            <Col id="percentage" className='px-1'>
              <Button  variant="light" value="percentage" onClick={this.handleButtonClick}>%</Button>
            </Col>
            <Col id="divide" className='px-1'>
              <Button  variant="warning" value="/" onClick={this.handleButtonClick}>⨬</Button>
            </Col>
          </Row>
          <Row className='pb-2 row-cols-4'>
            <Col id="seven" className='px-1'>
              <Button  variant="secondary" value="7" onClick={this.handleButtonClick}>7</Button>
            </Col>
            <Col id="eight" className='px-1'>
              <Button  variant="secondary" value="8" onClick={this.handleButtonClick}>8</Button>
            </Col>
            <Col id="nine" className='px-1'>
              <Button variant="secondary" value="9" onClick={this.handleButtonClick}>9</Button>
            </Col>
            <Col id="multiply" className='px-1'>
              <Button variant="warning" value="*" onClick={this.handleButtonClick}>⨯</Button>
            </Col>
          </Row>
          <Row className='pb-2 row-cols-4'>
            <Col id="four" className='px-1'>
              <Button variant="secondary" value="4" onClick={this.handleButtonClick}>4</Button>
            </Col>
            <Col id="five" className='px-1'>
              <Button variant="secondary" value="5" onClick={this.handleButtonClick}>5</Button>
            </Col>
            <Col id="six" className='px-1'>
              <Button variant="secondary" value="6" onClick={this.handleButtonClick}>6</Button>
            </Col>
            <Col id="subtract" className='px-1'>
              <Button variant="warning" value="-" onClick={this.handleButtonClick}>-</Button>
            </Col>
          </Row>
          <Row className='pb-2 row-cols-4'>
            <Col id="one" className='px-1'>
              <Button  variant="secondary" value="1" onClick={this.handleButtonClick}>1</Button>
            </Col>
            <Col id="two" className='px-1'>
              <Button  variant="secondary" value="2" onClick={this.handleButtonClick}>2</Button>
            </Col>
            <Col id="three" className='px-1'>
              <Button  variant="secondary" value="3" onClick={this.handleButtonClick}>3</Button>
            </Col>
            <Col id="add" className='px-1'>
              <Button  variant="warning" value="+" onClick={this.handleButtonClick}>+</Button>
            </Col>
          </Row>
          <Row className='pb-2 row-cols-4'>
            <Col id="zero" xs={6} className='px-1'>
              <Button variant="secondary" value="0" onClick={this.handleButtonClick}>0</Button>
            </Col>
            <Col id="decimal" className='px-1'>
              <Button variant="secondary" value="." onClick={this.handleButtonClick}>.</Button>
            </Col>
            <Col id="equals" className='px-1' onClick={this.handleButtonClick}>
              <Button variant="warning" value="=">=</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}