import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from 'antd';
import '../style/style.css';
import backgroundImage from './homebk.jpg'; 
const { Search } = Input;

function View() {
    const [incidents, setIncidents] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("/incidents");
            setIncidents(response.data);
            setFilteredData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setFilteredData(
            incidents.filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.location.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, incidents]);

    const onSearch = (value) => {
        setSearch(value);
    };

    return (
        <>
            <div className='searchbar'>
                <Search 
                    placeholder="Search..." 
                    allowClear 
                    onSearch={onSearch} 
                    onChange={(e) => onSearch(e.target.value)}
                    style={{ width: 300 }} 
                />
            </div>
            <div 
                className='bodybk' 
                style={{ 
                    backgroundImage: `url(${backgroundImage})`, 
                    height: '100%', 
                    backgroundSize: 'cover', 
                    paddingTop: '20px' 
                }}
            >
                <div className="play_back">
                    <div className="w-75">
                        {filteredData.map((incident) => (
                            <div key={incident._id} className="card mb-3">
                                <div className="card-body">
                                    <div className="m-2">Title: {incident.title}</div>
                                    <div className='m-2'>Description: {incident.description}</div>
                                    <div className='m-2'>Location: {incident.location}</div>
                                    <div className='m-2'>Date: {new Date(incident.date).toLocaleString()}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default View;
