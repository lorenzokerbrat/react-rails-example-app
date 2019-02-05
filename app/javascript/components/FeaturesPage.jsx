var React = require("react")
var PropTypes = require("prop-types")

class FeaturesPage extends React.Component {
    shouldComponentUpdate = (nextProps) => nextProps.shouldUpdate === true

    render = () => {
        let features = this.props.features

        return <div className='features page'>

            <h2>Project Features</h2>

            <button onClick={this.props.addFeature}>Create new feature</button>

            <div className='feature-tiles'>
                {features.map((feature, key) => {

                    return <div className='feature-tile' key={'f'+key}
                        onClick={() => this.props.selectFeature(feature)}>

                        <span className='name' title={feature.name}>{feature.name}</span>

                        <div className='tests-preview'>
                            {feature.tests.length > 0 ?
                                feature.tests.slice(0, 3).map((test, key) => {

                                    return <div className={'test ' + (test.status || '')} key={'t'+key}>
                                        {test.name}
                                    </div>
                                })
                            : <div className='tests-preview'>
                                <div className='test'>No tests</div>
                            </div>}

                            {feature.tests.length > 3 ? (feature.tests.length-3) + ' more test(s)..' : null}
                        </div>

                    </div>

                })}
            </div>

        </div>
    }

}

FeaturesPage.propTypes = {
    shouldUpdate: PropTypes.bool.isRequired,

    features: PropTypes.arrayOf(PropTypes.object).isRequired,

    addFeature: PropTypes.func,
    selectFeature: PropTypes.func,
}

module.exports = FeaturesPage
