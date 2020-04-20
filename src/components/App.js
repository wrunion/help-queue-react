import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function App(){
  return (
    <React.Fragment>
      <div class="ui container" id="content-all">
        <Header />
        <TicketList />
      </div>
    </React.Fragment>
  );
}

export default App;