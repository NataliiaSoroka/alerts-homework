import React, { Component } from 'react';
import { createPortal } from "react-dom";

const WithPortal = domEl => BaseComponent => {
    class WithPortalHOC extends Component {
        render () {
        return (createPortal(<BaseComponent {...this.props} />, domEl))
        }
    }

    return WithPortalHOC;
} 
  

  export default WithPortal;