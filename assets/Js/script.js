window.onscroll= function(){ newCategories()}

function newCategories(){
    if(document.documentElement.scrollTop > 200){
        document.getElementById("content4").classList.remove("invisible")
        document.getElementById("content4").classList.add("visible")
        }
        if(document.documentElement.scrollTop > 400){
            document.getElementById("content5").classList.remove("invisible")
            document.getElementById("content5").classList.add("visible")
            }
            if(document.documentElement.scrollTop > 600){
                document.getElementById("content6").classList.remove("invisible")
                document.getElementById("content6").classList.add("visible")
                }  
    
}







