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
      <Form onSubmit={handleTicketSubmission} >
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input 
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue' />
        <Button fluid color="teal" type='submit'>Help!</Button>  
      </Form>
      </Segment>
    </React.Fragment>
  );
}

{/* <Form>
<Form.Field>
  <label>First Name</label>
  <input placeholder='First Name' />
</Form.Field>
<Form.Field>
  <label>Last Name</label>
  <input placeholder='Last Name' />
</Form.Field>
<Form.Field>
  <Checkbox label='I agree to the Terms and Conditions' />
</Form.Field>
<Button type='submit'>Submit</Button>
</Form> */}

export default NewTicketForm;