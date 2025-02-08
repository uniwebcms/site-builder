import configData from '../public/example.json';
import { initRTE } from 'uniweb-re';

initRTE(import('RemoteModule/widgets'), configData);
