
<script>
// import HeaderComponent from './general/HeaderComponent.vue'
// import SearchComponent from './home/SearchComponent.vue';	

export default {
		name: 'home',
		
		data() {
			return {
			objectRequest: [],
			selectedDirection: "",
			selectedCity: "",
			facultities: [],
			directions: [
				{
					text: "Shkenca Kompjuterike",
					value: "Computer Science"
				},
				{
					text: "Ekonomi",
					value: "Economy"
				},
			],
			cities: [
				{
					text: "Prishtina"
				},
				{
					text: "Gjakova"
				},
				{
					text: "Peja"
				},

			]
			}
		},

		methods: {
			searchBtn: function(e) {
				e.preventDefault();

				let object = {
						
					"global": [
						{					
							"limit": "all",
							"direction": this.selectedDirection,
							"city": this.selectedCity
						}
					]
				}


				this.$http.post('http://s1.swisspour.net/websites/api/universities', object).then((response) => {
					this.facultities = response.body.global;
				});

				
			}
		},

		mounted() {

		}

} 




</script>
<template src="../templates/home.html">


</template>