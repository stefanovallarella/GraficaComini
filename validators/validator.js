const { check } = require('express-validator');



module.exports = {
    emailValidator: [
        check("name")
            .notEmpty().withMessage("El campo nombre no puede estar vacío").bail()
            .isLength({min: 5}).withMessage("El campo nombre debe tener al menos 5 caracteres"),

        check("email")
            .notEmpty().withMessage("El campo email no puede estar vacío").bail()
            .isEmail().withMessage("Debe ser un email válido"),

        check("phone")
            .notEmpty().withMessage("El campo teléfono no puede estar vacío"),

        check("message")
            .notEmpty.withMessage("El mensaje no puede estar vacío").bail()
            .isLength({min: 50 }).withMessage('El mensaje debe tener al menos 50 caracteres')

    ]
}