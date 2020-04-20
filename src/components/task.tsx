import React from 'react';
import { RootState } from '../store';
import { removeItemFromTask, addItemToTask } from '../store/task/action';
import { Item } from '../store/task/types';
import { Grid, Form, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

export interface ITaskProps {
  removeItemFromTask: typeof removeItemFromTask,
  addItemToTask: typeof addItemToTask,
  items: Item[]
}

export class Task extends React.Component<ITaskProps>
{
  generateID = (): number => {
    let randomNumber: number = Math.floor( Math.random() * 1000 );
    randomNumber += this.props.items.length;
    return randomNumber;
  }
  newTask = ( event: any ) => {
    event.preventDefault();
    const formField: HTMLInputElement | null = document.querySelector( '[name="task-name"]' );
    let formFieldValue: string = '';
    if ( formField !== null ) formFieldValue = formField.value;
        this.props.addItemToTask( {
        id: this.generateID(),
        name: formFieldValue
    } );
  }
  deleteTask = ( id: number ) => {
    this.props.removeItemFromTask( id );
  }
  render ()
  {
    return (
        <Grid>
          <Grid.Row>
            <Form onSubmit={this.newTask}>
              <Form.Field>
                <label htmlFor="task-name">Order Task</label>
                <Input name="task-name" type='text' />
              </Form.Field>
              <Input type="submit" value="Include" />
            </Form>
          </Grid.Row>
          <h3>List of Tasks</h3>
          <Grid.Row>
            <ol>
              {(this.props.items.length > 0)?
              this.props.items.map( element => (
              <li>
                {element.name}
                <Button 
                    color='blue'
                    onClick={event => {this.deleteTask(element.id)}}>
                    Exclude
                </Button>
                </li>
                ) ):
                <li>You are out of task! thank you...</li>
                }
            </ol>
          </Grid.Row>
        </Grid>
      );
    }
  }
  
const mapStateToProps = ( state: RootState ) => {
    return {
      items: state.task.items
    }
  }
  
export default connect(
    mapStateToProps,
    { addItemToTask, removeItemFromTask }
  )( Task );