/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';

export class IndividualItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <tr className="g-t-tr tr-backgound">
        <td className="g-t-td check" width="2%" />
        <td className="g-t-td">
          <img src={data.image} className="img-user-row" alt="" />
        </td>
        <td className="g-t-td name">
          {data.subject}
        </td>
        <td className="g-t-td feed">
          {data.message}
        </td>
        <td className="g-t-td date">
          {data.createdOn}
        </td>
      </tr>
    );
  }
}

export class GroupItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <tr className="g-t-tr tr-backgound">
        <td className="g-t-td check" width="2%" />
        <td className="g-t-td name">
          {data.subject}
        </td>
        <td className="g-t-td feed">
          {data.message}
        </td>
        <td className="g-t-td date">
          {data.createdOn}
        </td>
      </tr>
    );
  }
}
