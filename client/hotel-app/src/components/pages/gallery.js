import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../actions/menuActions'
import propTypes from 'prop-types'
import MenuModal from '../menuModel'
import { Container } from 'reactstrap'

class gallery extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    }

    render() {
        const { menus } = this.props.menu;
        console.log(...menus);
        return (
            <div>
                <Container>
                    <MenuModal />
                    <h2>This is gallery</h2>
                    {menus.map(({ _id, name }) => (
                        <div className="container">
                            <button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={this.onDeleteClick.bind(this, _id)} >&times;</button>
                            <h3 key={_id}>{name}</h3>
                        </div>
                    ))}
                </Container>
            </div>
        )
    }
}

gallery.propTypes = {
    getItems: propTypes.func.isRequired,
    menu: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    menu: state.menu
});

export default connect(mapStateToProps, { getItems, deleteItem })(gallery);