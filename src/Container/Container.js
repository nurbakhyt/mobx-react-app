import React from 'react';
import {observer} from 'mobx-react';
import './container.css';
import AddBtn from '../Btn/AddBtn';
import Box from '../Box/Box';

@observer
class Container extends React.Component {
  render() {
    const {container} = this.props;

    return (
      <div className="container">
        {container.items.map((item, i) => {
          if (item.type === 'container') {
            return <Container
              key={i}
              container={item}
            />
          }

          return <Box
            key={i}
            box={item}
          />
        })}
        <AddBtn container={container}/>
      </div>
    )
  }
}

export default Container;
