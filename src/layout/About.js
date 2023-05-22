import React from "react";
import ProfileCard from "../modules/ProfileCard";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {
      profile: {
        name: "Lucky",
        current_loc: "Roodepoort, Gauteng",
        job_title: "Web Developer",
        emp_site: "//www.google.com",
        emp_name: "Google",
      },
    };
  }

  render() {
    const profile = this.state.profile;

    return (
      <section className="section" id={this.id}>
        <div className="section-heading has-text-centered">
          <h3 className="title">About</h3>
        </div>
        <div className="container">
          {profile === null ? (
            "Loading..."
          ) : (
            <div className="columns is-multiline">
              <div className="column is-7-desktop">
                <article>
                  <p>
                    Travel Curiosity, courage, and self-organization. Traveling
                    can prove you’re not afraid of stepping outside your comfort
                    zone and learning new things. And flexibility and
                    adaptability are among the most important workplace personal
                    traits. Sports It doesn’t matter what sport you do.
                    Exercising in general develops self-discipline, patience,
                    and helps bounce back from disappointment. Team sports
                    create opportunities to improve leadership, communication,
                    and interpersonal skills, too. Writing Communication is the
                    heart of every organisation. Writing novels or publishing
                    scientific papers give a clear representation of your
                    written communication skills.
                  </p>
                </article>
              </div>
              <div className="column is-5-tablet">
                <ProfileCard {...profile} />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}
