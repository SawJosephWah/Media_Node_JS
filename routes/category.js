
let router  = require('express').Router();
let {saveFile} = require('../utils/gallary');
let controller = require('../controller/category');
let {validator,validateParamId,validateToken} = require('../utils/validator');
let {schema} = require('../utils/schema');


router.get("/",  controller.all);

router.post("/" , validateToken,  saveFile , validator(schema.catVal),controller.add);

router.route('/:id')
.get(validateParamId(schema.validateParam.id),controller.get)
.patch(validateToken,validateParamId(schema.validateParam.id ), controller.update)
.delete(validateToken,validateParamId(schema.validateParam.id ) , controller.drop , )



module.exports = router;