import React from 'react';
import WithUnmount from './hoc/WithUnmount';

const Alert = ({ alert }) => <div>{alert}</div>

const AutoUnmountedAlert = WithUnmount(4000)(Alert)

const Alerts = ({ alerts }) => alerts.map((alert, i) => <AutoUnmountedAlert alert={alert} key={`${alert}-${i}`} />)



Alerts.defaultProps = {
  alerts: []
};

export default Alerts;
