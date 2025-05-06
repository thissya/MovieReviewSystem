// import React, { useState } from 'react';
// import axios from 'axios';

// function MovieForm() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     directorName: '',
//     castAndCrew: '',
//     musicDirector: '',
//     producer: '',
//     image: '',
//     genre: '',
//     releaseDate: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem('token');

//     const dataToSubmit = {
//       ...formData,
//       castAndCrew: formData.castAndCrew.split(',').map(name => name.trim())
//     };

//     try {
//       const res = await axios.post(
//         'http://localhost:3000/api/add/movie',
//         dataToSubmit,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       alert('Movie added successfully!');
//       console.log(res.data);
//     } catch (err) {
//       console.error(err);
//       alert('Error adding movie. Please check your token or login status.');
//     }
//   };

//   return (
//     <div className='w-full max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded-xl text-white'>
//       <h2 className='text-2xl font-bold mb-4'>Add New Movie</h2>
//       <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
//         <input type='text' name='title' placeholder='Title' value={formData.title} onChange={handleChange} className='p-2 rounded bg-gray-800' required />
//         <textarea name='description' placeholder='Description' value={formData.description} onChange={handleChange} className='p-2 rounded bg-gray-800' required />
//         <input type='text' name='directorName' placeholder='Director Name' value={formData.directorName} onChange={handleChange} className='p-2 rounded bg-gray-800' required />
//         <input type='text' name='castAndCrew' placeholder='Cast & Crew (comma-separated)' value={formData.castAndCrew} onChange={handleChange} className='p-2 rounded bg-gray-800' required />
//         <input type='text' name='musicDirector' placeholder='Music Director' value={formData.musicDirector} onChange={handleChange} className='p-2 rounded bg-gray-800' required />
//         <input type='text' name='producer' placeholder='Producer' value={formData.producer} onChange={handleChange} className='p-2 rounded bg-gray-800' required />
//         <input type='text' name='image' placeholder='Image URL' value={formData.image} onChange={handleChange} className='p-2 rounded bg-gray-800' />
//         <input type='text' name='genre' placeholder='Genre' value={formData.genre} onChange={handleChange} className='p-2 rounded bg-gray-800' />
//         <input type='date' name='releaseDate' placeholder='Release Date' value={formData.releaseDate} onChange={handleChange} className='p-2 rounded bg-gray-800' />
//         <button type='submit' className='bg-green-600 hover:bg-green-700 rounded p-2 font-bold'>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default MovieForm;
import React, { useState } from 'react';
import axios from 'axios';

function MovieForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    directorName: '',
    castAndCrew: '',
    musicDirector: '',
    producer: '',
    image: '',
    genre: '',
    releaseDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
  
    const dataToSubmit = {
      ...formData,
      castAndCrew: formData.castAndCrew.split(',').map(name => name.trim())
    };
  
    try {
      const res = await axios.post(
        'http://localhost:3000/api/add/movie',
        dataToSubmit,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Movie added successfully!');
      console.log(res.data);
  
      // Reset the form after successful submission
      setFormData({
        title: '',
        description: '',
        directorName: '',
        castAndCrew: '',
        musicDirector: '',
        producer: '',
        image: '',
        genre: '',
        releaseDate: ''
      });
      
    } catch (err) {
      console.error(err);
      alert('Error adding movie. Please check your token or login status.');
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-gray-950 rounded-2xl shadow-lg p-8 text-white border border-gray-700">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-green-400">🎬 Add New Movie</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { type: 'text', name: 'title', placeholder: 'Title', required: true },
            { type: 'textarea', name: 'description', placeholder: 'Description', required: true },
            { type: 'text', name: 'directorName', placeholder: 'Director Name', required: true },
            { type: 'text', name: 'castAndCrew', placeholder: 'Cast & Crew (comma-separated)', required: true },
            { type: 'text', name: 'musicDirector', placeholder: 'Music Director', required: true },
            { type: 'text', name: 'producer', placeholder: 'Producer', required: true },
            { type: 'text', name: 'image', placeholder: 'Image URL' },
            { type: 'text', name: 'genre', placeholder: 'Genre' },
            { type: 'date', name: 'releaseDate', placeholder: 'Release Date' },
          ].map(({ type, name, placeholder, required }) => (
            type === 'textarea' ? (
              <textarea
                key={name}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                required={required}
              />
            ) : (
              <input
                key={name}
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                required={required}
              />
            )
          ))}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition transform hover:scale-105"
          >
            ✅ Submit Movie
          </button>
        </form>
      </div>
    </div>
  );
}

export default MovieForm;
