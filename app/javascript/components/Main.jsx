var React = require("react")

var FeaturesPage = require('./FeaturesPage.jsx')
var TestsPage = require('./TestsPage.jsx')

// require('font-awesome/css/font-awesome.min.css')

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            current: 'features',
            features: [],
            selectedFeature: null,
            selectedTest: null,
        }
    }

    componentDidMount = () => {
        fetch('/features', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(features => {
            
            let remaining = features.length
            for (let feature of features)
                fetch('/tests/' + feature.id, {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(tests => {
                    
                    feature.tests = tests
                    remaining--
                    if (remaining === 0)
                        this.setState({ features })
                })
                .catch(err => console.error(err))
        })
        .catch(err => console.error(err))

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

    addFeature = () => {
        fetch('/features/new', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(feature => {
            feature.tests = []

            this.setState({ features: [...this.state.features, feature] })
        })
        .catch(err => console.error(err))
    }

    updateFeatures = () => {
        let features = this.state.features

        this.setState({ features })
    }

    render = () => {

        return <div className='main'>
            <div className='pages' ref='pages'>

                <FeaturesPage shouldUpdate={this.state.current === 'features'}
                    features={this.state.features}

                    selectFeature={this.selectFeature}
                    addFeature={this.addFeature}
                />

                <TestsPage shouldUpdate={this.state.current === 'tests'}
                    feature={this.state.selectedFeature}
                    selectedTest={this.state.selectedTest}

                    selectTest={this.selectTest}
                    updateFeatures={this.updateFeatures}
                    switchToPage={this.switchToPage}
                />

            </div>
        </div>
    }

}

module.exports = Main
