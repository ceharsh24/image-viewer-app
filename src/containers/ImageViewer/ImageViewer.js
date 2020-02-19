import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Col, Image, Button, Modal,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

import { resetSelectedImage, uploadImage } from '../../actions/imageActions';

import './ImageViewer.css';

class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: '',
      isModalOpen: false,
      fileURL: '',
    };
  }

  handleClose = () => {
    this.setState({ isModalOpen: false });
    this.uploadFile();
  }

  handleShow = (event) => {
    if (event.target.files[0] != null) {
      this.setState({
        isModalOpen: true,
        authorName: event.target.files[0].name,
        fileURL: URL.createObjectURL(event.target.files[0]),
      });
    }
  }

  uploadFile = () => {
    const selectedImage = {
      id: Math.random(),
      author: this.state.authorName,
      download_url: this.state.fileURL,
    };
    this.props.uploadImage(selectedImage);
  };

  render() {
    const { selectedImage } = this.props;
    return (
      <>
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
                    onClick={() => this.props.resetSelectedImage()}
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
                onChange={this.handleShow}
                accept="image/x-png,image/gif,image/jpeg"
              />
              <label className="custom-file-label" nesting="uploadFile">Choose file</label>
            </div>
          </div>
        </Col>

        {/* Modal Window to enter the username or default is set to file name */}
        <Modal show={this.state.isModalOpen} onHide={this.handleClose} animation={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Author Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              className="form-control"
              onChange={(event) => event.target.value.trim().length !== 0
                && this.setState({ authorName: event.target.value.trim() })}
              placeholder="Enter Author Name"
            />
            <span className="form-info">Provide a name or it will take filename as an author name.</span>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

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
