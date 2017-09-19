import React from 'react';
import { Provider, connect } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { createMockStore } from 'redux-test-utils'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DressList from '../components/dresses/dress_list_container';
import renderer from 'react-test-renderer';
import allDressData from './__helpers__/all_dress_data';

test('DressListrenders correctly', () => {
  const sampleState = {dresses: allDressData, filters: {}, fetchDresses: () => {}, fetchDress: () => {}}
  const mapStateToProps = ({dresses, filters}) => {
    return {
      dresses,
      filters,
    }
  }

  const component = renderer.create(
    <Provider store={createMockStore(sampleState)}>
      <MuiThemeProvider>
        <StaticRouter location="/dresses" context={{}}>
          <DressList />
        </StaticRouter>
      </MuiThemeProvider>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
