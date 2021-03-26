function responsive_menu(){
    var e = document.getElementById('menu_small');
    if(e.className === 'list'){
        e.className += "responsive"
    }else{
        e.className = 'list';
    }
}