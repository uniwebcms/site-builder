// import('./bootstrap.js');
import configData from '../public/example.json';
import { Uniweb } from 'uniweb-re';

(function () {
    window.uniweb = new Uniweb(configData);

    return import('./bootstrap.js');
})();
