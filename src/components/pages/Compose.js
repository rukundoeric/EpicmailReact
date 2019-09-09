/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { sendEmail } from '../../redux/actions/inbox.action';

export class Compose extends Component {
  state = {
    redirect: false,
    subject: '',
    type: '',
    email: '',
    message: '',
    redirectLocation: undefined,
  };

  handleSendMail = (status) => {
    const {
      subject, type, email, message,
    } = this.state;
    this.props.sendEmail({
      subject,
      type,
      email,
      message,
      status,
      createdOn: 'May 24',
      image:
        type === 'Group'
          ? null
          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdZlkJ8tfiw1AO_Ya_3PNlD0zrkOe0GfX8C8C62yKdAV_LB9t',
    });
    this.setState({ redirect: true, redirectLocation: status });
  };

  handleTypeselect = (e) => {
    this.setState({ type: e.target.value });
  };

  handleSubjectChage = (e) => {
    console.log(e.target.value);
    this.setState({ subject: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleMessageChange = (e) => {
    this.setState({ message: e.target.value });
  };

  render() {
    if (this.state.redirect && this.state.redirectLocation) {
      return (<Redirect to={`/${this.state.redirectLocation}`} />);
    }
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
                      <Link to="/">
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
                        <span>Compose</span>
                      </div>
                      <div className="g-h-menu send_mail send search_contents_tools">
                        <button
                          className="buttons-headers send"
                          title="Send"
                          onClick={() => this.handleSendMail('sent')}
                        >
                          <i className="far fa-paper-plane" />
                        </button>
                      </div>
                      <div className="g-h-menu send_mail save_draft search_contents_tools">
                        <button
                          className="buttons-headers draft"
                          title="Save to draft"
                          onClick={() => this.handleSendMail('draft')}
                        >
                          {' '}
                          <i className="fas fa-envelope-open-text" />
                        </button>
                      </div>
                    </div>
                    <div className="line" />
                    <div className="content-menus">
                      <div className="g-h-menu-sens_mail subject">
                        <input type="text" placeholder="Subject :" name="" onChange={this.handleSubjectChage} />
                      </div>
                      <div className="g-h-menu-sens_mail to_type">
                        <select onChange={this.handleTypeselect}>
                          <option>Select receiver..</option>
                          <option>Individual</option>
                          <option>Group</option>
                        </select>
                      </div>
                      <div className="g-h-menu-sens_mail to">
                        <input
                          type="text"
                          placeholder="To :"
                          name=""
                          list="contacts"
                          onChange={this.handleEmailChange}
                        />
                        <datalist id="contacts">
                          <option>gprestein055@gmail.com</option>
                          <option>ericrukundo005@gmail.com</option>
                          <option>cyizashad066@gmail.com</option>
                          <option>mukunzifra066@gmail.com</option>
                        </datalist>
                      </div>
                    </div>
                    <div className="line" />
                    <div className="content_list_table compose">
                      <textarea className="content_write_mail" onChange={this.handleMessageChange} />
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
  inboxIndividual: state.mail.inboxIndividual,
  inboxGroup: state.mail.inboxGroup,
});

export default connect(
  mapStateToProps,
  {
    sendEmail,
  },
)(Compose);
