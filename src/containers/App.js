import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

// Actions
import { fetchAllImages } from '../actions/imageActions';

// Component
import Header from './Header/Header';
import ImageList from './ImageList/ImageList';
import Footer from './Footer/Footer';

const propTypes = {
  fetchAllImages: PropTypes.func.isRequired,
};
class App extends Component {
  componentDidMount() {
    this.props.fetchAllImages();
  }

  render() {
    return (
      <>
        <Header />
        <Row>
          <ImageList />
        </Row>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = {
  fetchAllImages,
};

App.propTypes = propTypes;
export default connect(null, mapDispatchToProps)(App);
