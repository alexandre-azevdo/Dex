import { Util } from './util.js'
import axios from 'axios'

export const API = {

	fetchData: {

		data: [
			{limit: 151, offset: 0}, 
			{limit: 100, offset: 151}, 
			{limit: 135, offset: 251},
			{limit: 107, offset: 386}
		]
	},
	
	getDetail: async function(index) {

		const response = await axios.all([axios.get('https://pokeapi.co/api/v2/pokemon/' + index + '/'), 
										axios.get('https://pokeapi.co/api/v2/pokemon-species/' + index + '/')])
        let results = response.map(response => { return response.data })

        let names = results[1].names.reduce(
			function(acc, cur) {
			if(cur.language.name == "en" || cur.language.name == "ja")
				acc[cur.language.name] = Util.capitalizeFirstLetter(cur.name);
			return acc;
		}, {});

		let types = results[0].types.map(type => {
				return Util.capitalizeFirstLetter(type.type.name)
		}).reverse()

		let dex = results[1]["flavor_text_entries"].reduce(
			function(acc, cur) {
				if((cur.language.name == "en" || cur.language.name == "ja") && !acc.hasOwnProperty(cur.language.name))
					acc[cur.language.name] = Util.capitalizeFirstLetter(cur["flavor_text"]);
				return acc;
		}, {});

		const isFavorite = Util.isFavorite(index)
		return {
			index: index,
			isFavorite: isFavorite,
			names: names,
			types: types,
			height: results[0].height/10 + " m",
			weight: results[0].weight/10 + " kg",
			dex: dex
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