import React from "react";
import cookie from "react-cookies";
import styled from "styled-components";

function Dashboard() {
  return (
    <div>
     
      <DashboardContainer>    
    <section class="content-area">
        <h4 class="title-text">Shop our selections <span class="shop-link">Items hand-picked by our editors</span></h4>
        <div class="shop">
            <div class="shop-card">
                <img src="https://cdn.pixabay.com/photo/2017/11/08/18/41/girl-2931287_1280.jpg" alt=""/>
                <h5>Anniverary gifts</h5>

            </div>
            <div class="shop-card">
                <img src="https://cdn.pixabay.com/photo/2019/11/30/13/21/gift-4663231_1280.jpg" alt=""/>
                <h5>Gifts for him</h5>

            </div>
            <div class="shop-card">
                <img src="https://cdn.pixabay.com/photo/2014/12/01/19/23/gift-553149_1280.jpg" alt=""/>
                <h5>Gifts for her</h5>


            </div>
            <div class="shop-card">
                <img src="https://cdn.pixabay.com/photo/2014/11/27/22/44/gift-548290_1280.jpg" alt=""/>
                <h5>Personalised gift ideas</h5>

            </div>
            <div class="shop-card">
                <img src="https://cdn.pixabay.com/photo/2017/11/14/14/12/wedding-flowers-2948530_1280.jpg" alt=""/>
                <h5>Wedding gifts</h5>

            </div>
            <div class="shop-card">
                <img src="https://cdn.pixabay.com/photo/2018/03/26/03/19/gift-3261509_1280.jpg" alt="" />
                <h5>Housewarming gifts</h5>

            </div>
        </div>
    </section>
    </DashboardContainer>

    </div>  );
}

export default Dashboard;

const DashboardContainer = styled.footer`
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
    margin-left: 90px;
    width: 88%;
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
