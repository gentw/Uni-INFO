
<script>
// import HeaderComponent from './general/HeaderComponent.vue'
// import SearchComponent from './home/SearchComponent.vue';	

export default {
		name: 'about',
		data() {
			return {
				aboutInfos: {
					"cover_information": [],
					"details": []

				}
				 
				

			}
		},

		methods: {

			fetchAboutInfo: function() {
				let ajaxRequests = [
					{						
						"global": [
							{					
								"limit": "all",
								"type": "cover_information"
							}
						]
					},
					{						
						"global": [
							{					
								"limit": "all",
								"type": "details"
							}
						]
					},
					{						
						"global": [
							{					
								"limit": "all",
								"type": "team_heading_details"
							}
						]
					},
					{						
						"global": [
							{					
								"limit": "all",
								"type": "team_members"
							}
						]
					}
				];

				this.$http.post('https://cms.uni-info.org/websites/api/global', ajaxRequests[0]).then((response) => {
					
					
					this.aboutInfos.cover_information.push(response.body.global.one[0].cover_information.collections);
					
				});

			},


		},

		mounted() {
			this.fetchAboutInfo();

			console.log(this.aboutInfos.cover_information);
		}
		

} 




</script>
<template src="../templates/about.html">


</template>