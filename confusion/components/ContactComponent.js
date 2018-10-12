import React, {Component} from 'react';
import {CONTACT} from '../shared/contact_info';
import {Card} from 'react-native-elements';
import {Text} from 'react-native';

class Contact extends Component {

    render () {
        return(
        <Card title="Contact Information">
          <Text>{CONTACT.info}}</Text>
        </Card>
        )
    }

}

export default Contact;