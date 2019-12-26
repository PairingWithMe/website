import React, { Component } from "react";
import styled from "styled-components";

const StyledIcon = styled.span`
  height: auto !important;
  width: auto !important;
  font-size: inherit !important;
  color: inherit;
`;

class Icon extends Component {
  render() {
    const group = this.props.group || "fas";
    const name = this.props.name;
    const className = `${group} fa-${name} ${this.props.className}`;
    return <StyledIcon className={className} style={this.props.style} />;
  }
}

export default Icon;
