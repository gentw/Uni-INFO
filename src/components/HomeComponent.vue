
<script>
// import HeaderComponent from './general/HeaderComponent.vue'
// import SearchComponent from './home/SearchComponent.vue';	

export default {
		name: 'home',
		
		data() {
			return {
			selectedDirection: "",
			selectedCity: "",
			changeBgSize: false,
			showLoading: false,
			isClicked: false,
			imageSrc: "'http://s1.swisspour.net/img/manjakos/'",
			facultities: [],
			facultyKey: 0,
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

				var _this = this;

				this.changeBgSize = true;
				this.showLoading = true;

				setTimeout(function() {
					_this.showLoading = false;
					_this.isClicked = true;
				_this.$http.post('http://s1.swisspour.net/websites/api/universities', object).then((response) => {
					


					
					_this.facultities = response.body.global;
					
					
					if(response.body.global.length <= 0)
						_this.changeBgSize = false;
				});
				}, 1000);

				

				
			},

			enableButton: function(){
				if(this.selectedDirection || this.selectedCity)
					this.isClicked = false;
			}
		},

		mounted() {

		}

} 




</script>
<template src="../templates/home.html">


</template>