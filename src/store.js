import {observable} from 'mobx';

class Store {
  @observable items = [
    {
      type: 'container',
      items: []
    }
  ];
}

export default Store;
