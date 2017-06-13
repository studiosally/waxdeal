function DataService ($http) {

	function getAllWaxDeal() {
		return $http.get('/api/waxdeals')
			.then( response => response.data )
	}

	function addWaxDeal( data ) {
		return $http.post('/api/waxdeals', data)
			.then( response => response.data )
	}

	function removeWaxDeal( id ) {
		return $http.delete('/api/waxdeal/${id}')
			.then( response => response.data )
	}

	 function updateWaxDeal (id) {
        return $http.put('/api/waxdeal/${id}')
                .then(response => response.data)
      }

	return { getAllWaxDeal, addWaxDeal, removeWaxDeal, updateWaxDeal }

}

module.exports = DataService


