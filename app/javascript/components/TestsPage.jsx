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

        // fetch('/tests/?feature_id=' + feature.id, {
        //     method: 'POST',
        // })
        // .then(res => res.json())
        // .then(test => {
        //     console.log(test);
            
        //     feature.tests.push(test)

            this.props.updateFeatures()
        // })
        // .catch(err => console.error(err))
    }

    setTestStatus = (test, e) => {
        test.status = e.target.value

        this.props.updateFeatures()
    }

    render = () => {
        let feature = this.props.feature

        return feature ?
            <div className='tests page'>
        
                <span className='go-back' onClick={this.goBack}>
                    {'< Go back'}
                </span>
                <h2>Feature "{feature.name}"</h2>

                <h4>Tests</h4>

                <button onClick={this.addTest}>Create new test</button>

                <div className='tests-list'>
                    {feature.tests.map((test, key) => {

                        return <div className={'test ' + (test.status || '')} key={key}>

                            {test.name}
                            
                            <select className='status' ref={'status'+key}
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
    shouldUpdate: PropTypes.bool,

    feature: PropTypes.object,
    selectedTest: PropTypes.object,

    selectTest: PropTypes.func,
    updateFeature: PropTypes.func,
    updateTest: PropTypes.func,
    switchToPage: PropTypes.func,
}

module.exports = TestsPage
