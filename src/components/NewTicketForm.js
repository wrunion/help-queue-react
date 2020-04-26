import React from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import { v4 } from 'uuid';

function NewTicketForm() {

  function handleTicketSubmission(event) {
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
  }

  return (
    <React.Fragment>
      <Segment>
        <Form id="new-ticket-form" onSubmit={handleTicketSubmission} >
          <Form.Field>
            <label>Names</label>
            <input placeholder='Pair Names' />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <input placeholder='Location' />
          </Form.Field>
          <Form.Field>
            <label>Describe your issue:</label>
            <textarea placeholder='Describe your issue' />
          </Form.Field>
          <Button fluid color="teal" type='submit'>Help!</Button>  
        </Form>
      </Segment>
    </React.Fragment>
  );
}

export default NewTicketForm;