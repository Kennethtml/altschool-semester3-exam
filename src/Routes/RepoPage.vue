<template>
   <main className="selected-repo">
        <div className="btn-wrapper">
            
      <router-link to="/"  class="btn-wrapper" >
        <p> &larr;
            Back</p>
      </router-link>
        </div>
    <h1>{{repo.name}}</h1>
        <p>
          <span>Author: </span>
          {{repo.owner?.login}}
        </p>
        <p className="repo-descripion">
          <span>Description: </span>
          {{repo.description}}
        </p>
         <p className="created">
            <span>created on: </span>
            {{new Date(repo.created_at).toDateString()}}
          </p>
           <p className="size">
            <span>Repo size:</span> {{repo.size}} kb
          </p>

          <div className="stats">
            <div className="stats-fork">
              <p class="forks">forks:</p>
              <span>{{repo.forks_count}}</span>
            </div>
            <div className="stats-star">
              <p class="stars"> stars:</p>
              <span>{{repo.stargazers_count}}</span>
            </div>
          </div>
          <a className="btn" :href="repo.html_url">
            go to repo
          </a>

      </main>
</template>
<script>
export default{
    data(){
        return{
            repo:null
        }
    },
    beforeMount(){
          fetch(
      "https://api.github.com/repos/kennethtml/"+this.$route.params.id 
    )
      .then((data) => data.json())
      .then((res) => this.repo=res)
    }
    
}
</script>
<style scoped>
.forks,.stars{
  font-weight:700;
  display:inline;
  margin-right:5px;
}
</style>