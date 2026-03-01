function setCSS(fajl) {
  const page_css = document.getElementById("page_css");
  page_css.href = fajl;
}

function setTitle(title) {
  const page_title = document.getElementById("page_title");
  page_title.textContent = title;
}

function loadMenu() {
  setCSS("page_MENU.css");
  setTitle("AMŐBA - Menü");

  document.body.innerHTML = `
    <div id="FELSO-RESZ">
        <div id="CIM"><span>AMŐBA</span></div>
        <div id="ALCIM"><span>Menü</span></div>
    </div>
    <div id="ALSO-RESZ">
        <div id="JATEK"><span>Játék</span></div>
        <div id="KILEPES"><span>Kilépés</span></div>
    </div>
    `;

  document.getElementById("JATEK").addEventListener("click", function () {
    loadJatek();
  });

  document.getElementById("KILEPES").addEventListener("click", function () {
    window.location.href = "https://www.google.com";
  });
}

function loadJatek() {
  setCSS("page_JATEK.css");
  setTitle("AMŐBA - Játék");

  document.body.innerHTML = `
    <div id="FELSO-RESZ">
        <div id="CIM"><span>AMŐBA</span></div>
        <div id="ALCIM"><span>Játék</span></div>
    </div>
    <div id="ALSO-RESZ">
        <div id="KLASSZIKUS"><span>Klasszikus</span></div>
        <div id="PAKOLOS"><span>Pakolós</span></div>
        <div id="VISSZA"><span>Vissza</span></div>
    </div>
    `;

  document.getElementById("KLASSZIKUS").addEventListener("click", function () {
    loadKlasszikus();
  });

  document.getElementById("PAKOLOS").addEventListener("click", function () {
    loadPakolos();
  });

  document.getElementById("VISSZA").addEventListener("click", function () {
    loadMenu();
  });
}

