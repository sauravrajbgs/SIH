'use client'



import React, { useState } from 'react';

function page() {
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [condition, setCondition] = useState('');
    const [shippingInfo, setShippingInfo] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ image, name, description, category, price, quantity, condition, shippingInfo });
      };
    // const url="http://localhost:4000";
    // const[image ,setImage]=useState(false);
    // const [data ,setData]=useState({
    //   name:"",
    //   description:"",
    //   price:"",
    //   category:"Salad"
    // })
//     const onChangeHandler=(event)=>{
//   const name=event.target.name;
//   const value=event.target.value;
//       setData(data=>({...data,  [name]:value}))
//     }
  
//    const onSubmitHandler=async(event)=>{
//   event.preventDefault();
//   const formData=new FormData();
//   formData.append("name",data.name)
//   formData.append("description",data.description)
//   formData.append("price",Number(data.price))
//   formData.append("category",data.category)
//   formData.append("image",image)
//   const response=await axios.post(`${url}/api/food/add`,formData)
//   if(response.data.sucess){
//     setData({
//       name:"",
//       description:"",
//       price:"",
//       category:"Salad"
//     })
//     setImage(false)
//     toast.success(response.data.message);
//   }
//   else{
//     toast.error(response.data.message);
//   }
//    }
  return (
   <>
   <div className="max-w-4xl mx-auto p-6 bg-light-black rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Sell Your Stamp</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Upload Image</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange}
            className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 ">Product Name</label>
          <input 
            type="text" 
            placeholder='Enter Product Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full bg-white rounded-md shadow-sm sm:text-sm p-5 text-black border-spacing-1"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea 
            value={description}
            placeholder='Description'
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="mt-1 block w-full bg-white rounded-md shadow-md  sm:text-sm text-black"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Category</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full bg-white rounded-md shadow-sm sm:text-sm p-4 text-black"
            required
          >
            <option className='bg-black text-white' value="">Select a category</option>
            <option className='bg-black  text-white' value="rare">Rare</option>
            <option className='bg-black  text-white' value="vintage">Vintage</option>
            <option className='bg-black  text-white'value="modern">Modern</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Price</label>
          <input 
            type="number" 
            placeholder='100'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-med rounded-md shadow-sm sm:text-sm p-3"
            required
          />
        </div>
      
        <div>
          <label className="block text-gray-700">Condition</label>
          <select 
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="mt-1 block w-full rounded-md shadow-sm sm:text-sm text-black  p-4"
            required
          >
            <option className='bg-black text-white'value="">Select condition</option>
            <option className='bg-black text-white' value="mint">Mint</option>
            <option className='bg-black text-white' value="used">Used</option>
            <option className='bg-black text-white' value="damaged">Damaged</option>
            {/* Add more conditions as needed */}
          </select>
        </div>
        
        <button 
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
   </>
  )
}

export default page