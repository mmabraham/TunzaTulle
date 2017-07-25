import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class DressPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchDress();
  }

  render() {
    const dress = this.props.dress;
    return !dress ? (null) : (
      <Card>
        <CardHeader
          title={dress.title}
          subtitle={dress.color}
        />
        <CardMedia
          overlay={<CardTitle title={`${dress.waist} - ${dress.height}`} subtitle={`$ ${dress.price}`} />}
        >
          <img src={dress.img} alt={dress.description} />
        </CardMedia>
        <CardTitle title={dress.title} subtitle={dress.color} />
        <CardText>
          {dress.description}
        </CardText>
        <CardActions>
          <FlatButton label="Delete Dress" />
          <FlatButton label="Create Order" />
        </CardActions>
      </Card>
    )
  }
}
