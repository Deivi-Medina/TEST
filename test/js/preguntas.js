// 100 preguntas organizadas en 10 capítulos.
// Cada capítulo = 1 película · 10 preguntas (1 por dimensión) · ~3 ítems inversos.
// Dimensiones: 0=Empatía 1=Naturaleza 2=Resiliencia 3=Curiosidad 4=Espiritualidad
//             5=Lealtad 6=Independencia 7=Serenidad 8=Creatividad 9=Sombra
// `r: true` marca ítem inverso (se puntúa al revés).

export const CHAPTERS = [
  {
    id: 0,
    title: "Capítulo I: El Aliento del Bosque Tóxico",
    movie: "Nausicaä del Valle del Viento",
    year: 1984,
    background: "nausicaa",
    questions: [
      { t: "A veces me cuesta entender por qué los demás se toman las cosas tan a pecho.", d: 0, r: true },
      { t: "Siento que los bosques y los ríos poseen una energía viva y consciente.", d: 1 },
      { t: "Cuando algo sale mal, tiendo a abandonar y buscar otra cosa.", d: 2, r: true },
      { t: "Me gusta hacer preguntas profundas sobre el origen y destino del ser humano.", d: 3 },
      { t: "Siento gratitud por la simple existencia de las cosas que me rodean.", d: 4 },
      { t: "Nunca abandono a un amigo, sin importar lo difícil o peligroso de la situación.", d: 5 },
      { t: "Tomo mis propias decisiones sin dejarme influir excesivamente por el qué dirán.", d: 6 },
      { t: "Encuentro paz mental estando en silencio bajo la lluvia o entre los árboles.", d: 7 },
      { t: "Uso mi imaginación para construir mundos o soluciones fuera de lo común.", d: 8 },
      { t: "Me cuesta identificarme con personas que muestran su lado oscuro.", d: 9, r: true }
    ]
  },
  {
    id: 1,
    title: "Capítulo II: El Guardián del Alcanforero",
    movie: "Mi Vecino Totoro",
    year: 1988,
    background: "totoro",
    questions: [
      { t: "Siento una profunda compasión incluso hacia quienes han cometido grandes errores.", d: 0 },
      { t: "Las preocupaciones por el medio ambiente me parecen exageradas.", d: 1, r: true },
      { t: "Cuando enfrento una gran adversidad, me vuelvo más firme y enfocado.", d: 2 },
      { t: "Siento un impulso irresistible de explorar lugares olvidados o prohibidos.", d: 3 },
      { t: "Solo creo en lo que puedo ver y comprobar científicamente.", d: 4, r: true },
      { t: "Valoro la amistad verdadera como uno de los tesoros más grandes de la vida.", d: 5 },
      { t: "Necesito momentos prolongados de soledad para recargar energías.", d: 6 },
      { t: "Prefiero la tranquilidad de la vida rural al ajetreo de las grandes ciudades.", d: 7 },
      { t: "Encuentro formas poéticas o artísticas de ver los momentos cotidianos.", d: 8 },
      { t: "Lucho ocasionalmente con sentimientos de melancolía o nostalgia profunda.", d: 9 }
    ]
  },
  {
    id: 2,
    title: "Capítulo III: El Primer Vuelo",
    movie: "Kiki: Entregas a Domicilio",
    year: 1989,
    background: "kiki",
    questions: [
      { t: "Escucho con paciencia sincera a quien necesita desahogarse conmigo.", d: 0 },
      { t: "Prefiero los espacios cerrados y climatizados a cualquier paisaje natural.", d: 1, r: true },
      { t: "No me rindo fácilmente incluso cuando todo parece estar en mi contra.", d: 2 },
      { t: "Prefiero tomar el camino largo y desconocido antes que la ruta rápida habitual.", d: 3 },
      { t: "Las coincidencias significativas son pura casualidad.", d: 4, r: true },
      { t: "Construyo relaciones basadas en la honestidad y la confianza profunda.", d: 5 },
      { t: "Prefiero resolver mis problemas de forma autónoma antes que pedir ayuda.", d: 6 },
      { t: "Me irrito con facilidad cuando las cosas no salen como quiero.", d: 7, r: true },
      { t: "Expresar mi creatividad es una necesidad vital para mi bienestar.", d: 8 },
      { t: "Sé lo que se siente al esconder la verdadera personalidad tras una máscara.", d: 9 }
    ]
  },
  {
    id: 3,
    title: "Capítulo IV: El Cielo del Adriático",
    movie: "Porco Rosso",
    year: 1992,
    background: "porco",
    questions: [
      { t: "Los problemas de los demás no son mi responsabilidad.", d: 0, r: true },
      { t: "Me perturba profundamente la destrucción irreflexiva del entorno natural.", d: 1 },
      { t: "Puedo soportar cargas pesadas en silencio para no preocupar a mis seres queridos.", d: 2 },
      { t: "Busco constantemente ampliar mis horizontes culturales e intelectuales.", d: 3 },
      { t: "Los rituales me parecen pérdidas de tiempo.", d: 4, r: true },
      { t: "Mantengo mis promesas aunque el costo personal sea elevado.", d: 5 },
      { t: "Disfruto viajar solo e internarme en territorios desconocidos.", d: 6 },
      { t: "Suelo guardar silencio ante un paisaje majestuoso.", d: 7 },
      { t: "El arte me resulta ajeno o innecesario.", d: 8, r: true },
      { t: "Nunca he dudado de mis motivaciones más profundas.", d: 9, r: true }
    ]
  },
  {
    id: 4,
    title: "Capítulo V: El Bosque y el Hierro",
    movie: "La Princesa Mononoke",
    year: 1997,
    background: "mononoke",
    questions: [
      { t: "Procuro no juzgar duramente las debilidades o equivocaciones ajenas.", d: 0 },
      { t: "Siento un respeto casi místico por los animales salvajes.", d: 1 },
      { t: "Superar momentos oscuros me ha hecho una persona más sabia y fuerte.", d: 2 },
      { t: "Prefiero quedarme con lo que ya conozco antes que probar algo nuevo.", d: 3, r: true },
      { t: "Confío en mi intuición cuando conozco a alguien por primera vez.", d: 4 },
      { t: "Cambio de amigos con facilidad si me conviene.", d: 5, r: true },
      { t: "Me siento incómodo cuando estoy mucho tiempo solo.", d: 6, r: true },
      { t: "Prefiero la emoción intensa al silencio tranquilo.", d: 7, r: true },
      { t: "Me fascina el arte, la música o la narración de historias mágicas.", d: 8 },
      { t: "Reconozco que dentro de mí existen contradicciones y deseos opuestos.", d: 9 }
    ]
  },
  {
    id: 5,
    title: "Capítulo VI: El Mundo de los Espíritus",
    movie: "El Viaje de Chihiro",
    year: 2001,
    background: "chihiro",
    questions: [
      { t: "Me preocupa el bienestar de gente que ni siquiera conozco.", d: 0 },
      { t: "Los animales salvajes me parecen peligrosos y no me interesan.", d: 1, r: true },
      { t: "Suelo quejarme cuando las circunstancias se vuelven duras.", d: 2, r: true },
      { t: "Me atraen las historias sobre mundos invisibles, espíritus o mitologías.", d: 3 },
      { t: "A veces siento la presencia de algo sagrado e invisible en lo cotidiano.", d: 4 },
      { t: "La fidelidad a mis principios es más importante que el éxito rápido.", d: 5 },
      { t: "Prefiero que otros tomen las decisiones importantes por mí.", d: 6, r: true },
      { t: "Mantengo la calma y claridad mental cuando estalla el caos a mi alrededor.", d: 7 },
      { t: "Suelo improvisar con éxito cuando las cosas no salen según lo planeado.", d: 8 },
      { t: "He sentido la tentación de aislarme cuando el mundo se vuelve demasiado ruidoso.", d: 9 }
    ]
  },
  {
    id: 6,
    title: "Capítulo VII: El Corazón en Llamas",
    movie: "El Castillo Ambulante",
    year: 2004,
    background: "howl",
    questions: [
      { t: "Suelo actuar como mediador cuando surge un conflicto a mi alrededor.", d: 0 },
      { t: "Me gusta cultivar plantas o cuidar seres vivos con esmero constante.", d: 1 },
      { t: "El trabajo duro y enfocado le da sentido a mis días.", d: 2 },
      { t: "Las preguntas filosóficas me aburren.", d: 3, r: true },
      { t: "Acepto que hay misterios en la vida que jamás podrán explicarse racionalmente.", d: 4 },
      { t: "Las promesas son flexibles según las circunstancias.", d: 5, r: true },
      { t: "No me da miedo comenzar desde cero en un lugar totalmente nuevo.", d: 6 },
      { t: "Practico la paciencia ante los procesos que requieren tiempo para madurar.", d: 7 },
      { t: "Prefiero seguir instrucciones claras antes que inventar soluciones.", d: 8, r: true },
      { t: "A veces me siento incomprendido o distante de las normas de la sociedad.", d: 9 }
    ]
  },
  {
    id: 7,
    title: "Capítulo VIII: El Abrazo del Mar",
    movie: "Ponyo en el Acantilado",
    year: 2008,
    background: "ponyo",
    questions: [
      { t: "Cuando alguien llora frente a mí, me incomoda y prefiero alejarme.", d: 0, r: true },
      { t: "Me motiva proteger la vida silvestre y los espacios naturales de mi región.", d: 1 },
      { t: "Confío en mi capacidad para salir adelante en cualquier circunstancia.", d: 2 },
      { t: "Observar las estrellas o el mar me produce un sobrecogimiento placentero.", d: 3 },
      { t: "Siento que los sueños nocturnos contienen mensajes o intuiciones valiosas.", d: 4 },
      { t: "Defiendo con valentía a quienes no pueden protegerse por sí mismos.", d: 5 },
      { t: "Necesito la aprobación constante de los demás para sentirme seguro.", d: 6, r: true },
      { t: "Transmito una sensación de calma y refugio a las personas nerviosas.", d: 7 },
      { t: "Encuentro inspiración en la música, los colores y las texturas del entorno.", d: 8 },
      { t: "Comprendo que la tristeza es una emoción natural y necesaria.", d: 9 }
    ]
  },
  {
    id: 8,
    title: "Capítulo IX: El Mundo de los Diminutos",
    movie: "Arrietty y el Mundo de los Diminutos",
    year: 2010,
    background: "arrietty",
    questions: [
      { t: "Siento satisfacción real cuando ayudo a alguien a sanar o superarse.", d: 0 },
      { t: "Creo que la humanidad debería vivir con mayor humildad frente al planeta.", d: 1 },
      { t: "Prefiero evitar los retos que me exigen un esfuerzo sostenido.", d: 2, r: true },
      { t: "Me apasiona aprender cosas nuevas sin un objetivo práctico inmediato.", d: 3 },
      { t: "Encuentro comodidad espiritual en los rituales sencillos y genuinos.", d: 4 },
      { t: "Siento un fuerte deber de proteger la memoria y el honor de mis allegados.", d: 5 },
      { t: "No me atrae seguir modas ni corrientes de pensamiento masivas.", d: 6 },
      { t: "Busco la paz interior más que la aprobación o el aplauso de los demás.", d: 7 },
      { t: "Me siento incómodo cuando no hay un plan definido.", d: 8, r: true },
      { t: "La vida es sencilla y no tiene zonas grises.", d: 9, r: true }
    ]
  },
  {
    id: 9,
    title: "Capítulo X: El Umbral de los Sueños",
    movie: "El Niño y la Garza",
    year: 2023,
    background: "heron",
    questions: [
      { t: "Me cuesta entender qué sienten los demás cuando no lo dicen con palabras.", d: 0, r: true },
      { t: "Me gusta observar cómo el clima cambia los colores y sonidos del bosque.", d: 1 },
      { t: "No me rindo fácilmente incluso cuando el cansancio me supera.", d: 2 },
      { t: "Me molesta que me expliquen cosas que no pedí saber.", d: 3, r: true },
      { t: "Creo en la existencia de un destino o hilo invisible que conecta a las almas.", d: 4 },
      { t: "En momentos duros, cada quien debería mirar por sí mismo.", d: 5, r: true },
      { t: "Valoro mi libertad personal por encima de la comodidad o la rutina.", d: 6 },
      { t: "Necesito estímulos constantes para no aburrirme.", d: 7, r: true },
      { t: "Me complace crear objetos útiles o bonitos con mis propias manos.", d: 8 },
      { t: "Nunca he dudado de mis propias intenciones.", d: 9, r: true }
    ]
  }
];

// Utilidad: obtener todas las preguntas en un array plano (con metadata de capítulo)
export function getAllQuestions() {
  const flat = [];
  CHAPTERS.forEach((ch, ci) => {
    ch.questions.forEach(q => {
      flat.push({
        ...q,
        chapter: ci,
        chapterTitle: ch.title,
        chapterMovie: ch.movie,
        chapterBg: ch.background
      });
    });
  });
  return flat;
}