var posts=["2024/09/26/hello-world/","2024/09/26/ANACONDA/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };