import React from 'react';
import './builder.css';
import './textarea.css';

class Builder extends React.Component {

  state = {
    str: '',
    error: false
  };

  onChange(e) {
    this.setState({str: e.target.value});
  }

  validate(text) {
    try {
      JSON.parse(text);
      return true;
    } catch(err) {
      return false;
    }
  }

  build() {
    let str = this.state.str;
    str = str.substr(1, str.length - 2);
    if (this.validate(str)) {
      this.setState({error: false});
      const json = JSON.parse(str);
      this.props.setStore(json);
    } else {
      this.setState({error: true});
    }
  }

  render() {
    const textBoxClassName = this.state.error ? 'text-box text-box__error' : 'text-box';

    return (
      <section className="builder">
        <textarea
          className={textBoxClassName}
          onChange={this.onChange.bind(this)}
        />
        <button
          className="builder-btn btn"
          onClick={this.build.bind(this)}
        >Build</button>
      </section>
    )
  }
}

export default Builder;
