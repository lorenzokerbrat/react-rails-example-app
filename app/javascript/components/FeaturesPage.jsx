var React = require("react")
var PropTypes = require("prop-types")

class FeaturesPage extends React.Component {
    shouldComponentUpdate = (nextProps) => nextProps.shouldUpdate === true
    
    addFeature = () => {
        // ?????
    }

    render = () => {
        let features = this.props.features

        ///////
        features = [
            { name: 'a', tests: [{name: 'eeeeeee', status: 'Passed'}, {name: 'eeeeeee', status: 'Passed'}, {name: 'eeeeeee', status: 'Failed'}, {name: 'eeeeeee', status: 'Failed'}] },
            { name: 'b', tests: [{name: 'eeeeeee', status: 'Failed'}] },
            { name: 'c', tests: [] },
        ]
        ///////

        return <div className='features page'>

            <h2>Project Features</h2>

            <button onClick={this.addFeature}>Create new feature</button>

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

}

module.exports = FeaturesPage
