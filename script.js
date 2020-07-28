function displayImage(data){
    var imageUrl=data.hdurl;
     var image=document.createElement('img');
     image.className="image-class";
     image.src=imageUrl;
     var container= document.getElementById('container');
     container.appendChild(image);
     document.body.appendChild(container);
}




$.ajax({
    url:'https://api.nasa.gov/planetary/apod',
    method:'GET',
    success: displayImage,
    data:{
        api_key:'eioi2foN9StuIakqhKDmgtm4TGloErTSIwFfsLWL'
    }
});