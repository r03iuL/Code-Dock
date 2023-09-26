
import useAuth from '../../Hooks/useAuth/useAuth';
import { auth } from '../../firebase/firebase.config';


const Message = ({ message }) => {
  const { user } = useAuth();

  const messageClass =
    message?.uid === auth?.currentUser?.uid
      ? 'bg-[#0a03ca] text-white flex-row-reverse text-end float-right rounded-bl-full'
      : 'bg-[#e5e5ea] text-black float-left rounded-br-full';

  return (
    <div className={`md:px-5 px-1   mt-6 mb-2`}>
      <div className={`flex gap-3 items-center  shadow-md m- py-2 px-3 rounded-tl-full rounded-tr-full ${messageClass}`}>
        <img className='rounded-full h-5' src={message.img} alt="" />
        <p className=''>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
