(function (){
	"use strict";

	const markAll = document.getElementById("mark-all");
	const checkboxes = document.getElementsByClassName("checkbox");
	const li = document.getElementsByTagName("li");
	var cachedValue;

	new Vue({
		
		el: "#todo",
		
		data: {
			newTask: "",
			tasks: [
				{
					text: "This is an example task. Delete or add your own"
				}
			]
		},
		
		methods: {

			addTask: function () {
				var task = this.newTask.trim();
				if (task) {
					this.tasks.push({text: task});
					this.newTask = "";
					markAll.checked = false;
				}
			},

			removeTask: function (index) {
				this.tasks.splice(index, 1);
			},

			editTask: function (e) {
				const input = e.target.previousElementSibling;
				const value = e.target.innerHTML;
				cachedValue = value;
				input.value = value;
				input.classList.remove("hidden");
				input.focus();
			},

			saveTask: function (e) {
				const input = e.originalTarget;
				const label = input.nextElementSibling;
				if (input.value === "") {
					input.value = cachedValue;
					label.innerHTML = cachedValue;
				}
				label.innerHTML = input.value;
				input.blur();
				input.classList.add("hidden");
			},

			clearList: function () {
				this.tasks = [

				];
				markAll.checked = false;
			},

			selectAll: function () {
				for (var i = 0; i < checkboxes.length; i++) {
					checkboxes[i].checked = markAll.checked;
					markAll.checked ? li[i].classList.add("done") : li[i].classList.remove("done");
				}
			},

			check: function (e) {
				e.target.parentElement.classList.toggle("done");
				for (var i = 0; i < checkboxes.length; i++) {
					
					if (checkboxes[i].checked === true) {
						markAll.checked = true;
					} else {
						markAll.checked = false;
						break;
					}
				}
			}

		}
	});
})();