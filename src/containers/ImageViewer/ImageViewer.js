import React from 'react';
import { connect } from 'react-redux';
import { Col, Image, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { resetSelectedImage } from '../../actions/imageActions';

import './ImageViewer.css';

const ImageViewer = (props) => {
  const { selectedImage } = props;
  return (
    <Col md={6} className="display-image-viewer">
      {Object.entries(selectedImage).length === 0
        ? (<span> No Image Selected</span>)
        : (
          <>
            <h3 className="image-header">{selectedImage.author}</h3>
            <Image
              src={selectedImage.download_url}
              key={selectedImage.id}
              alt={selectedImage.author}
              height="300"
              width="450"
              className="display-image"
            />
            <div>
              <Button
                className="image-clear-button"
                onClick={() => props.resetSelectedImage()}
              >
                Clear
              </Button>
            </div>
          </>
        )}
      {/* <div>
        Upload Button
      </div> */}
    </Col>
  );
};

const mapStateToProps = (state) => ({
  selectedImage: state.images.selectedImage,
});

const mapDispatchToProps = {
  resetSelectedImage,
};

ImageViewer.propTypes = {
  selectedImage: PropTypes.object.isRequired,
  resetSelectedImage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageViewer);
