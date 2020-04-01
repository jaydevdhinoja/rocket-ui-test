import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
const serviceUrl = `${SERVICES_URL}/launches`;
const rocketUrl = `${SERVICES_URL}/rockets`;

const api = axios.create();

export const launchService = {
  get: () => api.get(`${serviceUrl}`)
};

export const RocketService = {
  get: (rocketId) => api.get(`${rocketUrl}/${rocketId}`)
};
