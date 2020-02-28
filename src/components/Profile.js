import React from 'react';


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "${email}",
            password: "${password}",
            first_name: "${first_name}",
            last_name: "${last_name}",

        };
    }