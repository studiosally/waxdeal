function DataService ($http) {

	function getAllWaxDeal() {
		return $http.get('/api/WaxDeals')
			.then( response => response.data )
	}

	function addWaxDeal( data ) {
		return $http.post('/api/WaxDeals', data)
			.then( response => response.data )
	}

	function removeWaxDeal( id ) {
		return $http.delete(`/api/WaxDeal/${id}`)
			.then( response => response.data )
	}

	return { getAllWaxDeal, addWaxDeal, removeWaxDeal }

}

module.exports = DataService


