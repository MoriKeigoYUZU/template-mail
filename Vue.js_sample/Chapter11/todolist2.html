<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Vue.js sample</title>
		<link rel="stylesheet" href="style.css" >
		<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
	</head>
	
	<body>
		<h2>ToDoリスト</h2>
		<div id="app">
			<div v-for="todo in todos">
				<label>
					<input type="checkbox" v-model="todo.done">
					<span v-bind:class="{donestyle:todo.done}">{{todo.text}}</span>
				</label>
			</div>
			
			<input type="text" v-model.trim="addtext" v-on:keyup.enter="addToDo" placeholder="すること">
			<p><button v-on:click="cleanToDo">処理済みを削除</button></p>
			<p>{{ remaining }} / {{ todos.length }}件処理
		</div>

		<script>
			new Vue({
				el: '#app',
				data: {
					addtext:'',
					todos: [
						{done:false, text:'パンを買う'},
						{done:false, text:'コーヒーを買う'}
					]
				},
				computed: {
					remaining: function() {
						return this.todos.filter(function(val) {
							return val.done == true;
						}).length;
					}
				},
				methods: {
					addToDo: function() {
						if (this.addtext) {
							this.todos.push({done:false, text:this.addtext});
							this.addtext = '';
						}
					},
					cleanToDo: function() {
						this.todos = this.todos.filter(function(val) {
							return val.done == false;
						})
					}
				}
			})
		</script>

		<style>
			.donestyle {
				text-decoration: line-through;
				color: lightgray;
			}
		</style>
	</body>
</html>