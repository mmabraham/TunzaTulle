import React from 'react';
import { GridList } from 'material-ui/GridList';
import DressListItem from './dress_list_item';
import { NavLink } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import SearchBar from '../search/search_bar_container';

export default class DressList extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchDresses()
  }

  render() {
    console.log(this.props, '============== here ===============')
    const dresses = this.props.dresses.map(dress => (
      <DressListItem
        dress={dress}
        key={dress.id}
      />
    ))

    return (
      <main className="dress-list-page">
        <SearchBar />
        <GridList cellHeight={400} cols={Math.ceil(window.innerWidth / 450)} padding={10}>{dresses}</GridList>
      </main>
    )
  }
 }
