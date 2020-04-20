import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

function Ticket(props){
  return (
    <Segment>
      <h3 class="ticket-header">{props.names} - {props.location}</h3>
      <p><em>{props.issue}</em></p>
    </Segment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
}

export default Ticket;