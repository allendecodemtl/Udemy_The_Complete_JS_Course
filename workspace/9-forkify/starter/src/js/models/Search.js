import axios from 'axios';
import {key, apiWebsite} from '../config';

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults(){
        try {
            const res = await axios(`${apiWebsite}search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error) { 
            alert(error);
        }
    }
    
}