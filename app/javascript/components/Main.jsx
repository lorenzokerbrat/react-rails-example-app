var React = require("react")
var PropTypes = require("prop-types")

var FeaturesPage = require('./FeaturesPage.jsx')

// require('../../assets/stylesheets/Main.css')

class Main extends React.Component {
  render = () => {
    return <div className='main'>
      <FeaturesPage/>
    </div>
  }
}

Main.propTypes = {

}

module.exports = Main
