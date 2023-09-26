import React, { useState, useEffect, useRef, useContext } from 'react';
import Message from './Message';
import SendMessage from './SendMessage';
import { db } from '../../firebase/firebase.config';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import { Link } from 'react-router-dom';


const Chat = () => {

  

 

  const [messages, setMessages] = useState([]);

  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);


  return (
    <div className={`py-8 `}>

      <div className='flex justify-center'>
        <Link  className='text-black hover:text-white font-[Cinzel] bg-purple-500 hover:bg-[#0d0aa5] px-8 py-1 rounded-lg hover:rounded-2xl duration-700'>My Messages</Link>
      </div>

      <div className="mt-10 w-8/12 box pb-2  mx-auto">

        <div className='grid mb-5'>

          {
            messages &&
            messages.map((message) => (
              <Message key={message.id} message={message} />
            ))
          }

        </div>

        <SendMessage scroll={scroll} />

        <span ref={scroll}></span>

      </div>

    </div>
  );
};

export default Chat;
