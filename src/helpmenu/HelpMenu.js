import React, {Component} from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import './HelpMenu.css';

class HelpMenu extends Component {
    constructor(props) {
        super(props);
        this.renderOption = this.renderOption.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
        this.openURL = this.openURL.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            modal: false
        };
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    renderAboutUsOption() {
        return (<div>
                <DropdownItem className='dropdown-item' onClick={this.toggle}>
                    About us
                </DropdownItem>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className='about-us-modal'>
                    <ModalHeader toggle={this.toggle}>About us</ModalHeader>
                    <ModalBody>
                        Hello! I'm 'About us' option.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>OK</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

    renderOption(option) {
        if (option['option'] === '' && option['url'] === '') {
            return (<DropdownItem className='divider' divider></DropdownItem>);
        }
        if (option['option'] == 'About us') {
            return <div>{this.renderAboutUsOption()}</div>;
        }
        return (<DropdownItem className='dropdown-item'
                              onClick={() => this.openURL(option)}>{option['option']}</DropdownItem>);
    }

    renderOptions() {
        return <DropdownMenu>{this.props.options.map(this.renderOption)}</DropdownMenu>
    }

    openURL(option) {
        if (option['option'] === 'About us')
            return;
        document.getElementById('iframe').src = option['url'];
    }

    render() {
        let icon = 'help_outline';
        return (
            <UncontrolledDropdown>
                <DropdownToggle className="help-button">
                    <span className="material-icons">{icon}</span>
                </DropdownToggle>
                {this.renderOptions()}
            </UncontrolledDropdown>
        );
    }
}

export default HelpMenu;

HelpMenu.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired
};