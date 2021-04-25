import React,{Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { addMenus } from '../actions/menuActions'
import { v4 } from 'uuid'

class MenuModal extends Component {
    
    state= {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        const newMenu = {
            id: v4(),
            name: this.state.name
        }
        this.props.addMenus(newMenu);
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                    Add Menu
                </Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add to Menu List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="menu">Menu</Label>
                                <Input 
                                    type='text'
                                    name="name"
                                    id='menu'
                                    placeholder='Add menu'
                                    onChange={this.onChange}
                                />
                                <Button
                                    color='dark'
                                    style={{marginTop: '2rem'}}
                                    block>Add Menu</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    menu: state.menu
});

export default connect(mapStateToProps, {addMenus})(MenuModal);