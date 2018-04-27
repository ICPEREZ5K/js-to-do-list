// SHOWS A MESSAGE WHEN THERE ARE NO TASKS IN THE LIST

let taskCounter = 0;

function hasTasks() {
	if (taskCounter < 1) {
		M.toast({html: 'Great Job! You\'ve completed all your tasks.'})
	} else if (taskCounter > 0) {
		M.Toast.dismissAll();
	}
}

function myTasks(operation){
	if (operation == "add"){
		taskCounter += 1;
		hasTasks();
	} else if (operation == "remove"){
		taskCounter -= 1;
		hasTasks();
	}
}

// POPULATES CHECKLIST ON SUBMIT OF INPUT AREA

$('#new_task').on("submit", function(){
	
	let x =
			`<p>
      		<label>
        	<input type="checkbox" class="filled-in"/>
        	<span id="active-task" style='font-size: 1.8em; color: black'>${$('#icon_prefix2')[0].value}</span>
      		</label>
    		</p>`;
	
	event.preventDefault();
	myTasks("add");
	$("#task-list").append(x);
	$('#icon_prefix2')[0].value = "";
})

// ONLOAD EVENTS

window.setTimeout(function(){
	if (taskCounter == 0){
		M.toast({html: 'You can add a new task by using the text field above.', displayLength: 60000});
	}
}, 5000);
