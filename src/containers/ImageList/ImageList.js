import React from 'react';
import { connect } from 'react-redux';
import { Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { viewSelectedImage } from '../../actions/imageActions';

import './imageList.css';

const ImageList = (props) => (
  <Col md={6} className="display-image-list">
    <h3 className="image-header">Image List</h3>
    {props.listOfAllImages != null && props.listOfAllImages.map((eachImage) => (
      <div key={eachImage.id} className="each-image">
        <Image
          src={eachImage.download_url}
          alt={eachImage.author}
          height="300"
          width="450"
          className="display-image"
          onClick={() => props.viewSelectedImage(eachImage)}
        />
      </div>
    ))}
  </Col>
);

const mapStateToProps = (state) => ({
  listOfAllImages: state.images.listOfAllImages,
});

const mapDispatchToProps = {
  viewSelectedImage,
};

ImageList.propTypes = {
  listOfAllImages: PropTypes.array.isRequired,
  viewSelectedImage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
