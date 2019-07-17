import React from "react";

const WithUnmount = time => Component => {
  class SelfUnmountALert extends React.Component {
    constructor(props) {
      super(props)
      this.state = { visible: true }
    }

    componentDidMount(){
      setTimeout(() => {
        this.setState({ visible: false })
      }, time)
    }

    render () {
      return this.state.visible && <Component {...this.props} />
    }
  }

  return SelfUnmountALert
}

export default WithUnmount;