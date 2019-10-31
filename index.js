function openNav() {
  if (screen.width <= 700) {
    document.getElementById("myNav").style.width = "100%";
    // document.getElementById("cv").style.marginLeft="80%";
    document.getElementById("navi").hidden = true;
  } else {
    document.getElementById("myNav").style.width = "250px";
    document.getElementById("cv").style.paddingLeft = "250px";
    document.getElementById("navi").hidden = true;
  }
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("cv").style.paddingLeft = "0";
  document.getElementById("navi").hidden = false;
}

function navigate() {
  if (screen.width <= 700) {
    closeNav();
  }
}

window.onscroll = function() {
  if (
    document.body.scrollTop > document.getElementById("portfolio").offsetTop ||
    document.documentElement.scrollTop >
      document.getElementById("portfolio").offsetTop
  ) {
    document.getElementById("home").className = "active";
    document.getElementById("res").className = "nonactive";
    document.getElementById("pf").className = "nonactive";
    document.getElementById("ctn").className = "nonactive";
  }
  if (
    document.body.scrollTop > document.getElementById("abt").offsetTop ||
    document.documentElement.scrollTop >
      document.getElementById("abt").offsetTop
  ) {
    document.getElementById("res").className = "active";
    document.getElementById("home").className = "nonactive";
    document.getElementById("pf").className = "nonactive";
    document.getElementById("ctn").className = "nonactive";
  }
  if (
    document.body.scrollTop > document.getElementById("exp").offsetTop ||
    document.documentElement.scrollTop >
      document.getElementById("exp").offsetTop
  ) {
    document.getElementById("pf").className = "active";
    document.getElementById("home").className = "nonactive";
    document.getElementById("res").className = "nonactive";
    document.getElementById("ctn").className = "nonactive";
  }
  if (
    document.body.scrollTop > document.getElementById("lang").offsetTop ||
    document.documentElement.scrollTop >
      document.getElementById("lang").offsetTop
  ) {
    document.getElementById("ctn").className = "active";
    document.getElementById("home").className = "nonactive";
    document.getElementById("res").className = "nonactive";
    document.getElementById("pf").className = "nonactive";
  }
};

function send() {
  let email = document.getElementById("email").value;
  let objet = document.getElementById("objet").value;
  let msg = document.getElementById("msg").value;

  if (!email || !objet || !msg) {
    alert("Veuillez remplir les champs vides");
  } else {
    let content =
      "mailto:dorrakteib1@gmail.com" +
      "?cc=" +
      escape(email) +
      "&subject=" +
      escape(objet) +
      "&body=" +
      escape(msg);
    window.location.href = content;
  }
}
