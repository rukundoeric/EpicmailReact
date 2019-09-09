/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import '../assets/home.scss';
import logo from '../assets/images/logo_st.png';

export default class componentName extends Component {
  render() {
    return (
      <div>
        <nav className="top-navigation">
          <div className="logo-img in-top">
            <img className="icon-logo " src={logo} />
          </div>
          <div className="name-div in-top">
            <span className="web-name">
              <b>
                <strong>Epic</strong>
              </b>
              Mail
            </span>
          </div>
          <div className="profile-nav">
            <div className="icon-notification-nav">
              <div className="icon-notification-icon-nav">
                <i className="fas fa-bell icon-notification" />
                <div className="notification-text-nav">
                  <span className="notification-text">3</span>
                </div>
              </div>
            </div>
            <div className="icon-profile-nav">
              <img
                onClick="openPage('settings.html')"
                className="icon-profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdZlkJ8tfiw1AO_Ya_3PNlD0zrkOe0GfX8C8C62yKdAV_LB9t"
                alt=""
              />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
