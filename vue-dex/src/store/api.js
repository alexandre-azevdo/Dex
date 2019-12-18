import { Util } from './util.js'
import axios from 'axios'

export const API = {

	fetchData: {

		data: [
			{limit: 151, offset: 0}, 
			{limit: 100, offset: 151}, 
			{limit: 135, offset: 251},
		]
	},
	
	getObjects: async function(page) {
		const response = await axios.get('https://pokeapi.co/api/v2/pokemon-species/?limit=' + this.fetchData.data[page].limit + '+&offset=' + this.fetchData.data[page].offset);
        let results = (response.data.results);
        let objects = results.map( (object, listIndex) => {
			const index = listIndex + this.fetchData.data[page].offset + 1
			const isFavorite = Util.isFavorite(index)
			return {
				index: index,
				isFavorite: isFavorite,
				name: Util.capitalizeFirstLetter(object["name"]),
				imageUrl: Util.image(index, false),
				favoriteImageUrl: Util.image(index, true)
			}
		});

		return objects
	}
}