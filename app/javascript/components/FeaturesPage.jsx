var React = require("react")
var PropTypes = require("prop-types")

// require('../../assets/stylesheets/Features.css')

class FeaturesPage extends React.Component {
  render = () => {
    return <div className='features-page'>
        <h1>Project Features</h1>
        <div className='feature-tiles'>
            {/* {this.props.features.map(feature => {

            })} */}
        </div>
    </div>
  }
}

FeaturesPage.propTypes = {

}

module.exports = FeaturesPage
