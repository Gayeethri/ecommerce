import React from "react";
import "./NavBar.css";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <section class="etsy">
        <div class="content-area">
          <div class="etsy-title">
            <h2>What is Etsy</h2>
            <a href="#">Read our wonderfully weird story</a>
          </div>
          <div class="etsy-area">
            <div class="etsy-card">
              <h3>A one-of-a-kind community</h3>
              <p>
                Etsy is a global online marketplace, where people come together
                to make, sell, buy and collect unique items.
              </p>
            </div>
            <div class="etsy-card">
              <h3>Support independent creators</h3>
              <p>
                There’s no Etsy warehouse – just millions of people selling the
                things they love. We make the whole process easy, helping you
                connect directly with makers to find something extraordinary.
              </p>
            </div>
            <div class="etsy-card">
              <h3>Peace of mind</h3>
              <p>
                Your privacy is the highest priority of our dedicated team. And
                if you ever need assistance, we are always ready to step in for
                support.
              </p>
            </div>
          </div>
          <div class="etsy-footer">
            <h4>Have a question? Well, we’ve got some answers.</h4>
            <button class="btn">
              <a href="#">Go to Help Center</a>
            </button>
          </div>
        </div>
      </section>

      <section class="news">
        <div class="content-area">
          <h4>
            Yes! Send me exclusive offers, unique gift ideas, and personalized
            tips for shopping and selling on Etsy
          </h4>
          <div class="subscribe">
            <input name="subscribe_input" type="text" placeholder="Enter your email" />
          </div>
        </div>
      </section>

      <section class="footer-section-one">
        <div class="content-area">
          <div class="footer">
            <div class="links">
              <h3>Shop</h3>
              <ul>
                <li>
                  <a href="#">Gift cards</a>
                </li>
                <li>
                  <a href="#">Etsy blog</a>
                </li>
              </ul>
            </div>
            <div class="links">
              <h3>Sell</h3>
              <ul>
                <li>
                  <a href="#">Sell on Etsy</a>
                </li>
                <li>
                  <a href="#">Teams</a>
                </li>
                <li>
                  <a href="#">Forums</a>
                </li>
                <li>
                  <a href="#">Affiliates</a>
                </li>
              </ul>
            </div>
            <div class="links">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Etsy, Inc.</a>
                </li>
                <li>
                  <a href="#">Policies</a>
                </li>
                <li>
                  <a href="#">Investors</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Impact</a>
                </li>
              </ul>
            </div>
            <div class="links">
              <h3>Help</h3>
              <ul>
                <li>
                  <a href="#">Help Centre</a>
                </li>
                <li>
                  <a href="#">Privacy settings</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  * {
    margin: 0;
  }

  input[name=subscribe_input] 
  {
    background-color: red;
    color : red;
  }

  body {
    background-color: #ffffff;
    width: 100%;
    margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  header {
    margin-top: 12px;
    margin-bottom: 12px;
    width: 88%;
    margin-left: auto;
    margin-right: auto;
  }
  .header-search {
    display: flex;
    align-items: center;
  }
  .header-search > h1 {
    font-size: 42px;
    font-family: Libre Baskerville;
    font-weight: 500;
    color: #f1651f;
    margin-right: 10px;
  }
  .header-search > h1 a {
    text-decoration: none;
    color: #f1651f;
  }
  .search {
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
    background-color: #efefef;
    border: 1px solid lightgray;
    transition: all 0.2s ease-in;
    overflow: hidden;
  }
  input:focus,
  textarea:focus,
  select:focus {
    outline: lightgray;
  }
  .search-input {
    font-size: 18px;
    font-weight: lighter;
    font-family: ðŸ‡²ðŸ‡¸;
    letter-spacing: 1.7;
    height: 18px;
    padding: 12px;
    border: none;
    width: 100%;
    margin-left: 16px;
    background-color: #efefef;
  }
  .search > ion-icon {
    font-size: 250%;
    padding: 14px;
    height: 22px !important;
    margin-right: 0px;
    transition: all 0.2s ease-in;
    cursor: pointer;
  }
  .search > ion-icon:hover {
    background-color: rgba(85, 84, 84, 0.13);
  }
  .search:hover {
    border: 1px solid rgb(190, 188, 188);
  }
  .sign-in {
    margin-left: 14px;
    font-size: 14px;
    font-family: Poppins;
    padding: 8px 12px;
    border-radius: 24px;
    transition: all 0.2s ease-in;
  }
  .sign-in:hover {
    background-color: #efefef;
  }

  .sign-in > a {
    text-decoration: none;
    color: black;
  }
  .basket {
    margin-left: 14px;
    font-size: 200%;
    padding: 8px 12px;
    transition: all 0.2s ease-in;
    border-radius: 50%;
  }
  .basket:hover {
    background-color: #efefef;
  }
  nav {
    margin-top: 14px;
    margin-left: 0px;
  }
  nav > ul {
    display: flex;
    flex: 1;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }

  nav > ul li a {
    text-decoration: none;
    color: black;
    transition: all 0.2s ease-in;
  }
  nav > ul li a:hover {
    text-decoration: underline;
  }
  /** Hero section **/

  .hero {
    background-color: #ddebe3;
    text-align: center;
    padding: 10px;
  }
  .content-area {
    width: 88%;
    margin: auto;
  }
  .hero-title {
    margin-top: 10px;
  }
  .hero-title h2 {
    margin-top: 30px;
    font-family: "Guardian-EgypTT", serif;
    font-weight: 300;
    letter-spacing: 0.5px;
    font-size: 24px;
    line-height: 28px;
  }
  .hero-title h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .everyday-finds {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .card {
    cursor: pointer;
  }
  .card img {
    width: 70%;
    height: 150px;
    border-radius: 50%;
  }
  .card-title h4 {
    font-size: 14px;
  }
  .card-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
  }
  .card-title h4 {
    margin-right: 4px;
    transition: margin-left 0.2s ease-in;
  }
  .card-title h4:hover {
    margin-right: 10px;
  }
  .features {
    display: flex;
    justify-content: space-evenly;
    flex: 0.5;
    text-align: center;
    padding: 30px 0;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon h3 {
    padding-left: 10px;
    font-size: 16px;
    font-weight: 400;
  }
  .features-card ion-icon {
    color: #f1651f;
    font-size: 160%;
  }
  .features-card p {
    font-size: 14px;
  }
  .features-card {
    padding: 0 40px;
  }

  .recently-viewed {
    display: flex;
    justify-content: space-evenly;
  }

  .viewed-card img {
    width: 92%;
    height: auto;

    transition: all 0.2s ease;
  }
  .viewed-card img:hover {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }
  .title-text {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    background-color: #fdebd2;
    border-radius: 24px;
    padding: 6px 8px;
  }
  button ion-icon {
    margin-right: 2px;
  }

  .shop-link {
    font-size: 12px;
    font-weight: lighter;
  }
  .feltedsky {
    display: flex;
    flex-direction: row-reverse;
  }
  .feltedsky button,
  .recently-viewed button {
    margin-top: 6px;
  }

  .shop {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
  }
  .shop-card img {
    width: 100%;
    transition: all 0.2s ease;
  }
  .shop-card {
    width: 15.66%;
    height: auto;
    padding-bottom: 40px;
    border: 1px solid lightgray;
    border-radius: 8px;
    padding-right: 0;
    overflow: hidden;
    transition: all 0.2s ease;
  }
  .shop-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .shop-card h5 {
    margin-top: 10px;
    margin-left: 10px;
  }

  .etsy {
    background-color: #fdebd2;
    padding: 60px 0;
  }
  .etsy-area {
    display: flex;
    align-self: center;
    justify-content: space-evenly;
    text-align: center;
  }
  .etsy-card {
    margin: 8px 10px;
    padding: 10px 0;
    line-height: 1.7;
    flex: 1;
  }
  .etsy-card h3 {
    font-size: 32px;
    line-height: 36px;
    font-family: "Guardian-EgypTT", serif;
    font-weight: 300;
    letter-spacing: 0.5px;
  }
  .etsy h2 {
    font-size: 40px;
    line-height: 36px;
  }
  .etsy-title,
  .etsy-footer {
    font-size: 22px;
    line-height: 1.7;
    font-family: "Guardian-EgypTT", serif;
    font-weight: 300;
    letter-spacing: 0.5px;
    text-align: center;
  }
  .etsy-title {
    margin: 20px 0;
  }
  .etsy-title a {
    color: black;
    font-size: 14px;
  }
  .etsy-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn {
    border: 2px solid black;
    padding: 12px 22px;
    cursor: pointer;
    margin: 10px 0;
    transition: all 0.2s ease;
  }
  .btn:hover {
    border: 3px solid rgba(0, 0, 0, 0.555);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  .btn a {
    text-decoration: none;
    color: black;
  }

  .news {
    padding: 80px 0;
    background-color: #d7e6f5;
  }
  .subscribe {
    width: 50%;
    height: 50px;
    margin: auto;
    display: flex;
    align-items: center;
    border-radius: 24px;
    background-color: whitesmoke;
    border: 1px solid lightgray;
    transition: all 0.2s ease-in;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .subscribe:hover {
    border: 2px solid rgba(85, 84, 84, 0.13);
  }

  .subscribe input {
    flex: 1;
    font-size: 18px;
    font-weight: lighter;
    font-family: ðŸ‡²ðŸ‡¸;
    letter-spacing: 1.7;
    height: 20px;
    padding: 14px;
    border: none;
    width: 100%;
    margin-left: 16px;
    background-color: whitesmoke;
  }

  .subscribe h5 {
    font-size: 18px;
    font-weight: 400;
    padding: 14px;
    height: 22px !important;
    margin-right: 0px;
    transition: all 0.2s ease-in;
    cursor: pointer;
  }
  .subscribe h5:hover {
    background-color: rgba(85, 84, 84, 0.13);
  }
  .news h4 {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    margin: 12px 0;
  }
  .footer-section-one {
    background-color: #2f466c;
    padding: 60px 0;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    color: #d7e6f5;
  }
  .links ul {
    list-style: none;
    margin: 10px 0;
    padding: 0;
  }

  .links li a {
    font-size: 13px;
    text-decoration: none;
    color: #d7e6f5;
    line-height: 2.2;
  }
  .links li a:hover {
    text-decoration: underline;
  }
  .social {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
  .social ion-icon {
    font-size: 200%;
    cursor: pointer;
    color: #d7e6f5;
    padding: 10px;
    border-radius: 50%;
    transition: all 0.2s ease;
  }
  .social ion-icon:hover {
    background-color: #cde3f833;
  }
  .social ion-icon:not(:first-child) {
    margin-left: 8px;
  }
  .links button {
    margin-top: 30px;
    background-color: #2f466c;
    border: 2px solid #d7e6f5;
    color: #d7e6f5;
    cursor: pointer;
    padding: 10px 16px;
    font-weight: bold;
    transition: all 0.2s ease;
  }
  .links button:hover {
    border: 3px solid #d7e6f5;
  }
  .footer-section-two {
    background-color: #232347;
    padding: 20px 0;
    color: #d7e6f5;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 1.2;
  }
  .copyright {
    display: flex;
    justify-content: space-between;
  }
  .footer-left {
    cursor: pointer;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 12px;
    border-radius: 24px;
    transition: all 0.2s ease;
  }
  .footer-left ion-icon {
    margin-right: 8px;
  }
  .footer-left:hover {
    background-color: #cde3f833;
  }
  .footer-right {
    display: flex;
    align-items: center;
  }
  .footer-right a {
    color: #d7e6f5;
    padding-left: 14px;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    nav ul {
      flex-direction: column;
      text-align: center;
    }
    nav ul {
      padding: 10px 0;
      background-color: #d7e6f5;
    }
    nav ul li:hover {
      background-color: #f1651f;
      color: #ffffff;
    }
    .everyday-finds {
      flex-direction: column;
    }
    .everyday-finds > .card > img {
      width: 60%;
      height: auto;
    }
    .features {
      flex-direction: column;
    }
    .features-card {
      margin-top: 14px;
    }
    .recently-viewed,
    .feltedsky,
    .shop,
    .etsy-area,
    .footer-section-one,
    .footer-section-two,
    .footer {
      flex-direction: column;
      text-align: center;
    }
    .title-text {
      text-align: center;
    }
    button {
      margin-left: 40%;
      margin-bottom: 16px;
    }
    .viewed-card {
      padding: 20px 0;
    }
    .shop-card {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      .card img {
        width: 88%;
        height: 70px;
      }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (max-width: 992px) {
      .card img {
        width: 88%;
        height: 100px;
      }
      .hero-title h2 {
        font-size: 22px;
      }
      .etsy h2 {
        font-size: 36px;
      }
      .etsy-card h3 {
        font-size: 20px;
      }
      .etsy-card p {
        font-size: 14px;
      }
      .etsy-title,
      .etsy-footer {
        font-size: 18px;
      }
      .news h4 {
        font-size: 16px;
      }
      .subscribe input {
        font-size: 16px;
      }
      .subscribe h5 {
        font-size: 16px;
        padding: 12px 14px;
        height: 21px;
      }
    }
  }
`;