import React from "react";
import "./Homepage.css";
import { FiUsers, FiHome, FiMove, FiAirplay } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <div className="ridesdiv">
        <div className="divcard">
          <div className="leftcard">
          </div>
        </div>
      </div>
      <br />

      <div className="ridesContainter">
        <h1>Ride with Gotify</h1>

        <div className="ridesdiv">
          <div className="divcard">
            <div className="leftcard">
              {/* <img
                src="https://images.pexels.com/photos/14303237/pexels-photo-14303237.jpeg?auto=compress&cs=tinysrgb&w=630&h=150&dpr=1"
                alt="auto"
              /> */}
              <FiAirplay size={30}></FiAirplay>
            </div>

            <div className="rightcard">
              <h2>Gotify Auto</h2>
              <p>
                Get affordable Gotify Auto rides with no haggling. Request Gotify
                Auto and ride comfortably around your city.
              </p>
            </div>
          </div>

          <div className="divcard">
            <div className="leftcard">
              <img
                src="https://images.pexels.com/photos/14303237/pexels-photo-14303237.jpeg?auto=compress&cs=tinysrgb&w=630&h=150&dpr=1"
                alt="auto"
              />
            </div>

            <div className="rightcard">
              <h2>Gotify Moto</h2>
              <p>
                Get affordable bike rides at your doorstep. Skip the crowd and
                zip through traffic with Gotify Moto.
              </p>
            </div>
          </div>

          <div className="divcard">
            <div className="leftcard">
              <img
                src="https://images.pexels.com/photos/14303237/pexels-photo-14303237.jpeg?auto=compress&cs=tinysrgb&w=630&h=150&dpr=1"
                alt="auto"
              />
            </div>

            <div className="rightcard">
              <h2>Gotify Rentals</h2>
              <p>
                Book Rentals to save time with one car and driver for your
                multi-stop trips..
              </p>
            </div>
          </div>

          <div className="divcard">
            <div className="leftcard">
              {/* <img
                src="https://images.pexels.com/photos/14303237/pexels-photo-14303237.jpeg?auto=compress&cs=tinysrgb&w=630&h=150&dpr=1"
                alt="auto"
              /> */}
              <FiMove size={30} size={30}></FiMove>
            </div>

            <div className="rightcard">
              <h2>Gotify Intercity</h2>
              <p>
                Book Intercity to head outstation anytime in convenient and
                affordable cars.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="safetyContainer">
        <h1>Focused on safety, wherever you go</h1>

        <div className="safetyDiv">
          <div className="leftcard">
            <img
              src="https://images.pexels.com/photos/14303237/pexels-photo-14303237.jpeg?auto=compress&cs=tinysrgb&w=630&h=150&dpr=1"
              alt="safety1"
            />
            <h4>Our commitment to your safety</h4>
            <p>
              With every safety feature and every standard in our Community
              Guidelines, we're committed to helping to create a safe
              environment for our users.
            </p>
          </div>

          <div  className="leftcard">
            <img
              src="https://images.pexels.com/photos/14303237/pexels-photo-14303237.jpeg?auto=compress&cs=tinysrgb&w=630&h=150&dpr=1"
              alt="safety2"
            />
            <h4>Setting 10,000+ cities in motion</h4>
            <p>
              The app is available in thousands of cities worldwide, so you can
              request a ride even when you’re far from home.
            </p>
          </div>
        </div>
      </div>

      <div className="thirdContainer">
        <div className="thirdsectionDiv">
          <div>
            <FiUsers size={30}></FiUsers>
            <h4>About us</h4>
            <p>
              Find out how we started, what drives us, and how we’re reimagining
              how the world moves.
            </p>
          </div>

          <div>
            <FaRegNewspaper size={30}></FaRegNewspaper>
            <h4>Newsroom</h4>
            <p>
              See announcements about our latest releases, initiatives, and
              partnerships.
            </p>
          </div>

          <div>
            <FiHome size={30}></FiHome>
            <h4>Global citizenship</h4>
            <p>
              Read about our commitment to making a positive impact in the
              cities we serve.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
