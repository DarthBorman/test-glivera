'use strict';
window.onload = function() {
    let myCollection = document.getElementsByClassName('dashboard-table-body')[0].getElementsByClassName('dashboard-table-inner-item-6');
    for(let i=0; i<myCollection.length; i++){
        myCollection[i].onclick = function() {
            myCollection[i].classList.toggle('inactive');
            myCollection[i].classList.toggle('active');
        };
    }
    myCollection = document.getElementsByClassName('menu-list')[0].getElementsByClassName('item-with-submenu');
    let currentContent, myStr;
    for(let i=0; i<myCollection.length; i++){
        myCollection[i].onclick = function() {
            currentContent =  myCollection[i].nextElementSibling;
            event.preventDefault();
            myCollection[i].classList.toggle('active');
            if(myCollection[i].classList.contains('active')){
                //myCollection[i].parentNode.style.height = 'auto';
                myCollection[i].nextElementSibling.style.maxHeight = currentContent.scrollHeight + 'px';
            }else{
                //myCollection[i].parentNode.style.height = '64px';
                myCollection[i].nextElementSibling.style.maxHeight = '0px';
            }
        };
    }
};
function ShowHideMobileMenu(){
    event.preventDefault();
    document.getElementById('dad-mobile-btn').classList.toggle('mobile-btn-view-2');
    document.getElementById('menu-list').classList.toggle('show-menu-list');
}
