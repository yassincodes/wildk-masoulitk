import pic from "./pic.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ margin: "20px" }}>
      <div
        style={{
          marginTop: "10vh",
          marginBottom: "10vh",
          fontSize: "1.3em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        لقد أضحى جليًا أن للتربيّة الوالديّة مكانة هامة في البناء المتكامل
        لنفسية الطفل وفي تعزيز سلوكه السوي، إضافة إلى الارتقاء بتحصيّله الدراسي.
        فعليه، بات من الضروري مزيد توعية الوالدين بمنزلة التربيّة الوالدية
        وبتأثيرها في تنشئة طفلًا متوازنًا نفسيًّا وسلوكيًا وتعليميًّا. وفي هذا
        السياق، قمنا بإعداد هذا الموقع الذي يحتوي على مجموعة من التوصيّات
        والنصائح التي تهدف إلى ارشاد الأولياء على الأساليب الفعالة في التربيّة
        وتوعيتهم بمخاطر التربيّة غير الآمنة وفي انعكاساتها على سلوك الطفل
        ومستواه الدراسي. وقد تم اختيار إسم "ولدك مسؤوليتك" لجذب انتباه أكبر عدد
        ممكن من الآباء والأمهات بهدف تقديم مجموعة من النصائح المفيدة لهم في
        تربيّة أبنائهم
      </div>
      <Link to="/about" className="custom-link">
        <div className="button">المزيد من المعلومات </div>
      </Link>
      <Link to="/advices" className="custom-link">
        <div className="button">تجربة الموقع</div>
      </Link>
    </div>
  );
}

export default Home;