function loadKlasszikus() {
  setCSS("page_KLASSZIKUS.css");
  setTitle("AMŐBA - Klasszikus");

  let pontok_x = 0;
  let pontok_o = 0;

  document.body.innerHTML = `
    <div id="FELSO-RESZ">
        <div id="KI_KOVETKEZIK"><span id="KI_KOVETKEZIK_SZOVEG"></span></div>
    </div>

    <div id="KOZEPSO-RESZ">
        <div id="SOR-1">
            <div id="db1" class="doboz"></div>
            <div id="db2" class="doboz"></div>
            <div id="db3" class="doboz"></div>
        </div>
        <div id="SOR-2">
            <div id="db4" class="doboz"></div>
            <div id="db5" class="doboz"></div>
            <div id="db6" class="doboz"></div>
        </div>
        <div id="SOR-3">
            <div id="db7" class="doboz"></div>
            <div id="db8" class="doboz"></div>
            <div id="db9" class="doboz"></div>
        </div>
    </div>

    <div id="ALSO-RESZ">
        <div id="PONTSZAMLALO">
            <span id="PONTSZAMLALO_X"><span style="color: red">X</span> pontjai: <span id="pontok_x_szoveg">${pontok_x}</span></span>
            <span id="PONTSZAMLALO_O"><span style="color: aqua">O</span> pontjai: <span id="pontok_o_szoveg">${pontok_o}</span></span>
            <div id="GYOZTES"></div>
        </div>
        <div id="GOMBOK">
            <div id="KILEPES"><span>Kilépés</span></div>
            <div id="UJRAKEZDES"><span>Újrakezdés</span></div>
        </div>
    </div>
    `;

  const KI_KOVETKEZIK_SZOVEG = document.getElementById("KI_KOVETKEZIK_SZOVEG");

  const db1 = document.getElementById("db1");
  const db2 = document.getElementById("db2");
  const db3 = document.getElementById("db3");
  const db4 = document.getElementById("db4");
  const db5 = document.getElementById("db5");
  const db6 = document.getElementById("db6");
  const db7 = document.getElementById("db7");
  const db8 = document.getElementById("db8");
  const db9 = document.getElementById("db9");

  const GYOZTES = document.getElementById("GYOZTES");

  const KILEPES = document.getElementById("KILEPES");
  const UJRAKEZDES = document.getElementById("UJRAKEZDES");

  const szimbolum_x = "X";
  const szimbolum_o = "O";

  const pontok_x_szoveg = document.getElementById("pontok_x_szoveg");
  const pontok_o_szoveg = document.getElementById("pontok_o_szoveg");

  let jatekVege = false;

  let szimbolum = szimbolum_x;

  KI_KOVETKEZIK_SZOVEG.textContent = `${szimbolum} következik`;
  KI_KOVETKEZIK_SZOVEG.style.color = "red";

  function checkSzimbolum() {
    if (szimbolum === szimbolum_x) {
      szimbolum = szimbolum_o;
      KI_KOVETKEZIK_SZOVEG.style.color = "aqua";
    } else {
      szimbolum = szimbolum_x;
      KI_KOVETKEZIK_SZOVEG.style.color = "red";
    }
    KI_KOVETKEZIK_SZOVEG.textContent = `${szimbolum} következik`;
  }

  function checkWin() {
    // 1. SOR
    if (
      db1.textContent === szimbolum_x &&
      db2.textContent === szimbolum_x &&
      db3.textContent === szimbolum_x
    ) {
      GYOZTES.textContent = `${szimbolum_x} a nyertes!`;
      jatekVege = true;
      pontok_x++;
      db1.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db2.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db3.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    } else if (
      db1.textContent === szimbolum_o &&
      db2.textContent === szimbolum_o &&
      db3.textContent === szimbolum_o
    ) {
      GYOZTES.textContent = `${szimbolum_o} a nyertes!`;
      jatekVege = true;
      pontok_o++;
      db1.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db2.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db3.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }

    // 2. SOR
    else if (
      db4.textContent === szimbolum_x &&
      db5.textContent === szimbolum_x &&
      db6.textContent === szimbolum_x
    ) {
      GYOZTES.textContent = `${szimbolum_x} a nyertes!`;
      jatekVege = true;
      pontok_x++;
      db4.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db5.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db6.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    } else if (
      db4.textContent === szimbolum_o &&
      db5.textContent === szimbolum_o &&
      db6.textContent === szimbolum_o
    ) {
      GYOZTES.textContent = `${szimbolum_o} a nyertes!`;
      jatekVege = true;
      pontok_o++;
      db4.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db5.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db6.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }

    // 3. SOR
    else if (
      db7.textContent === szimbolum_x &&
      db8.textContent === szimbolum_x &&
      db9.textContent === szimbolum_x
    ) {
      GYOZTES.textContent = `${szimbolum_x} a nyertes!`;
      jatekVege = true;
      pontok_x++;
      db7.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db8.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db9.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    } else if (
      db7.textContent === szimbolum_o &&
      db8.textContent === szimbolum_o &&
      db9.textContent === szimbolum_o
    ) {
      GYOZTES.textContent = `${szimbolum_o} a nyertes!`;
      jatekVege = true;
      pontok_o++;
      db7.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db8.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db9.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }

    // 1. OSZLOP
    else if (
      db1.textContent === szimbolum_x &&
      db4.textContent === szimbolum_x &&
      db7.textContent === szimbolum_x
    ) {
      GYOZTES.textContent = `${szimbolum_x} a nyertes!`;
      jatekVege = true;
      pontok_x++;
      db1.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db4.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db7.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    } else if (
      db1.textContent === szimbolum_o &&
      db4.textContent === szimbolum_o &&
      db7.textContent === szimbolum_o
    ) {
      GYOZTES.textContent = `${szimbolum_o} a nyertes!`;
      jatekVege = true;
      pontok_o++;
      db1.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db4.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db7.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }

    // 2. OSZLOP
    else if (
      db2.textContent === szimbolum_x &&
      db5.textContent === szimbolum_x &&
      db8.textContent === szimbolum_x
    ) {
      GYOZTES.textContent = `${szimbolum_x} a nyertes!`;
      jatekVege = true;
      pontok_x++;
      db2.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db5.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db8.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    } else if (
      db2.textContent === szimbolum_o &&
      db5.textContent === szimbolum_o &&
      db8.textContent === szimbolum_o
    ) {
      GYOZTES.textContent = `${szimbolum_o} a nyertes!`;
      jatekVege = true;
      pontok_o++;
      db2.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db5.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db8.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }

    // 3. OSZLOP
    else if (
      db3.textContent === szimbolum_x &&
      db6.textContent === szimbolum_x &&
      db9.textContent === szimbolum_x
    ) {
      GYOZTES.textContent = `${szimbolum_x} a nyertes!`;
      jatekVege = true;
      pontok_x++;
    } else if (
      db3.textContent === szimbolum_o &&
      db6.textContent === szimbolum_o &&
      db9.textContent === szimbolum_o
    ) {
      GYOZTES.textContent = `${szimbolum_o} a nyertes!`;
      jatekVege = true;
      pontok_o++;
      db3.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db6.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db9.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }

    // 1. KERESZTBE
    else if (
      db1.textContent === szimbolum_x &&
      db5.textContent === szimbolum_x &&
      db9.textContent === szimbolum_x
    ) {
      GYOZTES.textContent = `${szimbolum_x} a nyertes!`;
      jatekVege = true;
      pontok_x++;
      db1.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db5.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db9.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    } else if (
      db1.textContent === szimbolum_o &&
      db5.textContent === szimbolum_o &&
      db9.textContent === szimbolum_o
    ) {
      GYOZTES.textContent = `${szimbolum_o} a nyertes!`;
      jatekVege = true;
      pontok_o++;
      db1.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db5.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db9.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }

    // 2. KERESZTBE
    else if (
      db3.textContent === szimbolum_x &&
      db5.textContent === szimbolum_x &&
      db7.textContent === szimbolum_x
    ) {
      GYOZTES.textContent = `${szimbolum_x} a nyertes!`;
      jatekVege = true;
      pontok_x++;
      db3.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db5.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db7.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    } else if (
      db3.textContent === szimbolum_o &&
      db5.textContent === szimbolum_o &&
      db7.textContent === szimbolum_o
    ) {
      GYOZTES.textContent = `${szimbolum_o} a nyertes!`;
      jatekVege = true;
      pontok_o++;
      db3.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db5.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db7.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }

    // DÖNTETLEN ESETÉN
    else if (
      (db1.textContent === szimbolum_x || db1.textContent === szimbolum_o) &&
      (db2.textContent === szimbolum_x || db2.textContent === szimbolum_o) &&
      (db3.textContent === szimbolum_x || db3.textContent === szimbolum_o) &&
      (db4.textContent === szimbolum_x || db4.textContent === szimbolum_o) &&
      (db5.textContent === szimbolum_x || db5.textContent === szimbolum_o) &&
      (db6.textContent === szimbolum_x || db6.textContent === szimbolum_o) &&
      (db7.textContent === szimbolum_x || db7.textContent === szimbolum_o) &&
      (db8.textContent === szimbolum_x || db8.textContent === szimbolum_o) &&
      (db9.textContent === szimbolum_x || db9.textContent === szimbolum_o)
    ) {
      GYOZTES.textContent = "DÖNTETLEN lett!";
      jatekVege = true;
    }

    if (jatekVege === true) {
      db1.style.cursor = "default";
      db2.style.cursor = "default";
      db3.style.cursor = "default";
      db4.style.cursor = "default";
      db5.style.cursor = "default";
      db6.style.cursor = "default";
      db7.style.cursor = "default";
      db8.style.cursor = "default";
      db9.style.cursor = "default";
      UJRAKEZDES.style.visibility = "visible";
    }
    checkPontok();
  }

  function checkPontok() {
    if (pontok_x > 0) {
      pontok_x_szoveg.textContent = `${pontok_x}`;
    }
    if (pontok_o > 0) {
      pontok_o_szoveg.textContent = `${pontok_o}`;
    }
  }

  db1.addEventListener("click", function () {
    if (db1.textContent === "" && jatekVege === false) {
      db1.textContent = szimbolum;
      checkSzimbolum();
      checkWin();
      db1.style.cursor = "default";

      if (db1.textContent === szimbolum_x) {
        db1.style.color = "red";
      } else if (db1.textContent === szimbolum_o) {
        db1.style.color = "aqua";
      }
    }
  });

  db2.addEventListener("click", function () {
    if (db2.textContent === "" && jatekVege === false) {
      db2.textContent = szimbolum;
      checkSzimbolum();
      checkWin();
      db2.style.cursor = "default";

      if (db2.textContent === szimbolum_x) {
        db2.style.color = "red";
      } else if (db2.textContent === szimbolum_o) {
        db2.style.color = "aqua";
      }
    }
  });

  db3.addEventListener("click", function () {
    if (db3.textContent === "" && jatekVege === false) {
      db3.textContent = szimbolum;
      checkSzimbolum();
      checkWin();
      db3.style.cursor = "default";

      if (db3.textContent === szimbolum_x) {
        db3.style.color = "red";
      } else if (db3.textContent === szimbolum_o) {
        db3.style.color = "aqua";
      }
    }
  });

  db4.addEventListener("click", function () {
    if (db4.textContent === "" && jatekVege === false) {
      db4.textContent = szimbolum;
      checkSzimbolum();
      checkWin();
      db4.style.cursor = "default";

      if (db4.textContent === szimbolum_x) {
        db4.style.color = "red";
      } else if (db4.textContent === szimbolum_o) {
        db4.style.color = "aqua";
      }
    }
  });

  db5.addEventListener("click", function () {
    if (db5.textContent === "" && jatekVege === false) {
      db5.textContent = szimbolum;
      checkSzimbolum();
      checkWin();
      db5.style.cursor = "default";

      if (db5.textContent === szimbolum_x) {
        db5.style.color = "red";
      } else if (db5.textContent === szimbolum_o) {
        db5.style.color = "aqua";
      }
    }
  });

  db6.addEventListener("click", function () {
    if (db6.textContent === "" && jatekVege === false) {
      db6.textContent = szimbolum;
      checkSzimbolum();
      checkWin();
      db6.style.cursor = "default";

      if (db6.textContent === szimbolum_x) {
        db6.style.color = "red";
      } else if (db6.textContent === szimbolum_o) {
        db6.style.color = "aqua";
      }
    }
  });

  db7.addEventListener("click", function () {
    if (db7.textContent === "" && jatekVege === false) {
      db7.textContent = szimbolum;
      checkSzimbolum();
      checkWin();
      db7.style.cursor = "default";

      if (db7.textContent === szimbolum_x) {
        db7.style.color = "red";
      } else if (db7.textContent === szimbolum_o) {
        db7.style.color = "aqua";
      }
    }
  });

  db8.addEventListener("click", function () {
    if (db8.textContent === "" && jatekVege === false) {
      db8.textContent = szimbolum;
      checkSzimbolum();
      checkWin();
      db8.style.cursor = "default";

      if (db8.textContent === szimbolum_x) {
        db8.style.color = "red";
      } else if (db8.textContent === szimbolum_o) {
        db8.style.color = "aqua";
      }
    }
  });

  db9.addEventListener("click", function () {
    if (db9.textContent === "" && jatekVege === false) {
      db9.textContent = szimbolum;
      checkSzimbolum();
      checkWin();
      db9.style.cursor = "default";

      if (db9.textContent === szimbolum_x) {
        db9.style.color = "red";
      } else if (db9.textContent === szimbolum_o) {
        db9.style.color = "aqua";
      }
    }
  });

  KILEPES.addEventListener("click", function () {
    loadJatek();
  });

  UJRAKEZDES.addEventListener("click", function () {
    jatekVege = false;
    db1.textContent = "";
    db2.textContent = "";
    db3.textContent = "";
    db4.textContent = "";
    db5.textContent = "";
    db6.textContent = "";
    db7.textContent = "";
    db8.textContent = "";
    db9.textContent = "";
    db1.style.backgroundColor = "#485460";
    db2.style.backgroundColor = "#485460";
    db3.style.backgroundColor = "#485460";
    db4.style.backgroundColor = "#485460";
    db5.style.backgroundColor = "#485460";
    db6.style.backgroundColor = "#485460";
    db7.style.backgroundColor = "#485460";
    db8.style.backgroundColor = "#485460";
    db9.style.backgroundColor = "#485460";
    db1.style.cursor = "pointer";
    db2.style.cursor = "pointer";
    db3.style.cursor = "pointer";
    db4.style.cursor = "pointer";
    db5.style.cursor = "pointer";
    db6.style.cursor = "pointer";
    db7.style.cursor = "pointer";
    db8.style.cursor = "pointer";
    db9.style.cursor = "pointer";
    GYOZTES.textContent = "";
    UJRAKEZDES.style.visibility = "hidden";
  });
}

