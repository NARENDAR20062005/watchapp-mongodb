// import React, { useState, useEffect } from 'react';
// import { Modal, Input, Button } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import { fetchIncidents, createIncident, updateIncident, deleteIncident } from '../services/incidentService';
// import backgroundImage from './homebk.jpeg';
// import '../style/style.css';




// function Reserdata() {
//   const [showModal, setShowModal] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     location: '',
//   });
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     setFilteredData(
//       data.filter((item) =>
//         item.title.toLowerCase().includes(search.toLowerCase()) ||
//         item.location.toLowerCase().includes(search.toLowerCase())
//       )
//     );
//   }, [search, data]);

//   const fetchData = async () => {
//     try {
//       const response = await fetchIncidents();
//       setData(response.data);
//       setFilteredData(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editMode) {
//         const response = await updateIncident(formData._id, formData);
//         setData(prevData => prevData.map(item => item._id === formData._id ? response.data : item));
//       } else {
//         const response = await createIncident(formData);
//         setData(prevData => [...prevData, response.data]);
//       }
//       setShowModal(false);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleEdit = (value) => {
//     setEditMode(true);
//     setFormData(value);
//     setShowModal(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteIncident(id);
//       setData(prevData => prevData.filter(incident => incident._id !== id));
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const onSearch = (value) => {
//     setSearch(value);
//   };

//   return (
//     <>
//       <div className='searchbar'>
//         <Input
//           placeholder="Search.."
//           allowClear
//           onChange={(e) => onSearch(e.target.value)}
//           style={{ width: 300 }}
//           prefix={<SearchOutlined />}
//         />
//       </div>

//       <div className='bodybk'style={{ backgroundImage: `url(${backgroundImage})`, height: '100%', backgroundSize: 'cover', paddingTop: '20px' }}>
//         <Button
        
//           onClick={() => { setShowModal(true); setEditMode(false); setFormData({ title: '', description: '', location: '' }) }}
//           className="m-3 bt3" style={{ width: '130px', fontSize: '18px' }}
//         >
//           CREATE
//         </Button>
//         <div className="play_back  play">
//           <div className="w-75">
//             {filteredData.map((value) => (
//               <div key={value._id} className="card mb-3">
//                 <div className="card-body">
//                   <div className="m-2"> Title: {value.title}</div>
//                   <div className='m-2'> Description: {value.description}</div>
//                   <div className='m-2'> Location: {value.location}</div>
//                   <div className='m-2'> Date: {new Date(value.date).toLocaleString()}</div>
//                   <div className='d-flex'>
//                     <Button className='bt2 ms-2'  onClick={() => handleEdit(value)} > Edit </Button>
//                     <Button  className='bt2 ms-2' onClick={() => handleDelete(value._id)} > Delete </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <Modal 
//         title={editMode ? 'Edit Incident' : 'Report an Incident'}
//         visible={showModal}
//         onCancel={() => setShowModal(false)}
//         footer={null} centered
//       >
      
        
//         <div onSubmit={handleSubmit}>
//           <div className="modal_in m-3">
//             <label>Title</label>
//             <input
//               className="mt-1 p-1 inp"
//               name="title"
//               style={{ width: '90%' }}
//               onChange={handleChange}
//               value={formData.title}
//             />
//           </div>
//           <div className="modal_in m-3">
//             <label>Description</label>
//             <textarea
//               className="mt-1 p-1 inp"
//               name="description"
//               style={{ width: '90%' }}
//               onChange={handleChange}
//               value={formData.description}
//             ></textarea>
//           </div>
//           <div className="modal_in m-3">
//             <label>Location</label>
//             <input
//               className="mt-1 p-1 inp"
//               name="location"
//               style={{ width: '90%' }}
//               onChange={handleChange}
//               value={formData.location}
//             />
//           </div>
//           <Button  className="ms-3 mb-3 bt" style={{ width: '100px', fontSize: '17px' }}>
//             {editMode ? 'Update' : 'Report'}
//           </Button>
//         </div>
//       </Modal>
//     </>
//   );
// }

// export default Reserdata;


import React, { useState, useEffect } from 'react';
import { Modal, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { fetchIncidents, createIncident, updateIncident, deleteIncident } from '../services/incidentService';
import backgroundImage from './homebk.jpg';
import '../style/style.css';


function Reserdata() {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
  });
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  const fetchData = async () => {
    try {
      const response = await fetchIncidents();
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        const response = await updateIncident(formData._id, formData);
        setData(prevData => prevData.map(item => item._id === formData._id ? response.data : item));
      } else {
        const response = await createIncident(formData);
        setData(prevData => [...prevData, response.data]);
      }
      setShowModal(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEdit = (value) => {
    setEditMode(true);
    setFormData(value);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteIncident(id);
      setData(prevData => prevData.filter(incident => incident._id !== id));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onSearch = (value) => {
    setSearch(value);
  };

  return (
    <>
      <div className='searchbar'>
        <Input
          placeholder="Search.."
          allowClear
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 300 }}
          prefix={<SearchOutlined />}
        />
      </div>

      <div className='bodybk' style={{ backgroundImage: `url(${backgroundImage})`, height: '100%', backgroundSize: 'cover', paddingTop: '20px' }}>
        <Button
          className='bt3 ms-2'
          onClick={() => { setShowModal(true); setEditMode(false); setFormData({ title: '', description: '', location: '' }) }}
          
        >
          CREATE
        </Button>
        <div className="play_back">
          <div className="w-75">
            {filteredData.map((value) => (
              <div key={value._id} className="card mb-3">
                <div className="card-body">
                  <div className="m-2"> Title: {value.title}</div>
                  <div className='m-2'> Description: {value.description}</div>
                  <div className='m-2'> Location: {value.location}</div>
                  <div className='m-2'> Date: {new Date(value.date).toLocaleString()}</div>
                  <div className='d-flex'>
                    <Button className='bt2 ms-2'  onClick={() => handleEdit(value)} >Edit</Button>
                    <Button  className='bt2 ms-2' onClick={() => handleDelete(value._id)}>Delete</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        title={editMode ? 'Edit Incident' : 'Report an Incident'}
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <form onSubmit={handleSubmit}>
          <div className="modal_in m-3">
            <label>Title</label>
            <input
              className="mt-1 p-1 inp"
              name="title"
              style={{ width: '90%' }}
              onChange={handleChange}
              value={formData.title}
            />
          </div>
          <div className="modal_in m-3">
            <label>Description</label>
            <textarea
              className="mt-1 p-1 inp"
              name="description"
              style={{ width: '90%' }}
              onChange={handleChange}
              value={formData.description}
            ></textarea>
          </div>
          <div className="modal_in m-3">
            <label>Location</label>
            <input
              className="mt-1 p-1 inp"
              name="location"
              style={{ width: '90%' }}
              onChange={handleChange}
              value={formData.location}
            />
          </div>
          <Button className='bt2 ms-2' htmlType="submit" style={{ width: '100px', marginRight: '10px' }}>
            {editMode ? 'Update' : 'Report'}
          </Button>
        </form>
      </Modal>
    </>
  );
}

export default Reserdata;
