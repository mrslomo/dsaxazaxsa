'use babel';

import DsaxazaxsaView from './dsaxazaxsa-view';
import { CompositeDisposable } from 'atom';

export default {

  dsaxazaxsaView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.dsaxazaxsaView = new DsaxazaxsaView(state.dsaxazaxsaViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.dsaxazaxsaView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'dsaxazaxsa:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.dsaxazaxsaView.destroy();
  },

  serialize() {
    return {
      dsaxazaxsaViewState: this.dsaxazaxsaView.serialize()
    };
  },

  toggle() {
    console.log('Dsaxazaxsa was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
