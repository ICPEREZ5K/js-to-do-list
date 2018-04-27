// SHOWS A MESSAGE WHEN THERE ARE NO TASKS IN THE LIST

let taskCounter = 0;

function hasTasks() {
	if (taskCounter < 1) {
		$('#oops').show();
	} else if (taskCounter > 0) {
		$('#oops').hide();
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
        	<span class="vertical-align" style='font-size: 1.8em; color: black'>${$('#icon_prefix2')[0].value}</span>
      		</label>
    		</p>`;
	
	event.preventDefault();
	myTasks("add");
	$("#task-list").append(x);
	$('#icon_prefix2')[0].value = "";
})

