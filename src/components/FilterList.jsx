/*eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';



export default class FilterList extends Component {
  
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
  };

  handleChange = e => {
    this.props.onFilter(e.target.value);
  };

  render() {
    

    return (
      <form>
        <input
          name="text"
          value={this.props.filter}
          onChange={this.handleChange}
          placeholder="Filter notes by content..."
        />
      </form>
    );
  }
}