import React from 'react';
import { connect } from 'react-redux';
import { Col, Image, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { resetSelectedImage, uploadImage } from '../../actions/imageActions';

import './ImageViewer.css';

const ImageViewer = (props) => {
  const { selectedImage } = props;

  const uploadFile = (event) => {
    if (event.target.files[0] != null) {
      const selectedImage1 = {
        id: Math.random(),
        author: event.target.files[0].name,
        download_url: URL.createObjectURL(event.target.files[0]),
      };
      props.uploadImage(selectedImage1);
    }
  };

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
                variant="outline-danger"
                onClick={() => props.resetSelectedImage()}
              >
                Clear
              </Button>
            </div>
          </>
        )}
      <div className="input-group custom-upload-bar">
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="uploadFile"
            onChange={uploadFile}
            accept="image/x-png,image/gif,image/jpeg"
          />
          <label className="custom-file-label" nesting="uploadFile">Choose file</label>
        </div>
      </div>
    </Col>
  );
};

const mapStateToProps = (state) => ({
  selectedImage: state.images.selectedImage,
});

const mapDispatchToProps = {
  resetSelectedImage,
  uploadImage,
};

ImageViewer.propTypes = {
  selectedImage: PropTypes.object.isRequired,
  resetSelectedImage: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageViewer);
