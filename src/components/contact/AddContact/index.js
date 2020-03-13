import React from 'react';
import {Modal, ModalHeader} from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import IntlMessages from '../../../util/IntlMessages';

class AddContact extends React.Component {
  constructor(props) {
    super(props);

    const {id, thumb, name, studentid, email, phone, address, specialized, designation, selected, starred, frequently} = props.contact;
    this.state = {
      id,
      thumb,
      name,
      studentid,
      email,
      phone,
      address,
      specialized,
      designation,
      selected,
      starred,
      frequently
    }
  }

  render() {
    const {onSaveContact, onContactClose, open, contact} = this.props;
    const {id, name, studentid, email, phone, address, specialized, designation, selected, starred, frequently} = this.state;
    let {thumb} = this.state;
    if (!thumb) {
      thumb = 'https://via.placeholder.com/225x225';
    }
    return (
      <Modal className="modal-box" toggle={onContactClose} isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {contact.name === '' ? <IntlMessages id="Add Contact"/> :
            <IntlMessages id="Save Contact"/>}
          <IconButton className="text-white"
                      onClick={onContactClose}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="col-lg-3 text-center text-lg-right order-lg-2">
              <img className="ml-lg-3 mb-4 mb-lg-0 avatar size-120" src={thumb} alt={thumb}/>
            </div>

            <div className="col-lg-9 d-flex flex-column order-lg-1">
              <TextField
                label={<IntlMessages id="Name"/>}
                onChange={(event) => this.setState({name: event.target.value})}
                defaultValue={name}
                margin="none"/>
              <TextField
                label={<IntlMessages id="Student ID"/>}
                onChange={(event) => this.setState({studentid: event.target.value})}
                defaultValue={studentid}
                margin="normal"/>
              <TextField
                label={<IntlMessages id="Specialized"/>}
                onChange={(event) => this.setState({specialized: event.target.value})}
                defaultValue={specialized}
                margin="normal"/>
              <TextField
                label={<IntlMessages id="Email"/>}
                onChange={(event) => this.setState({email: event.target.value})}
                value={email}
                margin="normal"/>
              <TextField
                label={<IntlMessages id="Phone"/>}
                onChange={(event) => this.setState({phone: event.target.value})}
                value={phone}
                margin="normal"
              />
              <TextField
                label={<IntlMessages id="Address"/>}
                onChange={(event) => this.setState({address: event.target.value})}
                value={address}
                margin="normal"
              />
              <TextField
                label={<IntlMessages id="Designation"/>}
                onChange={(event) => this.setState({designation: event.target.value})}
                value={designation}
                multiline
                rowsMax="4"
                margin="normal"/>
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button disabled={name === ''} variant="contained" color="primary" onClick={() => {
            onContactClose();
            onSaveContact(
              {
                'id': id,
                'name': name,
                'studentid': studentid,
                'thumb': thumb,
                'email': email,
                'phone': phone,
                'address': address,
                'specialized': specialized,
                'designation': designation,
                'selected': selected,
                'starred': starred,
                'frequently': frequently
              });
            this.setState({
              'id': id + 1,
              'name': '',
              'studemtid': studentid,
              'thumb': '',
              'email': '',
              'phone': '',
              'address': '',
              'specialized': '',
              'designation': '',
            })

          }}><IntlMessages id="Save Contact"/></Button>
        </div>
      </Modal>
    );
  }
}

export default AddContact;