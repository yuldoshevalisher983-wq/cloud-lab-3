// Serverless funksiya: Faqat buyurtma summasini hisoblash va chek berish uchun javobgar
export default function handler(req, res) {
  const summa = Number(req.query.summa) || 100000;
  const qqs = summa * 0.12; // 12% QQS hisoblash
  const jami = summa + qqs;

  res.status(200).json({
    xizmat_turi: "Serverless Microservice (FaaS)",
    asosiy_summa: `${summa} UZS`,
    qqs_12_foiz: `${qqs} UZS`,
    tolov_uchun_jami: `${jami} UZS`,
    vaqt: new Date().toLocaleTimeString()
  });
}
