import React, { Component, createRef } from 'react';
import PureAlerts from './Alerts';
import WithPortal from "./hoc/WithPortal";

const alertsListEl = document.querySelector('.alerts-list');
const Alerts = WithPortal(alertsListEl)(PureAlerts)

class AlertCreate extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: '',
        alerts: []
      }
      this.textInput = createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    onChange(e) {
      this.setState({ inputValue: e.target.value });
    }
    onKeyDown(e) {
      if (e.keyCode === 13 && this.state.inputValue) {
        this.addAllert();
      }
    }
  
    focusTextInput() {
      this.textInput.current.focus();
    }
  
    addAllert() {
      this.setState({
        alerts: [...this.state.alerts, this.state.inputValue],
        inputValue: ''
      })
      this.focusTextInput();
    }
  
    componentDidMount() {
      this.focusTextInput();
    }
  
    render() {
      return (
        <div className="input-alert">
          <input 
            value={this.state.inputValue} 
            type="text" 
            onChange={e => this.onChange(e)}
            onKeyDown={e => this.onKeyDown(e)}
            ref={this.textInput}
          />
          <button 
            onClick={() => this.addAllert()} 
            disabled={ !this.state.inputValue }
          > 
            Add alert 
          </button>
          <Alerts alerts={this.state.alerts} />
        </div>
      );
    }
  }

export default AlertCreate;