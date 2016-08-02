"use strict";

<<<<<<< HEAD
=======
	Vue.directive("auto-focus", {
		bind: function () {
			Vue.nextTick(function () {
				this.el.focus();
			}.bind(this));
		}
	});
>>>>>>> dev

	new Vue({
		
		el: "#todo",
		
		data: {
			newTask: "",
			tasks: [
				{
					text: "This is an example task. Delete or add your own",
					checked: false
				}
			],

			editingTask: {

			}
		},
		
		computed: {
			areAllSelected: function () {
				return this.tasks.every(function(task) {
					return task.checked;
				}) &&  this.tasks.length > 0;
			},
		},

		methods: {

			addTask: function () {
				var task = this.newTask.trim();
				if (task) {
					this.tasks.push({text: task, checked: false});
					this.newTask = "";
				}
			},

<<<<<<< HEAD
=======
			removeTask: function (task) {
				this.tasks.$remove(task);
			},

			editTask: function (task) {
				this.editingTask = task;
			},

			endEditing: function (task) {
				this.editingTask = {};
				if (task.text === ""){
					this.removeTask(task);
				}
>>>>>>> dev
			},

			clearList: function () {
				this.tasks = [

				];
			},

			selectAll: function (task) {
				var targetValue = this.areAllSelected ? false : true;
				for (var i = 0; i < this.tasks.length; i++) {
					this.tasks[i].checked = targetValue;
				}
			},

<<<<<<< HEAD
=======
			check: function (task) {
				task.checked = true;
			},

			isChecked: function (task) {
				return task.checked;
>>>>>>> dev
			}

		}
	});