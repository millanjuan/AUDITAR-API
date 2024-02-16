
//BAR - COMEDOR - RESTAURANTE 20 PREGUNTAS
const form1 = [
    {
        PREGUNTA: "1. Certificado de fumigación del establecimiento al día", 
        RESPUESTAS:["SI", "NO"],
        OBSERVACION:null
    },
    {
        PREGUNTA: "2. ¿Todos manipuladores poseen carnet de manipulación de alimentos (cocineros, bacheros, mozos, etc)?", 
        RESPUESTAS:["SI", "NO"], 
        OBSERVACION: "CANTIDAD DE IDENTIFICADORES VIGENTES"
    },
    {
        PREGUNTA:"3. ¿Todos manipuladores que elabran la comida tienen la vestimenta adecuada (delantal/chaqueta, gorra/cofia, pantalón largo) y el cabello recogido en caso de tener el cabello largo?",
        RESPUESTAS:["SI", "NO"],
        OBSERVACION: null ,
    },
    {
        PREGUNTA:"4. Observar si hay condiciones adecuadas de orden e higiene. ",
        RESPUESTAS:null,
        OBSERVACION: "Ingrese las observaciones correspondientes:" ,
    },
    {
        PREGUNTA:"5. Los utensilios y demás elementos de cocina (ollas, sartenes, licuadoras, procesadoras, tuppers, asaderas) son aptos y se encuentran en condiciones higiénicas adecuadas?",
        RESPUESTAS:["SI", "NO"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"6. ¿Los elementos de cocina (hornos, freidoras, etc.). son aptos y se encuentran en condiciones higiénicas adecuadas?",
        RESPUESTAS:["SI", "NO"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"7. ¿Posee bachas para lavado de alimentos y otra para lavado de manos y utensilios?",
        RESPUESTAS:["SI", "NO"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"8. ¿Posee mesadas de acero inoxidable?",
        RESPUESTAS:["SI", "NO"],
        OBSERVACION: "Observaciones:",
    },
    {
        PREGUNTA:"9. ¿Poseen tachos de basura con bolsa, pedal y tapa?",
        RESPUESTAS:["SI", "NO"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"10. Registro de la temperatura de las heladeras:",
        RESPUESTAS:["RANGO DE 4 °C - 8 °C", "POR ENCIMA DE 8 °C"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"11. Orden y condiciones de la heladera:\n1) Observar que la producción esté contenida en envases aptos y rotulados.\n2) Productos crudos y cocidos deben estar separados\n3) Los productos cárnicos deben estar contenidos en recipientes adecuados para evitar derrames de líquidos sobre otros alimentos\n5) Control de fechas de vencimiento y registros de los productos, que no haya latas abiertas ni utensilios dentro de la heladera, etc.",
        RESPUESTAS:["CONDICIONES APTAS", "CONDICIONES NO APTAS"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"12. Orden y condiciones de los frezzers:\n1) Observar que el frezzer mantenga el material revestible apto e higiénico, los productos se encuentren embolsados y rotulados \n2) Verificar la procedencia de los productos cárnicos \n3) Sellos de habilitación de SENASA (los distintos tipos de carnes vaca, cabrito, chancho, pescados, pollos deben estar separados). ",
        RESPUESTAS:["CONDICIONES APTAS", "CONDICIONES NO APTAS"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"13. En caso de poseer cámara de frío verificar temperatura de la misma:",
        RESPUESTAS: null,
        OBSERVACION: "Ingrese la temperatura en ºC:",
    },
    {
        PREGUNTA:"14. Orden y condiciones de almacenamiento de los productos en la cámara:\n1) Observar si la mercadería se encuentra almacenada en condiciones adecuadas, si no se encuentran en el piso, observar fechas de vencimiento, procedencia y registros RNE/RNPA.",
        RESPUESTAS:["CONDICIONES APTAS", "CONDICIONES NO APTAS"],
        OBSERVACION:  null,
    },
    {
        PREGUNTA:"15. Almacenamiento de mercadería, fechas de vencimiento y registros: \n1) Observar si la mercadería se encuentra almacenada en condiciones adecuadas, si no se encuentran en el piso, observar fechas de vencimiento, procedencia y registros RNE/RNPA.",
        RESPUESTAS:["CONDICIONES APTAS", "CONDICIONES NO APTAS"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"16. Observar la presencia de roedores, insectos o moscas en la zona de depósitos cocina, baño y salón",
        RESPUESTAS:["CONDICIONES APTAS", "CONDICIONES NO APTAS"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"17. Verificar las condiciones de lavado de utensilios: \n1) Observar si se realiza con agua potable y corriente, si se desinfectan, si los utensilios se secan en parrillas o se colocan en las mesadas.",
        RESPUESTAS:["CONDICIONES APTAS", "CONDICIONES NO APTAS"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"18. Observar si los mozos fajinan la vajilla",
        RESPUESTAS:["SI", "NO"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"19. Observar por unos minutos a los manipuladores de alimentos ¿se lavan las manos adecuadamente?",
        RESPUESTAS:["SI", "NO"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"20. Observar las condiciones higiénicas del baño de los comensales y el de los trabajadores.",
        RESPUESTAS:["CONDICIONES APTAS", "CONDICIONES NO APTAS"],
        OBSERVACION: null,
    },    
];

module.exports = form1;