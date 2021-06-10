$(document).ready(function() {

  //burger menu
  document.getElementById('menuMobile').addEventListener('click', function (){
    if (document.getElementById('menu').style.display == 'none') {
      document.getElementById('menu').style.display = 'flex';
    } else {
      document.getElementById('menu').style.display = 'none';
    }
  });

  //select style
  var x, i, j, l, ll, selElmnt, a, b, c;
  x = document.getElementsByClassName("select-wrapper");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
        this.parentNode.classList.toggle("select-wrapper_changed-color");
        this.previousSibling.previousSibling.classList.toggle("select-wrapper__arrow_changed-color");
      });
  }
  function closeAllSelect(elmnt) {
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  document.addEventListener("click", closeAllSelect);

  //rage counter 
  const rangeInputs = document.querySelectorAll('input[type="range"]');

  function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
      target = document.getElementById('range')
    } 

    const min = target.min
    const max = target.max
    const val = target.value
    
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  }

  let func = function(rangeInputs) {
    return input.addEventListener('input', handleInputChange)
  }


  //IE support
  var sBrowser, sUsrAg = navigator.userAgent;
  if ((sUsrAg.indexOf("Trident") > -1) && (document.body.clientWidth < 1090)) {
       sBrowser = "Microsoft Internet Explorer";
       //console.log(sBrowser);
       $(".range-block").css("width","100%");
       $(".range-block").css("margin","auto");
       $(".form__range").css("width","100%");       
      }   
  
});