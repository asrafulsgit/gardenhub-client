import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

import { AuthContext } from '../config/AuthProvider';
import { apiRequiest, apiRequiestWithCredentials } from '../utils/ApiCall';
import Loader from '../utils/Loader';

const Update_tips = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const {isDark} = useContext(AuthContext)

  const [formData, setFormData] = useState({});

  // get tip
  const [message, setMessage] = useState("tip not found!");
  const [loading, setLoading] = useState(true);
  const getTipDetials = async () => {
      if (!id) {
        setFormData({});
        toast.error("id is Required! please Reload your page or login again!");
        setMessage("tip not found!");
        return;
      }
      
      try {
        const data = await apiRequiestWithCredentials(
          "get",
          `/tip-details/${id}`
        );
        setFormData(data?.tip);
        setLoading(false)
      } catch (error) {
        setFormData({});
     
        toast.error(error.message);
        setMessage("tip not found!");
        setLoading(false)
      }
    };
   useEffect(()=>{
    getTipDetials()
   },[])



  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!id){
      toast.error("id is Required! please Reload your page or login again!");
      return;
    }
    try {
      await apiRequiestWithCredentials('put',`/tip/${id}`,{formData})
      toast.success('tip update successfully')
      navigate('/manage-tips')
    } catch (error) {

      toast.error('tip not update! try again.')
    }
  };

  const categories=[
                  'Plant Care', 'Composting', 'Vertical Gardening', 'Hydroponics',
                  'Indoor Gardening', 'Organic Gardening', 
                  'Container Gardening'
                ]


if(loading){
  return <><Loader /> </>
 }
  return (
   <><Helmet>
        <title>Update Tip</title>
      </Helmet> 
      <section  
    className={`page-section min-h-screen ${isDark ? 'bg-black' : 'bg-gray-100'} 
      py-12 px-5 `}
    >
      <div className={`max-w-3xl mx-auto ${isDark ? 'bg-black border-gray-800':'bg-white border-gray-100'} rounded-lg shadow-xs
       overflow-hidden border `}>
        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <h2 className={`text-[30px] ${isDark ? 'text-gray-400' : 'text-[#111827]'} mb-2 
      font-[700] nunito-family`}>Update Garden Tip</h2>
            <p className={`text-[18px] font-[400] ${isDark ? 'text-gray-500' :"text-[#4b5563]"}  roboto-family`}>Edit your gardening tip information</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6" >
                <label htmlFor='title' className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} 
                   mb-1 nunito-family`}>Title</label>
                <input
                  type='text'
                  id='title'
                  name='title'
                  value={formData.title || ''}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
                />
              </div>
              <div className="mb-6" >
                <label htmlFor='plantType' className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} 
                   mb-1 nunito-family`}>Plant Type/Topic</label>
                <input
                  type='text'
                  id='plantType'
                  name='plantType'
                  value={formData.plantType || ''}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
                />
              </div>
              <div className="mb-6" >
                <label htmlFor='image' className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} 
                   mb-1 nunito-family`}>Image URL</label>
                <input
                  type='text'
                  id='image'
                  name='image'
                  value={formData.image || ''}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
                />
              </div>
              <div className="mb-6">
              <p className="text-sm text-gray-500 nunito-family">Current image:</p>
              <div className="mt-1 h-32 w-full overflow-hidden rounded-md ">
                <img src={formData.image || ' '} alt="Current tip" 
                className="h-full w-auto rounded-md object-cover" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="difficulty" className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Difficulty Level</label>
              <select
                id="difficulty"
                name="difficulty"
                value={formData.difficulty || ''}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="description" className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Description</label>
              <textarea
                id="description"
                name="description"
                rows={6}
                value={formData.description || ''}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
              />
            </div>

            

            <div className="mb-6">
              <label htmlFor="category" className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Category</label>
              <select
                id="category"
                name="category"
                value={formData.category || ''}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="availability" className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Availability</label>
              <select
                id="availability"
                name="availability"
                value={formData.availability || ' '}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
              >
                <option value="Public">Public</option>
                <option value="Hidden">Hidden</option>
              </select>
              <p className="mt-1 text-sm text-gray-500">
                Public tips will be visible to all users, hidden tips are only visible to you
              </p>
            </div>

            {/* Read-only author info */}
            <div className={`mb-8 p-4  ${isDark ? 'border border-gray-700' : 'bg-gray-50'} rounded-md`}>
              <h3 className={`text-sm font-medium nunito-family ${isDark ?'text-gray-400' :'text-gray-700'} mb-3 `}>Author Information (Read-only)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Name</label>
                  <input type="text" 
                   disabled value={formData?.user?.name || ''} 
                   readOnly 
                  className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`} />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Email</label>
                  <input type="email" disabled  
                  value={formData?.user?.email || ''} readOnly 
                  className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`} />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <button onClick={()=>{
                navigate('/my-tips')
              }} type="button" className="mb-3 sm:mb-0 inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Cancel
              </button>
              <button type="submit" className="inline-flex justify-center items-center px-6 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Update Tip
              </button>
            </div>
          </form>
        </div>
      </div>
    </section></>
  );
}

export default Update_tips
