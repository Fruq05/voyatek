import React from 'react'
import './main.css'
import { Link } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';

const Main = () => {
  return (
    <div>
      <div class= 'settings-users'>
       <div class="dividers">
        <div class="divider"></div>
      </div>
      <div class="dividers1">
        <div class="divider1"></div>
      </div>
      <div class="dividers2">
        <div class="divider2"></div>
      </div>
      <div class="dividers3">
        <div class="divider3"></div>
      </div>
      <div class="dividers4">
        <div class="divider4"></div>
      </div>
      <header class="header">
        <div class="logo">
          <img
            class="go-icon-white-1"
            loading="lazy"
            alt=""
            src="./assets/logo.png"
          />
        </div>
        <div class="container">
          <div class="content">
            <div class="left-content">
              <div class="course-dropdown">
                <img class="icon-right" alt="" src="./assets/Icon-left.png" />

                <div class="label">Dashboard</div>
              </div>
              <div class="search-bar">
                <div class="box-input-style-box-inac">
                  <div class="input-master-box">
                    <div class="label-frame">
                      <div class="label1">Label</div>
                      <div class="input-frame">
                        <div class="left-content1">
                          <img
                            class="icon-left"
                            alt=""
                            src="./assets/icon-left.png"
                          />

                          <input
                            class="text-cursor"
                            placeholder="Search here..."
                            type="text"
                          />
                        </div>
                        <div class="right-content">
                          <div class="right-add-on">Add-on</div>
                          <img
                            class="icon-right1"
                            alt=""
                            src="./public/iconright-1.svg"
                          />

                          <img
                            class="media-payments"
                            alt=""
                            src="./public/media--payments@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="helper-text">Helper text</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <nav class="nav-icons">
                <div class="nav">
                  <img
                    class="bellsimple-icon"
                    loading="lazy"
                    alt=""
                    src="./assets/bellsimple.png"
                  />

                  <div class="notifications">Notifications</div>
                </div>
                <div class="nav1">
                  <img
                    class="wallet-icon"
                    loading="lazy"
                    alt=""
                    src="./assets/wallet.png"
                  />

                  <div class="wallet">Wallet</div>
                </div>
                <div class="nav2">
                  <img
                    class="question-icon"
                    loading="lazy"
                    alt=""
                    src="./assets/question.png"
                  />

                  <div class="inquiries">Inquiries</div>
                </div>
                <div class="nav3">
                  <img
                    class="gear-icon"
                    loading="lazy"
                    alt=""
                    src="./assets/gear.png"
                  />

                  <div class="settings">Settings</div>
                </div>
              </nav>
              <div class="profile">
                <img
                  class="profile-picture-icon"
                  loading="lazy"
                  alt=""
                  src="./assets/profile.png"
                />

                <img
                  class="caretdown-icon"
                  loading="lazy"
                  alt=""
                  src="./public/caretdown.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section class="content1">
        <div class="sidebar-parent">
          <div class="secondary-sidebar">
            <div class="top-section">
              <div class="body-section">
                <div class="sidebar">
                  <div class="input">
                    <div class="label-frame1">
                      <div class="label2">Label</div>
                      <div class="input-frame1">
                        <div class="left-content2">
                          <img
                            class="icon-left1"
                            alt=""
                            src="./public/iconleft-1.svg"
                          />

                          <div class="text-cursor1">
                            <div class="input1">Input</div>
                            <div class="cursor">
                              <div class="rectangle"></div>
                            </div>
                            <div class="placeholder">Search</div>
                          </div>
                        </div>
                        <div class="right-content1">
                          <div class="right-add-on1">Add-on</div>
                          <img
                            class="icon-right2"
                            alt=""
                            src="./public/iconright-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="helper-text1">Helper text</div>
                  </div>
                </div>
                <div class="sidebar-title-parent">
                  <div class="settings-wrapper">
                    <b class="settings1">Settings</b>
                  </div>
                  <div class="sidebar-section">
                    <div class="sidebar-menulist">
                      <div class="sidebar-menu-item">
                        <div class="left-content3">
                          <img
                            class="user-icon"
                            alt=""
                            src="./assets/user.png"
                          />

                          <div class="item-labels">Account</div>
                        </div>
                        <div class="badge">
                          <div class="container1">
                            <img
                              class="icon-left2"
                              alt=""
                              src="./public/iconleft1.svg"
                            />

                            <img
                              class="avatars-icon"
                              alt=""
                              src="./public/avatars@2x.png"
                            />

                            <div class="label3">10</div>
                            <img
                              class="icon-right3"
                              alt=""
                              src="./public/iconleft1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sidebar-menulist1">
                      <div class="sidebar-menu-item1">
                        <div class="left-content4">
                          <img
                            class="lock-icon"
                            alt=""
                            src="./assets/lock.svg"
                          />

                          <div class="text">Security</div>
                        </div>
                        <div class="badge1">
                          <div class="container2">
                            <img
                              class="icon-left3"
                              alt=""
                              src="./public/iconleft1.svg"
                            />

                            <img
                              class="avatars-icon1"
                              alt=""
                              src="./public/avatars@2x.png"
                            />

                            <div class="label4">10</div>
                            <img
                              class="icon-right4"
                              alt=""
                              src="./public/iconleft1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sidebar-menulist2">
                      <div class="sidebar-menu-item2">
                        <div class="left-content5">
                          <img
                            class="bellsimple-icon1"
                            alt=""
                            src="./assets/bellsimple.png"
                          />

                          <div class="text1">Notifications</div>
                        </div>
                        <div class="badge2">
                          <div class="container3">
                            <img
                              class="icon-left4"
                              alt=""
                              src="./public/iconleft1.svg"
                            />

                            <img
                              class="avatars-icon2"
                              alt=""
                              src="./public/avatars@2x.png"
                            />

                            <div class="label5">10</div>
                            <img
                              class="icon-right5"
                              alt=""
                              src="./public/iconleft1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sidebar-menulist3">
                      <div class="sidebar-menu-item3">
                        <div class="left-content6">
                          <img
                            class="money-icon"
                            alt=""
                            src="./assets/money.svg"
                          />

                          <div class="text2">Pricing</div>
                        </div>
                        <div class="badge3">
                          <div class="container4">
                            <img
                              class="icon-left5"
                              alt=""
                              src="./public/iconleft1.svg"
                            />

                            <img
                              class="avatars-icon3"
                              alt=""
                              src="./public/avatars@2x.png"
                            />

                            <div class="label6">10</div>
                            <img
                              class="icon-right6"
                              alt=""
                              src="./public/iconleft1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sidebar-menulist4">
                      <div class="sidebar-menu-item4">
                        <div class="left-content7">
                          <img class="tag-icon" alt="" src="./assets/tag.svg" />

                          <input
                            class="text3"
                            placeholder="Sales"
                            type="text"
                          />
                        </div>
                        <div class="badge4">
                          <div class="container5">
                            <img
                              class="icon-left6"
                              alt=""
                              src="./public/iconleft1.svg"
                            />

                            <img
                              class="avatars-icon4"
                              alt=""
                              src="./public/avatars@2x.png"
                            />

                            <div class="label7">10</div>
                            <img
                              class="icon-right7"
                              alt=""
                              src="./public/iconleft1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button class="sidebar-menulist5">
                      <div class="sidebar-menu-item5">
                        <div class="left-content8">
                          <img
                            class="users-icon"
                            alt=""
                            src="./assets/users.svg"
                          />

                          <div class="text4">Users & Roles</div>
                        </div>
                        <div class="badge5">
                          <div class="container6">
                            <img
                              class="icon-left7"
                              alt=""
                              src="./public/iconleft1.svg"
                            />

                            <img
                              class="avatars-icon5"
                              alt=""
                              src="./public/avatars@2x.png"
                            />

                            <div class="label8">10</div>
                            <img
                              class="icon-right8"
                              alt=""
                              src="./public/iconleft1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </button>
                    <div class="sidebar-menulist6">
                      <div class="sidebar-menu-item6">
                        <div class="left-content9">
                          <img
                            class="cloud-icon"
                            alt=""
                            src="./assets/cloud.svg"
                          />

                          <div class="text5">Backups</div>
                        </div>
                        <div class="badge6">
                          <div class="container7">
                            <img
                              class="icon-left8"
                              alt=""
                              src="./public/iconleft1.svg"
                            />

                            <img
                              class="avatars-icon6"
                              alt=""
                              src="./public/avatars@2x.png"
                            />

                            <div class="label9">10</div>
                            <img
                              class="icon-right9"
                              alt=""
                              src="./public/iconleft1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="divider5"></div>
                  </div>
                </div>
                <div class="sidebar-section1">
                  <div class="title">
                    <div class="text6">Section Title</div>
                    <img class="icons" alt="" src="./public/icons.svg" />
                  </div>
                  <button class="sidebar-menulist7">
                    <div class="sidebar-menu-item7">
                      <div class="left-content10">
                        <img
                          class="iconbox"
                          alt=""
                          src="./public/iconbox.svg"
                        />

                        <div class="text7">My Listings</div>
                      </div>
                      <div class="badge7">
                        <div class="container8">
                          <img
                            class="icon-left9"
                            alt=""
                            src="./public/iconleft1.svg"
                          />

                          <img
                            class="avatars-icon7"
                            alt=""
                            src="./public/avatars@2x.png"
                          />

                          <div class="label10">10</div>
                          <img
                            class="icon-right10"
                            alt=""
                            src="./public/iconleft1.svg"
                          />
                        </div>
                      </div>
                      <div class="badge8">
                        <div class="container9">
                          <img
                            class="icon-left10"
                            alt=""
                            src="./public/iconleft1.svg"
                          />

                          <img
                            class="avatars-icon8"
                            alt=""
                            src="./public/avatars@2x.png"
                          />

                          <div class="label11">10</div>
                          <img
                            class="icon-right11"
                            alt=""
                            src="./public/iconleft1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="sidebar-menu-item8">
                      <div class="left-content11">
                        <img
                          class="signout-icon"
                          alt=""
                          src="./assets/signout.svg"
                        />

                        <div class="logout-label">Back to Dashboard</div>
                      </div>
                      <div class="badge9">
                        <div class="container10">
                          <img
                            class="icon-left11"
                            alt=""
                            src="./public/iconleft1.svg"
                          />

                          <img
                            class="avatars-icon9"
                            alt=""
                            src="./public/avatars@2x.png"
                          />

                          <div class="label12">10</div>
                          <img
                            class="icon-right12"
                            alt=""
                            src="./public/iconleft1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="sidebar-menu-item9">
                      <div class="left-content12">
                        <img
                          class="icon-money-2"
                          alt=""
                          src="./public/icon--money2.svg"
                        />

                        <div class="text8">Analytics</div>
                      </div>
                      <div class="badge10">
                        <div class="container11">
                          <img
                            class="icon-left12"
                            alt=""
                            src="./public/iconleft1.svg"
                          />

                          <img
                            class="avatars-icon10"
                            alt=""
                            src="./public/avatars@2x.png"
                          />

                          <div class="label13">10</div>
                          <img
                            class="icon-right13"
                            alt=""
                            src="./public/iconleft1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="sidebar-menu-item10">
                      <div class="left-content13">
                        <img
                          class="icon-hashtag"
                          alt=""
                          src="./public/icon--hashtag.svg"
                        />

                        <div class="text9">Menu title</div>
                      </div>
                      <div class="badge11">
                        <div class="container12">
                          <img
                            class="icon-left13"
                            alt=""
                            src="./public/iconleft1.svg"
                          />

                          <img
                            class="avatars-icon11"
                            alt=""
                            src="./public/avatars@2x.png"
                          />

                          <div class="label14">10</div>
                          <img
                            class="icon-right14"
                            alt=""
                            src="./public/iconleft1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="sidebar-menu-item11">
                      <div class="left-content14">
                        <img
                          class="icon-hashtag1"
                          alt=""
                          src="./public/icon--hashtag.svg"
                        />

                        <div class="text10">Menu title</div>
                      </div>
                      <div class="badge12">
                        <div class="container13">
                          <img
                            class="icon-left14"
                            alt=""
                            src="./public/iconleft1.svg"
                          />

                          <img
                            class="avatars-icon12"
                            alt=""
                            src="./public/avatars@2x.png"
                          />

                          <div class="label15">10</div>
                          <img
                            class="icon-right15"
                            alt=""
                            src="./public/iconleft1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="sidebar-menu-item12">
                      <div class="left-content15">
                        <img
                          class="icon-hashtag2"
                          alt=""
                          src="./public/icon--hashtag.svg"
                        />

                        <div class="text11">Menu title</div>
                      </div>
                      <div class="badge13">
                        <div class="container14">
                          <img
                            class="icon-left15"
                            alt=""
                            src="./public/iconleft1.svg"
                          />

                          <img
                            class="avatars-icon13"
                            alt=""
                            src="./public/avatars@2x.png"
                          />

                          <div class="label16">10</div>
                          <img
                            class="icon-right16"
                            alt=""
                            src="./public/iconleft1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="sidebar-menu-item13">
                      <div class="left-content16">
                        <img
                          class="icon-hashtag3"
                          alt=""
                          src="./public/icon--hashtag.svg"
                        />

                        <div class="text12">Menu title</div>
                      </div>
                      <div class="badge14">
                        <div class="container15">
                          <img
                            class="icon-left16"
                            alt=""
                            src="./public/iconleft1.svg"
                          />

                          <img
                            class="avatars-icon14"
                            alt=""
                            src="./public/avatars@2x.png"
                          />

                          <div class="label17">10</div>
                          <img
                            class="icon-right17"
                            alt=""
                            src="./public/iconleft1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="sidebar-menu-item14">
                      <div class="left-content17">
                        <img
                          class="icon-hashtag4"
                          alt=""
                          src="./public/icon--hashtag.svg"
                        />

                        <div class="text13">Menu title</div>
                      </div>
                      <div class="badge15">
                        <div class="container16">
                          <img
                            class="icon-left17"
                            alt=""
                            src="./public/iconleft1.svg"
                          />

                          <img
                            class="avatars-icon15"
                            alt=""
                            src="./public/avatars@2x.png"
                          />

                          <div class="label18">10</div>
                          <img
                            class="icon-right18"
                            alt=""
                            src="./public/iconleft1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="account-header-wrapper">
            <div class="account-header">
              <div class="account-details">
                <div class="label19">Settings</div>
                <div class="seperator">/</div>
                <div class="label20">Users & Roles Settings</div>
                <div class="detail-separator">
                  <div class="seperator1">/</div>
                  <div class="dividers5">
                    <div class="divider6"></div>
                  </div>
                </div>
              </div>
              <div class="account-name-parent">
                <h2 class="account-name">Users & Roles</h2>
                <div class="account-email-wrapper">
                  <div class="account-email">
                    Manage all users in your business
                  </div>
                </div>
                <div class="account-tabs">
                  <div class="tabs">
                    <div class="account-settings">Users</div>
                  </div>
                  <div class="tabs1">
                    <div class="account-settings1">Roles</div>
                  </div>
                </div>
              </div>
              <div class="account-content">
                <div class="content2">
                  <div class="search-area-wrapper">
                    <div class="search-area">
                      <div class="search-bar1">
                        <div class="box-input-style-box-inac1">
                          <div class="input-master-box1">
                            <div class="label-frame2">
                              <div class="label21">Label</div>
                              <div class="input-frame2">
                                <div class="left-content18">
                                  <img
                                    class="icon-left18"
                                    alt=""
                                    src="./assets/icon-left.png"
                                  />

                                  <input
                                    class="text-cursor2"
                                    placeholder="Search here..."
                                    type="text"
                                  />
                                </div>
                                <div class="right-content2">
                                  <div class="right-add-on2">Add-on</div>
                                  <img
                                    class="icon-right19"
                                    alt=""
                                    src="./public/iconright-1.svg"
                                  />

                                  <img
                                    class="media-payments1"
                                    alt=""
                                    src="./public/media--payments1@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="helper-text2">Helper text</div>
                          </div>
                        </div>
                      </div>
                      <button class="button-greys">
                        <div class="container17">
                          <img
                            class="button-icon"
                            alt=""
                            src="./assets/button-icon.svg"
                          />

                          <b class="label22">Filter</b>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="dropdown-menu-parent">
                    <div class="dropdown-menu">
                      <div class="default-button">
                        <div class="container18">
                          <img
                            class="icon-right20"
                            alt=""
                            src="./public/iconright-4.svg"
                          />

                          <b class="label23">Import</b>
                        </div>
                        <img
                          class="icon-right21"
                          alt=""
                          src="./public/iconright1.svg"
                        />
                      </div>
                      <div class="dropdown-menu-items">
                        <div class="dropdown-menu-items-section">
                          <div class="dropdown-menu-item-headers">
                            <div class="heading">
                              <div class="text14">Menu Title</div>
                              <div class="text15">
                                This is a subheading for the title
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item">
                            <div class="left-content19">
                              <img
                                class="icon-hashtag5"
                                alt=""
                                src="./public/icon--hashtag-5.svg"
                              />

                              <div class="text16">Home</div>
                            </div>
                            <div class="command-shortcut">
                              <div class="key">
                                <div class="text17">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item1">
                            <div class="left-content20">
                              <input class="icon-hashtag6" type="checkbox" />

                              <div class="text18">Search</div>
                            </div>
                            <div class="command-shortcut1">
                              <div class="key1">
                                <div class="text19">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item2">
                            <div class="left-content21">
                              <img
                                class="icon-hashtag7"
                                alt=""
                                src="./public/icon--hashtag-7.svg"
                              />

                              <div class="text20">Notifications</div>
                            </div>
                            <div class="command-shortcut2">
                              <div class="key2">
                                <div class="text21">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item3">
                            <div class="left-content22">
                              <img
                                class="icon-hashtag8"
                                alt=""
                                src="./public/icon--hashtag-8.svg"
                              />

                              <div class="text22">Account settings</div>
                            </div>
                            <div class="command-shortcut3">
                              <div class="key3">
                                <div class="text23">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item4">
                            <div class="left-content23">
                              <img
                                class="icon-hashtag9"
                                alt=""
                                src="./public/icon--hashtag-9.svg"
                              />

                              <div class="text24">Account settings</div>
                            </div>
                            <div class="command-shortcut4">
                              <div class="key4">
                                <div class="text25">⌘C</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="divider7"></div>
                        <div class="dropdown-menu-items-section1">
                          <div class="dropdown-menu-item-headers1">
                            <div class="heading1">
                              <div class="text26">Menu Title</div>
                              <div class="text27">
                                This is a subheading for the title
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item5">
                            <div class="left-content24">
                              <img
                                class="icon-hashtag10"
                                alt=""
                                src="./public/icon--hashtag-10.svg"
                              />

                              <div class="text28">Account Settings</div>
                            </div>
                            <div class="command-shortcut5">
                              <div class="key5">
                                <div class="text29">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item6">
                            <div class="left-content25">
                              <img
                                class="icon-hashtag11"
                                alt=""
                                src="./public/icon--hashtag-11.svg"
                              />

                              <div class="text30">Admin Settings</div>
                            </div>
                            <div class="command-shortcut6">
                              <div class="key6">
                                <div class="text31">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item7">
                            <div class="left-content26">
                              <img
                                class="icon-hashtag12"
                                alt=""
                                src="./public/icon--hashtag-12.svg"
                              />

                              <div class="text32">Account settings</div>
                            </div>
                            <div class="command-shortcut7">
                              <div class="key7">
                                <div class="text33">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item8">
                            <div class="left-content27">
                              <img
                                class="icon-hashtag13"
                                alt=""
                                src="./public/icon--hashtag-13.svg"
                              />

                              <div class="text34">Account settings</div>
                            </div>
                            <div class="command-shortcut8">
                              <div class="key8">
                                <div class="text35">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item9">
                            <div class="left-content28">
                              <img
                                class="icon-hashtag14"
                                alt=""
                                src="./public/icon--hashtag-14.svg"
                              />

                              <div class="text36">Account settings</div>
                            </div>
                            <div class="command-shortcut9">
                              <div class="key9">
                                <div class="text37">⌘C</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="divider8"></div>
                        <div class="dropdown-menu-items-section2">
                          <div class="dropdown-menu-item-headers2">
                            <div class="heading2">
                              <div class="text38">Menu Title</div>
                              <div class="text39">
                                This is a subheading for the title
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item10">
                            <div class="left-content29">
                              <img
                                class="icon-hashtag15"
                                alt=""
                                src="./public/icon--hashtag-15.svg"
                              />

                              <div class="text40">Sign out</div>
                            </div>
                            <div class="command-shortcut10">
                              <div class="key10">
                                <div class="text41">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item11">
                            <div class="left-content30">
                              <img
                                class="icon-hashtag16"
                                alt=""
                                src="./public/icon--hashtag-16.svg"
                              />

                              <div class="text42">Delete account</div>
                            </div>
                            <div class="command-shortcut11">
                              <div class="key11">
                                <div class="text43">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item12">
                            <div class="left-content31">
                              <img
                                class="icon-hashtag17"
                                alt=""
                                src="./public/icon--hashtag-17.svg"
                              />

                              <div class="text44">Delete account</div>
                            </div>
                            <div class="command-shortcut12">
                              <div class="key12">
                                <div class="text45">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item13">
                            <div class="left-content32">
                              <img
                                class="icon-hashtag18"
                                alt=""
                                src="./public/icon--hashtag-18.svg"
                              />

                              <div class="text46">Account settings</div>
                            </div>
                            <div class="command-shortcut13">
                              <div class="key13">
                                <div class="text47">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item14">
                            <div class="left-content33">
                              <img
                                class="icon-hashtag19"
                                alt=""
                                src="./public/icon--hashtag-19.svg"
                              />

                              <div class="text48">Account settings</div>
                            </div>
                            <div class="command-shortcut14">
                              <div class="key14">
                                <div class="text49">⌘C</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="dropdown-menu1">
                      <div class="default-button1">
                        <div class="container19">
                          <img
                            class="icon-right22"
                            alt=""
                            src="./public/iconright-5.svg"
                          />

                          <b class="label24">Export</b>
                        </div>
                        <img
                          class="icon-right23"
                          alt=""
                          src="./public/iconright2.svg"
                        />
                      </div>
                      <div class="dropdown-menu-items1">
                        <div class="dropdown-menu-items-section3">
                          <div class="dropdown-menu-item-headers3">
                            <div class="heading3">
                              <div class="text50">Menu Title</div>
                              <div class="text51">
                                This is a subheading for the title
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item15">
                            <div class="left-content34">
                              <img
                                class="icon-hashtag20"
                                alt=""
                                src="./public/icon--hashtag-20.svg"
                              />

                              <div class="text52">Home</div>
                            </div>
                            <div class="command-shortcut15">
                              <div class="key15">
                                <div class="text53">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item16">
                            <div class="left-content35">
                              <input class="icon-hashtag21" type="checkbox" />

                              <div class="text54">Search</div>
                            </div>
                            <div class="command-shortcut16">
                              <div class="key16">
                                <div class="text55">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item17">
                            <div class="left-content36">
                              <img
                                class="icon-hashtag22"
                                alt=""
                                src="./public/icon--hashtag-22.svg"
                              />

                              <div class="text56">Notifications</div>
                            </div>
                            <div class="command-shortcut17">
                              <div class="key17">
                                <div class="text57">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item18">
                            <div class="left-content37">
                              <img
                                class="icon-hashtag23"
                                alt=""
                                src="./public/icon--hashtag-23.svg"
                              />

                              <div class="text58">Account settings</div>
                            </div>
                            <div class="command-shortcut18">
                              <div class="key18">
                                <div class="text59">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item19">
                            <div class="left-content38">
                              <img
                                class="icon-hashtag24"
                                alt=""
                                src="./public/icon--hashtag-24.svg"
                              />

                              <div class="text60">Account settings</div>
                            </div>
                            <div class="command-shortcut19">
                              <div class="key19">
                                <div class="text61">⌘C</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="divider9"></div>
                        <div class="dropdown-menu-items-section4">
                          <div class="dropdown-menu-item-headers4">
                            <div class="heading4">
                              <div class="text62">Menu Title</div>
                              <div class="text63">
                                This is a subheading for the title
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item20">
                            <div class="left-content39">
                              <img
                                class="icon-hashtag25"
                                alt=""
                                src="./public/icon--hashtag-25.svg"
                              />

                              <div class="text64">Account Settings</div>
                            </div>
                            <div class="command-shortcut20">
                              <div class="key20">
                                <div class="text65">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item21">
                            <div class="left-content40">
                              <img
                                class="icon-hashtag26"
                                alt=""
                                src="./public/icon--hashtag-26.svg"
                              />

                              <div class="text66">Admin Settings</div>
                            </div>
                            <div class="command-shortcut21">
                              <div class="key21">
                                <div class="text67">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item22">
                            <div class="left-content41">
                              <img
                                class="icon-hashtag27"
                                alt=""
                                src="./public/icon--hashtag-27.svg"
                              />

                              <div class="text68">Account settings</div>
                            </div>
                            <div class="command-shortcut22">
                              <div class="key22">
                                <div class="text69">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item23">
                            <div class="left-content42">
                              <img
                                class="icon-hashtag28"
                                alt=""
                                src="./public/icon--hashtag-28.svg"
                              />

                              <div class="text70">Account settings</div>
                            </div>
                            <div class="command-shortcut23">
                              <div class="key23">
                                <div class="text71">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item24">
                            <div class="left-content43">
                              <img
                                class="icon-hashtag29"
                                alt=""
                                src="./public/icon--hashtag-29.svg"
                              />

                              <div class="text72">Account settings</div>
                            </div>
                            <div class="command-shortcut24">
                              <div class="key24">
                                <div class="text73">⌘C</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="divider10"></div>
                        <div class="dropdown-menu-items-section5">
                          <div class="dropdown-menu-item-headers5">
                            <div class="heading5">
                              <div class="text74">Menu Title</div>
                              <div class="text75">
                                This is a subheading for the title
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item25">
                            <div class="left-content44">
                              <img
                                class="icon-hashtag30"
                                alt=""
                                src="./public/icon--hashtag-30.svg"
                              />

                              <div class="text76">Sign out</div>
                            </div>
                            <div class="command-shortcut25">
                              <div class="key25">
                                <div class="text77">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item26">
                            <div class="left-content45">
                              <img
                                class="icon-hashtag31"
                                alt=""
                                src="./public/icon--hashtag-31.svg"
                              />

                              <div class="text78">Delete account</div>
                            </div>
                            <div class="command-shortcut26">
                              <div class="key26">
                                <div class="text79">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item27">
                            <div class="left-content46">
                              <img
                                class="icon-hashtag32"
                                alt=""
                                src="./public/icon--hashtag-32.svg"
                              />

                              <div class="text80">Delete account</div>
                            </div>
                            <div class="command-shortcut27">
                              <div class="key27">
                                <div class="text81">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item28">
                            <div class="left-content47">
                              <img
                                class="icon-hashtag33"
                                alt=""
                                src="./public/icon--hashtag-33.svg"
                              />

                              <div class="text82">Account settings</div>
                            </div>
                            <div class="command-shortcut28">
                              <div class="key28">
                                <div class="text83">⌘C</div>
                              </div>
                            </div>
                          </div>
                          <div class="dropdown-menu-item29">
                            <div class="left-content48">
                              <img
                                class="icon-hashtag34"
                                alt=""
                                src="./public/icon--hashtag-34.svg"
                              />

                              <div class="text84">Account settings</div>
                            </div>
                            <div class="command-shortcut29">
                              <div class="key29">
                                <div class="text85">⌘C</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="button-primary-wrapper">
                    <div class="button-primary">
                      <div class="container20">
                        <img
                          class="button-icon1"
                          alt=""
                          src="./public/buttonicon-1.svg"
                        />
                        <Link to='/settings'>
                        <b class="label25">New User</b>
                        </Link>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="table">
                  <div class="table-header-parent">
                    <div class="table-header">
                      <div class="table-master-header">
                        <div class="container21">
                          <input class="form-control-element" type="checkbox" />

                          <div class="text-icon">
                            <div class="label-wrapper">
                              <div class="label26">Name</div>
                            </div>
                            <img
                              class="icon-chevron-v"
                              alt=""
                              src="./public/icon--chevronv.svg"
                            />
                          </div>
                        </div>
                        <div class="separator">
                          <div class="rectangle1"></div>
                        </div>
                      </div>
                    </div>
                    <div class="table-leading-cell">
                      <div class="container22">
                        <div class="content3">
                          <input class="control" type="checkbox" />

                          <div class="leading-media">
                            <img
                              class="misc-icon"
                              alt=""
                              src="./public/misc-icon.svg"
                            />

                            <img
                              class="avatars-icon16"
                              alt=""
                              src="./public/avatars1@2x.png"
                            />
                          </div>
                          <div class="text86">
                            <div class="label27">Taiwo Isaac</div>
                            <div class="supportive-text">#109223</div>
                          </div>
                        </div>
                      </div>
                      <div class="separator1">
                        <div class="rectangle2"></div>
                      </div>
                    </div>
                    <div class="table-leading-cell1">
                      <div class="container23">
                        <div class="content4">
                          <input class="control1" type="checkbox" />

                          <div class="leading-media1">
                            <img
                              class="misc-icon1"
                              alt=""
                              src="./public/misc-icon.svg"
                            />

                            <img
                              class="avatars-icon17"
                              alt=""
                              src="./public/avatars1@2x.png"
                            />
                          </div>
                          <div class="text87">
                            <div class="label28">Seun Fagbemi</div>
                            <div class="supportive-text1">Low</div>
                          </div>
                        </div>
                      </div>
                      <div class="separator2">
                        <div class="rectangle3"></div>
                      </div>
                    </div>
                    <div class="table-leading-cell2">
                      <div class="container24">
                        <div class="content5">
                          <input class="control2" type="checkbox" />

                          <div class="leading-media2">
                            <img
                              class="misc-icon2"
                              alt=""
                              src="./public/misc-icon.svg"
                            />

                            <img
                              class="avatars-icon18"
                              alt=""
                              src="./public/avatars1@2x.png"
                            />
                          </div>
                          <div class="text88">
                            <div class="label29">Dare Oyejide</div>
                            <div class="supportive-text2">#109223</div>
                          </div>
                        </div>
                      </div>
                      <div class="separator3">
                        <div class="rectangle4"></div>
                      </div>
                    </div>
                    <div class="table-leading-cell3">
                      <div class="container25">
                        <div class="content6">
                          <input class="control3" type="checkbox" />

                          <div class="leading-media3">
                            <img
                              class="misc-icon3"
                              alt=""
                              src="./public/misc-icon.svg"
                            />

                            <img
                              class="avatars-icon19"
                              alt=""
                              src="./public/avatars1@2x.png"
                            />
                          </div>
                          <div class="text89">
                            <div class="label30">StudiMatch</div>
                            <div class="supportive-text3">High</div>
                          </div>
                        </div>
                      </div>
                      <div class="separator4">
                        <div class="rectangle5"></div>
                      </div>
                    </div>
                  </div>
                  <div class="table-headers">
                    <div class="table-header1">
                      <div class="table-master-header1">
                        <div class="container26">
                          <div class="form-control-element1">
                            <div class="outer-rectangle"></div>
                          </div>
                          <div class="text-icon1">
                            <div class="label-container">
                              <div class="label31">Email Address</div>
                            </div>
                            <img
                              class="icon-chevron-v1"
                              alt=""
                              src="./public/icon--chevronv.svg"
                            />
                          </div>
                        </div>
                        <div class="separator5">
                          <div class="rectangle6"></div>
                        </div>
                      </div>
                    </div>
                    <div class="table-content-cell">
                      <div class="container27">
                        <div class="content7">
                          <div class="rating">
                            <img
                              class="icon-star"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star1"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star2"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star3"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star4"
                              alt=""
                              src="./public/icon--star.svg"
                            />
                          </div>
                          <div class="badge16">
                            <div class="container28">
                              <img
                                class="icon-left19"
                                alt=""
                                src="./public/iconleft2.svg"
                              />

                              <img
                                class="avatars-icon20"
                                alt=""
                                src="./public/avatars@2x.png"
                              />

                              <div class="label32">Label</div>
                              <img
                                class="icon-right24"
                                alt=""
                                src="./public/iconright11.svg"
                              />
                            </div>
                          </div>
                          <div class="progress-bar">
                            <div class="label33">Label</div>
                            <div class="background-track">
                              <div class="progress"></div>
                            </div>
                            <div class="description">
                              <div class="meta-data">
                                <div class="label34">meta data</div>
                                <div class="label35">•</div>
                                <div class="label36">meta data</div>
                              </div>
                              <div class="percetages">10%</div>
                            </div>
                          </div>
                          <div class="actions">
                            <div class="button-texts">
                              <div class="container29">
                                <div class="label37">Label</div>
                              </div>
                            </div>
                            <div class="button-texts1">
                              <div class="container30">
                                <div class="label38">Label</div>
                              </div>
                            </div>
                          </div>
                          <div class="avatar-groups">
                            <img
                              class="avatars-icon21"
                              alt=""
                              src="./public/avatars2@2x.png"
                            />

                            <img
                              class="avatars-icon22"
                              alt=""
                              src="./public/avatars-1@2x.png"
                            />

                            <img
                              class="avatars-icon23"
                              alt=""
                              src="./public/avatars-2@2x.png"
                            />

                            <img
                              class="avatars-icon24"
                              alt=""
                              src="./public/avatars-3@2x.png"
                            />

                            <img
                              class="avatars-icon25"
                              alt=""
                              src="./public/avatars3@2x.png"
                            />

                            <img
                              class="avatars-icon26"
                              alt=""
                              src="./public/avatars4@2x.png"
                            />

                            <img
                              class="avatars-icon27"
                              alt=""
                              src="./public/avatars5@2x.png"
                            />

                            <img
                              class="avatars-icon28"
                              alt=""
                              src="./public/avatars6@2x.png"
                            />

                            <img
                              class="avatars-icon29"
                              alt=""
                              src="./public/avatars7@2x.png"
                            />

                            <div class="avatars">
                              <div class="image"></div>
                              <div class="o">+10</div>
                            </div>
                          </div>
                          <div class="avatar-text">
                            <img
                              class="avatars-icon30"
                              alt=""
                              src="./public/avatars8@2x.png"
                            />

                            <div class="text90">
                              <div class="label39">onegamirabel@email.com</div>
                              <div class="supportive-text4">
                                taiwoisaac@email.com
                              </div>
                            </div>
                          </div>
                          <div class="icons1">
                            <div class="icon-pencil-parent">
                              <img
                                class="icon-pencil"
                                alt=""
                                src="./public/icon--pencil@2x.png"
                              />

                              <img
                                class="icon-bin"
                                alt=""
                                src="./public/icon--bin.svg"
                              />

                              <img
                                class="icon-heart"
                                alt=""
                                src="./public/icon--heart.svg"
                              />

                              <img
                                class="icon-heart1"
                                alt=""
                                src="./public/icon--heart.svg"
                              />
                            </div>
                          </div>
                          <img
                            class="misc-icon4"
                            alt=""
                            src="./public/misc-icon1.svg"
                          />
                        </div>
                      </div>
                      <div class="separator6">
                        <div class="rectangle7"></div>
                      </div>
                    </div>
                    <div class="table-content-cell1">
                      <div class="container31">
                        <div class="content8">
                          <div class="rating1">
                            <img
                              class="icon-star5"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star6"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star7"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star8"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star9"
                              alt=""
                              src="./public/icon--star.svg"
                            />
                          </div>
                          <div class="badge17">
                            <div class="container32">
                              <img
                                class="icon-left20"
                                alt=""
                                src="./public/iconleft2.svg"
                              />

                              <img
                                class="avatars-icon31"
                                alt=""
                                src="./public/avatars@2x.png"
                              />

                              <div class="label40">Label</div>
                              <img
                                class="icon-right25"
                                alt=""
                                src="./public/iconright11.svg"
                              />
                            </div>
                          </div>
                          <div class="progress-bar1">
                            <div class="label41">Label</div>
                            <div class="background-track1">
                              <div class="progress1"></div>
                            </div>
                            <div class="description1">
                              <div class="meta-data1">
                                <div class="label42">meta data</div>
                                <div class="label43">•</div>
                                <div class="label44">meta data</div>
                              </div>
                              <div class="percetages1">10%</div>
                            </div>
                          </div>
                          <div class="actions1">
                            <div class="button-texts2">
                              <div class="container33">
                                <div class="label45">Label</div>
                              </div>
                            </div>
                            <div class="button-texts3">
                              <div class="container34">
                                <div class="label46">Label</div>
                              </div>
                            </div>
                          </div>
                          <div class="avatar-groups1">
                            <img
                              class="avatars-icon32"
                              alt=""
                              src="./public/avatars2@2x.png"
                            />

                            <img
                              class="avatars-icon33"
                              alt=""
                              src="./public/avatars-1@2x.png"
                            />

                            <img
                              class="avatars-icon34"
                              alt=""
                              src="./public/avatars-2@2x.png"
                            />

                            <img
                              class="avatars-icon35"
                              alt=""
                              src="./public/avatars-3@2x.png"
                            />

                            <img
                              class="avatars-icon36"
                              alt=""
                              src="./public/avatars3@2x.png"
                            />

                            <img
                              class="avatars-icon37"
                              alt=""
                              src="./public/avatars4@2x.png"
                            />

                            <img
                              class="avatars-icon38"
                              alt=""
                              src="./public/avatars5@2x.png"
                            />

                            <img
                              class="avatars-icon39"
                              alt=""
                              src="./public/avatars6@2x.png"
                            />

                            <img
                              class="avatars-icon40"
                              alt=""
                              src="./public/avatars7@2x.png"
                            />

                            <div class="avatars1">
                              <div class="image1"></div>
                              <div class="o1">+10</div>
                            </div>
                          </div>
                          <div class="avatar-text1">
                            <img
                              class="avatars-icon41"
                              alt=""
                              src="./public/avatars8@2x.png"
                            />

                            <div class="text91">
                              <div class="label47">
                                habeebatbalogun@email.com
                              </div>
                              <div class="supportive-text5">
                                seunfagbemi@email.com
                              </div>
                            </div>
                          </div>
                          <div class="icons2">
                            <div class="icon-pencil-group">
                              <img
                                class="icon-pencil1"
                                alt=""
                                src="./public/icon--pencil@2x.png"
                              />

                              <img
                                class="icon-bin1"
                                alt=""
                                src="./public/icon--bin.svg"
                              />

                              <img
                                class="icon-heart2"
                                alt=""
                                src="./public/icon--heart.svg"
                              />

                              <img
                                class="icon-heart3"
                                alt=""
                                src="./public/icon--heart.svg"
                              />
                            </div>
                          </div>
                          <img
                            class="misc-icon5"
                            alt=""
                            src="./public/misc-icon1.svg"
                          />
                        </div>
                      </div>
                      <div class="separator7">
                        <div class="rectangle8"></div>
                      </div>
                    </div>
                    <div class="table-content-cell2">
                      <div class="container35">
                        <div class="content9">
                          <div class="rating2">
                            <img
                              class="icon-star10"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star11"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star12"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star13"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star14"
                              alt=""
                              src="./public/icon--star.svg"
                            />
                          </div>
                          <div class="badge18">
                            <div class="container36">
                              <img
                                class="icon-left21"
                                alt=""
                                src="./public/iconleft2.svg"
                              />

                              <img
                                class="avatars-icon42"
                                alt=""
                                src="./public/avatars@2x.png"
                              />

                              <div class="label48">Label</div>
                              <img
                                class="icon-right26"
                                alt=""
                                src="./public/iconright11.svg"
                              />
                            </div>
                          </div>
                          <div class="progress-bar2">
                            <div class="label49">Label</div>
                            <div class="background-track2">
                              <div class="progress2"></div>
                            </div>
                            <div class="description2">
                              <div class="meta-data2">
                                <div class="label50">meta data</div>
                                <div class="label51">•</div>
                                <div class="label52">meta data</div>
                              </div>
                              <div class="percetages2">10%</div>
                            </div>
                          </div>
                          <div class="actions2">
                            <div class="button-texts4">
                              <div class="container37">
                                <div class="label53">Label</div>
                              </div>
                            </div>
                            <div class="button-texts5">
                              <div class="container38">
                                <div class="label54">Label</div>
                              </div>
                            </div>
                          </div>
                          <div class="avatar-groups2">
                            <img
                              class="avatars-icon43"
                              alt=""
                              src="./public/avatars2@2x.png"
                            />

                            <img
                              class="avatars-icon44"
                              alt=""
                              src="./public/avatars-1@2x.png"
                            />

                            <img
                              class="avatars-icon45"
                              alt=""
                              src="./public/avatars-2@2x.png"
                            />

                            <img
                              class="avatars-icon46"
                              alt=""
                              src="./public/avatars-3@2x.png"
                            />

                            <img
                              class="avatars-icon47"
                              alt=""
                              src="./public/avatars3@2x.png"
                            />

                            <img
                              class="avatars-icon48"
                              alt=""
                              src="./public/avatars4@2x.png"
                            />

                            <img
                              class="avatars-icon49"
                              alt=""
                              src="./public/avatars5@2x.png"
                            />

                            <img
                              class="avatars-icon50"
                              alt=""
                              src="./public/avatars6@2x.png"
                            />

                            <img
                              class="avatars-icon51"
                              alt=""
                              src="./public/avatars7@2x.png"
                            />

                            <div class="avatars2">
                              <div class="image2"></div>
                              <div class="o2">+10</div>
                            </div>
                          </div>
                          <div class="avatar-text2">
                            <img
                              class="avatars-icon52"
                              alt=""
                              src="./public/avatars8@2x.png"
                            />

                            <div class="text92">
                              <div class="label55">onegamirabel@email.com</div>
                              <div class="supportive-text6">
                                dareoyejide@email.com
                              </div>
                            </div>
                          </div>
                          <div class="icons3">
                            <div class="icon-pencil-container">
                              <img
                                class="icon-pencil2"
                                alt=""
                                src="./public/icon--pencil@2x.png"
                              />

                              <img
                                class="icon-bin2"
                                alt=""
                                src="./public/icon--bin.svg"
                              />

                              <img
                                class="icon-heart4"
                                alt=""
                                src="./public/icon--heart.svg"
                              />

                              <img
                                class="icon-heart5"
                                alt=""
                                src="./public/icon--heart.svg"
                              />
                            </div>
                          </div>
                          <img
                            class="misc-icon6"
                            alt=""
                            src="./public/misc-icon1.svg"
                          />
                        </div>
                      </div>
                      <div class="separator8">
                        <div class="rectangle9"></div>
                      </div>
                    </div>
                    <div class="table-content-cell3">
                      <div class="container39">
                        <div class="content10">
                          <div class="rating3">
                            <img
                              class="icon-star15"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star16"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star17"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star18"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star19"
                              alt=""
                              src="./public/icon--star.svg"
                            />
                          </div>
                          <div class="badge19">
                            <div class="container40">
                              <img
                                class="icon-left22"
                                alt=""
                                src="./public/iconleft2.svg"
                              />

                              <img
                                class="avatars-icon53"
                                alt=""
                                src="./public/avatars@2x.png"
                              />

                              <div class="label56">Label</div>
                              <img
                                class="icon-right27"
                                alt=""
                                src="./public/iconright11.svg"
                              />
                            </div>
                          </div>
                          <div class="progress-bar3">
                            <div class="label57">Label</div>
                            <div class="background-track3">
                              <div class="progress3"></div>
                            </div>
                            <div class="description3">
                              <div class="meta-data3">
                                <div class="label58">meta data</div>
                                <div class="label59">•</div>
                                <div class="label60">meta data</div>
                              </div>
                              <div class="percetages3">10%</div>
                            </div>
                          </div>
                          <div class="actions3">
                            <div class="button-texts6">
                              <div class="container41">
                                <div class="label61">Label</div>
                              </div>
                            </div>
                            <div class="button-texts7">
                              <div class="container42">
                                <div class="label62">Label</div>
                              </div>
                            </div>
                          </div>
                          <div class="avatar-groups3">
                            <img
                              class="avatars-icon54"
                              alt=""
                              src="./public/avatars2@2x.png"
                            />

                            <img
                              class="avatars-icon55"
                              alt=""
                              src="./public/avatars-1@2x.png"
                            />

                            <img
                              class="avatars-icon56"
                              alt=""
                              src="./public/avatars-2@2x.png"
                            />

                            <img
                              class="avatars-icon57"
                              alt=""
                              src="./public/avatars-3@2x.png"
                            />

                            <img
                              class="avatars-icon58"
                              alt=""
                              src="./public/avatars3@2x.png"
                            />

                            <img
                              class="avatars-icon59"
                              alt=""
                              src="./public/avatars4@2x.png"
                            />

                            <img
                              class="avatars-icon60"
                              alt=""
                              src="./public/avatars5@2x.png"
                            />

                            <img
                              class="avatars-icon61"
                              alt=""
                              src="./public/avatars6@2x.png"
                            />

                            <img
                              class="avatars-icon62"
                              alt=""
                              src="./public/avatars7@2x.png"
                            />

                            <div class="avatars3">
                              <div class="image3"></div>
                              <div class="o3">+10</div>
                            </div>
                          </div>
                          <div class="avatar-text3">
                            <img
                              class="avatars-icon63"
                              alt=""
                              src="./public/avatars8@2x.png"
                            />

                            <div class="text93">
                              <div class="label63">
                                <span class="duncanidris">duncanidris</span>
                                <span>@email.com</span>
                              </div>
                              <div class="supportive-text7">
                                studimatch@email.com
                              </div>
                            </div>
                          </div>
                          <div class="icons4">
                            <div class="frame-div">
                              <img
                                class="icon-pencil3"
                                alt=""
                                src="./public/icon--pencil@2x.png"
                              />

                              <img
                                class="icon-bin3"
                                alt=""
                                src="./public/icon--bin.svg"
                              />

                              <img
                                class="icon-heart6"
                                alt=""
                                src="./public/icon--heart.svg"
                              />

                              <img
                                class="icon-heart7"
                                alt=""
                                src="./public/icon--heart.svg"
                              />
                            </div>
                          </div>
                          <img
                            class="misc-icon7"
                            alt=""
                            src="./public/misc-icon1.svg"
                          />
                        </div>
                      </div>
                      <div class="separator9">
                        <div class="rectangle10"></div>
                      </div>
                    </div>
                  </div>
                  <div class="table-headers1">
                    <div class="table-header2">
                      <div class="table-master-header2">
                        <div class="container43">
                          <div class="form-control-element2">
                            <div class="outer-rectangle1"></div>
                          </div>
                          <div class="text-icon2">
                            <div class="label-wrapper1">
                              <div class="label64">Role</div>
                            </div>
                            <img
                              class="icon-chevron-v2"
                              alt=""
                              src="./public/icon--chevronv.svg"
                            />
                          </div>
                        </div>
                        <div class="separator10">
                          <div class="rectangle11"></div>
                        </div>
                      </div>
                    </div>
                    <div class="table-content-cell4">
                      <div class="container44">
                        <div class="content11">
                          <div class="rating4">
                            <img
                              class="icon-star20"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star21"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star22"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star23"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star24"
                              alt=""
                              src="./public/icon--star.svg"
                            />
                          </div>
                          <div class="badge20">
                            <div class="container45">
                              <img
                                class="icon-left23"
                                alt=""
                                src="./public/iconleft2.svg"
                              />

                              <img
                                class="avatars-icon64"
                                alt=""
                                src="./public/avatars@2x.png"
                              />

                              <div class="label65">Administrator</div>
                              <img
                                class="icon-right28"
                                alt=""
                                src="./public/iconright11.svg"
                              />
                            </div>
                          </div>
                          <div class="progress-bar4">
                            <div class="label66">Label</div>
                            <div class="background-track4">
                              <div class="progress4"></div>
                            </div>
                            <div class="description4">
                              <div class="meta-data4">
                                <div class="label67">meta data</div>
                                <div class="label68">•</div>
                                <div class="label69">meta data</div>
                              </div>
                              <div class="percetages4">10%</div>
                            </div>
                          </div>
                          <div class="actions4">
                            <div class="button-texts8">
                              <div class="container46">
                                <div class="label70">Label</div>
                              </div>
                            </div>
                            <div class="button-texts9">
                              <div class="container47">
                                <div class="label71">Label</div>
                              </div>
                            </div>
                          </div>
                          <div class="avatar-groups4">
                            <img
                              class="avatars-icon65"
                              alt=""
                              src="./public/avatars2@2x.png"
                            />

                            <img
                              class="avatars-icon66"
                              alt=""
                              src="./public/avatars-1@2x.png"
                            />

                            <img
                              class="avatars-icon67"
                              alt=""
                              src="./public/avatars-2@2x.png"
                            />

                            <img
                              class="avatars-icon68"
                              alt=""
                              src="./public/avatars-3@2x.png"
                            />

                            <img
                              class="avatars-icon69"
                              alt=""
                              src="./public/avatars3@2x.png"
                            />

                            <img
                              class="avatars-icon70"
                              alt=""
                              src="./public/avatars4@2x.png"
                            />

                            <img
                              class="avatars-icon71"
                              alt=""
                              src="./public/avatars5@2x.png"
                            />

                            <img
                              class="avatars-icon72"
                              alt=""
                              src="./public/avatars6@2x.png"
                            />

                            <img
                              class="avatars-icon73"
                              alt=""
                              src="./public/avatars7@2x.png"
                            />

                            <div class="avatars4">
                              <div class="image4"></div>
                              <div class="o4">+10</div>
                            </div>
                          </div>
                          <div class="avatar-text4">
                            <img
                              class="avatars-icon74"
                              alt=""
                              src="./public/avatars1@2x.png"
                            />

                            <div class="text94">
                              <div class="label72">onegamirabel@email.com</div>
                              <div class="supportive-text8">Administrator</div>
                            </div>
                          </div>
                          <div class="icons5">
                            <div class="icon-pencil-parent1">
                              <img
                                class="icon-pencil4"
                                alt=""
                                src="./public/icon--pencil@2x.png"
                              />

                              <img
                                class="icon-bin4"
                                alt=""
                                src="./public/icon--bin.svg"
                              />

                              <img
                                class="icon-heart8"
                                alt=""
                                src="./public/icon--heart.svg"
                              />

                              <img
                                class="icon-heart9"
                                alt=""
                                src="./public/icon--heart.svg"
                              />
                            </div>
                          </div>
                          <img
                            class="misc-icon8"
                            alt=""
                            src="./public/misc-icon1.svg"
                          />
                        </div>
                      </div>
                      <div class="separator11">
                        <div class="rectangle12"></div>
                      </div>
                    </div>
                    <div class="table-content-cell5">
                      <div class="container48">
                        <div class="content12">
                          <div class="rating5">
                            <img
                              class="icon-star25"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star26"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star27"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star28"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star29"
                              alt=""
                              src="./public/icon--star.svg"
                            />
                          </div>
                          <div class="badge21">
                            <div class="container49">
                              <img
                                class="icon-left24"
                                alt=""
                                src="./public/iconleft2.svg"
                              />

                              <img
                                class="avatars-icon75"
                                alt=""
                                src="./public/avatars@2x.png"
                              />

                              <div class="label73">Sales Manager</div>
                              <img
                                class="icon-right29"
                                alt=""
                                src="./public/iconright11.svg"
                              />
                            </div>
                          </div>
                          <div class="progress-bar5">
                            <div class="label74">Label</div>
                            <div class="background-track5">
                              <div class="progress5"></div>
                            </div>
                            <div class="description5">
                              <div class="meta-data5">
                                <div class="label75">meta data</div>
                                <div class="label76">•</div>
                                <div class="label77">meta data</div>
                              </div>
                              <div class="percetages5">10%</div>
                            </div>
                          </div>
                          <div class="actions5">
                            <div class="button-texts10">
                              <div class="container50">
                                <div class="label78">Label</div>
                              </div>
                            </div>
                            <div class="button-texts11">
                              <div class="container51">
                                <div class="label79">Label</div>
                              </div>
                            </div>
                          </div>
                          <div class="avatar-groups5">
                            <img
                              class="avatars-icon76"
                              alt=""
                              src="./public/avatars2@2x.png"
                            />

                            <img
                              class="avatars-icon77"
                              alt=""
                              src="./public/avatars-1@2x.png"
                            />

                            <img
                              class="avatars-icon78"
                              alt=""
                              src="./public/avatars-2@2x.png"
                            />

                            <img
                              class="avatars-icon79"
                              alt=""
                              src="./public/avatars-3@2x.png"
                            />

                            <img
                              class="avatars-icon80"
                              alt=""
                              src="./public/avatars3@2x.png"
                            />

                            <img
                              class="avatars-icon81"
                              alt=""
                              src="./public/avatars4@2x.png"
                            />

                            <img
                              class="avatars-icon82"
                              alt=""
                              src="./public/avatars5@2x.png"
                            />

                            <img
                              class="avatars-icon83"
                              alt=""
                              src="./public/avatars6@2x.png"
                            />

                            <img
                              class="avatars-icon84"
                              alt=""
                              src="./public/avatars7@2x.png"
                            />

                            <div class="avatars5">
                              <div class="image5"></div>
                              <div class="o5">+10</div>
                            </div>
                          </div>
                          <div class="avatar-text5">
                            <img
                              class="avatars-icon85"
                              alt=""
                              src="./public/avatars1@2x.png"
                            />

                            <div class="text95">
                              <div class="label80">onegamirabel@email.com</div>
                              <div class="supportive-text9">Administrator</div>
                            </div>
                          </div>
                          <div class="icons6">
                            <div class="icon-pencil-parent2">
                              <img
                                class="icon-pencil5"
                                alt=""
                                src="./public/icon--pencil@2x.png"
                              />

                              <img
                                class="icon-bin5"
                                alt=""
                                src="./public/icon--bin.svg"
                              />

                              <img
                                class="icon-heart10"
                                alt=""
                                src="./public/icon--heart.svg"
                              />

                              <img
                                class="icon-heart11"
                                alt=""
                                src="./public/icon--heart.svg"
                              />
                            </div>
                          </div>
                          <img
                            class="misc-icon9"
                            alt=""
                            src="./public/misc-icon1.svg"
                          />
                        </div>
                      </div>
                      <div class="separator12">
                        <div class="rectangle13"></div>
                      </div>
                    </div>
                    <div class="table-content-cell6">
                      <div class="container52">
                        <div class="content13">
                          <div class="rating6">
                            <img
                              class="icon-star30"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star31"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star32"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star33"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star34"
                              alt=""
                              src="./public/icon--star.svg"
                            />
                          </div>
                          <div class="badge22">
                            <div class="container53">
                              <img
                                class="icon-left25"
                                alt=""
                                src="./public/iconleft2.svg"
                              />

                              <img
                                class="avatars-icon86"
                                alt=""
                                src="./public/avatars@2x.png"
                              />

                              <div class="label81">Sales Manager</div>
                              <img
                                class="icon-right30"
                                alt=""
                                src="./public/iconright11.svg"
                              />
                            </div>
                          </div>
                          <div class="progress-bar6">
                            <div class="label82">Label</div>
                            <div class="background-track6">
                              <div class="progress6"></div>
                            </div>
                            <div class="description6">
                              <div class="meta-data6">
                                <div class="label83">meta data</div>
                                <div class="label84">•</div>
                                <div class="label85">meta data</div>
                              </div>
                              <div class="percetages6">10%</div>
                            </div>
                          </div>
                          <div class="actions6">
                            <div class="button-texts12">
                              <div class="container54">
                                <div class="label86">Label</div>
                              </div>
                            </div>
                            <div class="button-texts13">
                              <div class="container55">
                                <div class="label87">Label</div>
                              </div>
                            </div>
                          </div>
                          <div class="avatar-groups6">
                            <img
                              class="avatars-icon87"
                              alt=""
                              src="./public/avatars2@2x.png"
                            />

                            <img
                              class="avatars-icon88"
                              alt=""
                              src="./public/avatars-1@2x.png"
                            />

                            <img
                              class="avatars-icon89"
                              alt=""
                              src="./public/avatars-2@2x.png"
                            />

                            <img
                              class="avatars-icon90"
                              alt=""
                              src="./public/avatars-3@2x.png"
                            />

                            <img
                              class="avatars-icon91"
                              alt=""
                              src="./public/avatars3@2x.png"
                            />

                            <img
                              class="avatars-icon92"
                              alt=""
                              src="./public/avatars4@2x.png"
                            />

                            <img
                              class="avatars-icon93"
                              alt=""
                              src="./public/avatars5@2x.png"
                            />

                            <img
                              class="avatars-icon94"
                              alt=""
                              src="./public/avatars6@2x.png"
                            />

                            <img
                              class="avatars-icon95"
                              alt=""
                              src="./public/avatars7@2x.png"
                            />

                            <div class="avatars6">
                              <div class="image6"></div>
                              <div class="o6">+10</div>
                            </div>
                          </div>
                          <div class="avatar-text6">
                            <img
                              class="avatars-icon96"
                              alt=""
                              src="./public/avatars1@2x.png"
                            />

                            <div class="text96">
                              <div class="label88">onegamirabel@email.com</div>
                              <div class="supportive-text10">Administrator</div>
                            </div>
                          </div>
                          <div class="icons7">
                            <div class="icon-pencil-parent3">
                              <img
                                class="icon-pencil6"
                                alt=""
                                src="./public/icon--pencil@2x.png"
                              />

                              <img
                                class="icon-bin6"
                                alt=""
                                src="./public/icon--bin.svg"
                              />

                              <img
                                class="icon-heart12"
                                alt=""
                                src="./public/icon--heart.svg"
                              />

                              <img
                                class="icon-heart13"
                                alt=""
                                src="./public/icon--heart.svg"
                              />
                            </div>
                          </div>
                          <img
                            class="misc-icon10"
                            alt=""
                            src="./public/misc-icon1.svg"
                          />
                        </div>
                      </div>
                      <div class="separator13">
                        <div class="rectangle14"></div>
                      </div>
                    </div>
                    <div class="table-content-cell7">
                      <div class="container56">
                        <div class="content14">
                          <div class="rating7">
                            <img
                              class="icon-star35"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star36"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star37"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star38"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star39"
                              alt=""
                              src="./public/icon--star.svg"
                            />
                          </div>
                          <div class="badge23">
                            <div class="container57">
                              <img
                                class="icon-left26"
                                alt=""
                                src="./public/iconleft2.svg"
                              />

                              <img
                                class="avatars-icon97"
                                alt=""
                                src="./public/avatars@2x.png"
                              />

                              <div class="label89">Sales Representative</div>
                              <img
                                class="icon-right31"
                                alt=""
                                src="./public/iconright11.svg"
                              />
                            </div>
                          </div>
                          <div class="progress-bar7">
                            <div class="label90">Label</div>
                            <div class="background-track7">
                              <div class="progress7"></div>
                            </div>
                            <div class="description7">
                              <div class="meta-data7">
                                <div class="label91">meta data</div>
                                <div class="label92">•</div>
                                <div class="label93">meta data</div>
                              </div>
                              <div class="percetages7">10%</div>
                            </div>
                          </div>
                          <div class="actions7">
                            <div class="button-texts14">
                              <div class="container58">
                                <div class="label94">Label</div>
                              </div>
                            </div>
                            <div class="button-texts15">
                              <div class="container59">
                                <div class="label95">Label</div>
                              </div>
                            </div>
                          </div>
                          <div class="avatar-groups7">
                            <img
                              class="avatars-icon98"
                              alt=""
                              src="./public/avatars2@2x.png"
                            />

                            <img
                              class="avatars-icon99"
                              alt=""
                              src="./public/avatars-1@2x.png"
                            />

                            <img
                              class="avatars-icon100"
                              alt=""
                              src="./public/avatars-2@2x.png"
                            />

                            <img
                              class="avatars-icon101"
                              alt=""
                              src="./public/avatars-3@2x.png"
                            />

                            <img
                              class="avatars-icon102"
                              alt=""
                              src="./public/avatars3@2x.png"
                            />

                            <img
                              class="avatars-icon103"
                              alt=""
                              src="./public/avatars4@2x.png"
                            />

                            <img
                              class="avatars-icon104"
                              alt=""
                              src="./public/avatars5@2x.png"
                            />

                            <img
                              class="avatars-icon105"
                              alt=""
                              src="./public/avatars6@2x.png"
                            />

                            <img
                              class="avatars-icon106"
                              alt=""
                              src="./public/avatars7@2x.png"
                            />

                            <div class="avatars7">
                              <div class="image7"></div>
                              <div class="o7">+10</div>
                            </div>
                          </div>
                          <div class="avatar-text7">
                            <img
                              class="avatars-icon107"
                              alt=""
                              src="./public/avatars1@2x.png"
                            />

                            <div class="text97">
                              <div class="label96">onegamirabel@email.com</div>
                              <div class="supportive-text11">Administrator</div>
                            </div>
                          </div>
                          <div class="icons8">
                            <div class="icon-pencil-parent4">
                              <img
                                class="icon-pencil7"
                                alt=""
                                src="./public/icon--pencil@2x.png"
                              />

                              <img
                                class="icon-bin7"
                                alt=""
                                src="./public/icon--bin.svg"
                              />

                              <img
                                class="icon-heart14"
                                alt=""
                                src="./public/icon--heart.svg"
                              />

                              <img
                                class="icon-heart15"
                                alt=""
                                src="./public/icon--heart.svg"
                              />
                            </div>
                          </div>
                          <img
                            class="misc-icon11"
                            alt=""
                            src="./public/misc-icon1.svg"
                          />
                        </div>
                      </div>
                      <div class="separator14">
                        <div class="rectangle15"></div>
                      </div>
                    </div>
                  </div>
                  <div class="table-header-group">
                    <div class="table-header3">
                      <div class="table-master-header3">
                        <div class="container60">
                          <div class="form-control-element3">
                            <div class="outer-rectangle2"></div>
                          </div>
                          <div class="text-icon3">
                            <div class="label97">Actions</div>
                            <img
                              class="icon-chevron-v3"
                              alt=""
                              src="./public/icon--chevronv1.svg"
                            />
                          </div>
                        </div>
                        <div class="separator15">
                          <div class="rectangle16"></div>
                        </div>
                      </div>
                    </div>
                    <div class="table-content-cell8">
                      <div class="container61">
                        <div class="content15">
                          <div class="rating8">
                            <img
                              class="icon-star40"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star41"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star42"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star43"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star44"
                              alt=""
                              src="./public/icon--star.svg"
                            />
                          </div>
                          <div class="badge24">
                            <div class="container62">
                              <img
                                class="icon-left27"
                                alt=""
                                src="./public/iconleft2.svg"
                              />

                              <img
                                class="avatars-icon108"
                                alt=""
                                src="./public/avatars@2x.png"
                              />

                              <div class="label98">Label</div>
                              <img
                                class="icon-right32"
                                alt=""
                                src="./public/iconright11.svg"
                              />
                            </div>
                          </div>
                          <div class="progress-bar8">
                            <div class="label99">Label</div>
                            <div class="background-track8">
                              <div class="progress8"></div>
                            </div>
                            <div class="description8">
                              <div class="meta-data8">
                                <div class="label100">meta data</div>
                                <div class="label101">•</div>
                                <div class="label102">meta data</div>
                              </div>
                              <div class="percetages8">10%</div>
                            </div>
                          </div>
                          <div class="actions8">
                            <div class="button-texts16">
                              <div class="container63">
                                <Link to='/edit'>
                                <b class="label103">Edit</b>
                                </Link>
                              </div>
                            </div>
                            <div class="button-texts17">
                              <div class="container64">
                                <b class="label104">Remove</b>
                              </div>
                            </div>
                          </div>
                          <div class="avatar-groups8">
                            <img
                              class="avatars-icon109"
                              alt=""
                              src="./public/avatars2@2x.png"
                            />

                            <img
                              class="avatars-icon110"
                              alt=""
                              src="./public/avatars-1@2x.png"
                            />

                            <img
                              class="avatars-icon111"
                              alt=""
                              src="./public/avatars-2@2x.png"
                            />

                            <img
                              class="avatars-icon112"
                              alt=""
                              src="./public/avatars-3@2x.png"
                            />

                            <img
                              class="avatars-icon113"
                              alt=""
                              src="./public/avatars3@2x.png"
                            />

                            <img
                              class="avatars-icon114"
                              alt=""
                              src="./public/avatars4@2x.png"
                            />

                            <img
                              class="avatars-icon115"
                              alt=""
                              src="./public/avatars5@2x.png"
                            />

                            <img
                              class="avatars-icon116"
                              alt=""
                              src="./public/avatars6@2x.png"
                            />

                            <img
                              class="avatars-icon117"
                              alt=""
                              src="./public/avatars7@2x.png"
                            />

                            <div class="avatars8">
                              <div class="image8"></div>
                              <div class="o8">+10</div>
                            </div>
                          </div>
                          <div class="avatar-text8">
                            <img
                              class="avatars-icon118"
                              alt=""
                              src="./public/avatars9@2x.png"
                            />

                            <div class="text98">
                              <div class="label105">Leading text</div>
                              <div class="supportive-text12">Description</div>
                            </div>
                          </div>
                          <div class="icons9">
                            <div class="icon-pencil-parent5">
                              <img
                                class="icon-pencil8"
                                alt=""
                                src="./public/icon--pencil@2x.png"
                              />

                              <input class="icon-bin8" type="checkbox" />

                              <img
                                class="icon-heart16"
                                alt=""
                                src="./public/icon--heart.svg"
                              />

                              <img
                                class="icon-heart17"
                                alt=""
                                src="./public/icon--heart.svg"
                              />
                            </div>
                          </div>
                          <img
                            class="misc-icon12"
                            alt=""
                            src="./public/misc-icon1.svg"
                          />
                        </div>
                      </div>
                      <div class="separator16">
                        <div class="rectangle17"></div>
                      </div>
                    </div>
                    <div class="table-content-cell9">
                      <div class="container65">
                        <div class="content16">
                          <div class="rating9">
                            <img
                              class="icon-star45"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star46"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star47"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star48"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star49"
                              alt=""
                              src="./public/icon--star.svg"
                            />
                          </div>
                          <div class="badge25">
                            <div class="container66">
                              <img
                                class="icon-left28"
                                alt=""
                                src="./public/iconleft2.svg"
                              />

                              <img
                                class="avatars-icon119"
                                alt=""
                                src="./public/avatars@2x.png"
                              />

                              <div class="label106">Label</div>
                              <img
                                class="icon-right33"
                                alt=""
                                src="./public/iconright11.svg"
                              />
                            </div>
                          </div>
                          <div class="progress-bar9">
                            <div class="label107">Label</div>
                            <div class="background-track9">
                              <div class="progress9"></div>
                            </div>
                            <div class="description9">
                              <div class="meta-data9">
                                <div class="label108">meta data</div>
                                <div class="label109">•</div>
                                <div class="label110">meta data</div>
                              </div>
                              <div class="percetages9">10%</div>
                            </div>
                          </div>
                          <div class="actions9">
                            <div class="button-texts18">
                              <div class="container67">
                                <b class="label111">Edit</b>
                              </div>
                            </div>
                            <div class="button-texts19">
                              <div class="container68">
                                <b class="label112">Remove</b>
                              </div>
                            </div>
                          </div>
                          <div class="avatar-groups9">
                            <img
                              class="avatars-icon120"
                              alt=""
                              src="./public/avatars2@2x.png"
                            />

                            <img
                              class="avatars-icon121"
                              alt=""
                              src="./public/avatars-1@2x.png"
                            />

                            <img
                              class="avatars-icon122"
                              alt=""
                              src="./public/avatars-2@2x.png"
                            />

                            <img
                              class="avatars-icon123"
                              alt=""
                              src="./public/avatars-3@2x.png"
                            />

                            <img
                              class="avatars-icon124"
                              alt=""
                              src="./public/avatars3@2x.png"
                            />

                            <img
                              class="avatars-icon125"
                              alt=""
                              src="./public/avatars4@2x.png"
                            />

                            <img
                              class="avatars-icon126"
                              alt=""
                              src="./public/avatars5@2x.png"
                            />

                            <img
                              class="avatars-icon127"
                              alt=""
                              src="./public/avatars6@2x.png"
                            />

                            <img
                              class="avatars-icon128"
                              alt=""
                              src="./public/avatars7@2x.png"
                            />

                            <div class="avatars9">
                              <div class="image9"></div>
                              <div class="o9">+10</div>
                            </div>
                          </div>
                          <div class="avatar-text9">
                            <img
                              class="avatars-icon129"
                              alt=""
                              src="./public/avatars9@2x.png"
                            />

                            <div class="text99">
                              <div class="label113">Leading text</div>
                              <div class="supportive-text13">Description</div>
                            </div>
                          </div>
                          <div class="icons10">
                            <div class="icon-pencil-parent6">
                              <img
                                class="icon-pencil9"
                                alt=""
                                src="./public/icon--pencil@2x.png"
                              />

                              <input class="icon-bin9" type="checkbox" />

                              <img
                                class="icon-heart18"
                                alt=""
                                src="./public/icon--heart.svg"
                              />

                              <img
                                class="icon-heart19"
                                alt=""
                                src="./public/icon--heart.svg"
                              />
                            </div>
                          </div>
                          <img
                            class="misc-icon13"
                            alt=""
                            src="./public/misc-icon1.svg"
                          />
                        </div>
                      </div>
                      <div class="separator17">
                        <div class="rectangle18"></div>
                      </div>
                    </div>
                    <div class="table-content-cell10">
                      <div class="container69">
                        <div class="content17">
                          <div class="rating10">
                            <img
                              class="icon-star50"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star51"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star52"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star53"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star54"
                              alt=""
                              src="./public/icon--star.svg"
                            />
                          </div>
                          <div class="badge26">
                            <div class="container70">
                              <img
                                class="icon-left29"
                                alt=""
                                src="./public/iconleft2.svg"
                              />

                              <img
                                class="avatars-icon130"
                                alt=""
                                src="./public/avatars@2x.png"
                              />

                              <div class="label114">Label</div>
                              <img
                                class="icon-right34"
                                alt=""
                                src="./public/iconright11.svg"
                              />
                            </div>
                          </div>
                          <div class="progress-bar10">
                            <div class="label115">Label</div>
                            <div class="background-track10">
                              <div class="progress10"></div>
                            </div>
                            <div class="description10">
                              <div class="meta-data10">
                                <div class="label116">meta data</div>
                                <div class="label117">•</div>
                                <div class="label118">meta data</div>
                              </div>
                              <div class="percetages10">10%</div>
                            </div>
                          </div>
                          <div class="actions10">
                            <div class="button-texts20">
                              <div class="container71">
                                <b class="label119">Edit</b>
                              </div>
                            </div>
                            <div class="button-texts21">
                              <div class="container72">
                                <b class="label120">Remove</b>
                              </div>
                            </div>
                          </div>
                          <div class="avatar-groups10">
                            <img
                              class="avatars-icon131"
                              alt=""
                              src="./public/avatars2@2x.png"
                            />

                            <img
                              class="avatars-icon132"
                              alt=""
                              src="./public/avatars-1@2x.png"
                            />

                            <img
                              class="avatars-icon133"
                              alt=""
                              src="./public/avatars-2@2x.png"
                            />

                            <img
                              class="avatars-icon134"
                              alt=""
                              src="./public/avatars-3@2x.png"
                            />

                            <img
                              class="avatars-icon135"
                              alt=""
                              src="./public/avatars3@2x.png"
                            />

                            <img
                              class="avatars-icon136"
                              alt=""
                              src="./public/avatars4@2x.png"
                            />

                            <img
                              class="avatars-icon137"
                              alt=""
                              src="./public/avatars5@2x.png"
                            />

                            <img
                              class="avatars-icon138"
                              alt=""
                              src="./public/avatars6@2x.png"
                            />

                            <img
                              class="avatars-icon139"
                              alt=""
                              src="./public/avatars7@2x.png"
                            />

                            <div class="avatars10">
                              <div class="image10"></div>
                              <div class="o10">+10</div>
                            </div>
                          </div>
                          <div class="avatar-text10">
                            <img
                              class="avatars-icon140"
                              alt=""
                              src="./public/avatars9@2x.png"
                            />

                            <div class="text100">
                              <div class="label121">Leading text</div>
                              <div class="supportive-text14">Description</div>
                            </div>
                          </div>
                          <div class="icons11">
                            <div class="icon-pencil-parent7">
                              <img
                                class="icon-pencil10"
                                alt=""
                                src="./public/icon--pencil@2x.png"
                              />

                              <input class="icon-bin10" type="checkbox" />

                              <img
                                class="icon-heart20"
                                alt=""
                                src="./public/icon--heart.svg"
                              />

                              <img
                                class="icon-heart21"
                                alt=""
                                src="./public/icon--heart.svg"
                              />
                            </div>
                          </div>
                          <img
                            class="misc-icon14"
                            alt=""
                            src="./public/misc-icon1.svg"
                          />
                        </div>
                      </div>
                      <div class="separator18">
                        <div class="rectangle19"></div>
                      </div>
                    </div>
                    <div class="table-content-cell11">
                      <div class="container73">
                        <div class="content18">
                          <div class="rating11">
                            <img
                              class="icon-star55"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star56"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star57"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star58"
                              alt=""
                              src="./public/icon--star.svg"
                            />

                            <img
                              class="icon-star59"
                              alt=""
                              src="./public/icon--star.svg"
                            />
                          </div>
                          <div class="badge27">
                            <div class="container74">
                              <img
                                class="icon-left30"
                                alt=""
                                src="./public/iconleft2.svg"
                              />

                              <img
                                class="avatars-icon141"
                                alt=""
                                src="./public/avatars@2x.png"
                              />

                              <div class="label122">Label</div>
                              <img
                                class="icon-right35"
                                alt=""
                                src="./public/iconright11.svg"
                              />
                            </div>
                          </div>
                          <div class="progress-bar11">
                            <div class="label123">Label</div>
                            <div class="background-track11">
                              <div class="progress11"></div>
                            </div>
                            <div class="description11">
                              <div class="meta-data11">
                                <div class="label124">meta data</div>
                                <div class="label125">•</div>
                                <div class="label126">meta data</div>
                              </div>
                              <div class="percetages11">10%</div>
                            </div>
                          </div>
                          <div class="actions11">
                            <div class="button-texts22">
                              <div class="container75">
                                <b class="label127">Edit</b>
                              </div>
                            </div>
                            <div class="button-texts23">
                              <div class="container76">
                                <b class="label128">Remove</b>
                              </div>
                            </div>
                          </div>
                          <div class="avatar-groups11">
                            <img
                              class="avatars-icon142"
                              alt=""
                              src="./public/avatars2@2x.png"
                            />

                            <img
                              class="avatars-icon143"
                              alt=""
                              src="./public/avatars-1@2x.png"
                            />

                            <img
                              class="avatars-icon144"
                              alt=""
                              src="./public/avatars-2@2x.png"
                            />

                            <img
                              class="avatars-icon145"
                              alt=""
                              src="./public/avatars-3@2x.png"
                            />

                            <img
                              class="avatars-icon146"
                              alt=""
                              src="./public/avatars3@2x.png"
                            />

                            <img
                              class="avatars-icon147"
                              alt=""
                              src="./public/avatars4@2x.png"
                            />

                            <img
                              class="avatars-icon148"
                              alt=""
                              src="./public/avatars5@2x.png"
                            />

                            <img
                              class="avatars-icon149"
                              alt=""
                              src="./public/avatars6@2x.png"
                            />

                            <img
                              class="avatars-icon150"
                              alt=""
                              src="./public/avatars7@2x.png"
                            />

                            <div class="avatars11">
                              <div class="image11"></div>
                              <div class="o11">+10</div>
                            </div>
                          </div>
                          <div class="avatar-text11">
                            <img
                              class="avatars-icon151"
                              alt=""
                              src="./public/avatars9@2x.png"
                            />

                            <div class="text101">
                              <div class="label129">Leading text</div>
                              <div class="supportive-text15">Description</div>
                            </div>
                          </div>
                          <div class="icons12">
                            <div class="icon-pencil-parent8">
                              <img
                                class="icon-pencil11"
                                alt=""
                                src="./public/icon--pencil@2x.png"
                              />

                              <input class="icon-bin11" type="checkbox" />

                              <img
                                class="icon-heart22"
                                alt=""
                                src="./public/icon--heart.svg"
                              />

                              <img
                                class="icon-heart23"
                                alt=""
                                src="./public/icon--heart.svg"
                              />
                            </div>
                          </div>
                          <img
                            class="misc-icon15"
                            alt=""
                            src="./public/misc-icon1.svg"
                          />
                        </div>
                      </div>
                      <div class="separator19">
                        <div class="rectangle20"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="account-content-child"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
        {/* <div>
            <div>
            <p>Settings</p>
            <p> - Users</p>
            </div>
            <div className='firstbox'>
              
              <div className='mid'>
              <div>
                <div>
               <img src='./assets/logo.png' alt='' /> 
               </div>
               <div className="search-container">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search..." />
              </div>
                <div>
                  <img src='./assets/BellSimple.png' alt='' />
                  <img src='./assets/Wallet.png' alt='' />
                  <img src='./assets/Question.png' alt='' />
                  <img src='./assets/profile.png' alt='' />
                </div>
               </div>
            </div>
            </div>
        </div>
        <div className='beforesecond'>
        <div className='secondbox'>
          <div>
            <h4>Settings</h4>
            <p>Account</p>
            <p>Security</p>
            <p>Notifications</p>
            <p>Pricing</p>
            <p>Sales</p>
            <p>Users & Roles</p>
            <p>Backups</p>
          </div>
          <div>
            <button>Back to Dashboard</button>
          </div>
        </div>
        <div className='mid-second'>
          <p>Settings / Users & Roles Settings</p>
          <div>
            <p>Users & Roles</p>
            <p>Manage all users in your business</p>
          </div>
          <div>
            <p>Users</p>
            <p>Roles</p>
          </div>
        </div>
        </div> */}
    </div>
  )
}

export default Main
