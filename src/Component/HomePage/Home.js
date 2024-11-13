import React from "react";
import coverImage from "../../Assets/Cover/cover-image.jpg";

function Home() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          Welcome to Chitrogolpo, a creative wedding photography team from
          Bangladesh. Our journey began more than a decade ago. In 2017, we
          formed our company with a passion for capturing the simplicity of
          people on their special day. We believe every wedding is unique & we
          tell the story through our photos. From the villages to the cities,
          we’ve been documenting Bangladeshi weddings for a decade & our photos
          become more valuable with time.
        </p>
      </div>
    </section>
  );
}

export default Home;
