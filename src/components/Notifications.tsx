import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast';

interface Props {
}

class Notifications extends React.Component{
    render(){
        const showA = true;

        function ToastMessage(props: any) {
            const [showA, setShowA] = useState(true);
            const toggleShowA = () => setShowA(!showA);

            return (
                <Toast autohide={true} delay={6000} show={showA} onClose={toggleShowA} style={{ width: "250px", position: 'absolute', top: '100px', right: '10px', zIndex: 2000 }}>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                        <strong className="mr-auto">{props.title}</strong>
                        <small>{props.time}</small>
                    </Toast.Header>
                    <Toast.Body>{props.body}</Toast.Body>
                </Toast>
            )
        }

        return (
            <ToastMessage 
                title="Message" 
                time="10 minutes ago" 
                body="This is the description" 
            />
        );
    }
};

export default Notifications;