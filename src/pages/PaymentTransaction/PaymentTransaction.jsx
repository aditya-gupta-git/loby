import React, { useEffect } from "react";
import { images } from "@/constant/images";
import { useDispatch, useSelector } from "react-redux";
import { GetTransaction } from "@/Data/api/transactionApi";
import { useNavigate } from "react-router-dom";

const PaymentTransaction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(GetTransaction());
  }, []);

  const transaction = useSelector((state) => state.transaction.transactiondata);
  console.log(transaction);

  return (
    <div>
      <nav className="flex justify-between p-4 items-center ">
        <div
          className="left-icon text-white p-2 text-2xl rounded-full "
          style={{ backgroundColor: "#33353B" }}
          onClick={() => navigate(-1)}
        >
          <images.LeftIcon />
        </div>

        <h2 className="text-green-400">Payment Transaction </h2>
        <h2></h2>
      </nav>

      <div>
        {transaction?.rows?.map((tran) => (
          <div key={tran.id} className="border-1 flex justify-between px-2 py-4 text-white  rounded-md border-white mt-4 mx-6   ">
            <div>
             <h2>{tran?.order_id}</h2>
             <p className="text-gray-400 pt-2 " >{tran?.createdAt}</p>
            </div>

            <div >
                <p>{tran?.total_amount}</p>
                <p className="text-gray-400 pt-2 " >ACTIVE</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentTransaction;
