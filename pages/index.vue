<template>
  <div class="to-do">
    <div class="to-do__title">
      <h1>To-Do List</h1>
    </div>

    <div class="to-do__create-new">
        <input 
          type="text"
          v-model="title"
          placeholder="Title" />
          <div class="input-wrapper">
             <input 
              type="text"
              v-model="author"
              placeholder="Author" />
            <input 
              type="text"
              v-model="task"
              @keydown.enter="addTask"
              placeholder="New Task" />
          </div>
        <button @click="addTask">Add</button>
        <p :class="`${ this.alert ? 'alert' : ''}`">
          All fields are required
        </p>
    </div>

    <div class="to-do__tasks">
      <Task
        v-for="(task, i) in $store.state.tasks"
        :key="i"
        :task="task" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      author: '',
      task: '',
      alert: false,
    }
  },
  methods: {
    addTask () {
      if (this.task && this.title && this.author) {
        const title = this.title
        const author = this.author
        const task = this.task
        const data = { title, author, task}
        this.$store.commit('ADD_TASK', data);
        this.title = '';
        this.author = '';
        this.task = '';
        this.alert = false
      } else {
        this.alert = true
      }
    }
  }
}
</script>

<style lang="scss">
.to-do {
  height: 100vh;
  background: #FEBA0F;
  padding: 5% 0;
  padding-bottom: 10%;
  text-align: center;
  &__title {
    font-size: 40px;
  }
  &__create-new {
    position: relative;
    margin: 2% auto;
    width: 35%;
    height: 120px;
    background: linear-gradient(180deg, #DACFCF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #1E53DC 0%, rgba(255, 255, 255, 0) 100%), #12CEEB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    text-align: left;
    padding: 1%;
    padding-top: 2%;
    input {
      width: 60%;
      height: 30px;
      background: #FFE1EE;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }
    button {
      position: absolute;
      width: 25%;
      height: 90px;
      top: 18%;
      right: 5%;
      background: #FF207C;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
    }
    .input-wrapper {
      display: flex;
      margin-top: 20px;
      input {
        width: 28%;
        margin-right: 3%;
      }
    }
    p {
      margin-top: 8px;
      color: #E60000;
      display: none;
    }
    .alert {
      display: block !important;
    }
  }
  @media (max-width: 991.8px) {
    &__create-new {
      width: 75%;
    }
  }
  &__tasks {
    display: flex;
    flex-wrap: wrap;
    margin: 0 15%;
    width: 80vw;
  }
}
</style>
