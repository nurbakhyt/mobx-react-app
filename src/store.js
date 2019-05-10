import {observable, action} from 'mobx';

class Store {
  @observable root = [
    {
      type: 'container',
      items: []
    }
  ];

  @action.bound setStore(newStore) {
    this.root = newStore;
  }
}

export default Store;
