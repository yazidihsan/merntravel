import React from "react";
import ImgHero from "assets/images/img-hero.jpg";
import ImgHero_ from "assets/images/img-frame-hero.jpg";
import IcTravelers from "assets/images/icons/ic-traveler.svg";
import IcTreasures from "assets/images/icons/ic-treasure.svg";
import IcCities from "assets/images/icons/ic-cities.svg";
import Button from "elements/Button";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work,
            <br />
            Start Next Vacation
          </h1>
          <p className="mb-5 font-weight-light text-gray-500 w-75">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="row mt-5">
            <div className="col-auto">
              <img
                src={IcTravelers}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {props.data.travelers}{" "}
                <span className="text-gray-500 font-weight-light">
                  travelers
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img src={IcTreasures} alt={`${props.data.trasures} Treasures`} />
              <h6 className="mt-3">
                {props.data.treasures}{" "}
                <span className="text-gray-500 font-weight-light">
                  treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img src={IcCities} alt={`${props.data.cities} Travelers`} />
              <h6 className="mt-3">
                {props.data.cities}{" "}
                <span className="text-gray-500 font-weight-light">cities</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
