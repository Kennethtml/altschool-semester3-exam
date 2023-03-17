<script >
//  import RepoList from "./components/ReposList"
export default{
 
  data(){
    return {
      repos:[]
    }
  },
  mounted(){
      fetch(`https://api.github.com/users/kennethtml/repos`)
          .then((res) => res.json())
          .then((data) => this.repos=data)
  }
 
}


</script>
<template>
 <section class="repos-container">
    <div class="repos">
      <li class="repo" v-for="repo in repos" :key="repo.name">
        <router-link :to="`repos/${repo.name}`">
          <h3 className="name">{{repo.name}}</h3>
          <p className="description">{{repo.description}}</p>
          {/* <p className="description">{{repo.description}}</p> */}
          <p className="language">{{repo.language}}</p>
          </router-link>
        </li>
    </div>

 </section>
</template>
<style scoped>

</style>
