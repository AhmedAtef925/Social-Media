
/*=========================start te navbar======================*/
var menuItem =document.querySelectorAll(".menu-item");

const removeActive=()=>{
    menuItem.forEach((item)=>{
            item.classList.remove("active");
    })
}
menuItem.forEach((item)=>{
    item.addEventListener("click",()=>{
        removeActive();
        item.classList.add("active");
       if(item.id !="notification"){
            document.getElementById("notification-popul").style.display="none";
        }else{
            document.getElementById("notification-popul").style.display="block";
            document.querySelector("#notification .notification-count").style.display="none";
        }/*
        if(item.id ==="notification"){
            document.getElementById("notification-popul").style.display="block";
            document.querySelector("#notification .notification-count").style.display="none";
        }
    })*/
})
})
/*=========================start te message======================*/
var MessageNotification=document.getElementById("Message-notification"),
    message=document.getElementById("message"),
    notificationCount=document.getElementById("notification-count");

MessageNotification.addEventListener("click",()=>{
    message.style.boxShadow="0 0 1rem var(--color-primary)";
    notificationCount.style.display="none";
    setTimeout(()=>{
        message.style.boxShadow="none";
    },2000)
})
// start message search
var messageSearch=document.getElementById("message-search"),
friendMessage =document.querySelectorAll(".friend-message");

let Search=()=>{
    let val = messageSearch.value.toLowerCase();
    friendMessage.forEach((chat)=>{
          let name=chat.querySelector("h5").textContent.toLowerCase();
          if(name.indexOf(val)!=-1){//مش فاهم السطر ده 
            chat.style.display="flex"; 
          }else{
            chat.style.display="none"
          }
    })
}

messageSearch.addEventListener("keyup",Search)

/*=======================start the feed=====================================*/ 
/*start the like*/ 
var 
    like = document.querySelectorAll(".liked i"),
    noColorLike = document.querySelector(".no-color-like"),
    colorLike = document.querySelector(".color-like"),
    Icomment = document.querySelectorAll(".i-comment"),
    createComment = document.querySelectorAll(".create-comment");


 /*start the like*/ 
 like.forEach( (element) => {
  element.addEventListener("click", () => {

    //طريقه اولي 
    if(this.classList.contains("no-color-like")){
      this.style.display="none";
      colorLike.style.display="block";
    }else{
      this.style.display="none";
      noColorLike.style.display="block";
    }
    
  //طريقه تانيه
  // removeLikeActive()
  // element.classList.toggle("active");

});
}); 
    const removeLikeActive=()=>{
      like.forEach((item)=>{
              item.classList.remove("active");
      })
  }

  
/*start the comment*/ 
Icomment.forEach( (element) => {
    element.addEventListener("click", () => {
    //createComment.focus()
      createComment.forEach((comment)=>{
        comment.focus();
      })
    });
  }); 

/*======================================================================start te Theme Customize======================*/
var customMessage=document.getElementById("custom-message"),
        Theme=document.getElementById("Theme"),
        Close=document.getElementById("close"),

        root=document.querySelector(":root");

   Theme.addEventListener("click",()=>{
    customMessage.style.display="block";
   }) ;    

const closeTheme=(e)=>{
if(e.target.classList.contains("custom-message")){
  customMessage.style.display="none";
}
}
   // close the  Theme 
 Close.addEventListener("click",()=>{
  customMessage.style.display="none";
 })   
/*==============================font size==============================*/
var chooseFont=document.querySelectorAll(".choose-font span");
     
 //remove class active 
  const removeFontActive=()=>{
        chooseFont.forEach((item)=>{
                item.classList.remove("active");
        })
    }

chooseFont.forEach((fonts)=>{
 var fontSize;

 fonts.addEventListener("click",()=>{
  removeFontActive();
  fonts.classList.toggle("active");

  if(fonts.classList.contains("font-size-1")){
    fontSize="10px";
    root.style.setProperty("--stick-top-left","5.4rem");
    root.style.setProperty("--stick-top-right","5.4rem");
  }else if(fonts.classList.contains("font-size-2")){
   fontSize="15px";
   root.style.setProperty("--stick-top-left","5.4rem");
   root.style.setProperty("--stick-top-right","-7rem");
  }else if(fonts.classList.contains("font-size-3")){
   fontSize="20px";
   root.style.setProperty("--stick-top-left","-2rem");
   root.style.setProperty("--stick-top-right","-17rem");
  }else if(fonts.classList.contains("font-size-4")){
   fontSize="25px";
   root.style.setProperty("--stick-top-left","-5rem");
   root.style.setProperty("--stick-top-right","-25rem");
  }else if(fonts.classList.contains("font-size-5")){
   fontSize="30px";
   root.style.setProperty("--stick-top-left","-10rem");
   root.style.setProperty("--stick-top-right","-33rem");
  }
 
 document.querySelector("html").style.fontSize=fontSize
 
 }) 

})

/*==============================Color==============================*/
var chooseColor=document.querySelectorAll(".choose-color span");

//remove class active 
const removeColorActive=()=>{
  chooseColor.forEach((item)=>{
          item.classList.remove("active");
  })
}

chooseColor.forEach((color)=>{
var primaryHug;

color.addEventListener("click",()=>{
removeFontActive();
color.classList.toggle("active");

if(color.classList.contains("color-1")){
  primaryHug=252;

}else if(color.classList.contains("color-2")){
  primaryHug=52

}else if(color.classList.contains("color-3")){
  primaryHug=352

}else if(color.classList.contains("color-4")){
  primaryHug=152

}else if(color.classList.contains("color-5")){
  primaryHug=202

}
root.style.setProperty("--primaryHug",primaryHug);

}) 

})


/*==============================BackGround==============================*/
var chooseBground=document.querySelectorAll(".choose-bg>div");

//remove class active 
const removeBackgroundActive=()=>{
  chooseBground.forEach((item)=>{
          item.classList.remove("active");
  })
}

chooseBground.forEach((ground)=>{
let whiteHug;
let lightHug;
let darkHug;

ground.addEventListener("click",()=>{
removeFontActive();
ground.classList.add("active");

if(ground.classList.contains("bg-1")){
  whiteHug="100%";
  darkHug="17%";
  lightHug="95%"

}else if(ground.classList.contains("bg-2")){
  whiteHug="20%";
  darkHug="95%";
  lightHug="15%"

}else if(ground.classList.contains("bg-3")){
  whiteHug="10%";
  darkHug="95%";
  lightHug="0%"

}
root.style.setProperty("--whiteHug",whiteHug);
root.style.setProperty("--darkHug",darkHug);
root.style.setProperty("--lightHug",lightHug);

//window.location.reload();
}) 

})




