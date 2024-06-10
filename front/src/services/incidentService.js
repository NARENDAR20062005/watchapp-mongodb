import axios from 'axios';

const API_URL = 'http://localhost:5001/incidents';

export const fetchIncidents = async () => {
  return await axios.get(API_URL);
};

export const createIncident = async (incident) => {
  return await axios.post(API_URL, incident);
};

export const updateIncident = async (id, updatedIncident) => {
  return await axios.put(`${API_URL}/${id}`, updatedIncident);
};

export const deleteIncident = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
