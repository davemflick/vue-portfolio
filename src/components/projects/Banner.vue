<template>
	<section id="banner">
		<div class="container">
			<div class="row text-center">
				<div class="col">
					<h5 @click="pullProjects" data-type="personal">Personal</h5>
				</div>
				<div class="col">
					<h5 @click="pullProjects" data-type="work">Work</h5>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
 export default{
 	methods: {
 		pullProjects(event){
 			let target = event.srcElement.dataset.type;
 			console.log(target);
 		}
 	}
 }
</script>

<style scoped>

#banner {
	padding-top: 100px;
	height: 100vh;
	position: relative;
	z-index: 1;
	overflow: hidden;
	min-height: 470px;
	max-height: 500px;
	background-color: #ddd;
	margin-top: -25px;
}
#banner * {
	background-size: cover;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

@media screen and (min-width: 1281px){
	#banner{
		min-height: 750px;
		max-height: 900px;
	}
}
@media screen and (min-width: 1024px){
	#banner {
		min-height: 700px;
		max-height: 800px;
	}
}
@media screen and (min-width: 768px){
	#banner {
		min-height: 950px;
		max-height: 1000px;
	}
}
@media screen and (min-width: 600px){
	#banner {
		min-height: 700px;
		max-height: 750px;
	}
}
@media screen and (min-width: 375px){
	#banner {
		min-height: 550px;
		max-height: 600px;
	}
}
</style>