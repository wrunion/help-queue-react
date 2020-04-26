import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

// const masterTicketList = [
//   {
//     names: 'Javier and Haley',
//     location: '3A',
//     issue: `Firebase won't save record!`
//   },
//   {
//     names: 'Alex and Danielle',
//     location: '4B',
//     issue: `Prop types are throwing an error.`
//   },
//   {
//     names: 'Imani & Jacob',
//     location: '9F',
//     issue: `Child component isn't rendering.`
//   }
// ];

function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.ticketList.map((ticket, index) => 
        <Ticket names = {ticket.names}
          location = {ticket.location}
          issue = {ticket.issue}
          key = {index} />
      )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;