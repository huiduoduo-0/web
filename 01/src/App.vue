<template>
  <div id="app">
	<div>
		<!-- <button>home</button> -->
		<!-- <button>about</button> -->
		<!-- <a href="http://192.168.3.113:8080/">home</a> &nbsp; 
		<a href="http://192.168.3.113:8080/about">about</a> -->
		
		<!-- <a href="/">home</a> &nbsp;
		<a href="/about">about</a> -->
		
		<!-- <router-link to="/"></router-link>&nbsp; 
		<router-link to="/login"></router-link> -->
		<router-link to="/index"></router-link>

	</div>
  
    <router-view/>
  </div>
</template>

<style lang="scss">
 html, body, #app {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    } 

	a{
		text-decoration:none;
	}
	*{
    margin: 0;
    padding: 0;
    
}
</style>