function loadPakolos() {
  setCSS("page_PAKOLOS.css");
  setTitle("AMŐBA - Pakolós");

  let pontok_x = 0;
  let pontok_o = 0;

  document.body.innerHTML = `
    <div id="FELSO-RESZ">
        <div id="KI_KOVETKEZIK"><span id="KI_KOVETKEZIK_SZOVEG"></span></div>
    </div>

    <div id="KOZEPSO-RESZ">
        <div id="SOR-1">
            <div id="db1" class="doboz"></div>
            <div id="db2" class="doboz"></div>
            <div id="db3" class="doboz"></div>
        </div>
        <div id="SOR-2">
            <div id="db4" class="doboz"></div>
            <div id="db5" class="doboz"></div>
            <div id="db6" class="doboz"></div>
        </div>
        <div id="SOR-3">
            <div id="db7" class="doboz"></div>
            <div id="db8" class="doboz"></div>
            <div id="db9" class="doboz"></div>
        </div>
    </div>

    <div id="ALSO-RESZ">
        <div id="PONTSZAMLALO"> 
            <span id="PONTSZAMLALO_X"><span style="color: red">X</span> pontjai: <span id="pontok_x_szoveg">${pontok_x}</span></span>
            <span id="PONTSZAMLALO_O"><span style="color: aqua">O</span> pontjai: <span id="pontok_o_szoveg">${pontok_o}</span></span>
            <div id="GYOZTES"></div>
        </div>
        <div id="GOMBOK">
            <div id="KILEPES"><span>Kilépés</span></div>
            <div id="UJRAKEZDES"><span>Újrakezdés</span></div>
        </div>
    </div>
    `;
  const GYOZTES = document.getElementById("GYOZTES");

  const KILEPES = document.getElementById("KILEPES");
  const UJRAKEZDES = document.getElementById("UJRAKEZDES");

  const pontok_x_szoveg = document.getElementById("pontok_x_szoveg");
  const pontok_o_szoveg = document.getElementById("pontok_o_szoveg");

  let jatekVege = false;

  const KI_KOVETKEZIK_SZOVEG = document.getElementById("KI_KOVETKEZIK_SZOVEG");

  KI_KOVETKEZIK_SZOVEG.textContent = `X következik`;
  KI_KOVETKEZIK_SZOVEG.style.color = "red";

  function startsWithX() {
    KI_KOVETKEZIK_SZOVEG.textContent = "X következik";
    KI_KOVETKEZIK_SZOVEG.style.color = "red";
  }

  function startsWithO() {
    KI_KOVETKEZIK_SZOVEG.textContent = "O következik";
    KI_KOVETKEZIK_SZOVEG.style.color = "aqua";
  }

  const x_1 = "X";
  const x_2 = "X ";
  const x_3 = "X  ";
  let last_x = null;

  const o_1 = "O";
  const o_2 = "O ";
  const o_3 = "O  ";
  let last_o = null;

  let ki_kovetkezik = "X";

  const db1 = document.getElementById("db1");
  const db2 = document.getElementById("db2");
  const db3 = document.getElementById("db3");
  const db4 = document.getElementById("db4");
  const db5 = document.getElementById("db5");
  const db6 = document.getElementById("db6");
  const db7 = document.getElementById("db7");
  const db8 = document.getElementById("db8");
  const db9 = document.getElementById("db9");

  function checkWin() {
    // 1. SOR
    if (
      db1.textContent.startsWith("X") &&
      db1.textContent.startsWith("X") === db2.textContent.startsWith("X") &&
      db1.textContent.startsWith("X") === db3.textContent.startsWith("X")
    ) {
      jatekVege = true;
      GYOZTES.textContent = "X a nyertes!";
      pontok_x++;
      db1.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db2.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db3.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    } else if (
      db1.textContent.startsWith("O") &&
      db1.textContent.startsWith("O") === db2.textContent.startsWith("O") &&
      db1.textContent.startsWith("O") === db3.textContent.startsWith("O")
    ) {
      jatekVege = true;
      GYOZTES.textContent = "O a nyertes!";
      pontok_o++;
      db1.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db2.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db3.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }

    // 2. SOR
    if (
      db4.textContent.startsWith("X") &&
      db4.textContent.startsWith("X") === db5.textContent.startsWith("X") &&
      db4.textContent.startsWith("X") === db6.textContent.startsWith("X")
    ) {
      jatekVege = true;
      GYOZTES.textContent = "X a nyertes!";
      pontok_x++;
      db4.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db5.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db6.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    } else if (
      db4.textContent.startsWith("O") &&
      db4.textContent.startsWith("O") === db5.textContent.startsWith("O") &&
      db4.textContent.startsWith("O") === db6.textContent.startsWith("O")
    ) {
      jatekVege = true;
      GYOZTES.textContent = "O a nyertes!";
      pontok_o++;
      db4.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db5.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db6.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }

    // 3. SOR
    if (
      db7.textContent.startsWith("X") &&
      db7.textContent.startsWith("X") === db8.textContent.startsWith("X") &&
      db7.textContent.startsWith("X") === db9.textContent.startsWith("X")
    ) {
      jatekVege = true;
      GYOZTES.textContent = "X a nyertes!";
      pontok_x++;
      db7.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db8.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db9.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    } else if (
      db7.textContent.startsWith("O") &&
      db7.textContent.startsWith("O") === db8.textContent.startsWith("O") &&
      db7.textContent.startsWith("O") === db9.textContent.startsWith("O")
    ) {
      jatekVege = true;
      GYOZTES.textContent = "O a nyertes!";
      pontok_o++;
      db7.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db8.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db9.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }

    // 1. OSZLOP
    if (
      db1.textContent.startsWith("X") &&
      db1.textContent.startsWith("X") === db4.textContent.startsWith("X") &&
      db1.textContent.startsWith("X") === db7.textContent.startsWith("X")
    ) {
      jatekVege = true;
      GYOZTES.textContent = "X a nyertes!";
      pontok_x++;
      db1.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db4.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db7.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    } else if (
      db1.textContent.startsWith("O") &&
      db1.textContent.startsWith("O") === db4.textContent.startsWith("O") &&
      db1.textContent.startsWith("O") === db7.textContent.startsWith("O")
    ) {
      jatekVege = true;
      GYOZTES.textContent = "O a nyertes!";
      pontok_o++;
      db1.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db4.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db7.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }

    // 2. OSZLOP
    if (
      db2.textContent.startsWith("X") &&
      db2.textContent.startsWith("X") === db5.textContent.startsWith("X") &&
      db2.textContent.startsWith("X") === db8.textContent.startsWith("X")
    ) {
      jatekVege = true;
      GYOZTES.textContent = "X a nyertes!";
      pontok_x++;
      db2.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db5.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db8.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    } else if (
      db2.textContent.startsWith("O") &&
      db2.textContent.startsWith("O") === db5.textContent.startsWith("O") &&
      db2.textContent.startsWith("O") === db8.textContent.startsWith("O")
    ) {
      jatekVege = true;
      GYOZTES.textContent = "O a nyertes!";
      pontok_o++;
      db2.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db5.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db8.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }

    // 3. OSZLOP
    if (
      db3.textContent.startsWith("X") &&
      db3.textContent.startsWith("X") === db6.textContent.startsWith("X") &&
      db3.textContent.startsWith("X") === db9.textContent.startsWith("X")
    ) {
      jatekVege = true;
      GYOZTES.textContent = "X a nyertes!";
      pontok_x++;
      db3.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db6.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db9.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }
    if (
      db3.textContent.startsWith("O") &&
      db3.textContent.startsWith("O") === db6.textContent.startsWith("O") &&
      db3.textContent.startsWith("O") === db9.textContent.startsWith("O")
    ) {
      jatekVege = true;
      GYOZTES.textContent = "O a nyertes!";
      pontok_o++;
      db3.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db6.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db9.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }

    // 1. KERESZT
    if (
      db1.textContent.startsWith("X") &&
      db1.textContent.startsWith("X") === db5.textContent.startsWith("X") &&
      db1.textContent.startsWith("X") === db9.textContent.startsWith("X")
    ) {
      jatekVege = true;
      GYOZTES.textContent = "X a nyertes!";
      pontok_x++;
      db1.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db5.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db9.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    } else if (
      db1.textContent.startsWith("O") &&
      db1.textContent.startsWith("O") === db5.textContent.startsWith("O") &&
      db1.textContent.startsWith("O") === db9.textContent.startsWith("O")
    ) {
      jatekVege = true;
      GYOZTES.textContent = "O a nyertes!";
      pontok_o++;
      db1.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db5.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db9.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }

    // 2. KERESZT
    if (
      db3.textContent.startsWith("X") &&
      db3.textContent.startsWith("X") === db5.textContent.startsWith("X") &&
      db3.textContent.startsWith("X") === db7.textContent.startsWith("X")
    ) {
      jatekVege = true;
      GYOZTES.textContent = "X a nyertes!";
      pontok_x++;
      db3.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db5.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db7.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    } else if (
      db3.textContent.startsWith("O") &&
      db3.textContent.startsWith("O") === db5.textContent.startsWith("O") &&
      db3.textContent.startsWith("O") === db7.textContent.startsWith("O")
    ) {
      jatekVege = true;
      GYOZTES.textContent = "O a nyertes!";
      pontok_o++;
      db3.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db5.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
      db7.style.backgroundColor = "rgba(59, 224, 81, 0.5)";
    }

    if (jatekVege === true) {
      db1.style.cursor = "default";
      db2.style.cursor = "default";
      db3.style.cursor = "default";
      db4.style.cursor = "default";
      db5.style.cursor = "default";
      db6.style.cursor = "default";
      db7.style.cursor = "default";
      db8.style.cursor = "default";
      db9.style.cursor = "default";
      UJRAKEZDES.style.visibility = "visible";
    }
    checkPontok();
  }

  function checkPontok() {
    if (pontok_x > 0) {
      pontok_x_szoveg.textContent = `${pontok_x}`;
    }
    if (pontok_o > 0) {
      pontok_o_szoveg.textContent = `${pontok_o}`;
    }
  }

  function checkPlacedX() {
    if (db1.textContent === x_1 && last_x === x_3) {
      db1.textContent = "";
    } else if (db2.textContent === x_1 && last_x === x_3) {
      db2.textContent = "";
    } else if (db3.textContent === x_1 && last_x === x_3) {
      db3.textContent = "";
    } else if (db4.textContent === x_1 && last_x === x_3) {
      db4.textContent = "";
    } else if (db5.textContent === x_1 && last_x === x_3) {
      db5.textContent = "";
    } else if (db6.textContent === x_1 && last_x === x_3) {
      db6.textContent = "";
    } else if (db7.textContent === x_1 && last_x === x_3) {
      db7.textContent = "";
    } else if (db8.textContent === x_1 && last_x === x_3) {
      db8.textContent = "";
    } else if (db9.textContent === x_1 && last_x === x_3) {
      db9.textContent = "";
    } else if (db1.textContent === x_2 && last_x === x_1) {
      db1.textContent = "";
    } else if (db2.textContent === x_2 && last_x === x_1) {
      db2.textContent = "";
    } else if (db3.textContent === x_2 && last_x === x_1) {
      db3.textContent = "";
    } else if (db4.textContent === x_2 && last_x === x_1) {
      db4.textContent = "";
    } else if (db5.textContent === x_2 && last_x === x_1) {
      db5.textContent = "";
    } else if (db6.textContent === x_2 && last_x === x_1) {
      db6.textContent = "";
    } else if (db7.textContent === x_2 && last_x === x_1) {
      db7.textContent = "";
    } else if (db8.textContent === x_2 && last_x === x_1) {
      db8.textContent = "";
    } else if (db9.textContent === x_2 && last_x === x_1) {
      db9.textContent = "";
    } else if (db1.textContent === x_3 && last_x === x_2) {
      db1.textContent = "";
    } else if (db2.textContent === x_3 && last_x === x_2) {
      db2.textContent = "";
    } else if (db3.textContent === x_3 && last_x === x_2) {
      db3.textContent = "";
    } else if (db4.textContent === x_3 && last_x === x_2) {
      db4.textContent = "";
    } else if (db5.textContent === x_3 && last_x === x_2) {
      db5.textContent = "";
    } else if (db6.textContent === x_3 && last_x === x_2) {
      db6.textContent = "";
    } else if (db7.textContent === x_3 && last_x === x_2) {
      db7.textContent = "";
    } else if (db8.textContent === x_3 && last_x === x_2) {
      db8.textContent = "";
    } else if (db9.textContent === x_3 && last_x === x_2) {
      db9.textContent = "";
    }
  }

  function checkPlacedO() {
    // O-k csekkelése
    if (db1.textContent === o_1 && last_o === o_3) {
      db1.textContent = "";
    } else if (db2.textContent === o_1 && last_o === o_3) {
      db2.textContent = "";
    } else if (db3.textContent === o_1 && last_o === o_3) {
      db3.textContent = "";
    } else if (db4.textContent === o_1 && last_o === o_3) {
      db4.textContent = "";
    } else if (db5.textContent === o_1 && last_o === o_3) {
      db5.textContent = "";
    } else if (db6.textContent === o_1 && last_o === o_3) {
      db6.textContent = "";
    } else if (db7.textContent === o_1 && last_o === o_3) {
      db7.textContent = "";
    } else if (db8.textContent === o_1 && last_o === o_3) {
      db8.textContent = "";
    } else if (db9.textContent === o_1 && last_o === o_3) {
      db9.textContent = "";
    } else if (db1.textContent === o_2 && last_o === o_1) {
      db1.textContent = "";
    } else if (db2.textContent === o_2 && last_o === o_1) {
      db2.textContent = "";
    } else if (db3.textContent === o_2 && last_o === o_1) {
      db3.textContent = "";
    } else if (db4.textContent === o_2 && last_o === o_1) {
      db4.textContent = "";
    } else if (db5.textContent === o_2 && last_o === o_1) {
      db5.textContent = "";
    } else if (db6.textContent === o_2 && last_o === o_1) {
      db6.textContent = "";
    } else if (db7.textContent === o_2 && last_o === o_1) {
      db7.textContent = "";
    } else if (db8.textContent === o_2 && last_o === o_1) {
      db8.textContent = "";
    } else if (db9.textContent === o_2 && last_o === o_1) {
      db9.textContent = "";
    } else if (db1.textContent === o_3 && last_o === o_2) {
      db1.textContent = "";
    } else if (db2.textContent === o_3 && last_o === o_2) {
      db2.textContent = "";
    } else if (db3.textContent === o_3 && last_o === o_2) {
      db3.textContent = "";
    } else if (db4.textContent === o_3 && last_o === o_2) {
      db4.textContent = "";
    } else if (db5.textContent === o_3 && last_o === o_2) {
      db5.textContent = "";
    } else if (db6.textContent === o_3 && last_o === o_2) {
      db6.textContent = "";
    } else if (db7.textContent === o_3 && last_o === o_2) {
      db7.textContent = "";
    } else if (db8.textContent === o_3 && last_o === o_2) {
      db8.textContent = "";
    } else if (db9.textContent === o_3 && last_o === o_2) {
      db9.textContent = "";
    }
  }

  db1.addEventListener("click", function () {
    if (jatekVege === false) {
      if (db1.textContent === "" && last_x === null && ki_kovetkezik === "X") {
        checkPlacedX();
        last_x = x_1;
        db1.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db1.textContent === "" &&
        last_x === x_1 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_2;
        db1.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db1.textContent === "" &&
        last_x === x_2 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_3;
        db1.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db1.textContent === "" &&
        last_x === x_3 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_1;
        db1.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db1.textContent === "" &&
        last_o === null &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db1.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db1.textContent === "" &&
        last_o === o_1 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_2;
        db1.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db1.textContent === "" &&
        last_o === o_2 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_3;
        db1.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db1.textContent === "" &&
        last_o === o_3 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db1.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      }
      if (db1.textContent.startsWith("X")) {
        db1.style.color = "red";
      } else if (db1.textContent.startsWith("O")) {
        db1.style.color = "aqua";
      }
      checkWin();
    }
  });

  db2.addEventListener("click", function () {
    if (jatekVege === false) {
      if (db2.textContent === "" && last_x === null && ki_kovetkezik === "X") {
        checkPlacedX();
        last_x = x_1;
        db2.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db2.textContent === "" &&
        last_x === x_1 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_2;
        db2.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db2.textContent === "" &&
        last_x === x_2 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_3;
        db2.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db2.textContent === "" &&
        last_x === x_3 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_1;
        db2.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db2.textContent === "" &&
        last_o === null &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db2.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db2.textContent === "" &&
        last_o === o_1 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_2;
        db2.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db2.textContent === "" &&
        last_o === o_2 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_3;
        db2.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db2.textContent === "" &&
        last_o === o_3 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db2.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      }
      if (db2.textContent.startsWith("X")) {
        db2.style.color = "red";
      } else if (db2.textContent.startsWith("O")) {
        db2.style.color = "aqua";
      }
      checkWin();
    }
  });

  db3.addEventListener("click", function () {
    if (jatekVege === false) {
      if (db3.textContent === "" && last_x === null && ki_kovetkezik === "X") {
        checkPlacedX();
        last_x = x_1;
        db3.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db3.textContent === "" &&
        last_x === x_1 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_2;
        db3.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db3.textContent === "" &&
        last_x === x_2 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_3;
        db3.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db3.textContent === "" &&
        last_x === x_3 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_1;
        db3.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db3.textContent === "" &&
        last_o === null &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db3.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db3.textContent === "" &&
        last_o === o_1 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_2;
        db3.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db3.textContent === "" &&
        last_o === o_2 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_3;
        db3.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db3.textContent === "" &&
        last_o === o_3 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db3.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      }
      if (db3.textContent.startsWith("X")) {
        db3.style.color = "red";
      } else if (db3.textContent.startsWith("O")) {
        db3.style.color = "aqua";
      }
      checkWin();
    }
  });

  db4.addEventListener("click", function () {
    if (jatekVege === false) {
      if (db4.textContent === "" && last_x === null && ki_kovetkezik === "X") {
        checkPlacedX();
        last_x = x_1;
        db4.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db4.textContent === "" &&
        last_x === x_1 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_2;
        db4.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db4.textContent === "" &&
        last_x === x_2 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_3;
        db4.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db4.textContent === "" &&
        last_x === x_3 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_1;
        db4.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db4.textContent === "" &&
        last_o === null &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db4.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db4.textContent === "" &&
        last_o === o_1 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_2;
        db4.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db4.textContent === "" &&
        last_o === o_2 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_3;
        db4.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db4.textContent === "" &&
        last_o === o_3 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db4.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      }
      if (db4.textContent.startsWith("X")) {
        db4.style.color = "red";
      } else if (db4.textContent.startsWith("O")) {
        db4.style.color = "aqua";
      }
      checkWin();
    }
  });

  db5.addEventListener("click", function () {
    if (jatekVege === false) {
      if (db5.textContent === "" && last_x === null && ki_kovetkezik === "X") {
        checkPlacedX();
        last_x = x_1;
        db5.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db5.textContent === "" &&
        last_x === x_1 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_2;
        db5.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db5.textContent === "" &&
        last_x === x_2 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_3;
        db5.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db5.textContent === "" &&
        last_x === x_3 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_1;
        db5.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db5.textContent === "" &&
        last_o === null &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db5.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db5.textContent === "" &&
        last_o === o_1 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_2;
        db5.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db5.textContent === "" &&
        last_o === o_2 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_3;
        db5.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db5.textContent === "" &&
        last_o === o_3 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db5.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      }
      if (db5.textContent.startsWith("X")) {
        db5.style.color = "red";
      } else if (db5.textContent.startsWith("O")) {
        db5.style.color = "aqua";
      }
      checkWin();
    }
  });

  db6.addEventListener("click", function () {
    if (jatekVege === false) {
      if (db6.textContent === "" && last_x === null && ki_kovetkezik === "X") {
        checkPlacedX();
        last_x = x_1;
        db6.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db6.textContent === "" &&
        last_x === x_1 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_2;
        db6.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db6.textContent === "" &&
        last_x === x_2 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_3;
        db6.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db6.textContent === "" &&
        last_x === x_3 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_1;
        db6.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db6.textContent === "" &&
        last_o === null &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db6.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db6.textContent === "" &&
        last_o === o_1 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_2;
        db6.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db6.textContent === "" &&
        last_o === o_2 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_3;
        db6.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db6.textContent === "" &&
        last_o === o_3 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db6.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      }
      if (db6.textContent.startsWith("X")) {
        db6.style.color = "red";
      } else if (db6) {
        db6.style.color = "aqua";
      }
      checkWin();
    }
  });

  db7.addEventListener("click", function () {
    if (jatekVege === false) {
      if (db7.textContent === "" && last_x === null && ki_kovetkezik === "X") {
        checkPlacedX();
        last_x = x_1;
        db7.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db7.textContent === "" &&
        last_x === x_1 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_2;
        db7.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db7.textContent === "" &&
        last_x === x_2 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_3;
        db7.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db7.textContent === "" &&
        last_x === x_3 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_1;
        db7.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db7.textContent === "" &&
        last_o === null &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db7.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db7.textContent === "" &&
        last_o === o_1 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_2;
        db7.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db7.textContent === "" &&
        last_o === o_2 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_3;
        db7.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db7.textContent === "" &&
        last_o === o_3 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db7.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      }
      if (db7.textContent.startsWith("X")) {
        db7.style.color = "red";
      } else if (db7.textContent.startsWith("O")) {
        db7.style.color = "aqua";
      }
      checkWin();
    }
  });

  db8.addEventListener("click", function () {
    if (jatekVege === false) {
      if (db8.textContent === "" && last_x === null && ki_kovetkezik === "X") {
        checkPlacedX();
        last_x = x_1;
        db8.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db8.textContent === "" &&
        last_x === x_1 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_2;
        db8.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db8.textContent === "" &&
        last_x === x_2 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_3;
        db8.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db8.textContent === "" &&
        last_x === x_3 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_1;
        db8.textContent = last_x;
        ki_kovetkezik = "O";
        startsWithO();
      } else if (
        db8.textContent === "" &&
        last_o === null &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db8.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db8.textContent === "" &&
        last_o === o_1 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_2;
        db8.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db8.textContent === "" &&
        last_o === o_2 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_3;
        db8.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      } else if (
        db8.textContent === "" &&
        last_o === o_3 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db8.textContent = last_o;
        ki_kovetkezik = "X";
        startsWithX();
      }
      if (db8.textContent.startsWith("X")) {
        db8.style.color = "red";
      } else if (db8.textContent.startsWith("O")) {
        db8.style.color = "aqua";
      }
      checkWin();
    }
  });

  db9.addEventListener("click", function () {
    if (jatekVege === false) {
      if (db9.textContent === "" && last_x === null && ki_kovetkezik === "X") {
        checkPlacedX();
        last_x = x_1;
        db9.textContent = last_x;
        ki_kovetkezik = "O";
      } else if (
        db9.textContent === "" &&
        last_x === x_1 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_2;
        db9.textContent = last_x;
        ki_kovetkezik = "O";
      } else if (
        db9.textContent === "" &&
        last_x === x_2 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_3;
        db9.textContent = last_x;
        ki_kovetkezik = "O";
      } else if (
        db9.textContent === "" &&
        last_x === x_3 &&
        ki_kovetkezik === "X"
      ) {
        checkPlacedX();
        last_x = x_1;
        db9.textContent = last_x;
        ki_kovetkezik = "O";
      } else if (
        db9.textContent === "" &&
        last_o === null &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db9.textContent = last_o;
        ki_kovetkezik = "X";
      } else if (
        db9.textContent === "" &&
        last_o === o_1 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_2;
        db9.textContent = last_o;
        ki_kovetkezik = "X";
      } else if (
        db9.textContent === "" &&
        last_o === o_2 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_3;
        db9.textContent = last_o;
        ki_kovetkezik = "X";
      } else if (
        db9.textContent === "" &&
        last_o === o_3 &&
        ki_kovetkezik === "O"
      ) {
        checkPlacedO();
        last_o = o_1;
        db9.textContent = last_o;
        ki_kovetkezik = "X";
      }
      if (db9.textContent.startsWith("X")) {
        db9.style.color = "red";
      } else if (db9.textContent.startsWith("O")) {
        db9.style.color = "aqua";
      }
      checkWin();
    }
  });

  KILEPES.addEventListener("click", function () {
    loadJatek();
  });

  UJRAKEZDES.addEventListener("click", function () {
    jatekVege = false;
    db1.textContent = "";
    db2.textContent = "";
    db3.textContent = "";
    db4.textContent = "";
    db5.textContent = "";
    db6.textContent = "";
    db7.textContent = "";
    db8.textContent = "";
    db9.textContent = "";
    db1.style.backgroundColor = "#485460";
    db2.style.backgroundColor = "#485460";
    db3.style.backgroundColor = "#485460";
    db4.style.backgroundColor = "#485460";
    db5.style.backgroundColor = "#485460";
    db6.style.backgroundColor = "#485460";
    db7.style.backgroundColor = "#485460";
    db8.style.backgroundColor = "#485460";
    db9.style.backgroundColor = "#485460";
    db1.style.cursor = "pointer";
    db2.style.cursor = "pointer";
    db3.style.cursor = "pointer";
    db4.style.cursor = "pointer";
    db5.style.cursor = "pointer";
    db6.style.cursor = "pointer";
    db7.style.cursor = "pointer";
    db8.style.cursor = "pointer";
    db9.style.cursor = "pointer";
    GYOZTES.textContent = "";
    UJRAKEZDES.style.visibility = "hidden";
    last_x = null;
    last_o = null;
  });
}

loadMenu();
