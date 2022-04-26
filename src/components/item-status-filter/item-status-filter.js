import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  onChoice = (e) => {
    const btnGroup = e.target.parentNode.childNodes;
    btnGroup.forEach((item) => {
      const btnClassList = item.classList;

      if (btnClassList.contains("btn-info")) {
        btnClassList.toggle("btn-info");
        btnClassList.toggle("btn-outline-secondary");
      }
      if (item === e.target) {
        btnClassList.toggle("btn-info");
        btnClassList.toggle("btn-outline-secondary");
      }
    });
    this.props.onFilterChange(e.target.value);
  };

  render() {
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-info"
          value="all"
          onClick={this.onChoice}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="active"
          onClick={this.onChoice}
        >
          Active
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="done"
          onClick={this.onChoice}
        >
          Done
        </button>
      </div>
    );
  }
}
