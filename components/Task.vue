<template>
  <div class="task">
    <div class="task__title">
      {{ task.title }}
      <img 
        v-if="this.edit"
        class="edit-done"
        src="~assets/images/edit2.png"
        @click="submitEdit"
      >
      <img 
        v-else
        src="~assets/images/edit.png"
        @click="toggleEdit"
      >
    </div>
    <div 
      :class="`task__content ${ task.done ? 'is-complete' : ''}`"
      @dblclick="toggleEdit"
    >
      {{ task.task }}
      <textarea 
        :class="`edit-area ${ this.edit ? 'edit' : ''}`"
        v-model="newContent"
        cols="20" 
        rows="3"
        autofocus 
        maxlength="20"
        minlength="1"
        draggable="false"
        @keydown.enter="submitEdit"
      />
      <p> By {{ task.author }} </p>
      <div class="task__buttons">
        <img 
          src="~assets/images/done.png" 
          @click="toggleDone"
        >
        <img 
          src="~assets/images/delete.png" 
          class="delete"
          @click="removeTask"
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      edit: false,
      newContent: '',
    }
  },
  props: ['task'],
  methods: {
    toggleDone() {
      this.$store.commit('TOGGLE_TASK', this.task);
    },
    removeTask() {
      this.$store.commit('REMOVE_TASK', this.task);
    },
    toggleEdit() {
      this.edit = !this.edit
    },
    submitEdit() {
      this.edit = !this.edit
      // console.log(this.newContent);
      const newContent = this.newContent
      const task = this.task
      const data = { newContent, task}
      this.$store.commit('EDIT_TASK', data );
    },
  },
}
</script>
<style lang="scss">
  .task {
    width: 250px;
    margin: 5% 5% 0 0;
    &__title {
      position: relative;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: #69231B;
      border-radius: 20px 0 0 0;
      img {
        position: absolute;
        top: 5%;
        right: 0;
        height: 95%;
      }
      .edit-done {
        top: 25%;
        right: 3%;
        height: 60%;
      }
    }
    &__content {
      position: relative;
      height: 120px;
      padding: 5% 2%;
      background: #fff;
      border-radius: 0 0 0 20px;
      p {
        position: absolute;
        left: 5%;
        bottom: 7%;
        color: gray;
      }
      .edit-area {
        display: none;
        resize: none;
      }
      .edit-area.edit {
        display: block;
        position: absolute;
        top: 10%;
        right: 3%;
      }
    }
    .is-complete {
      text-decoration: line-through;
    }
    &__buttons {
      position: absolute;
      bottom: 0;
      right: -10%;
      img {
        width: 25%;
      }
    }
  }
</style>