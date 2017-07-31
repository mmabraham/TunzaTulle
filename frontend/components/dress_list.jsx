import React from 'react';
import { GridList } from 'material-ui/GridList';
import DressListItem from './dress_list_item';
import { NavLink } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';

export default class DressList extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchDresses()
  }

  render() {
    const dresses = this.props.dresses.map(dress => (
      <DressListItem
        dress={dress}
        key={dress.id}
      />
    ))
    return (
      <main>
        <NavLink to="/dresses/new" ><MenuItem>Add Dress</MenuItem></NavLink>
        <GridList cellHeight={400} cols={2} padding={4}>{dresses}</GridList>
      </main>
    )
  }
 }
