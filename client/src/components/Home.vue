<template>
	<div class="container">
		<h1>Home Page </h1>
		<form>
			<div class="form-group">
				<input class="form-control" v-model="dataObj.thing" type="text" />
				<input class="btn btn-primary" type="submit" value="submit" @click="sendData" />
			</div>
		</form>
	</div>
</template>

<script>
import Vue from 'vue';
export default{
	data(){
		return {
			dataObj: {
				thing: null
			}
		}
	},
	methods:{
		sendData(e){
			e.preventDefault();
			this.$http.post('http://localhost:8000/send-data', this.dataObj).then( response=>{
				console.log(response);
			}, error=>{
				console.log(error);
			}, {headers: {'Access-Control-Allow-Origin': 'http://localhost:8000'}});
		}
	}
}
</script>

<style>

</style>