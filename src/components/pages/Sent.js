/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSentMail } from '../../redux/actions/inbox.action';
import { IndividualItem } from '../item/mailitem';

export class Home extends Component {
  state = {
    sent: [],
  };

  static getDerivedStateFromProps(props, state) {
    return {
      sent: props.sent,
    };
  }

  componentDidMount() {
    this.props.getSentMail();
  }

  render() {
    const { sent } = this.state;
    return (
      <div>
        <div className="body-contant-navigation">
          <table className="tast_content_main" height="100%" border="0">
            <tr>
              <td>
                <div className="left-navigation">
                  <section id="left-nav-container">
                    <div
                      className="left-navigation-drawer open active"
                      id="left-nav-open"
                    >
                      <div className="left-navigation-dawer-profile-section">
                        <div className="left-navigation-dawer-profile-section-profile-image-div">
                          <img
                            className="left-navigation-dawer-profile-section-profile-image"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdZlkJ8tfiw1AO_Ya_3PNlD0zrkOe0GfX8C8C62yKdAV_LB9t"
                          />
                        </div>
                        <div className="left-navigation-dawer-profile-section-profile-name-div">
                          <span className="left-navigation-dawer-profile-section-profile-name">
                            Eric Prestein
                          </span>
                        </div>
                        <div className="left-navigation-dawer-profile-section-profile-status-div">
                          <span className="left-navigation-dawer-profile-section-profile-status">
                            Logged In
                          </span>
                        </div>
                      </div>
                      <Link to="/compose">
                        <div className="left-navigation-dawer-opened-button-compose">
                          <button>Compose</button>
                        </div>
                      </Link>
                      <Link to="/">
                        <div
                          className="left-navigation-dawer-opened-buttons icon-inbox-open-nav visible"
                          // onClick="openPage('home.html')"
                        >
                          <div className="left-navigation-dawer-opened-buttons-icons-div">
                            <i className="fas fa-inbox left-navigation-dawer-opened-buttons-icons" />
                          </div>
                          <div className="left-navigation-dawer-opened-buttons-title-div">
                            <span className="left-navigation-dawer-opened-buttons-title">
                              <a className="home-links inbox" href="home.html">
                                Inbox
                              </a>
                            </span>
                            <span
                              id="left_menu_inbox_counter"
                              className="menu-counter"
                            />
                          </div>
                        </div>
                      </Link>
                      <Link to="/sent">
                        <div
                          className="left-navigation-dawer-opened-buttons icon-sent-open-nav"
                          // onClick="openPage('sent.html')"
                        >
                          <div className="left-navigation-dawer-opened-buttons-icons-div">
                            <i className="fas fa-mail-bulk left-navigation-dawer-opened-buttons-icons" />
                          </div>
                          <div className="left-navigation-dawer-opened-buttons-title-div">
                            <span className="left-navigation-dawer-opened-buttons-title">
                              <a className="home-links sent" href="sent.html">
                                Sent
                              </a>
                            </span>
                            <span
                              id="left_menu_sent_counter"
                              className="menu-counter"
                            />
                          </div>
                        </div>
                      </Link>
                      <Link to="/draft">
                        <div
                          className="left-navigation-dawer-opened-buttons icon-view-draft-open-nav"
                          // onClick="openPage('draft.html')"
                        >
                          <div className="left-navigation-dawer-opened-buttons-icons-div">
                            <i className="fas fa-envelope-open-text left-navigation-dawer-opened-buttons-icons" />
                          </div>
                          <div className="left-navigation-dawer-opened-buttons-title-div">
                            <span className="left-navigation-dawer-opened-buttons-title">
                              <a className="home-links draft" href="draft.html">
                                Draft
                              </a>
                            </span>
                            <span
                              id="left_menu_draft_counter"
                              className="menu-counter"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </section>
                </div>
              </td>
              <td className="task-content-td">
                <div className="task-content">
                  <div className="content-list">
                    <div className="content-header">
                      <div className="g-h-title title">
                        <span>Sent</span>
                      </div>
                    </div>
                    <div className="line" />
                    <div className="content-menus">
                      <div className="g-h-menu inbox reflesh">
                        <button
                          className="buttons-headers reflesh"
                          title="Reflesh"
                        >
                          <i className="fas fa-sync" />
                        </button>
                      </div>
                    </div>
                    <div className="line" />
                    <div className="content_list_table">
                      <table border="0" className="inbox-tables individual">
                        <tbody id="inbox-list-body-individual">
                          {sent.map(item => (
                            <IndividualItem data={item} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sent: state.mail.sent,
});

export default connect(
  mapStateToProps,
  {
    getSentMail,
  },
)(Home);
