import React, { useEffect } from "react";
import { fetchContacts } from "../../Data/api/chatApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const data = useSelector((state) => state.chat.chatdata);
  //   console.log(data);

    // const myId = useSelector((state) => state.auth.user?.id);
    // console.log(myId)

  const myId = JSON.parse(localStorage.getItem("user"))?.id;
  console.log("My ID:", myId); 

  function Message(id, receive, username) {
    navigate(`/chat/${id}`, {     
      state: { username, receive },
    });
    // navigate(`/chat/${id}/${username}`);
    // navigate(`/chat/${id}/${username}`)

    console.log(id);
  }

  return (
    <div>
      <h1 className="text-center py-4 text-xl text-green-500 ">Chat</h1>

      <div>
        <div className="chat-box">
          {data?.rows?.map((items) => {
            const isSenderMe = items.sender_id === myId;
            const chatWith = isSenderMe ? items.receiverInfo : items.senderInfo;
            const chatWithId = isSenderMe ? items.receiver_id : items.sender_id;        

            return (
              <div
                key={items.id}
                className="border-1 p-4  mt-2 rounded-2xl mx-4 flex items-center gap-6  "
                style={{ backgroundColor: "#6C5DD3" }}
                onClick={() =>
                  Message(
                    items.id,     
                    chatWithId,
                    chatWith.display_name
                  )
                }
              >
                <div>
                  <img
                    src={items.senderInfo.image}
                    alt="image"
                    className="w-16 h-16 rounded-full object-cover border-2 border-green-400  "
                  />
                </div>

                <div>
                  <h2>{chatWith.display_name}</h2>
                  <h1>{items.chatLatestMessage}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Chat;
