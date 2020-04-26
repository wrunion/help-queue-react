import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import { Button } from 'semantic-ui-react';

class TicketControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTicketList: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  handleAddingNewTicket = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({masterTicketList: newMasterTicketList, 
                  formVisibleOnPage: false });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicket} />
      buttonText = "Return to ticket list";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} />
      buttonText = "Add Ticket"
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button content={buttonText} onClick={this.handleClick} />
      </React.Fragment>
    );
  }

}

export default TicketControl;