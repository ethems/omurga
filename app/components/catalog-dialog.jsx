import React, {Component} from 'react';
import DialogPolyfill from 'dialog-polyfill';

class CatalogDialog extends React.Component {

    handleOpenDialog() {

        this.dialog.showModal();
    }

    handleCloseDialog(e) {
        var dialog=this;
        var rect = dialog.getBoundingClientRect();
        if (!(rect.top <= e.clientY && e.clientY <= rect.top + rect.height && rect.left <= e.clientX && e.clientX <= rect.left + rect.width)) {
            this.close();
        }
    }

    componentDidMount() {
      console.log('mounth');
        const dialog = this.dialog;
        const button = this.showDialogButton;

        if (dialog && button) {
            if(!dialog.showModal){
                DialogPolyfill.registerDialog(dialog);
            }
            debugger;
            $(button).on('click', this.handleOpenDialog.bind(this));
            $(dialog).on('click', this.handleCloseDialog);

        }
    }
    componentWillUnmount() {
        console.log('un-mounth');
        const dialog = this.dialog;
        const button = this.showDialogButton;

        if (dialog && button) {
            $(button).off('click', this.handleOpenDialog.bind(this));
            $(dialog).off('click', this.handleCloseDialog);
        }
    }
    render() {
        return (
            <div className="catalog-dialog">
                <div type="button" className="mdl-layout-icon" ref={(ref) => this.showDialogButton = ref}>
                    <i className="material-icons">apps</i>
                </div>
                <dialog className="mdl-dialog " ref={(ref) => this.dialog = ref}>
                    <h4 className="mdl-dialog__title">Allow data collection?</h4>
                    <div className="mdl-dialog__content">
                        <p>
                            Allowing us to collect data will let us get you the information you want faster.
                        </p>
                    </div>

                </dialog>
            </div>
        );
    }
};

module.exports = CatalogDialog;
