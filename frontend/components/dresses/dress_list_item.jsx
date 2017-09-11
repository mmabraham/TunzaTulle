import React from 'react'
import { GridTile } from 'material-ui/GridList';
import { Link } from 'react-router-dom';

const DressListItem = props => {
  const dress = props.dress
  return (
    <Link to={`/dresses/${dress.id}`}>
      <GridTile
        className="dress-list-tile"
        key={dress.img}
        title={dress.title}
        subtitle={(
          <span className="subtitle">
            <b>color: {dress.color}</b>
            <b>waist: {dress.waist}</b>
            <b>height: {dress.height}</b>
            <b>age: {dress.age}</b>
          </span>
        )}
      >
        <img src={dress.img} />
      </GridTile>
    </Link>
  )
}

export default DressListItem;
