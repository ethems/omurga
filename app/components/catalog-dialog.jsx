import React, {Component} from 'react';
import DialogPolyfill from 'dialog-polyfill';
import CatalogFilterLayout from './catalog-filters-layout'

class CatalogDialog extends React.Component {

    handleOpenDialog() {
        this.dialog.showModal();
    }

    handleCloseDialog(e) {
        const dialog = this.dialog;
        const searchButton = this.searchDialogButton;
        const rect = dialog.getBoundingClientRect();

        if(searchButton == e.target || searchButton ==e.target.parentNode){
          return;
        }
        if (!(rect.top <= e.clientY && e.clientY <= rect.top + rect.height && rect.left <= e.clientX && e.clientX <= rect.left + rect.width)) {
            this.dialog.close();
        }
    }

    handleSearch(e){

    }

    componentDidMount() {

        const dialog = this.dialog;
        const showButton = this.showDialogButton;
        const searchButton = this.searchDialogButton;
        if (dialog && showButton && searchButton) {
            if (!dialog.showModal) {
                DialogPolyfill.registerDialog(dialog);
            }
            $(showButton).on('click', this.handleOpenDialog.bind(this));
            $(dialog).on('click', this.handleCloseDialog.bind(this));
            $(searchButton).on('click',this.handleSearch.bind(this));
        }
    }
    componentWillUnmount() {

        const dialog = this.dialog;
        const showButton = this.showDialogButton;
        const searchButton = this.searchDialogButton;
        if (dialog && showButton && searchButton) {
            $(showButton).off('click', this.handleOpenDialog.bind(this));
            $(dialog).off('click', this.handleCloseDialog.bind(this));
            $(searchButton).off('click',this.handleSearch.bind(this));
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

                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-color--amber-500 search-button" ref={(ref) => this.searchDialogButton = ref} >
                        <i className="material-icons">search</i>
                    </button>

                </dialog>
            </div>
        );
    }
};

module.exports = CatalogDialog;
