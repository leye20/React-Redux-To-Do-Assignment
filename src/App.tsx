import React from 'react';
import { Grid } from 'semantic-ui-react';
import Task from './components/task'

function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <h1>To-Do Task List</h1>
      </Grid.Row>
      <Grid.Row>
        <Task />
      </Grid.Row>
    </Grid>
  );
}

export default App;
