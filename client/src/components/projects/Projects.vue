<template>
	<div>
		<app-portfolio-banner></app-portfolio-banner>
		<div class="container">
			<div class="all-projects">
				<app-project></app-project>
			</div>
		</div>
	</div>
</template>

<script>
import Banner from './Banner.vue';
import Project from './Project.vue';
export default{
	components:{
		appPortfolioBanner: Banner,
		appProject: Project
	}
}
</script>

<style scoped>
	.all-projects{
		padding: 50px 0;
	}
</style>