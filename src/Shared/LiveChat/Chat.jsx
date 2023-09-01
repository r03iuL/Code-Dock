import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Chat = () => {

    const steps = [
        {
            id: "1",
            message: "Hello, Welcome to our website",
            trigger: "2",
        },
        {
            id: "2",
            message: "Please enter your name!",
            trigger: "3",
        },
        {
            id: "3",
            user: true,
            trigger: "Name",
        },
        {
            id: "Name",
            message: "Hi {previousValue}, Please select your issue",
            trigger: "issues",
        },
        {
            id: "issues",
            options: [
                {
                    value: "React",
                    label: "React",
                    trigger: "React",
                },
                { value: "Angular", label: "Angular", trigger: "Angular" },
            ],
        },
        {
            id: "React",
            message:
                "Thanks for letting your React issue, Our team will resolve your issue ASAP",
            end: true,
        },
        {
            id: "Angular",
            message:
                "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",
            end: true,
        },
    ];

    return (
        <div >
            <Segment className='my-40 w-[380px] mx-auto rounded-'>
                <ChatBot
                    headerTitle="Message Us"
                    recognitionEnable={true}
                    steps={steps}>
                </ChatBot>
            </Segment>
        </div>
    );
};

export default Chat;