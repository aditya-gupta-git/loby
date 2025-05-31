import React, { useEffect, useState } from "react";
import { images } from "../../constant/images";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetFaq } from "../../data/api/profileApi";

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetFaq());
  }, []);

  const data = useSelector((state) => state.profile.faqData);

  const toggleAnswer = (id) => {
    setOpenIndexes((prev) => ({ ...prev, [id]: !prev[id],}));  
  };


  return (
    <div>
      {/* <h1>Faq</h1> */}
      <nav className="flex items-center justify-between mt-4 px-4 ">
        <div
          className="left-icon left-icon  text-white text-2xl p-2 rounded-full "
          style={{ backgroundColor: "#33353B" }}
          onClick={() => navigate(-1)}
        >
          <images.LeftIcon />
        </div>

        <h2 className="text-2xl text-green-500">FAQs</h2>
        <h2></h2>
      </nav>

      <div>
        <div className="px-6 py-8 text-xl text-white ">
          {data?.data?.length > 0 ? (
            data?.data?.map((items) => (
              <div
                key={items.id}
                className="flex flex-col justify-between py-4">


                <div className="flex justify-between items-center" 
                 onClick={() => toggleAnswer(items.id)} >
                  <p>{items.question}</p>
                  <div className="cursor-pointer">
                    <images.addIcon className="text-white" />
                  </div>
                </div>


                {openIndexes[items.id] && (
                <p className='mt-2 text-gray-300'>{items.answer}</p>
                 )}
              </div>
            ))
          ) : (
            <p>No Data Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
