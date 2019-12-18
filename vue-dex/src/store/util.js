export const Util = {
	
	capitalizeFirstLetter: function (string) {
		return string.charAt(0).toUpperCase() + string.slice(1)
	},

	image: function(index, isFavorite) {
		return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (isFavorite ? "shiny/" : "") + index + ".png"
	},

	isFavorite: function(index) {
		return localStorage.favorites && JSON.parse(localStorage.favorites).favoriteList.includes(index)
	},

	toggleFavorite: function(index) {
		if(localStorage.favorites) {
			let favorites = JSON.parse(localStorage.favorites)
			if (favorites.favoriteList.includes(index))
				favorites.favoriteList.splice(favorites.favoriteList.indexOf(index), 1)
			else
				favorites.favoriteList.push(index)
			localStorage.favorites = JSON.stringify(favorites)
		} else {
			localStorage.favorites = JSON.stringify(
													{
														favoriteList: [index],
													}
			)
		}
	}
}

