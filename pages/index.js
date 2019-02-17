import React from 'react';
import { ReactFormGenerator, ElementStore } from 'react-form-builder2';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    _onSubmit() {
        alert('send data somewhere')
    }
    render() {
        return (<div>
            <ReactFormGenerator
                download_path=""
                back_action="/"
                back_name="Back"
                answer_data={{}}
                action_name="Save"
                form_action="/"
                form_method="POST"
                onSubmit={this._onSubmit}
                //   variables={props.variables}
                data={this.state.data}
            />
        </div>);
    }
}
