import React, { Component } from 'react';
import { connect } from "react-redux";

import Layout from './Layout';
import Navigation from '../components/Navigation';
import ErrorBoundry from './ErrorBoundry';

const menu = Navigation();

function MasterLayoutHOC(WrappedComponent, pageName) {
  class MasterLayoutImpl extends Component {

    state = {
      error: null
    }

    componentDidCatch(error, errorInfo) {
      this.setState({error})
    }
    render() {

      const layoutProps = {
        menu,
        pageName
      };

      return (
        <ErrorBoundry>
          <Layout {...layoutProps}>
            <WrappedComponent {...this.props} />
          </Layout>
        </ErrorBoundry>
      );
    }
  }

  const mapStateToProps = state => state;

  const mapDispatchToProps = dispatch => ({
    dispatch
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(MasterLayoutImpl);
}

export default MasterLayoutHOC;
