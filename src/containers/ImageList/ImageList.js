import React from 'react';
import { connect } from 'react-redux';
import { Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

// import { viewImage } from '../../action/imagesActions';

import './imageList.css';

const ImageList = (props) => {
  const { listOfAllImages } = props;
  return (
    <Col md={6} className="display-image-list">
      <h3 className="image-list-header">Image List</h3>
      {listOfAllImages != null && listOfAllImages.map((eachImage) => (
        <div key={eachImage.id} className="each-image">
          <Image
            src={eachImage.download_url}
            alt={eachImage.author}
            height="300"
            width="450"
            className="display-image"
            // onClick={() => props.viewImage(eachImage)}
          />
        </div>
      ))}
    </Col>
  );
};

const mapStateToProps = (state) => ({
  listOfAllImages: state.images.listOfAllImages,
});

const mapDispatchToProps = {
  // viewImage,
};

ImageList.propTypes = {
  listOfAllImages: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
