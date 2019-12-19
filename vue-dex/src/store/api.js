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
	
	getDetail: async function(index) {

		const response = await axios.all([axios.get('https://pokeapi.co/api/v2/pokemon/' + index + '/'), 
										axios.get('https://pokeapi.co/api/v2/pokemon-species/' + index + '/')])
        let results = response.map(response => { return response.data })
		const isFavorite = Util.isFavorite(index)
		return {
			index: index,
			isFavorite: isFavorite,
			name: Util.capitalizeFirstLetter(results[0]["name"]),
			types: results[0].types.map(type => {
				return Util.capitalizeFirstLetter(type.type.name)
			}).reverse(),
			weight: results[0].weight/10 + "kg",
			dex: results[1]["flavor_text_entries"][1]["flavor_text"]
		}
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