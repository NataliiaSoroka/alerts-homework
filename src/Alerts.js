import React from "react";

const WithUnmount = time => Component => {
  class SelfUnmountALert extends React.Component {
    constructor(props) {
      super(props)
      this.state = { visible: true }
    }

    componentDidMount(){
      console.log(this.state.visible)
      setTimeout(() => {
        console.log(this.state.visible)
        this.setState({ visible: false })
      }, time)
    }

    render () {
      return this.state.visible && <Component {...this.props} />
    }
  }

  return SelfUnmountALert
}

const Alert = ({ alert }) => <div>{alert}</div>

const AutoUnmountedAlert = WithUnmount(4000)(Alert)

// complex key to avoid collisions for alerts with same text
const Alerts = ({ alerts }) => alerts.map((alert, i) => <AutoUnmountedAlert alert={alert} key={`${alert}-${i}`} />)

Alerts.defaultProps = {
  alerts: []
};

export default Alerts;
