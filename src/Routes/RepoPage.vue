<template>
    <h1>{{ $route.params.id }}</h1>
    <h1>{{repo.name}}</h1>
        <p>
          <span>Author: </span>
          {{repo.owner?.login}}
        </p>
        <p className="repo-descripion">
          <span>Description: </span>
          {{repo.description}}
        </p>

    
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