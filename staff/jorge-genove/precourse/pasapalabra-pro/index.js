var questionsFactory = (letter, answer, status, question) => {
  return {
    letter: letter,
    answer: answer,
    status: status,
    question: question
  };
};

function randomNum(min, max) {
  randomNumber = Math.floor(Math.random() * (max - min)) + min;
}
var rankingProFinal = [];
var totalCount;
var error = 0;
var pregunta;
var preguntaTLC;
var counterOk = 0;
var questions = [
  [
    {
      letter: "a",
      answer: "abducir",
      status: 0,
      question:
        "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"
    },
    questionsFactory(
      "a",
      "arrendajo",
      0,
      "CON LA A. Tipo de pajaro, Mordecay de historias corrientes"
    ),
    questionsFactory(
      "a",
      "armario",
      0,
      "CON LA A. Mueble que sirve para guardar cosas, especialmente ropa"
    )
  ],
  [
    {
      letter: "b",
      answer: "bingo",
      status: 0,
      question:
        "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"
    },
    questionsFactory("b", "barco", 0, "CON LA B. vehiculo maritimo"),
    questionsFactory("b", "barranquilla", 0, "CON lA B. Ciudad colombiana")
  ],
  [
    {
      letter: "c",
      answer: "churumbel",
      status: 0,
      question: "CON LA C. Niño, crío, bebé"
    },
    questionsFactory(
      "c",
      "campeones",
      0,
      "CON LA C. Pelicula dirigida por Javier Fesser,que gano el goya a la mejor direccion 2019"
    ),
    questionsFactory(
      "c",
      "campaña",
      0,
      "CON LA C. Apellido del mediocentro del Levante"
    )
  ],
  [
    {
      letter: "d",
      answer: "diarrea",
      status: 0,
      question:
        "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"
    },
    questionsFactory(
      "d",
      "dermatologia",
      0,
      "CON LA D. Especialidad medica que estudia la piel"
    ),
    questionsFactory(
      "d",
      "derrochar",
      0,
      "CON LA D. Gastar mucho dinero sin sentido. Malgastar"
    )
  ],
  [
    {
      letter: "e",
      answer: "ectoplasma",
      status: 0,
      question:
        "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"
    },
    questionsFactory(
      "e",
      "eowyn",
      0,
      "CON LA E. Hermana de Eomer en el Señor de los anillos"
    ),
    questionsFactory(
      "e",
      "enzima",
      0,
      "CON LA E. Molecula que actua como catalizadora de reacciones quimicas"
    )
  ],
  [
    {
      letter: "f",
      answer: "facil",
      status: 0,
      question:
        "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"
    },
    questionsFactory(
      "f",
      "federico",
      0,
      "CON LA F. Nombre del poeta perteneciente a la generacion del 27"
    ),
    questionsFactory(
      "f",
      "facineroso",
      0,
      "CON LA F. Forajido, malandrin. Termino que puso de moda Jesus Gil y Gil"
    )
  ],
  [
    {
      letter: "g",
      answer: "galaxia",
      status: 0,
      question:
        "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"
    },
    questionsFactory(
      "g",
      "galimatias",
      0,
      "CON LA G. Lenguaje dificil de comprender por la impropiedad de las frases o confusion de las ideas"
    ),
    questionsFactory(
      "g",
      "george",
      0,
      "CON LA G. Nombre del escritor de la novela Cancion de hielo y Fuego"
    )
  ],
  [
    {
      letter: "h",
      answer: "harakiri",
      status: 0,
      question: "CON LA H. Suicidio ritual japonés por desentrañamiento"
    },
    questionsFactory(
      "h",
      "heroes",
      0,
      "CON LA H. Titulo de la cancion de David Bowie que suena en el final de The perks of being a Wallflower"
    ),
    questionsFactory(
      "h",
      "hideo",
      0,
      "CON LA H. Nombre de pila del creador del videojuego Death Stranding"
    )
  ],
  [
    {
      letter: "i",
      answer: "iglesia",
      status: 0,
      question: "CON LA I. Templo cristiano"
    },
    questionsFactory(
      "i",
      "incinerar",
      0,
      "CON LA I. Quemar una cosa, en especial un cadaver"
    ),
    questionsFactory(
      "i",
      "ikea",
      0,
      "CON LA I. Tienda de muebles de origen sueco"
    )
  ],
  [
    {
      letter: "j",
      answer: "jabali",
      status: 0,
      question:
        "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"
    },
    questionsFactory(
      "j",
      "jalapeño",
      0,
      "CON LA J. Tipo de chile cultivado especialmente en la region de Xalapa en Mejico"
    ),
    questionsFactory(
      "j",
      "jarvan",
      0,
      "CON LA J. Heredero del trono de Demacia en el videojuego League of Legends"
    )
  ],
  [
    {
      letter: "k",
      answer: "kamikaze",
      status: 0,
      question:
        "CON LA K. Persona que se juega la vida realizando una acción temeraria"
    },
    questionsFactory(
      "k",
      "krang",
      0,
      "CON LA K. Supervillano que aparece en las tortugas ninja"
    ),
    questionsFactory(
      "k",
      "karate",
      0,
      "CON LA K. Arte marcial que significa mano vacia"
    )
  ],
  [
    {
      letter: "l",
      answer: "licantropo",
      status: 0,
      question: "CON LA L. Hombre lobo"
    },
    questionsFactory(
      "l",
      "lisonja",
      0,
      "CON LA L. Alabanza exagerada y generalemente interesada"
    ),
    questionsFactory(
      "l",
      "limonada",
      0,
      "CON LA L. Bebida refrescante hecha apartir del limon"
    )
  ],
  [
    {
      letter: "m",
      answer: "misantropo",
      status: 0,
      question:
        "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"
    },
    questionsFactory("m", "mercucio", 0, "CON LA M. Amigo de Romeo"),
    questionsFactory(
      "m",
      "mermelada",
      0,
      "CON LA M. Conserva dulce que se elabora cociendo fruta"
    )
  ],
  [
    {
      letter: "n",
      answer: "necedad",
      status: 0,
      question: "CON LA N. Demostración de poca inteligencia"
    },
    questionsFactory(
      "n",
      "nirvana",
      0,
      "CON LA N. Nombre del grupo de musica liderado por Kurt Cobain"
    ),
    questionsFactory(
      "n",
      "nevermind",
      0,
      "CON LA N. Titulo del disco iconico de Nirvana"
    )
  ],
  [
    {
      letter: "ñ",
      answer: "señal",
      status: 0,
      question:
        "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."
    },
    questionsFactory(
      "ñ",
      "ñora",
      0,
      "CON LA Ñ. Variedad de pimineto utilizada para la salsa Romescu"
    ),
    questionsFactory(
      "ñ",
      "añejo",
      0,
      "CONTIENE LA Ñ. Que existe desde hace tiempo"
    )
  ],
  [
    {
      letter: "o",
      answer: "orco",
      status: 0,
      question:
        "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"
    },
    questionsFactory(
      "o",
      "ornamento",
      0,
      "CON LA O. Adorno o motivo decorativo para embellecer una cosa"
    ),
    questionsFactory(
      "o",
      "omg",
      0,
      "CON LA O. siglas en lenguaje electronico que significan asombro"
    )
  ],
  [
    {
      letter: "p",
      answer: "protoss",
      status: 0,
      question:
        "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"
    },
    questionsFactory("p", "parmesano", 0, "CON LA P. Tipo de queso"),
    questionsFactory(
      "p",
      "parmenion",
      0,
      "CON LA P. General Macedonio al servicio de Filipo II y Alejandro Magno "
    )
  ],
  [
    {
      letter: "q",
      answer: "queso",
      status: 0,
      question:
        "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"
    },
    questionsFactory(
      "q",
      "quentin",
      0,
      "CON LA Q. Nombre del director de Pulp Fiction"
    ),
    questionsFactory(
      "q",
      "quebec",
      0,
      "CON LA Q, Ciudad de la zona francesa de Canada"
    )
  ],
  [
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    questionsFactory(
      "r",
      "rafael",
      0,
      "CON LA R. Nombre de la tortuga ninja con el antifaz rojo"
    ),
    questionsFactory(
      "r",
      "republica",
      0,
      "CON LA R. Forma de estado cuya maxima autoridad no es un monarca"
    )
  ],
  [
    {
      letter: "s",
      answer: "stackoverflow",
      status: 0,
      question:
        "CON LA S. Comunidad salvadora de todo desarrollador informático"
    },
    questionsFactory(
      "s",
      "sindicato",
      0,
      "CON LA S. Asociacion integrada por trabajadores en defensa y promocion de sus intereses laborales"
    ),
    questionsFactory("s", "sonoridad", 0, "CON LA S. Cualidad del sonido")
  ],
  [
    {
      letter: "t",
      answer: "terminator",
      status: 0,
      question:
        "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"
    },
    questionsFactory(
      "t",
      "tassadar",
      0,
      "CON LA T. Lider de faccion Protoss, en el juego Starcraft"
    ),
    questionsFactory(
      "t",
      "terremoto",
      0,
      "CON LA T. Sacudida brusca y pasajera de la corteza terrestre"
    )
  ],
  [
    {
      letter: "u",
      answer: "unamuno",
      status: 0,
      question:
        "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"
    },
    questionsFactory(
      "u",
      "ultrasonica",
      0,
      "CON LA U. Nombre del ultimo disco de Los Piratas"
    ),
    questionsFactory(
      "u",
      "undertaker",
      0,
      "CON LA U. Nombre en ingles del famoso luchador de Wrestling el enterrador"
    )
  ],
  [
    {
      letter: "v",
      answer: "vikingos",
      status: 0,
      question:
        "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"
    },
    questionsFactory(
      "v",
      "villano",
      0,
      "CON LA V. Que actua o es capaz de actuar de forma cruel"
    ),
    questionsFactory(
      "v",
      "villa",
      0,
      "CON LA V. Antiguo delantero del Barça y actual del Vissel Kobe"
    )
  ],
  [
    {
      letter: "w",
      answer: "sandwich",
      status: 0,
      question:
        "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"
    },
    questionsFactory(
      "w",
      "whiskey",
      0,
      "CON LA W. Bebida alcoholica conseguida por la destilacion de la malta y envejecida en barriles de madera"
    ),
    questionsFactory(
      "w",
      "wendy",
      0,
      "CON LA W. Nombre de la niña amiga de Peter Pan"
    )
  ],
  [
    {
      letter: "x",
      answer: "botox",
      status: 0,
      question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"
    },
    questionsFactory("x", "xena", 0, "CON LA X. Princesa guerrera"),
    questionsFactory("x", "xilofono", 0, "CON LA X. Instrumento de percusion")
  ],
  [
    {
      letter: "y",
      answer: "peyote",
      status: 0,
      question:
        "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"
    },
    questionsFactory(
      "y",
      "yesca",
      0,
      "CON LA Y. Materia muy seca y que arde con facilidad"
    ),
    questionsFactory("y", "yuxtaposicion", 0, "CON LA Y. Efecto de yuxtaponer")
  ],
  [
    {
      letter: "z",
      answer: "zen",
      status: 0,
      question:
        "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"
    },
    questionsFactory(
      "z",
      "zorastrismo",
      0,
      "CON LA Z. Religion fundado en las enseñanzas de su profeta Zoroastro"
    ),
    questionsFactory(
      "z",
      "zoro",
      0,
      "CON LA Z. Nombre del personaje de One Piece experto en katanas"
    )
  ]
];
var user;
function userF() {
  user = prompt("bienvenido a pasapalabra ¿cual es tu nombre?");
  if (user == null || user == "") {
    alert("debes introducir un nobre");
    userF();
  }
}

