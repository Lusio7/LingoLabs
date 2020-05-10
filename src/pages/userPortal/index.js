/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Chat from "../../Components/Chat";
import "./Style.css";
import Moment from "react-moment";
import "bootstrap/dist/css/bootstrap.min.css";

function UserPortal(props) {
  const [userProfile, setUserProfile] = useState({
    name: "Shawnster",

    purchaseHistory: [
      {
        _id: 3,
        itemname: "moviemagic",
        price: 1200.0,
        downloadlink:
          "https://github.com/ShawnWhy/movie-magic-Shawn/archive/master.zip",
        PurchaseDate: "1976-04-19T12:59-0500",
      },
      {
        _id: 4,
        itemname: "fitness tracker",
        price: 1300.0,
        downloadlink:
          "https://github.com/ShawnWhy/Fitness-Tracker/archive/master.zip",
        PurchaseDate: "1976-04-19T12:59-0500",
      },
      {
        _id: 5,
        itemname: "Viscount of Sandwich",
        price: 1500.0,
        downloadlink:
          "https://github.com/ShawnWhy/VicountofSandwich/archive/master.zip",
        PurchaseDate: 1587245855919,
      },
    ],

    shoppingCart: [
      { _id: 1, itemname: "crazywebsite", price: 1200.0, date: 1587245855919 },
      { _id: 2, itemname: "goodwebsite", price: 1250.5, date: 1587245855919 },
    ],
  });

  async function getUserInformation(name) {
    const LoggedUser = await API.getUserInfo(name);
    console.log(LoggedUser);
    if (LoggedUser.data.length > 0) {
      setUserProfile({
        ...userProfile,
        purchaseHistory: LoggedUser.data[0].purchase,
        shoppingCart: LoggedUser.data[0].shoppingcart,
      });
    }
  }

  useEffect(() => {
    var userName = props.name;
    console.log("=======username========");
    console.log(userName);
    if (userName !== "noone") {
      getUserInformation(userName);
    }
  }, [props.name]);

  const buy = async function (event) {
    event.stopPropagation();
    event.preventDefault();

    var id = event.target.getAttribute("keyValue");
    var body = { id: id, username: props.name };
    console.log("======body====");
    console.log(body);
    try {
      API.moveToPurchase(body).then(getUserInformation(props.name));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid main-portal">
      <div className="container-fluid portal">
        <div className="container welcome">
          <h1 className="welcome-msg">Welcome {props.name} </h1>
        </div>

        <div className="container-fluid wrap">
          <div className="row">
            <div className="col-12 first">
              <h1 className="cart-title">
                Ready to Checkout {userProfile.shoppingCart.length} Items
              </h1>
              <hr className="hr" />
              {!userProfile.shoppingCart.length ? (
                <h4 className="emptines">Your Cart is empty</h4>
              ) : (
                <div className="target-wrap">
                  {userProfile.shoppingCart.map((item) => {
                    return (
                      <div className="container target">
                        <h4>
                          Name: <span className="span"> {item.itemname}</span>
                          <span className="span">Price: ${item.price} </span>
                        </h4>
                        <button
                          className="buybtn"
                          keyValue={item._id}
                          onClick={buy}
                        >
                          Purchase
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* second page */}

      <div className="container-fluid second-wrap">
        <div className="row">
          <h1 className="buy-title">Previous Purchases</h1>
          <div className="col-12 second">
            <hr className="hr2" />

            {!userProfile.purchaseHistory.length ? (
              <h4 className="noBuy-title">No Purchase History</h4>
            ) : (
              <div>
                {userProfile.purchaseHistory.map((item) => {
                  return (
                    <div className="prevHistory">
                      <h5>
                        Name: <span className="span"> {item.itemname} </span>
                        <br />
                        Price: <span className="span"> ${item.price} </span>
                        <br />
                        Purchase Date:{" "}
                        <span className="span">
                          {" "}
                          <Moment format="YYYY/MM/DD/HH:MM">
                            {item.PurchaseDate}
                          </Moment>
                        </span>
                        <hr />
                      </h5>
                      <br />
                      <a className="down" href={item.downloadlink} download>
                        Download Link
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="col">
          <Chat username={props.name} />
        </div>
      </div>
    </div>
  );
}

export default UserPortal;

// useEffect(() => {
//     // For demonstration purposes, we mock an API call.
//     API.getDeveloper.then((res) => {
//       setDeveloperState(res);
//       console.log("Developer State:");
//       console.log(developerState);
//     });
//   }, []);
