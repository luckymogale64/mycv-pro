import React from 'react'
import PortfolioItem from '../modules/PortfolioItem'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id
    this.state = {
      portfolio: [{
        img: '//bulma.io/images/placeholders/800x480.png',
        title: 'I did this',
        description: 'Lorem ipsum dolor sit amet, modus timeam no quo. Per ne splendide posidonium deterruisset.',
        github: '//www.github.com',
        href: '#'
      }, {
        img: '//bulma.io/images/placeholders/800x480.png',
        title: 'I did that',
        description: 'Lorem ipsum dolor sit amet, modus timeam no quo. Per ne splendide posidonium deterruisset.',
        href: '#'
      }, {
        img: '//bulma.io/images/placeholders/800x480.png',
        title: 'AND THIS!',
        description: 'Lorem ipsum dolor sit amet, modus timeam no quo. Per ne splendide posidonium deterruisset.'
      }]
    };
  }

  render() {
    const portfolio = this.state.portfolio;

    return (
      <section className="section has-background-light" id={this.id}>
        <div className="section-footer has-text-centered">
          <h3 className="title has-text-black-darker">See More</h3>
          <div className="buttons">
            <a href="https://www.codepen.io" target="_blank" rel="noopener noreferrer"
              className="button button-special is-rounded is-medium is-link">CodePen.io</a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"
              className="button button-special is-rounded is-medium is-link">GitHub</a>
          </div>
        </div>
      </section>
    )
  }
}
