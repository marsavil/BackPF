const getProductDB = require("../Controllers/DBgetProducts.js")
let express = require("express");
const { Router } = require("express");

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    var boo = false;

    for (let i = 0; i < id.length; i++) {
        if (id[i] >= "a") {
            boo = true;
        }
    }
    try {
        if (boo) {
            const res2 = await getProductDB(id);
            res.status(200).send(res2);
        } else {
            const res1 = await getProductDB(id);
            res.status(200).send([res1]);
        }
    } catch (error) {
        res.status(400).send(error);
    }
});
module.exports=router;