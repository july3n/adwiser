var express = require("express");
var router = express.Router();

var ctrlDigerleri = require("../controllers/digerleri");
var ctrlMekanlar = require("../controllers/mekanlar");

router.get("/", ctrlMekanlar.anaSayfa);
router.get("/mekan/:mekanid", ctrlMekanlar.mekanBilgisi);
router.get("/mekan/:mekanid/yorum/yeni", ctrlMekanlar.yorumEkle);
router.post("/mekan/:mekanid/yorum/yeni", ctrlMekanlar.yorumumuEkle);

module.exports = router;
