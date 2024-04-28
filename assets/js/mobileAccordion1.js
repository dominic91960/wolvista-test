function openTab2(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("customtabcontent1");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("customtablink1");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  ///////////

  const accordionItems = document.querySelectorAll('.unique-accordion-item');

  accordionItems.forEach(item => {
      item.addEventListener('click', () => {
          item.classList.toggle('active');
      });
  });