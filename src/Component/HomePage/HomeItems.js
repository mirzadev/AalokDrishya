import React from "react";
import "./HomeStyle.css";
import coverImage from "../../Assets/Cover/cover-image.jpg";
import AD_Logo from "../../Assets/Cover/AalokDrishty_Logo.png";

function HomeItems() {
  return (
    <section className="my-5">
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="home_intro">
        <div className="homePg_title">
          <div className="home_logo">
            <img id="AD-logo" src={AD_Logo}></img>
          </div>
          <h1 className="home_beng_title">আলোক দৃশ্য</h1>
        </div>

        <p>
          Welcome to AALOK DRISHYA, a creative photography team South Florida,
          USA. Our journey began more than a decade ago. In 2012, we formed our
          company with a passion for capturing the simplicity of people on their
          day to day activities, special moments and events . We believe every
          occassion is unique & we tell the story through our photos. We know
          and value your culture. From the villages to the cities, we’ve been
          documenting your special moments / events as per your culture for a
          decade & our photos become more valuable with time.
        </p>
      </div>
      <div>
        <h1 id="featured_Album">Featured Album</h1>
      </div>
      <div></div>
    </section>
  );
}

export default HomeItems;
