import { motion } from "framer-motion";
import gmail from "../gmail.png";
function Advices() {
  const arrayOfAdvices = [
    {
      id: 1,
      advice: (
        <a href="mailto:weldekmasoulitek@gmail.com">
          <img style={{ width: "20px" }} src={gmail} />
          <p>إضافة المزيد من النصائح</p>
        </a>
      ),
      rotateDegree: -3,
      color: "#e0ccff",
    },
    {
      id: 2,
      advice: "استمتع بوقتك مع أطفالك واقضِ وقتًا أطول معهم كل يوم.",
      rotateDegree: -2,
      color: "#e2f0ff",
    },
    {
      id: 3,
      advice:
        "اضحك مع أطفالك بقدر الإمكان. الضحك هو أفضل دواء ويساعد على خلق جو سعيد وإيجابي في المنزل.",
      rotateDegree: 1,
      color: "#fff3e2",
    },
    {
      id: 4,
      advice:
        "علم أطفالك قيمة اللطف والتعاطف. حثهم على أن يكونوا متعاطفين تجاه الآخرين وأن يحدثوا تأثيرًا إيجابيًا في العالم.",
      rotateDegree: -1,
      color: "#e6ffcc",
    },
    {
      id: 5,
      advice: "احتفل بكل إنجاز وتقدم يحققه أبناؤك، بغض النظر عن حجمه.",
      rotateDegree: 0,
      color: "#e0ccff",
    },
    {
      id: 6,
      advice: "حافظ على تواصل جيد مع أطفالك وكن متواجدًا لهم في جميع المواقف.",
      rotateDegree: 3,
      color: "#f9eae4",
    },
    {
      id: 7,
      advice:
        "ساعد أطفالك على اكتشاف شغفهم وقدراتهم الفردية، وقم بدعمهم في تحقيق أحلامهم.",
      rotateDegree: -3,
      color: "#d6f3f5",
    },
    {
      id: 8,
      advice:
        "كن قدوة حسنة لأطفالك من خلال تطبيق القيم والأخلاق الحميدة في حياتك اليومية.",
      rotateDegree: 2,
      color: "#ffdede",
    },
    {
      id: 9,
      advice:
        "قم بتعزيز ثقة أطفالك بأنفسهم وحثهم على تحقيق أهدافهم وتجاوز التحديات.",
      rotateDegree: -2,
      color: "#d9e8d4",
    },
    {
      id: 10,
      advice: "خصص وقتًا يوميًا للقراءة مع أطفالك وتشجيع حب الكتب والتعلم.",
      rotateDegree: 1,
      color: "#fde6cc",
    },
    {
      id: 11,
      advice:
        "كوّن عادات صحية لأطفالك مثل الأكل الصحي والنوم الجيد وممارسة التمارين البدنية.",
      rotateDegree: -1,
      color: "#e0f0ff",
    },
    {
      id: 12,
      advice:
        "كوّن أوقاتًا للعب والاستمتاع بالألعاب مع أطفالك لتعزيز العلاقة بينكم.",
      rotateDegree: 0,
      color: "#fceae7",
    },
    {
      id: 13,
      advice: "احترم وجهات نظر أطفالك واستمع إليهم بعناية وتفهم.",
      rotateDegree: -3,
      color: "#d6e4ff",
    },
    {
      id: 14,
      advice:
        "شجّع أطفالك على التعبير عن مشاعرهم وأفكارهم بطرق إيجابية ومفيدة.",
      rotateDegree: 2,
      color: "#ffe3e3",
    },
    {
      id: 15,
      advice:
        "قم بتوفير بيئة آمنة ومحفزة لأطفالك لاستكشاف العالم وتطوير مهاراتهم.",
      rotateDegree: -2,
      color: "#f0e2ff",
    },
    {
      id: 16,
      advice:
        "استخدم الحوار والتواصل الفعال مع أطفالك لحل المشكلات وتعزيز التفاهم.",
      rotateDegree: 1,
      color: "#fff0e6",
    },
    {
      id: 17,
      advice:
        "شارك أطفالك في الأنشطة الاجتماعية والمجتمعية لتعزيز التعاون والاندماج.",
      rotateDegree: -1,
      color: "#eaffd0",
    },
    {
      id: 18,
      advice:
        "قدّم الدعم العاطفي والشجاعة لأطفالك لمواجهة التحديات والصعاب في حياتهم.",
      rotateDegree: 0,
      color: "#ffeded",
    },
    {
      id: 19,
      advice:
        "شارك أطفالك في الطبخ والطهي لتعزيز المهارات العملية وتعليمهم التغذية الصحية.",
      rotateDegree: 3,
      color: "#e6f9ff",
    },
    {
      id: 20,
      advice:
        "حثّ أطفالك على ممارسة الإبداع والتفكير الابتكاري من خلال الرسم والكتابة والموسيقى وغيرها.",
      rotateDegree: -3,
      color: "#fffbcc",
    },
    {
      id: 21,
      advice:
        "قدّم لأطفالك الاهتمام والاعتناء اللازمين وأظهر لهم حبك ودعمك الدائم.",
      rotateDegree: 2,
      color: "#d8f5e0",
    },
    {
      id: 22,
      advice:
        "شارك أطفالك في القرارات المنزلية الصغيرة لتعزيز شعورهم بالمسؤولية والانتماء.",
      rotateDegree: -2,
      color: "#ffe8d6",
    },
    {
      id: 23,
      advice:
        "حافظ على توازن بين العمل والحياة العائلية لتكون حاضرًا لأطفالك في جميع الأوقات.",
      rotateDegree: 1,
      color: "#eaf7ff",
    },
    {
      id: 24,
      advice:
        "كوّن عادة قراءة القصص مع أطفالك قبل النوم لتعزيز حب القراءة وتنمية خيالهم.",
      rotateDegree: -1,
      color: "#fff4e6",
    },
    {
      id: 25,
      advice:
        "احتفل بالتنوع واحترام الاختلافات بين الناس وشجّع أطفالك على ذلك.",
      rotateDegree: 0,
      color: "#e0ccff",
    },
    {
      id: 26,
      advice:
        "شارك أطفالك في أنشطة رياضية وحركية لتعزيز لياقتهم البدنية وصحتهم.",
      rotateDegree: 3,
      color: "#fdeae7",
    },
    {
      id: 27,
      advice:
        "قدّم الدعم والتشجيع لأطفالك لاستكشاف مواهبهم وتطوير مهاراتهم الفردية.",
      rotateDegree: -3,
      color: "#d7e6ff",
    },
  ];

  return (
    <>
      <div className="grid-container" dir="rtl">
        {arrayOfAdvices.map((advice) => (
          <motion.div
            key={advice.id}
            className="advice-item"
            style={{
              backgroundColor: advice.color,
              transform: `rotate(${advice.rotateDegree}deg)`,
            }}
            initial={{ opacity: 0 }} // Set initial opacity to 0
            animate={{ opacity: 1 }} // Animate opacity to 1
            transition={{ delay: 0.1 * advice.id }}
          >
            {advice.advice}
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Advices;
