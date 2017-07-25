import React from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

export default class UserList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    props.fetchUsers()
  }

  render() {
    users = this.props.users.map(user => (<ListItem />))
    return (
      <List>
      <h1>Testing</h1>
      </List>
  )
  }
}
