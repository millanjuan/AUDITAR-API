const formatCategory = (category) => ({
    id: category.id,
    name: category.name,
    image: category.image,
    statment: category.statment
});

const formatInspection = (inspection) => ({
    id: inspection.id,
    companyName: inspection.companyName,
    autorizationNumber: inspection.autorizationNumber,
    fullname: inspection.fullname,
    companyAdress: inspection.companyAdress,
    identity: inspection.identity,
    inspectionDate: inspection.inspectionDate,
    inspectionTime: inspection.inspectionTime,
    cellphone: inspection.cellphone,
    email: inspection.email,
    inspectorSign1: inspection.inspectorSign1,
    inspectorSign2: inspection.inspectorSign2,
    ownerSign: inspection.ownerSign,
    category: inspection.category,
    formAnswer: inspection.formAnswer,
});


module.exports = {
    formatCategory,
    formatInspection,
};