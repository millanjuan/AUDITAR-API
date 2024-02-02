//Carnicería - Pollería - Pescadería 22 PREGUNTAS

const form3 = [
    {
        PREGUNTA:"1. Certificado de fumigación del establecimiento al día",
        RESPUESTAS:["SI", "NO"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"2. ¿Todos manipuladores poseen carnet de manipulación de alimentos ?",
        RESPUESTAS:["SI", "NO"],
        OBSERVACION: "Cantidad de identificaciones vigentes:",
    },
    {
        PREGUNTA:"3. ¿Todos manipuladores que elabran la comida tienen la vestimenta adecuada (delantal/chaqueta, gorra/cofia, pantalón largo) y el cabello recogido en caso de tener el cabello largo?",
        RESPUESTAS:["SI", "NO"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"4. Solicitar la procedencia sellos de SENASA de los productos cárnicos (Ganado Vacuno, Porcino, Caprino, etc.):",
        RESPUESTAS:["CUMPLE", "NO CUMPLE", "NO EXPENDEN CARNE"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"5. Solicitar la procedencia de los pollos faenados en el día:",
        RESPUESTAS:["CUMPLE", "NO CUMPLE", "NO EXPENDEN POLLOS FANEADOS EN EL DÍA"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"6. Observar las fechas de vencimientos y registros de los pollos congelados",
        RESPUESTAS:["CUMPLE", "NO CUMPLE", "NO EXPENDEN POLLOS"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"7. Observar las fechas de vencimientos y registros de los productos de mar (pescados, moluscos y crustáceos):",
        RESPUESTAS:["CUMPLE", "NO CUMPLE", "NO EXPENDEN PRODUCTOS DE MAR"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"8. Registro de temperaturas de heladeras mostrador",
        RESPUESTAS:["RANGO DE 4 °C - 8 °C", "POR ENCIMA DE 8 °C"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"9. Observar que no estén en la misma heladera mostrador distintos productos y subproductos de carne, pescados y pollos:",
        RESPUESTAS:["CUMPLE", "NO CUMPLE"],
        OBSERVACION: "Observaciones:",
    },
    {
        PREGUNTA:"10. Observar que las heladeras exhibidoras no posean iluminación con luz violeta, rosa:",
        RESPUESTAS:["CUMPLE", "NO CUMPLE"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"11. Observar que no tengan carne picada expuestas o hamburguesas de elaboración propias exhibidas en las heladeras mostrador.",
        RESPUESTAS:["CUMPLE", "NO CUMPLE"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"12. Observar que frezzer no tengan distintos productos y subproductos cárnicos mezclados:",
        RESPUESTAS:["CUMPLE", "NO CUMPLE"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"13. Observar que si se elabora chorizos u otros chacinados sea bajo las condiciones adecuadas:",
        RESPUESTAS:["CUMPLE", "NO CUMPLE"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"14. En caso de poserr cámara de frio registrar temperatura",
        RESPUESTAS: null,
        OBSERVACION: "Ingrese la temperatura en ºC:",
    },
    {
        PREGUNTA:"15. Orden y condiciones de almacenamiento de los productos en la cámara:\n1) Cortes de carnes colgados, embolsados y rotulados\n2) Que no haya carne picada\n3) Que no haya carne en envases no aptos\n4) Que no se encuentren en el suelo\n 5)Que no se almacene otros tipos de alimento como verduras o preparados para milanesas",
        RESPUESTAS:["CONDICIONES APTAS", "CONDICIONES NO APTAS"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"16. Preparacón de milanesas o subproductos en condiciones adecuadas",
        RESPUESTAS:["CONDICIONES APTAS", "CONDICIONES NO APTAS"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"17. Observar la higiene de las maquinas (ej.: las picadoras de carne, sierras, etc.)",
        RESPUESTAS:["CONDICIONES APTAS", "CONDICIONES NO APTAS"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"18. Posee bachas para lavado de alimentos y otra para lavado de manos y utensilios",
        RESPUESTAS:["SI", "NO"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"19. ¿Posee mesadas de acero inoxidable?",
        RESPUESTAS:["SI", "NO"],
        OBSERVACION: "Observaciones:",
    },
    {
        PREGUNTA:"20. ¿Poseen tachos de basura con bolsa, pedal y tapa?",
        RESPUESTAS:["SI", "NO"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"21. Observar por unos minutos a los manipuladores de alimentos ¿se lavan las manos adecuadamente?",
        RESPUESTAS:["SI", "NO"],
        OBSERVACION: null,
    },
    {
        PREGUNTA:"22. Observar las condiciones higiénicas del baño el de los trabajadores.",
        RESPUESTAS:["CONDICIONES APTAS", "CONDICIONES NO APTAS"],
        OBSERVACION: null,
    },
];

module.exports = form3;