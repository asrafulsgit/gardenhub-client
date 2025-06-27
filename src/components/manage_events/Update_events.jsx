import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
// import { apiRequiestWithCredentials } from '../../utilities/ApiCall';
// import Spinner from '../aditionals/Spinner';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../config/AuthProvider';
import { apiRequiestWithCredentials } from '../../utils/ApiCall';
import { getDate, getTime } from '../../utils/dateSetting';




const Update_event = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const { isDark} = useContext(AuthContext);
  const [eventData, setEventData] = useState({});
  const [updateLoading,setUpdateLoading]=useState(false)
  const [pageLoading,setPageLoading]=useState(true);
  const [dateTime,setDateTime]=useState( eventData?.date || "")
  const getEvent=async()=>{
      try {
        const data = await apiRequiestWithCredentials('get',`/event/details/${id}`);
        setEventData(data?.event)
        setPageLoading(false)
      } catch (error) {
        
        toast.error(error?.response?.data?.message)
        setEventData({})
        setPageLoading(false)
        navigate('/404')
      }
  }
  useEffect(()=>{
      getEvent();
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
      if(name === 'date'){
        setDateTime(value)
        setEventData((prev) => ({
          ...prev,
          date : getDate(value),
          time : getTime(value)
        }))
        return;
      };
    
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
     setUpdateLoading(true)
       try {
         await apiRequiestWithCredentials('put', `/event/update/${id}`, eventData)
         toast.success('Event update successfull')
         setUpdateLoading(false)
         navigate('/manage-events')
       } catch (error) {
          setUpdateLoading(false)
          toast.error(error?.response?.data?.message)
   
       }
    
  };

  const gardeningEventTypes = [
  "Planting Workshop",
  "Composting Seminar",
  "Organic Gardening Talk",
  "Seed Exchange",
  "Garden Tour",
  "Tree Plantation Drive",
  "Soil Health Workshop",
  "Urban Gardening Meetup",
  "Permaculture Session",
  "Hydroponics Training",
  "Seasonal Flower Festival",
  "Gardening Competition",
  "Tool Usage Demo",
  "Home Garden Design Workshop",
  "Pest Control Awareness",
  "Herbal Garden Workshop",
  "Rainwater Harvesting Event",
  "Vertical Garden Workshop",
  "Kids Gardening Camp",
  "Community Garden Volunteering"
];
const gardeningTags = [
  "Organic",
  "Indoor Plants",
  "Succulents",
  "Herbs",
  "Fruits",
  "Vegetables",
  "Composting",
  "Soil Health",
  "Urban Gardening",
  "Hydroponics",
  "DIY Gardening",
  "Garden Design",
  "Sustainable",
  "Vertical Gardening",
  "Pest Control",
  "Flower Gardening",
  "Terrace Gardening",
  "Seed Saving",
  "Native Plants",
  "Rainwater Harvesting",
  "Seasonal Gardening",
  "Tool Maintenance",
  "Pollinator Friendly",
  "Natural Fertilizers",
  "Greenhouse Gardening"
];

// tags seeting
  const [selectedExpertise, setSelectedExpertise] = useState('');
  const handleExpertiseChange = (e) => {
    setSelectedExpertise(e.target.value);
  };

  const addExpertise = () => {
    if (
      selectedExpertise &&
      !eventData.tags?.includes(selectedExpertise)
    ) {
      setEventData((prev) => {
        return{
            ...prev,
            tags : [...prev.tags,selectedExpertise]
        }
      });
      setSelectedExpertise('');
    }
  };

  const removeExpertise = (expertise) => {
    setEventData((prev) => ({
      ...prev,
      tags: prev.tags.filter((exp) => exp !== expertise)
    }));
  };

  // if(pageLoading){
  //   return (<Spinner /> )
  // }

  return (
  <>
  <Helmet>
        <title>Update event</title>
      </Helmet> 
      <section id="update-event" className={`page-section min-h-screen ${isDark ? 'bg-black' : 'bg-gray-100'} 
      py-12 px-5 `}>
      <div className="max-w-4xl mx-auto ">
        {/* Header */}
        <Header />

       {/* Form Container */}
        <div className={` ${isDark ? "bg-black" : 'bg-white border-gray-200'} rounded-lg border
          p-4 sm:p-6 md:p-8`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Name */}
            <div>
              <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                Event Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={eventData.name}
                onChange={handleChange}
                required
                placeholder="Enter event name"
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-700 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
              />
            </div>

            {/* Event Type */}
            <div>
              <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                Event Type <span className="text-red-500">*</span>
              </label>
              <select
                name="type"
                value={eventData.type}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-700 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
              >
                <option value="">Select event type</option>
                {gardeningEventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type.replace(/-/g, " ")}
                  </option>
                ))}
              </select>
            </div>
            
            {/* tag */}
            <div>
        <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
          Tags
        </label>
        <div className="flex gap-4">
          <select
            value={selectedExpertise}
            onChange={handleExpertiseChange}
            className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-700 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
          >
            <option value="">Select an expertise</option>
            {gardeningTags.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={addExpertise}
            className="bg-[#2BC854] cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-[#0A6B01]"
          >
            Add
          </button>
        </div>

        {/* Display added tags */}
        {eventData?.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {eventData?.tags?.map((exp) => (
              <span
                key={exp}
                className="bg-blue-100 text-[#0A6B01] text-sm font-medium px-3 py-1 rounded-full flex items-center gap-2"
              >
                {exp}
                <button
                  type="button"
                  onClick={() => removeExpertise(exp)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
            {/* Event Date */}
            <div>
              <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                Event Date <span className="text-red-500">*</span>
              </label>
              <input
                type="datetime-local"
                name="date"
                value={dateTime}
                onChange={handleChange}
                required
                min="2025-06-12T06:39"
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-700 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
              />
            </div>

            {/* Event Location */}
            <div>
              <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                Event Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={eventData.location}
                onChange={handleChange}
                required
                placeholder="Enter event location"
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-700 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
              />
            </div>

            {/* Registration Fee */}
            <div>
              <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                Registration Fee <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">$</span>
                <input
                  type="number"
                  name="fee"
                  value={eventData.fee}
                  onChange={handleChange}
                  required
                  min ='1'
                  placeholder="0.00"
                  className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-700 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                Event Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={eventData.description}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Provide a detailed description of your event..."
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-700 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
              />
            </div>

            {/* Image URL */}
            <div>
              <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                Event Image URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                name="image"
                value={eventData.image }
                onChange={handleChange}
                required
                placeholder="https://example.com/image.jpg"
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-700 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
              />
              <p className="mt-1 text-sm text-gray-500">
                Provide a URL to an image that represents your event
              </p>
            </div>

            

            {/* Max Participants */}

            <div>
              <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                Maximum Participants <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="maxRegistrations"
                value={eventData.maxRegistrations}
                onChange={handleChange}
                min='1'
                placeholder="Enter maximum number of participants"
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-700 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
              />
              <p className="mt-1 text-sm text-gray-500">
                Leave empty for unlimited participants
              </p>
            </div>

            {/* Requirements */}
            <div>
              <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                Requirements & Rules
              </label>
              <textarea
                name="requirements"
                value={eventData.requirements}
                onChange={handleChange}
                rows={3}
                placeholder="List any specific requirements, age limits, equipment needed, etc."
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-700 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
              />
            </div>
            {/* Creator Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                  Creator Name 
                </label>
                <input
                  type="text"
                  value={eventData?.organizer?.name || ''}
                  readOnly
                  disabled
                  className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                  Creator Email
                </label>
                <input
                  type="email"
                  value={eventData?.organizer?.email || ''}
                  disabled
                  readOnly
                  className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
                />
              </div>
            </div>      
            {/* Terms */}
            <div className="flex items-start">
              <input
                type="checkbox"
                name="agreedToTerms"
                // checked={eventData.agreedToTerms}
                // onChange={handleChange}
                className="mt-1 mr-3 h-4 w-4 text-[#2BC854] focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="text-sm text-gray-700">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-[#2BC854] hover:text-[#0A6B01] underline"
                >
                  terms and conditions
                </a>{" "}
                and confirm that all information provided is accurate. I
                understand that I am responsible for managing this event.
              </label>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t ">
              <button
                type="button"
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700
                 rounded-lg hover:bg-gray-50 font-medium"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                className="flex-1 cursor-pointer px-6 py-3
                 bg-[#2BC854] text-white rounded-lg hover:bg-[#0A6B01] font-medium"
              >
               {updateLoading ? 'Updating...' : 'Update Event'}
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </section></> 
  );
};

const Header =()=>{
  const { isDark } = useContext(AuthContext);
  return (
    <div className="mb-8">
          <h1 className={`text-[26px] md:text-[30px] ${isDark ? 'text-gray-400' 
            : 'text-[#111827]'} md:mb-2 mb-1 
      font-[700] nunito-family`}>Update Event</h1>
          <p className={`md:text-[18px] font-[400] ${isDark ? 'text-gray-500' :
              "text-[#4b5563]"}  roboto-family`}>Edit your event details and save changes</p>
        </div>
  )
}

export default Update_event;