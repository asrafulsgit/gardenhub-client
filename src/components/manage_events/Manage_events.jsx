import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { apiRequiestWithCredentials } from "../../utils/ApiCall";
import Loader from "../../utils/Loader";

const Manage_events = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteEvent, setDeleteEvent] = useState("");

  const [pageLoading, setPageLoading] = useState(true);
  const [myEvents, setMyEvents] = useState([]);
  const getMyEvents = async () => {
    try {
      const data = await apiRequiestWithCredentials("get", "/my-events");
      setMyEvents(data?.events);
      setPageLoading(false);
    } catch (error) {
      setMyEvents([]);
      setPageLoading(false);
    }
  };
  useEffect(() => {
    getMyEvents();
  }, []);
  const deleteFromUi = (id) => {
    const filteredEvents = myEvents.filter((event) => event._id !== id);
    setMyEvents(filteredEvents);
  };
 
 

  if (pageLoading) {
    return <Loader />;
  }
  return (
    <>
    <Helmet>
        <title>Gargen Hub | Manage events</title>
      </Helmet> 
      <section
        id="manage-events"
        className="min-h-screen bg-gray-50 py-8 px-5 block"
      >
        <div className="max-w-7xl mx-auto ">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl 
        md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                Manage Events
              </h1>
              <p className="sm:text-lg text-gray-600">
                Organize and manage your created Gardening events
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <NavLink to="/create-event">
                <button className="bg-[#2BC854] cursor-pointer
                 text-white text-[14px] sm:text-[16px] px-4 sm:px-6 py-2  sm:py-3 rounded-lg
                 hover:bg-[#0A6B01] 
                 transition-colors duration-200 font-medium flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Create New Event
                </button>
              </NavLink>
            </div>
          </div>

          {/* Events Table */}
          {myEvents.length === 0 ? (
            <div className="flex justify-center items-center py-10">
              <p className="text-red-500 ">You have no event!</p>
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Your Created Events
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {["Event", "Date", "Time", "Participants", "Actions"].map(
                        (heading, i) => (
                          <th
                            key={i}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {heading}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {myEvents.map((event, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img
                              className="h-10 w-10 bg-gray-300 rounded-lg object-cover"
                              src={event?.image}
                              alt={event?.name}
                            />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {event?.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {event?.type}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="px-6 py-4 whitespace-nowrap 
                    text-sm text-gray-900"
                        >
                          {event?.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {event?.time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex items-center">
                            <span className="font-medium">
                              {event?.maxRegistrations}
                            </span>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <Link to={`/update-event/${event?._id}`}>
                            <button className="text-blue-600 cursor-pointer hover:text-blue-900 transition-colors duration-200">
                              Edit
                            </button>
                          </Link>
                          <button
                            onClick={() => {
                              setDeleteEvent(event?._id);
                              setIsModalOpen(!isModalOpen);
                            }}
                            className="text-red-600 cursor-pointer hover:text-red-900 transition-colors duration-200"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
      <DeleteModal
        isModalOpen={isModalOpen}
        setIsModalOpen={() => setIsModalOpen(!isModalOpen)}
        deleteEvent={deleteEvent}
        setDeleteEvent={() => setDeleteEvent("")}
        deleteFromUi={deleteFromUi}
      />
    </>
  );
};



const DeleteModal = ({
  isModalOpen,
  setIsModalOpen,
  deleteEvent,
  setDeleteEvent,
  deleteFromUi,
}) => {
  if (!isModalOpen) return null;
  const handleDelete = async () => {
    try {
      await apiRequiestWithCredentials(
        "delete",
        `/event/delete/${deleteEvent}`
      );
      setDeleteEvent();
      setIsModalOpen();
      deleteFromUi(deleteEvent);
      toast.success("Event delete successfull.");
    } catch (error) {
      setDeleteEvent();
      toast.error(error?.response?.data?.message);
      
    }
  };
  const handleCencelDelete = () => {
    setIsModalOpen();
    setDeleteEvent();
  };
  return (
   <>
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className=" items-end justify-center min-h-screen pt-4 px-4 pb-20 
      
      text-center block sm:p-0">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-gray-500/70 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={setIsModalOpen}
        ></div>

        {/* Modal panel */}
        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          {/* Close Button (top-right) */}
          <button
            type="button"
            className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-gray-600"
            onClick={handleCencelDelete}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 
                    1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 
                    0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Delete Event
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to delete this event? This action
                    cannot be undone and all participant registrations will be
                    cancelled.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full cursor-pointer inline-flex justify-center 
              rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base 
              font-medium text-white hover:bg-red-700 focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 
              sm:w-auto sm:text-sm"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              type="button"
              className="mt-3 cursor-pointer w-full inline-flex justify-center 
              rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white 
              text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 
              sm:w-auto sm:text-sm"
              onClick={handleCencelDelete}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Manage_events;
