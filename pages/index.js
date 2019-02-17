import React from 'react';
import { ReactFormGenerator } from 'react-form-builder2';
import fetch from 'isomorphic-unfetch'


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    static async getInitialProps({ req }) {
        const res = await fetch('http://localhost:3000/api/formdata')
        const data = await res.json()
        return { data }
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
                data={this.props.data}
            />
        </div>);
    }
}
