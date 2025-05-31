import React, { useEffect, useState } from "react";
import { images } from "../../constant/images";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategories } from "../../Data/api/categoryApi";
import DOMPurify from "dompurify";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GetAllGames } from "@/Data/api/gamesApi";
import { useNavigate } from "react-router-dom";
import { Ghost } from "lucide-react";
import axiosInstance from "@/Data/api/axiosInstance";
import { GetAllConfiguration } from "@/Data/api/congfigurationApi";
import {
  fetchAddlistingFailed,
  fetchAddlistingStart,
  fetchAddlistingSuccess,
} from "@/Data/redux/slices/addlistingSlice";
import Loader from "@/components/Ui/Loader";

const AddListing = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  // const [deliverytime, setDelivertime] = useState("");
  const [priceunit, setPriceunit] = useState("");
  const [game, setGame] = useState("");
  const [day, setDay] = useState("");
  const [edt, setEdt] = useState("");
  const [serviceOptionId, setServiceOptionId] = useState([]);
  // const [type, setType] = useState("");
  const [base, setBase] = useState("");
  const [file, setFile] = useState([]);
  const [filePreview, setFilePreview] = useState([]);

  // const [gameSelection, setGameSelection] = useState("");
  // const [streamSelection, setStreamSelection] = useState("");
  // const [languageSelection, setLanguageSelection] = useState("");

  const [selectedCategoryid, setSelectedCategoryid] = useState("");
  console.log(selectedCategoryid);

  const [selectedGameid, setSelectedGameid] = useState("");
  console.log(selectedGameid);

  useEffect(() => {
    dispatch(GetAllGames());
    dispatch(GetAllCategories());
    // dispatch(GetAllConfiguration(selectedGameid, selectedCategoryid));
  }, [dispatch]);

  useEffect(() => {
    if (selectedGameid && selectedCategoryid) {
      dispatch(GetAllConfiguration(selectedGameid, selectedCategoryid));
    }
  }, [selectedGameid, selectedCategoryid, dispatch]);

  const loading = useSelector((state) => state.Addlisting.loading);

  const categorylist = useSelector((state) => state.categories.data);
  console.log(categorylist);

  const gameslist = useSelector((state) => state.games.gameData);
  console.log(gameslist);

  const configurationdata = useSelector(
    (state) => state.configuration.configurationdata
  );
  console.log(configurationdata);

  console.log(
    configurationdata?.gameCategoryServices?.[0]?.service?.selection_type
  );

  console.log(configurationdata?.gameCategoryServices?.[1]?.service?.selection_type);

  console.log(
    configurationdata?.gameCategoryServices?.[0]?.service?.selection_type
  );

  const [agreed, setAgreed] = useState(false);

  const [selectiontype, setSelectiontype] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");

  const [selectedGame, setSelectedGame] = useState(null);
  // console.log(selectedGame);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !title ||
      !description ||
      !price ||
      !stock ||
      !priceunit ||
      !edt ||
      !file ||
      !filePreview
    ) {
      toast.error("Fill All Feilds");
      return;
    }

    dispatch(fetchAddlistingStart());

    // alert(selectedGameid);

    const formdata = new FormData();

    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("price", price);
    formdata.append("stock_avl", stock);
    // formdata.append("delivery_time", deliverytime);
    formdata.append("price_unit_id", priceunit);
    formdata.append("category_id", selectedCategoryid);
    formdata.append("game_id", selectedGameid);
    formdata.append("edt", edt);
    formdata.append("service_option_id", serviceOptionId.join(","));
    // formdata.append("file_path_link", file_path_link);
    // formdata.append("file_path", file);
    formdata.append("type", "[2,2]");
    // formdata.append("Base", 1);
    formdata.append("selection_type", "1,0,0");

    // formdata.append("option_answer", option_answer);

    file.forEach((fileObj) => {
      formdata.append("file_path", fileObj); // Backend expects "file_path"
    });

    const payload = {
      formdata,
    };
    console.log("Payload:", title);

    axiosInstance
      .post("create-listing-for-user-game-service", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      .then((res) => {
        console.log("Success:", res.data);
        dispatch(fetchAddlistingSuccess(res.data));
        navigate("/Addlisting/image");
        toast.success("Listing created successfully!");

        setTitle("");
        setDescription("");
        setPrice("");
        setStock("");
        setPriceunit("");
        setGame("");
        setDay("");
        setEdt("");
        setServiceOptionId([]);
        setBase("");
        setFile(null);
        setFilePreview(null);
        setSelectedCategory("");
        setSelectedCategoryid("");
        setSelectedGameid("");
        setSelectedGame(null);
        setAgreed("");
      })

      .catch((err) => {
        console.error("Error:", err);
        dispatch(fetchAddlistingFailed(err));
        toast.error("Error creating listing");
      });
  }

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      setFile(selectedFiles); // Keep for previews
      const previews = selectedFiles.map((file) => URL.createObjectURL(file));
      setFilePreview(previews);
    }
  };

  const handleRemovePreview = (index) => {
    setFilePreview((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* loader */}
      {loading && <Loader />}

      {/* <h1>AddListing</h1>  */}

      <nav className="flex justify-between items-center p-4 ">
        <div
          className="left-icon  text-white p-2 text-2xl rounded-full "
          style={{ backgroundColor: "#33353B" }}
          onClick={() => navigate(-1)}
        >
          <images.LeftIcon />
        </div>
        <h2 className="text-green-500 text-xl ">Create New Listing</h2>
        <h2></h2>
      </nav>

      <div className="px-6   ">
        <Select
          onValueChange={(value) => {
            const selected = categorylist.find(
              (cat) => cat.id.toString() === value
            );
            // navigate(`/Addlisting/${selected.id}`)
            setSelectedCategory(selected?.disclaimer || "");
            // console.log(selected.disclaimer);
            setSelectedCategoryid(selected ? selected.id : "");
          }}
        >
          <SelectTrigger
            className="w-full py-7 focus:border-green-500  max-w-md text-white border border-gray-700 rounded-md  "
            style={{ backgroundColor: "#373A43" }}
          >
            <SelectValue placeholder="Select Category" className="truncate" />
          </SelectTrigger>

          <SelectContent
            className="  border border-gray-700"
            style={{ backgroundColor: "#373A43" }}
          >
            <SelectGroup>
              {categorylist?.map((cat) => (
                <SelectItem
                  key={cat.id}
                  value={cat.id.toString()}
                  className="py-2 text-white"
                >
                  {cat.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {selectedCategory && (
          <div>
            <p className="text-white pt-4 text-xl">Disclaimer</p>
            <ul className="text-sm text-gray-400 mt-2 space-y-1 list-none">
              {selectedCategory
                .split(/\n|\r/)
                .filter((line) => line.trim() !== "")
                .map((line, index) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{ __html: line.trim() }}
                  />
                ))}
            </ul>
          </div>
        )}
        <Select
          onValueChange={(value) => {
            setSelectedGame(value);
            const select = gameslist.find(
              (game) => game.id.toString() === value
            );
            if (select) {
              setSelectedGameid(select.id);
            } else {
              console.error("Game not found!");
            }
          }}
        >
          <SelectTrigger
            className="w-full py-7 mt-4 focus:border-green-500 outline-none  max-w-md text-white border border-gray-700 rounded-md  "
            style={{ backgroundColor: "#373A43" }}
          >
            <SelectValue placeholder="Select Games" className="truncate" />
          </SelectTrigger>

          <SelectContent
            className="  border border-gray-700"
            style={{ backgroundColor: "#373A43" }}
          >
            <SelectGroup>
              {gameslist?.map((game) => (
                <SelectItem
                  key={game.id}
                  value={game.id.toString()}
                  className="py-2 text-white"
                >
                  {game.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* {selectedGame && (
          <Select
            onValueChange={(value) => {
              const selectedOption =
                configurationdata?.gameCategoryServices?.[0]?.gameCategoryServiceOptions.find(
                  (opt) => opt.id === parseInt(value)
                );

              if (selectedOption) {
                setServiceOptionId(selectedOption.id);
                // selection_type belongs to the service, not the option
                
              }
              setSelectiontype(
                  configurationdata?.gameCategoryServices?.[0]?.service
                    ?.selection_type || ""
              );
            }}
          >
            <SelectTrigger
              className="w-full py-7 mt-4 focus:border-green-500 outline-none  max-w-md text-white border border-gray-700 rounded-md  "
              style={{ backgroundColor: "#373A43" }}
            >
              <SelectValue placeholder={configurationdata?.gameCategoryServices?.[0]?.service?.name} className="truncate" />
            </SelectTrigger>

            <SelectContent
              className="  border border-gray-700"
              style={{ backgroundColor: "#373A43" }}
            >
              <SelectGroup>
                {configurationdata?.gameCategoryServices?.[0]?.gameCategoryServiceOptions.map(
                  (data) => (
                    <SelectItem
                      key={data.id}
                      value={data.serviceOption}
                      className="py-2 text-white"
                    >
                      {data?.serviceOption?.service_option}
                    </SelectItem>
                  )
                )}
                
              </SelectGroup>
              
            </SelectContent>
          </Select>
        )}


        {selectedGame && (
          <Select
            onValueChange={(value) => {
              const selectedOption =
                configurationdata?.gameCategoryServices?.[1]?.gameCategoryServiceOptions.find(
                  (opt) => opt.id === parseInt(value)
                );

              if (selectedOption) {
                setServiceOptionId(selectedOption.id);
                
              }
              setSelectiontype(
                  configurationdata?.gameCategoryServices?.[1]?.service
                    ?.selection_type || ""
                );
            }}
          >
            <SelectTrigger
              className="w-full py-7 mt-4 focus:border-green-500 outline-none max-w-md text-white border border-gray-700 rounded-md"
              style={{ backgroundColor: "#373A43" }}
            >
              <SelectValue placeholder={configurationdata?.gameCategoryServices?.[2]?.service?.name} className="truncate" />
            </SelectTrigger>

            <SelectContent
              className="border border-gray-700"
              style={{ backgroundColor: "#373A43" }}
            >
              <SelectGroup>
                {configurationdata?.gameCategoryServices?.[1]?.gameCategoryServiceOptions.map(
                  (stream) => (
                    <SelectItem
                      key={stream.id}
                      value={stream.id.toString()}
                      className="text-white"
                    >
                      {stream?.serviceOption?.service_option}
                    </SelectItem>
                  )
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}


        {selectedGame && (
          <Select
            onValueChange={(value) => {
              const selectedOption =
                configurationdata?.gameCategoryServices?.[2]?.gameCategoryServiceOptions.find(
                  (opt) => opt.id === parseInt(value)
                );

              if (selectedOption) {
                setServiceOptionId(selectedOption.id);
                
              }
              setSelectiontype(
                  configurationdata?.gameCategoryServices?.[2]?.service
                    ?.selection_type || ""
                );
            }}
          >
            <SelectTrigger
              className="w-full py-7 mt-4 focus:border-green-500 outline-none max-w-md text-white border border-gray-700 rounded-md"
              style={{ backgroundColor: "#373A43" }}
            >
              <SelectValue
                placeholder={
                  configurationdata?.gameCategoryServices?.[2]?.service?.name
                }
                className="truncate"
              />
            </SelectTrigger>

            <SelectContent
              className="border border-gray-700"
              style={{ backgroundColor: "#373A43" }}
            >
              <SelectGroup>
                {configurationdata?.gameCategoryServices?.[2]?.gameCategoryServiceOptions.map(
                  (lang) => (
                    <SelectItem
                      key={lang.id}
                      value={lang.id.toString()}
                      className="text-white"
                    >
                      {lang?.serviceOption?.service_option}
                    </SelectItem>
                  )
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        )} */}
        
        {selectedGame &&
          configurationdata?.gameCategoryServices?.map((serviceData, index) => (
            <Select
              key={serviceData.service.id}
              onValueChange={(value) => {
                const selectedOption =
                  serviceData.gameCategoryServiceOptions.find(
                    (opt) => opt.id === parseInt(value)
                  );

                if (selectedOption) {
                  setServiceOptionId((prev) => {
                    const newIds = [...prev];
                    newIds[index] = selectedOption.id; 
                    return newIds;
                  });
                }

                setSelectiontype(serviceData?.service?.selection_type || "");
              }}
            >
              <SelectTrigger
                className="w-full py-7 mt-4 focus:border-green-500 outline-none max-w-md text-white border border-gray-700 rounded-md"
                style={{ backgroundColor: "#373A43" }}
              >
                <SelectValue
                  placeholder={serviceData?.service?.name || "Select Option"}
                  className="truncate"
                />
              </SelectTrigger>

              <SelectContent
                className="border border-gray-700"
                style={{ backgroundColor: "#373A43" }}
              >
                <SelectGroup>
                  {serviceData?.gameCategoryServiceOptions?.map((opt) => (
                    <SelectItem
                      key={opt.id}
                      value={opt.id.toString()}
                      className="text-white"
                    >
                      {opt?.serviceOption?.service_option}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          ))}
        <form className="pt-4 py-4 ">
          <label className="text-gray-400 pt-2 ">Title</label> <br />
          <input
            type="text"
            className="border border-transparent text-gray-300 w-full py-3 rounded-lg px-4 focus:border-green-500 outline-none "
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ backgroundColor: "#373A43" }}
          />
        </form>
        <label className="text-gray-400">Description</label> <br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="focus:border-green-400 border border-transparent outline-none py-12 mt-4  border-1 w-full p-2 pt-2  text-gray-400 rounded-lg "
          style={{ backgroundColor: "#373A43" }}
          placeholder="Type Description "
        ></textarea>
        <div className="border border-dashed border-gray-600 rounded-xl p-4 text-center text-white bg-[#1e1e2f]">
          <h2 className="text-base font-semibold mb-4">Upload Cover Image</h2>

          <div className="flex justify-center ">
            {filePreview?.map((preview, index) => (
              <div key={index} className="relative mt-2 inline-block ">
                <img
                  key={index}
                  src={preview}
                  alt={`preview-${index}`}
                  className="w-full h-32 object-cover"
                />

                <button
                  onClick={() => handleRemovePreview(index)}
                  className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-700"
                >
                  <images.crossIcon />
                </button>
              </div>
            ))}
          </div>

          <label htmlFor="file-upload">
            <div className="bg-[#7A5AF8] text-white mt-4 px-4 py-2 rounded-lg inline-flex items-center gap-2 cursor-pointer justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-3 3m3-3l3 3M12 4v8"
                />
              </svg>
              <span>Choose file</span>
            </div>
          </label>

          <input
            type="file"
            id="file-upload"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          {/* 
          <div className="my-4 text-sm text-gray-400">or</div>

          <input
            type="text"
            placeholder="Paste Youtube/Twitch/Drive Link"
            className="w-full px-4 py-2 bg-[#2b2b3d] border border-gray-500 rounded-md text-sm text-gray-300 placeholder-gray-500"
          /> */}
        </div>
        <div>
          <div className="mt-4">
            <label className="text-gray-400  " htmlFor="">
              Price
            </label>{" "}
            <br />
          </div>

          <div className="flex items-center justify-center ">
            <div className="flex items-center gap-2 ">
              <images.coinIcon className="text-2xl text-yellow-300 " />{" "}
              <input
                type="number"
                className="border-1 focus:border-green-500 outline-none text-gray-200 w-36 py-4 rounded-lg px-2 "
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{ backgroundColor: "#373A43" }}
              />
            </div>

            <Select
              onValueChange={(value) => {
                const selected = configurationdata?.unit_type?.find(
                  (unit) => unit.name === value
                );
                console.log(selected?.id);
                setPriceunit(selected?.id);
              }}
            >
              <SelectTrigger
                className="w-full py-7  focus:border-green-500 outline-none  max-w-md text-white border border-gray-700 rounded-md  "
                style={{ backgroundColor: "#373A43" }}
              >
                <SelectValue
                  placeholder="Select Unit"
                  className="text-2xl font-semibold "
                />
              </SelectTrigger>

              <SelectContent
                className="border border-gray-700  "
                style={{ backgroundColor: "#373A43" }}
              >
                <SelectGroup>
                  {configurationdata?.unit_type?.map((unit) => (
                    <SelectItem
                      key={unit.id}
                      value={unit.name}
                      className="text-white"
                    >
                      {unit?.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <form>
            <div className="flex items-center justify-between py-4 ">
              <label htmlFor="" className="text-xl text-gray-400 ">
                Available Stock{" "}
              </label>
              <input
                type="text"
                placeholder=""
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="outline-none border  border-transparent px-2 text-white  focus:border-green-400 py-4 rounded-lg  "
                style={{ backgroundColor: "#373A43" }}
              />
            </div>

            <div className="flex justify-between  items-center ">
              <label htmlFor="" className="text-gray-400">
                Estimated Delivery Time(Days)
              </label>

              <Select value={edt} onValueChange={(value) => setEdt(value)}>
                <SelectTrigger
                  className="w-full py-7  focus:border-green-500 outline-none w-64  max-w-md text-white border border-gray-700 rounded-md  "
                  style={{ backgroundColor: "#373A43" }}
                >
                  <SelectValue placeholder="Select" className="truncate" />
                </SelectTrigger>

                <SelectContent
                  className="border border-gray-700"
                  style={{ backgroundColor: "#373A43" }}
                >
                  <SelectGroup>
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <SelectItem
                        key={num}
                        value={String(num)}
                        className="py-2 text-white"
                      >
                        {num}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>

                {/* <SelectContent
            className="  border border-gray-700"
            style={{ backgroundColor: "#373A43" }}
          >
            <SelectGroup>
              {gameslist?.map((game) => (
                <SelectItem
                  key={game.id}
                  value={game.name}
                  className="py-2 text-white"
                >
                  {game.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent> */}
              </Select>
            </div>
          </form>

          <div className="flex items-center  gap-1">
            <input
              type="checkbox"
              className="w-4 h-5 bg-green-500 rounded-full  "
            />{" "}
            <p className="text-gray-400">
              <span className="text-green-500">'Loby Protection' </span>
              Insurance
            </p>
          </div>

          <div className="flex items-start gap-2 mt-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="w-4 h-4 accent-green-500 mt-1"
            />
            <p className="text-gray-400 text-sm">
              I have read and agreed to all seller's policy and the
              <span className="text-green-500">
                {" "}
                Terms of Service Insurance
              </span>
            </p>
          </div>

          <Button
            variant="link"
            disabled={!agreed || loading}
            className={`w-60 text-white outline-none flex justify-center m-auto py-6 mt-6 transition-opacity duration-300 ${
              !agreed ? "opacity-40 cursor-not-allowed" : ""
            }`}
            onClick={handleSubmit}
            style={{ backgroundColor: "#7A5AF8" }}
          >
            {loading ? "Publishing..." : "Publish"}
          </Button>
        </div>
        {/* <div>
          <label>Price</label>
          <input type="text" placeholder="Enter Price" />
          per <input type="text" placeholder="S" />
        </div> */}
      </div>

      {/* <Button variant="ghost">Outline</Button>   */}
    </div>
  );
};

export default AddListing;
