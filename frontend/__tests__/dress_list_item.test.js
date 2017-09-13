import React from 'react';
import { StaticRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DressListItem from '../components/dresses/dress_list_item';
import renderer from 'react-test-renderer';

const dressData = {
    "id": 51,
    "barcode": "53245234523",
    "title": "this fakdfjlasdf",
    "color": "black and white",
    "description": "fadfgaerdheghdehteHTAEGTERG",
    "waist": "34.0",
    "min_waist": "32.5",
    "max_waist": "35.5",
    "sleeve_length": "above elbow",
    "height": "23.0",
    "min_height": "16.0",
    "max_height": "25.0",
    "age": 4,
    "min_age": 2,
    "max_age": 6,
    "img": "https://s3.amazonaws.com/tunza-dev/dresses/images/000/000/051/original/data?1505226569",
    "order_dates": []
  }

test('DressListItem renders correctly', () => {
  const component = renderer.create(
    <MuiThemeProvider>
      <StaticRouter location="/dresses" context={{}}>
        <DressListItem dress={dressData} />
      </StaticRouter>
    </MuiThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
