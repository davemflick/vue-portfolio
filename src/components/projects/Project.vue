<template>
	<div class="project col-6">
		<img :alt="project.name" class="img-fluid" :src="project.image" />
		<h6>{{ project.name }}</h6>
	</div>
</template>

<script>
import Banner from './Banner.vue';
export default{
	data(){
		return{
			project: {
				name: "Test One",
				image: "/src/assets/images/projects/personal/votingApp.png"
			}
		}
	}
}
</script>

<style scoped>
.project{
	padding: 15px;
	border: 1px solid #dfdfdf;
	border-radius: 12px;
	box-shadow: 2px 3px 1px #bacbab;
}
</style>