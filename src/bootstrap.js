import configData from '../public/example.json';
import { initRTE } from '@uniwebcms/uniweb-rte';

initRTE(import('RemoteModule/widgets'), configData);