randomNum(0, 3);
function pasapalabra() {
  for (let i = 0; i < questions.length; i++) {
    if (randomNumber == 0) {
      questions[i][1].status = 1;
      questions[i][2].status = 1;
    } else if (randomNumber == 1) {
      questions[i][0].status = 1;
      questions[i][2].status = 1;
    } else if (randomNumber == 2) {
      questions[i][0].status = 1;
      questions[i][1].status = 1;
    }
    while (questions[i][randomNumber].status === 0) {
      pregunta = prompt(questions[i][randomNumber].question);
      if (pregunta !== null) {
        preguntaN = Number(pregunta);
        preguntaTLC = pregunta.toLowerCase();
        if (preguntaTLC === questions[i][randomNumber].answer) {
          counterOk = counterOk + 1;
          questions[i][randomNumber].status = 1;
        } else if (pregunta == "pasapalabra") {
          questions[i][randomNumber].status = 0;
          i = i + 1;
        } else if (!Number.isNaN(preguntaN)) {
          alert("debes introducir una respuesta no numerica o pasapalabra");
        } else if (pregunta == "") {
          alert("debes introducir una respuesta o pasapalabra");
        } else if (preguntaTLC == "end") {
          if (confirm("¿quieres salir?")) {
            console.log(`has acertado ${counterOk}`);
            return alert(
              "Gracias por jugar, vuelve cuando estes preparado para acabar el reto"
            );
          } else {
            alert("Seguimos jugando!!!");
          }
        } else {
          questions[i][randomNumber].status = 1;
          error = error + 1;
        }
      } else {
        alert("Si quieres salir introduce el comando END");
      }
    }
  }
  for (let i = 0; i < questions.length; i++) {
    while (questions[i][randomNumber].status === 0) {
      pasapalabra();
    }
  }
}
userF();
pasapalabra()
rankingF()

function rankingF(){
var totalCount = counterOk + error;
if (totalCount == 27) {
  console.log(`has conseguido ${counterOk} aciertos`);
  console.log(`has cometido ${error} fallos`);
 
  var ranking = {
    user: `${user}`,
    puntuacion: `${counterOk}`
  };
  rankingProFinal.push(ranking);
  rankingProFinal.sort(function(a, b) {
     b.puntuacion - a.puntuacion;
  });
  if (confirm('¿Quieres volver a jugar?')){
    totalCount = 0
    counterOk = 0
    error = 0
    for (let i = 0; i < rankingProFinal.length; i++){
    console.log( `${rankingProFinal[i].user} : ${rankingProFinal[i].puntuacion}`)}
    
    for (let i = 0; i < questions.length; i++) {
      questions[i][0].status = 0;
        questions[i][1].status = 0;
        questions[i][2].status = 0;}
      
    userF()
    randomNum(0,3)
    pasapalabra()
    rankingF()

}else{
  alert('Buena partida')
  for (let i = 0; i < rankingProFinal.length; i++){
    console.log( `${rankingProFinal[i].user} : ${rankingProFinal[i].puntuacion}`)}
}
}
}
