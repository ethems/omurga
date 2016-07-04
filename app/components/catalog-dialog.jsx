import React, {Component} from 'react';
import DialogPolyfill from 'dialog-polyfill';
import CatalogFilterLayout from './catalog-filters-layout'

class CatalogDialog extends React.Component {

    handleOpenDialog() {
        this.dialog.showModal();
    }

    handleCloseDialog(e) {
        this.dialog.close();
    }

    componentDidMount() {

        const dialog = this.dialog;
        const showButton = this.showDialogButton;
        const closeButton = this.closeDialogButton;

        if (dialog && showButton) {
            if (!dialog.showModal) {
                DialogPolyfill.registerDialog(dialog);
            }
            $(showButton).on('click', this.handleOpenDialog.bind(this));
            $(closeButton).on('click', this.handleCloseDialog.bind(this));
        }
    }
    componentWillUnmount() {

        const dialog = this.dialog;
        const showButton = this.showDialogButton;
        const closeButton = this.closeDialogButton;

        if (dialog && showButton) {
            $(showButton).off('click', this.handleOpenDialog.bind(this));
            $(closeButton).off('click', this.handleCloseDialog.bind(this));
        }
    }
    render() {
        return (
            <div className="catalog-dialog">
                <div type="button" className="mdl-layout-icon" ref={(ref) => this.showDialogButton = ref}>
                    <i className="material-icons">filter_list</i>
                </div>
                <dialog className="mdl-dialog " ref={(ref) => this.dialog = ref}>
                    <div className="mdl-dialog__content">
                        <div className="filters-content">
                          <CatalogFilterLayout/>
                        </div>
                    </div>
                    <div className="mdl-dialog__actions">
                        <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--blue-500">
                            <i className="material-icons">search</i>Ara
                        </button>
                        <button type="button" className="mdl-button mdl-js-button mdl-button--raised close" ref={(ref) => this.closeDialogButton = ref}>Kapat</button>
                    </div>
                </dialog>
            </div>
        );
    }
};

module.exports = CatalogDialog;
