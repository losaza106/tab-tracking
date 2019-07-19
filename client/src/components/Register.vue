<template>
  <div class="hello">
    <h1>Register</h1>

    <input
    type="text"
    name="email"
    v-model="email"
    placeholder="Enter email">

    <input 
    type="text"
    name="password"
    placeholder="Enter password"
    v-model="password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods :{
      async register(){
          const response = await authenticationService.register({
              email:this.email,
              password:this.password
          })
          console.log(response)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
