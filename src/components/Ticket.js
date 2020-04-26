import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

function Ticket(props){
  return (
    <Segment>
      <div onClick = {() => props.whenTicketClicked(props.id)}>
        <h3 className="ticket-header">{props.names} - {props.location}</h3>
        <p><em>{props.issue}</em></p>
      </div>
    </Segment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
}

export default Ticket;