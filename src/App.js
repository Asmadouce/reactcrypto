import React, {Component} from 'react';
import List from './components/List';
import { messaging } from "./init-fcm";



class App extends Component {

    async componentDidMount() {
        messaging.requestPermission()
            .then(async function() {
                const token = await messaging.getToken();
                console.log(token);
            })
            .catch(function(err) {
                console.log("Unable to get permission to notify.", err);
            });

        navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
    }
    render () {

        return (
            <div>
                <List/>
            </div>
        )
    }
}

export default App;



