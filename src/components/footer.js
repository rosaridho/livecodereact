import React, { Component } from 'react';

import '../styles/App.css';


class Footer extends Component {
  render() {
    return (
        <div>
        
        <footer className="container-fluid">
            <div className="row footer">
                <div className="col-md-12 col-sm-12 offset-md-0">
                </div>
            </div>
        </footer>

        <footer className="container-fluid">
            <div id="footerRow0">
                <div className="row footer">
                    <div className="col-md-12 col-sm-12 offset-md-0">
                    </div>
                </div>
            </div>
        </footer>
        
        <footer className="container-fluid">
            <div id="footerRow1">
              <div className="row footer">
                  <div className="col-md-12 col-sm-12 offset-md-0">
                      <div id="listFooter1">
                          <div className="table">
                              <ul id="horizontal-list">
                                  <li><a href="https://www.facebook.com/" className="fa fa-facebook fa-2x"></a></li>
                                  <li><a href="https://twitter.com/" className="fa fa-twitter fa-2x"></a></li>
                                  <li><a href="https://www.youtube.com/" className="fa fa-youtube fa-2x"></a></li>
                                  <li><a href="https://www.instagram.com/?hl=en" className="fa fa-instagram fa-2x"></a></li>
                                  <li><a href="https://www.linkedin.com/feed/" className="fa fa-linkedin fa-2x"></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row footer">
                  <div className="col-md-12 col-sm-12 offset-md-0">
                      <div id="listFooter1">
                          <div className="table">
                              <ul id="horizontal-list">
                                  <li><a href="#" className="textfooter"> Tentang Kami</a></li>
                                  <li><a href="#" className="textfooter"> FAQ</a></li>
                                  <li><a href="#" className="textfooter"> Panduan Pembeli</a></li>
                                  <li><a href="#" className="textfooter"> Panduan Penjual</a></li>
                                  <li><a href="#" className="textfooter"> Hubungi Kami</a></li>
                                  <li><a href="#" className="textfooter"> Kebijakan Privasi</a></li>
                                  <li><a href="#" className="textfooter"> Karir</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
      </footer>

      <footer className="container-fluid">
        <div id="footerRow2">
              <div className="row">
                  <div className="col-md-12 col-sm-12 offset-md-0">
                      <div id="listFooter1">
                          <div className="table">
                              <ul id="horizontal-list">
                                  <li><a href="#" className="textfooter"> muhammadridhorosa@gmail.com</a></li>
                                  <li className="textfooter">+62 818 0222 8261</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12 col-sm-12 offset-md-0">
                      <p id="copyright"> &copy; Copyright InaTech Group 2019</p>
                  </div>
              </div>
        </div>
      </footer>

        </div>
    );
  }
}

export default Footer;