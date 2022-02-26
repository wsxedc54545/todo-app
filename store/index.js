export const state = () => ({
	tasks: []
})

export const mutations = {
	ADD_TASK(state, data) {
		state.tasks = [{ title: data.title, author: data.author, task: data.task, done: false }, ...state.tasks];
	},
	REMOVE_TASK(state, task) {
    console.log('rm', state.tasks.indexOf(task));
		state.tasks.splice(state.tasks.indexOf(task), 1);
	},
	TOGGLE_TASK(state, task) {
		task.done = !task.done;
	},
	EDIT_TASK(state, data) {
    // console.log(state.tasks.indexOf(data.task));
    const index = state.tasks.indexOf(data.task)
    // console.log(state.tasks[index].author);
    state.tasks[index].task = data.newContent
    // state.task = { title: data.task.task, author: data.task.author, task: data.newContent, done: data.task.done }
    // .task = data.newContent
		// state.tasks.splice(state.tasks.indexOf(task), 1);
	}
}