import React from 'react';
import FormBuilder from 'react-form-builder2';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <FormBuilder.ReactFormBuilder
                    //variables={variables}
                    url='/api/formdata'
                    saveUrl='/api/formdata' />
            </div>
        );
    }
}

export default App;