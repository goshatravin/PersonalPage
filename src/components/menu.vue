<template>
  <nav>
      <router-link to="/">About <span>me</span></router-link>
      <router-link to="/portfolio">Port <span class="wrap">folio</span></router-link>
      <router-link to="/contact">Contact <span>me</span></router-link>
  </nav>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: lightgrey;
}
nav{
    display: flex;
    flex-direction: column;
}
nav a{
    padding: 2rem 0;
    color: var(--grey);
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;  
    position: relative;
    z-index: 10000;
}
nav a:nth-child(2){
    display: flex;
    flex-direction: column;
}
nav a:nth-child(2):after{
    width: 2rem;
    height: 2rem;
    background: var(--blue);
    content: "";
    position: absolute;
    opacity: 0.4;
    left: 2rem;
}
nav a:nth-child(1):after{
    width: 2rem;
    height: 2rem;
    background: var(--blue);
    content: "";
    position: absolute;
    opacity: 0.4;
    left: 0.5rem;
}
nav a:nth-child(3):after{
    width: 2rem;
    height: 2rem;
    background: var(--blue);
    content: "";
    position: absolute;
    opacity: 0.4;
    left: 4rem;
}
.wrap{
    padding-left: 2.5rem;
}
</style>
