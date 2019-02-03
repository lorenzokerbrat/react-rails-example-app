var React = require("react")
var PropTypes = require("prop-types")

class TestsPage extends React.Component {
    shouldComponentUpdate = (nextProps) => nextProps.shouldUpdate === true

    goBack = () => this.props.switchToPage('features')

    addTest = () => {
        let feature = this.props.feature
        feature.tests.push({
            name: 'New test',
            status: 'Undefined'
        })
        this.props.updateFeature(feature)
    }

    setTestStatus = (test, e) => {
        test.status = e.target.value
        this.props.updateTest(this.props.feature, test) // or updateFeature ?????????
    }

    render = () => {
        let feature = this.props.feature

        ///////
        feature = {
            name: 'feature_',
            tests: [
                { name: 'test_', status: 'Undefined' },
                { name: 'test_', status: 'Passed' },
                { name: 'test_', status: 'Failed' },
            ]
        }
        ///////

        return feature ?
            <div className='tests page'>
        
                <span className='go-back' onClick={this.goBack}>
                    Go back
                </span>
                <h2>Feature {feature.name}</h2>

                <button onClick={this.addTest}>Create new test</button>

                <div className='tests-list'>
                    {feature.tests.map((test, key) => {

                        return <div className={'test ' + (test.status || '')} key={key}>

                            {test.name}
                            
                            <select className='status'
                                defaultValue={test.status || 'Undefined'}
                                onChange={(e) => this.setTestStatus(test, e)}>
                                <option value='Undefined'>Undefined</option>
                                <option value='Passed'>Passed</option>
                                <option value='Failed'>Failed</option>
                            </select>

                        </div>
                    })}
                </div>

            </div>
        : <div className='tests page'/>

    }
}

TestsPage.propTypes = {

}

module.exports = TestsPage
