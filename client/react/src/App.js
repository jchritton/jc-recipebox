import React from 'react';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navigation from './components/Navigation';

const App = props => (
  <main className="app-root">
    <Navigation />
  </main>
);

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      console.log('App has been mounted!');
    }
  })
);

export default enhance(App);
