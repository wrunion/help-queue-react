import React from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewTicketForm(props) {

  function handleTicketSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value, 
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <Segment>
        <Form id="new-ticket-form" onSubmit={handleTicketSubmission} >
          <Form.Field>
            <label>Names</label>
            <input name='names' placeholder='Pair Names' />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <input name='location' placeholder='Location' />
          </Form.Field>
          <Form.Field>
            <label>Describe your issue:</label>
            <textarea name='issue' placeholder='Describe your issue' />
          </Form.Field>
          <Button fluid color="teal" type='submit'>Help!</Button>  
        </Form>
      </Segment>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;