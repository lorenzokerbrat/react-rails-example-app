var React = require("react")
var PropTypes = require("prop-types")

var FeaturesPage = require('./FeaturesPage.jsx')
var TestsPage = require('./TestsPage.jsx')
// require('font-awesome/css/font-awesome.min.css')

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            current: 'features',
            selectedFeature: null,
            selectedTest: null,
        }
    }

    componentDidMount = () => {
        document.onkeydown = (e) => {
            if (e.key === 'Tab') e.preventDefault()
        }
    }

    switchToPage = (page) => {
        this.setState({ current: page })
        let element = this.refs['pages']
        window.requestAnimationFrame(() => {
            element.style.transition = "margin-left .8s ease"
            element.style.marginLeft =
                page === 'tests' ? 'calc(-100vw + 15px)'
                : '0'
        })
    }

    selectFeature = (selectedFeature) => {
        this.setState({ selectedFeature })
        this.switchToPage('tests')
    }

    selectTest = (selectedTest) => this.setState({ selectedTest })

    updateFeature = (feature) => {
        // ???
    }

    updateTest = (feature, test) => {
        // ???
    }

    render = () => {

        return <div className='main'>
            <div className='pages' ref='pages'>

                <FeaturesPage shouldUpdate={this.state.current === 'features'}
                    selectFeature={this.selectFeature}
                />

                <TestsPage shouldUpdate={this.state.current === 'tests'}
                    feature={this.state.selectedFeature}
                    selectedTest={this.state.selectedTest}

                    selectTest={this.selectTest}
                    updateFeature={this.updateFeature}
                    updateTest={this.updateTest}
                    switchToPage={this.switchToPage}
                />

            </div>
        </div>
    }

}

Main.propTypes = {

}

module.exports = Main
