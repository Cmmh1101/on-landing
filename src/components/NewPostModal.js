import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";

const NewPostModal = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Link color="danger" onClick={toggle}>
        {buttonLabel}
        <div className="bg-light p-3">
          <Form>
            <FormGroup>
              <Label for="exampleText">What's on your mind?</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </Form>
        </div>
      </Link>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Post</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleText">What's on your mind?</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Post
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default NewPostModal;
