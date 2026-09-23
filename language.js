(function () {
  "use strict";

  var translations = {
    "Elna3om Prosthetics — Precision Bionics": "Elna3om للأطراف الصناعية — أجهزة حيوية دقيقة",
    "Elna3om Prosthetics": "Elna3om للأطراف الصناعية",
    "Elna3om": "Elna3om",
    "Prosthetics": "الأطراف الصناعية",
    "Home": "الرئيسية",
    "Products": "المنتجات",
    "All Products": "جميع المنتجات",
    "About": "من نحن",
    "About Us": "من نحن",
    "Contact": "اتصل بنا",
    "Request Appointment": "اطلب موعدًا",
    "Book Consultation": "احجز استشارة",
    "Precision Bionics — Series 7": "أجهزة حيوية دقيقة — السلسلة 7",
    "Engineered for": "صُممت من أجل",
    "motion": "الحركة",
    ", restored.": "، واستعادتها.",
    "Myoelectric prosthetics built at the intersection of biomechanics and precision engineering — designed to move the way you do.": "أطراف صناعية كهربائية عضلية تجمع بين الميكانيكا الحيوية والهندسة الدقيقة، لتتحرك بانسيابية طبيعية.",
    "Explore Our Products": "تعرّف على منتجاتنا",
    "Patients Served": "مريضًا خدمناهم",
    "Satisfaction": "نسبة الرضا",
    "Satisfaction Rate": "معدل الرضا",
    "Patents Filed": "براءة اختراع",
    "Product Catalog": "كتالوج المنتجات",
    "Our Prosthetic Devices": "أجهزتنا التعويضية",
    "State-of-the-art solutions engineered for comfort, control, and natural movement.": "حلول متطورة صُممت لتوفير الراحة والتحكم والحركة الطبيعية.",
    "Model A-07": "الطراز A-07",
    "Model L-12": "الطراز L-12",
    "Model H-04": "الطراز H-04",
    "Model K-09": "الطراز K-09",
    "Model M-03": "الطراز M-03",
    "Model S-21": "الطراز S-21",
    "Bionic Arm": "ذراع حيوية",
    "Prosthetic Leg": "ساق صناعية",
    "Robotic Hand": "يد روبوتية",
    "Advanced Knee Joint": "مفصل ركبة متطور",
    "Myoelectric Device": "جهاز كهربائي عضلي",
    "Sports Prosthetic": "طرف صناعي رياضي",
    "Advanced myoelectric arm with precise finger control and natural movement.": "ذراع كهربائية عضلية متطورة تتحكم بالأصابع بدقة وتوفر حركة طبيعية.",
    "Carbon fiber leg with adaptive knee joint and energy return technology.": "ساق من ألياف الكربون بمفصل ركبة متكيف وتقنية لإعادة الطاقة.",
    "Five-finger robotic hand with haptic feedback and grip strength control.": "يد روبوتية بخمسة أصابع مع استشعار لمسي وتحكم بقوة القبضة.",
    "Microprocessor-controlled knee with terrain adaptation and stumble recovery.": "ركبة يتحكم بها معالج دقيق، تتكيف مع التضاريس وتساعد على استعادة التوازن.",
    "Muscle-sensing technology for intuitive control and natural movement.": "تقنية لاستشعار العضلات توفر تحكمًا سهلًا وحركة طبيعية.",
    "High-performance athletic prosthetics for running, swimming, and active lifestyles.": "أطراف صناعية رياضية عالية الأداء للجري والسباحة وأنماط الحياة النشطة.",
    "Learn More": "اكتشف المزيد",
    "View All Products": "عرض جميع المنتجات",
    "Est. 2004": "تأسست عام 2004",
    "About Elna3om": "عن Elna3om",
    "At Elna3om Prosthetics, we are dedicated to transforming lives through innovative bionic technology. Our team of engineers and medical professionals work together to create prosthetic solutions that restore mobility, independence, and confidence.": "في Elna3om للأطراف الصناعية، نعمل على تحسين حياة الناس من خلال تقنيات الأجهزة الحيوية المبتكرة. يتعاون فريق المهندسين والمتخصصين الطبيين لدينا لتطوير حلول تعويضية تعيد الحركة والاستقلالية والثقة.",
    "With over 20 years of experience in prosthetic development, we combine cutting-edge research with patient-centered design to deliver devices that feel natural and perform exceptionally.": "بخبرة تزيد على 20 عامًا في تطوير الأطراف الصناعية، نجمع بين أحدث الأبحاث والتصميم الذي يضع احتياجات المرضى أولًا لنقدم أجهزة مريحة وطبيعية وعالية الأداء.",
    "Get Started": "ابدأ الآن",
    "Request Your Appointment": "اطلب موعدك",
    "Schedule a free consultation with our prosthetic specialists.": "احجز استشارة مجانية مع اختصاصيي الأطراف الصناعية لدينا.",
    "Why Schedule a Consultation?": "لماذا تحجز استشارة؟",
    "Free evaluation of your prosthetic needs": "تقييم مجاني لاحتياجاتك من الأطراف الصناعية",
    "Meet with certified prosthetists": "لقاء مع اختصاصيي أطراف صناعية معتمدين",
    "See product demonstrations": "مشاهدة عروض توضيحية للمنتجات",
    "Discuss insurance and financing options": "مناقشة خيارات التأمين والتمويل",
    "Custom fitting assessment": "تقييم الملاءمة والتجهيز حسب احتياجك",
    "No obligation consultation": "استشارة مجانية دون التزام",
    "Phone:": "الهاتف:",
    "Email:": "البريد الإلكتروني:",
    "Hours:": "ساعات العمل:",
    "All Days 5PM–10PM, Thursday-Friday 9AM–4PM": "يوميًا من 5 إلى 10 مساءً، والخميس والجمعة من 9 صباحًا إلى 4 مساءً",
    "Book Your Consultation": "احجز استشارتك",
    "Full Name": "الاسم الكامل",
    "Email Address": "البريد الإلكتروني",
    "Phone Number": "رقم الهاتف",
    "Appointment Type": "نوع الموعد",
    "Select Appointment Type": "اختر نوع الموعد",
    "Free Consultation": "استشارة مجانية",
    "Prosthetic Fitting": "تركيب طرف صناعي",
    "Follow-up Appointment": "موعد متابعة",
    "Repair Service": "خدمة إصلاح",
    "Preferred Date": "التاريخ المفضل",
    "Preferred Time": "الوقت المفضل",
    "Select Time": "اختر الوقت",
    "Morning (9AM–12PM)": "الصباح (9–12)",
    "Afternoon (12PM–5PM)": "بعد الظهر (12–5)",
    "Evening (5PM–7PM)": "المساء (5–7)",
    "Additional Notes": "ملاحظات إضافية",
    "Get in Touch": "تواصل معنا",
    "Ready to take the next step? Our team is here to help you find the perfect prosthetic solution.": "هل أنت مستعد للخطوة التالية؟ فريقنا هنا لمساعدتك في العثور على الحل التعويضي المناسب.",
    "Address:": "العنوان:",
    "Egypt - Cairo": "مصر - القاهرة",
    "Egypt-Cairo": "مصر - القاهرة",
    "Send a Message": "أرسل رسالة",
    "Your Name": "اسمك",
    "Your Email": "بريدك الإلكتروني",
    "Message": "الرسالة",
    "Send Message": "إرسال الرسالة",
    "Transforming lives through innovative bionic technology since 2004.": "نغيّر حياة الناس بتقنيات الأجهزة الحيوية المبتكرة منذ عام 2004.",
    "Quick Links": "روابط سريعة",
    "Contact Info": "معلومات الاتصال",
    "Newsletter": "النشرة البريدية",
    "Subscribe for updates and news": "اشترك لتصلك التحديثات والأخبار",
    "Your email": "بريدك الإلكتروني",
    "Subscribed!": "تم الاشتراك!",
    "© 2026 Elna3om Prosthetics. All rights reserved.": "© 2026 Elna3om للأطراف الصناعية. جميع الحقوق محفوظة.",
    "All Products — Elna3om Prosthetics": "جميع المنتجات — Elna3om للأطراف الصناعية",
    "← Back to Home": "العودة إلى الرئيسية ←",
    "Full Catalog": "الكتالوج الكامل",
    "All Prosthetic Devices": "جميع الأطراف الصناعية",
    "Browse our complete range of bionic, myoelectric, and passive prosthetic solutions — 20 devices engineered for comfort, control, and natural movement.": "تصفح مجموعتنا الكاملة من الحلول الحيوية والكهربائية العضلية والسلبية — 20 جهازًا صُممت لتوفير الراحة والتحكم والحركة الطبيعية.",
    "View Details": "عرض التفاصيل",
    "Contact for pricing": "تواصل معنا لمعرفة السعر",
    "Above-Knee Prosthetic Leg": "ساق صناعية فوق الركبة",
    "Below-Knee Prosthetic Leg": "ساق صناعية تحت الركبة",
    "Adaptive Ankle Joint": "مفصل كاحل متكيف",
    "Bionic Foot": "قدم حيوية",
    "Cosmetic Silicone Hand": "يد تجميلية من السيليكون",
    "Partial Hand Prosthetic": "طرف صناعي جزئي لليد",
    "Pediatric Prosthetic Arm": "ذراع صناعية للأطفال",
    "Pediatric Prosthetic Leg": "ساق صناعية للأطفال",
    "Prosthetic Hip Joint": "مفصل ورك صناعي",
    "Waterproof Prosthetic Leg": "ساق صناعية مقاومة للماء",
    "Smart Prosthetic Wrist": "معصم صناعي ذكي",
    "Running Blade": "قدم صناعية للجري",
    "Prosthetic Shoulder Joint": "مفصل كتف صناعي",
    "Swim Prosthetic Leg": "ساق صناعية للسباحة",
    "Thank You — Elna3om Prosthetics": "شكرًا لك — Elna3om للأطراف الصناعية",
    "Above-Knee Prosthetic Leg - Elna3om Prosthetics": "ساق صناعية فوق الركبة — Elna3om للأطراف الصناعية",
    "Advanced Knee Joint - Elna3om Prosthetics": "مفصل ركبة متطور — Elna3om للأطراف الصناعية",
    "Adaptive Ankle Joint - Elna3om Prosthetics": "مفصل كاحل متكيف — Elna3om للأطراف الصناعية",
    "Below-Knee Prosthetic Leg - Elna3om Prosthetics": "ساق صناعية تحت الركبة — Elna3om للأطراف الصناعية",
    "Bionic Arm - Elna3om Prosthetics": "ذراع حيوية — Elna3om للأطراف الصناعية",
    "Bionic Foot - Elna3om Prosthetics": "قدم حيوية — Elna3om للأطراف الصناعية",
    "Cosmetic Silicone Hand - Elna3om Prosthetics": "يد تجميلية من السيليكون — Elna3om للأطراف الصناعية",
    "Partial Hand Prosthetic - Elna3om Prosthetics": "طرف صناعي جزئي لليد — Elna3om للأطراف الصناعية",
    "Myoelectric Device - Elna3om Prosthetics": "جهاز كهربائي عضلي — Elna3om للأطراف الصناعية",
    "Pediatric Prosthetic Arm - Elna3om Prosthetics": "ذراع صناعية للأطفال — Elna3om للأطراف الصناعية",
    "Pediatric Prosthetic Leg - Elna3om Prosthetics": "ساق صناعية للأطفال — Elna3om للأطراف الصناعية",
    "Prosthetic Hip Joint - Elna3om Prosthetics": "مفصل ورك صناعي — Elna3om للأطراف الصناعية",
    "Prosthetic Leg - Elna3om Prosthetics": "ساق صناعية — Elna3om للأطراف الصناعية",
    "Robotic Hand - Elna3om Prosthetics": "يد روبوتية — Elna3om للأطراف الصناعية",
    "Running Blade - Elna3om Prosthetics": "قدم صناعية للجري — Elna3om للأطراف الصناعية",
    "Prosthetic Shoulder Joint - Elna3om Prosthetics": "مفصل كتف صناعي — Elna3om للأطراف الصناعية",
    "Smart Prosthetic Wrist - Elna3om Prosthetics": "معصم صناعي ذكي — Elna3om للأطراف الصناعية",
    "Sports Prosthetic - Elna3om Prosthetics": "طرف صناعي رياضي — Elna3om للأطراف الصناعية",
    "Swim Prosthetic Leg - Elna3om Prosthetics": "ساق صناعية للسباحة — Elna3om للأطراف الصناعية",
    "Waterproof Prosthetic Leg - Elna3om Prosthetics": "ساق صناعية مقاومة للماء — Elna3om للأطراف الصناعية",
    "Advanced Knee Joint - Footer": "مفصل ركبة متطور — التذييل",
    "Elna3om Prosthetics — Footer": "Elna3om للأطراف الصناعية — التذييل",
    "Consultation Requested": "تم طلب الاستشارة",
    "Thank you — your appointment request has been sent. A member of our team will reach out shortly to confirm your consultation.": "شكرًا لك — تم إرسال طلب الموعد. سيتواصل معك أحد أعضاء فريقنا قريبًا لتأكيد الاستشارة.",
    "Weight": "الوزن",
    "Max User Weight": "أقصى وزن للمستخدم",
    "Knee Mechanism": "آلية الركبة",
    "Response Time": "زمن الاستجابة",
    "Battery Type": "نوع البطارية",
    "Battery Life": "عمر البطارية",
    "Charging Time": "مدة الشحن",
    "Materials": "المواد",
    "Warranty": "الضمان",
    "Flexion Range": "مدى الثني",
    "Abduction Range": "مدى الإبعاد",
    "Extension Speed": "سرعة المد",
    "Motion Range": "مدى الحركة",
    "Mechanism": "الآلية",
    "Compatibility": "التوافق",
    "Maintenance": "الصيانة",
    "Socket Type": "نوع التجويف",
    "Foot Type": "نوع القدم",
    "Fitting Time": "مدة التجهيز",
    "Activity Level": "مستوى النشاط",
    "Weight Capacity": "الوزن الأقصى",
    "Knee Range": "مدى حركة الركبة",
    "Signal Channels": "قنوات الإشارة",
    "Sampling Rate": "معدل أخذ العينات",
    "Recommended Age": "العمر المناسب",
    "Adjustability": "إمكانية الضبط",
    "Resizing": "تعديل المقاس",
    "Skin Tone Matching": "مطابقة لون البشرة",
    "Fabrication Time": "مدة التصنيع",
    "Lifespan": "العمر الافتراضي",
    "Care": "العناية",
    "Weight (per digit)": "الوزن (لكل إصبع)",
    "Grip Force (per digit)": "قوة القبضة (لكل إصبع)",
    "Digits Supported": "عدد الأصابع المدعومة",
    "Category Range": "نطاق الفئات",
    "Water Rating": "تصنيف مقاومة الماء",
    "Rotation Range": "مدى الدوران",
    "Connectivity": "الاتصال",
    "Electronics": "الإلكترونيات",
    "Water Compatibility": "ملاءمة الاستخدام في الماء",
    "Lift Capacity": "قدرة الرفع",
    "Grip Force": "قوة القبضة",
    "Energy Return": "إعادة الطاقة",
    "Impact Rating": "تصنيف مقاومة الصدمات",
    "Water Resistance": "مقاومة الماء",
    "Temperature Range": "نطاق درجة الحرارة",
    "Sports Compatibility": "الرياضات المتوافقة",
    "Material": "المادة",
    "Attachment": "طريقة التثبيت",
    "Recommended Use": "الاستخدام الموصى به",
    "Interested in This Product?": "هل تهتم بهذا المنتج؟",
    "Request an Appointment →": "اطلب موعدًا ←",
    "Request Appointment →": "اطلب موعدًا ←",
    "Schedule a free consultation to see if the ": "احجز استشارة مجانية لمعرفة ما إذا كان ",
    " is right for you.": " مناسبًا لك.",
    "Technical Specifications": "المواصفات الفنية",
    "← Back to All Products": "العودة إلى جميع المنتجات ←",
    "← Back to Products": "العودة إلى المنتجات ←",
    "Home": "الرئيسية",
    "Precision Bionics": "أجهزة حيوية دقيقة"
  };

  Object.assign(translations, {
    "A transfemoral prosthesis featuring a microprocessor-controlled knee that adjusts stance and swing resistance in real time for stability on stairs, ramps, and uneven terrain.": "طرف صناعي فوق الركبة مزود بمفصل يتحكم به معالج دقيق، ويضبط مقاومة الوقوف والتأرجح لحظيًا لتحقيق الثبات على السلالم والمنحدرات والأرض غير المستوية.",
    "Microprocessor-controlled knee unit": "وحدة ركبة يتحكم بها معالج دقيق",
    "Real-time stance and swing-phase adjustment": "ضبط لحظي لمرحلتي الارتكاز والتأرجح",
    "Stumble-recovery response system": "نظام استجابة لاستعادة التوازن عند التعثر",
    "Carbon fiber pylon and energy-return foot": "دعامة من ألياف الكربون وقدم تعيد الطاقة",
    "Bluetooth activity mode switching": "تبديل أوضاع النشاط عبر البلوتوث",
    "Battery life: 2 days on single charge": "عمر البطارية: يومان للشحنة الواحدة",
    "Custom ischial containment socket": "تجويف مخصص لدعم عظمة الإسك",
    "Suitable for stairs, ramps, and uneven ground": "مناسبة للسلالم والمنحدرات والأرض غير المستوية",
    "Our microprocessor-controlled knee joint represents the next generation in prosthetic technology. With intelligent terrain adaptation and stumble recovery, it provides stability and confidence in any walking situation.": "يمثل مفصل الركبة الذي يتحكم به معالج دقيق جيلًا جديدًا من تقنيات الأطراف الصناعية. ويتكيف بذكاء مع التضاريس ويساعد على استعادة التوازن، ليمنحك الثبات والثقة أثناء المشي.",
    "Microprocessor-controlled movement": "حركة يتحكم بها معالج دقيق",
    "Automatic terrain adaptation": "تكيف تلقائي مع التضاريس",
    "Stumble recovery technology": "تقنية استعادة التوازن عند التعثر",
    "Multiple activity modes (walking, stairs, cycling)": "أوضاع متعددة للنشاط (المشي والسلالم وركوب الدراجة)",
    "Real-time gait analysis": "تحليل لحظي للمشي",
    "Bluetooth connectivity for adjustments": "اتصال بلوتوث لإجراء الضبط",
    "Low energy consumption": "استهلاك منخفض للطاقة",
    "Weather-resistant construction": "هيكل مقاوم للعوامل الجوية",
    "A hydraulic ankle unit that continuously adjusts to slopes and uneven ground, keeping the foot flat and stable for confident walking on any surface.": "وحدة كاحل هيدروليكية تتكيف باستمرار مع المنحدرات والأرض غير المستوية، وتحافظ على استواء القدم وثباتها للمشي بثقة على مختلف الأسطح.",
    "Hydraulic dorsiflexion/plantarflexion adaptation": "تكيف هيدروليكي لحركتي رفع القدم وخفضها",
    "Automatic slope and incline compensation": "تعويض تلقائي للمنحدرات والميل",
    "Reduced strain on knee and hip joints": "تقليل الضغط على مفصلي الركبة والورك",
    "Compatible with most foot modules": "متوافق مع معظم وحدات القدم",
    "Sealed, low-maintenance hydraulic unit": "وحدة هيدروليكية محكمة قليلة الصيانة",
    "Quiet, smooth motion": "حركة هادئة وسلسة",
    "Improves stability on stairs and ramps": "يعزز الثبات على السلالم والمنحدرات",
    "Lightweight aluminum housing": "هيكل من الألومنيوم خفيف الوزن",
    "A transtibial prosthesis combining a total-surface-bearing socket with a lightweight carbon fiber pylon and energy-return foot for everyday comfort and mobility.": "طرف صناعي تحت الركبة يجمع بين تجويف يوزع الضغط على كامل السطح ودعامة خفيفة من ألياف الكربون وقدم تعيد الطاقة لتوفير الراحة والحركة اليومية.",
    "Total-surface-bearing socket for even pressure": "تجويف يوزع الضغط بالتساوي على كامل السطح",
    "Lightweight carbon fiber pylon": "دعامة خفيفة من ألياف الكربون",
    "Energy-return dynamic foot module": "وحدة قدم ديناميكية تعيد الطاقة",
    "Gel or pin liner options": "خيارات بطانة هلامية أو دبوس تثبيت",
    "Adjustable cosmetic foam cover": "غطاء تجميلي إسفنجي قابل للضبط",
    "Suitable for daily walking and light activity": "مناسبة للمشي اليومي والأنشطة الخفيفة",
    "Quick socket adjustments for volume changes": "تعديلات سريعة للتجويف عند تغير حجم الطرف",
    "Breathable, moisture-wicking liner": "بطانة تسمح بالتهوية وتمتص الرطوبة",
    "Our advanced bionic arm represents the pinnacle of prosthetic technology. Featuring state-of-the-art myoelectric sensors and precision engineering, this device provides natural movement and exceptional control for daily activities.": "تمثل ذراعنا الحيوية المتطورة قمة تقنيات الأطراف الصناعية. وبفضل مستشعرات كهربائية عضلية متقدمة وهندسة دقيقة، توفر حركة طبيعية وتحكمًا ممتازًا في الأنشطة اليومية.",
    "Myoelectric muscle sensors for intuitive control": "مستشعرات عضلية كهربائية لتحكم سهل وطبيعي",
    "Individual finger movement with 6 degrees of freedom": "حركة مستقلة للأصابع بست درجات حرية",
    "Haptic feedback system for sensory input": "نظام استجابة لمسية للإحساس",
    "Carbon fiber construction for lightweight durability": "هيكل متين وخفيف من ألياف الكربون",
    "Bluetooth connectivity for mobile app control": "اتصال بلوتوث للتحكم عبر تطبيق الهاتف",
    "Battery life: 3-5 days on single charge": "عمر البطارية: من 3 إلى 5 أيام للشحنة الواحدة",
    "Water-resistant design for everyday use": "تصميم مقاوم للماء للاستخدام اليومي",
    "Customizable grip patterns and presets": "أنماط قبضة وإعدادات مسبقة قابلة للتخصيص",
    "The Bionic Foot uses microprocessor-controlled ankle articulation to automatically adjust to terrain, giving a natural, energy-efficient gait across stairs, slopes, and uneven ground.": "تستخدم القدم الحيوية مفصل كاحل يتحكم به معالج دقيق ليتكيف تلقائيًا مع التضاريس، ويوفر مشية طبيعية وموفرة للطاقة على السلالم والمنحدرات والأرض غير المستوية.",
    "Microprocessor-controlled ankle articulation": "مفصل كاحل يتحكم به معالج دقيق",
    "Real-time terrain adaptation (stairs, slopes, uneven ground)": "تكيف لحظي مع التضاريس (السلالم والمنحدرات والأرض غير المستوية)",
    "Carbon fiber energy-return keel": "دعامة من ألياف الكربون تعيد الطاقة",
    "Adjustable stiffness for activity level": "صلابة قابلة للضبط حسب مستوى النشاط",
    "Shock-absorbing heel strike system": "نظام لامتصاص صدمة ملامسة الكعب",
    "Battery life: 2 days on single charge": "عمر البطارية: يومان للشحنة الواحدة",
    "Water-resistant housing": "هيكل مقاوم للماء",
    "Compatible with standard footwear": "متوافق مع الأحذية العادية",
    "A hand-painted, medical-grade silicone restoration designed to closely match natural skin tone, texture, and hand contours for a seamless, lifelike appearance.": "بديل لليد من السيليكون الطبي مطلي يدويًا، صُمم لمطابقة لون البشرة الطبيعي وملمسها وتفاصيل اليد بدقة لمظهر واقعي ومتناسق.",
    "Medical-grade silicone construction": "مصنوع من سيليكون بدرجة طبية",
    "Hand-painted to match individual skin tone": "مطلي يدويًا لمطابقة لون البشرة",
    "Realistic texture, nail beds, and creases": "ملمس واقعي مع تفاصيل الأظافر والثنيات",
    "Lightweight passive design": "تصميم سلبي خفيف الوزن",
    "UV-resistant, stain-resistant finish": "طبقة مقاومة للأشعة فوق البنفسجية والبقع",
    "Custom sculpted from a mold of the sound hand": "تصنيع مخصص باستخدام قالب اليد السليمة",
    "Discreet, low-profile suspension sleeve": "كم تثبيت أنيق ومنخفض الظهور",
    "Washable and easy to maintain": "قابل للغسل وسهل العناية",
    "Individually powered finger prostheses that restore grip and pinch function for partial hand amputations, driven by independent micro-motors at each remaining digit.": "أصابع صناعية تعمل بشكل مستقل لاستعادة وظائف القبض والالتقاط بعد البتر الجزئي لليد، ويشغل كل إصبع محرك دقيق خاص به.",
    "Independently powered finger digits": "أصابع تعمل بشكل مستقل",
    "Restores pinch and cylindrical grip": "استعادة حركة الالتقاط والقبضة الأسطوانية",
    "Micro-motor actuation per finger": "محرك دقيق مستقل لكل إصبع",
    "EMG or push-button trigger control": "تحكم بإشارات تخطيط العضلات أو بزر ضغط",
    "Custom-fit low-profile digit sockets": "تجاويف أصابع مخصصة منخفضة الظهور",
    "Lightweight, water-resistant housing": "هيكل خفيف الوزن ومقاوم للماء",
    "Battery life: 1 day per charge": "عمر البطارية: يوم واحد لكل شحنة",
    "Adjustable grip strength presets": "إعدادات مسبقة قابلة للضبط لقوة القبضة",
    "Our advanced myoelectric device uses cutting-edge muscle-sensing technology to provide intuitive control of prosthetic limbs. By detecting electrical signals from remaining muscles, it enables natural, thought-controlled movement.": "يستخدم جهازنا الكهربائي العضلي المتطور تقنية حديثة لاستشعار العضلات والتحكم بسهولة بالأطراف الصناعية. ويكشف الإشارات الكهربائية الصادرة عن العضلات المتبقية لتمكين حركة طبيعية تستجيب لإرادة المستخدم.",
    "High-precision EMG sensors": "مستشعرات تخطيط عضلات عالية الدقة",
    "Pattern recognition for multiple movements": "التعرف على الأنماط لتنفيذ حركات متعددة",
    "Self-learning algorithm adaptation": "خوارزمية تكيف ذاتية التعلم",
    "Wireless muscle signal transmission": "نقل لاسلكي لإشارات العضلات",
    "Low-latency response system": "نظام استجابة بزمن تأخير منخفض",
    "Compatible with various prosthetic types": "متوافق مع أنواع مختلفة من الأطراف الصناعية",
    "Easy calibration process": "عملية معايرة سهلة",
    "Mobile app for monitoring and adjustment": "تطبيق للهاتف للمراقبة والضبط",
    "Built specifically for growing children, this lightweight myoelectric arm features adjustable sizing, colorful interchangeable shells, and gentle sensor calibration for young users.": "ذراع كهربائية عضلية خفيفة صُممت خصيصًا للأطفال في طور النمو، بمقاسات قابلة للضبط وأغطية ملونة قابلة للتبديل ومعايرة مريحة للمستشعرات.",
    "Growth-adjustable socket and forearm length": "تجويف وطول ساعد قابلان للضبط مع نمو الطفل",
    "Lightweight pediatric-scale myoelectric sensors": "مستشعرات كهربائية عضلية خفيفة ومناسبة للأطفال",
    "Interchangeable, colorful shell designs": "أغطية ملونة قابلة للتبديل",
    "Simplified single-site or dual-site control": "تحكم مبسط بموقع واحد أو موقعين",
    "Soft-touch, child-safe finish": "سطح ناعم وآمن للأطفال",
    "Battery life: 2 days on single charge": "عمر البطارية: يومان للشحنة الواحدة",
    "Free resizing service as the child grows": "خدمة تعديل المقاس مجانًا مع نمو الطفل",
    "Occupational therapy support included": "يشمل دعم العلاج الوظيفي",
    "A lightweight, growth-adaptable prosthetic leg designed for active children, with a modular pylon that extends as they grow and a durable foot module built for play.": "ساق صناعية خفيفة قابلة للتكيف مع نمو الأطفال النشطين، بدعامة معيارية تطول مع نموهم ووحدة قدم متينة مناسبة للعب.",
    "Modular pylon that extends with growth": "دعامة معيارية قابلة للتمديد مع النمو",
    "Lightweight materials for active kids": "مواد خفيفة للأطفال النشطين",
    "Durable, impact-resistant foot module": "وحدة قدم متينة ومقاومة للصدمات",
    "Colorful, customizable cosmetic covers": "أغطية تجميلية ملونة قابلة للتخصيص",
    "Free length adjustments as the child grows": "تعديل الطول مجانًا مع نمو الطفل",
    "Reinforced socket for rough play": "تجويف معزز للعب النشط",
    "Easy-clean, washable liner": "بطانة قابلة للغسل وسهلة التنظيف",
    "Pediatric physical therapy program included": "يشمل برنامج علاج طبيعي للأطفال",
    "Engineered for full hip disarticulation cases, this prosthetic hip joint restores balanced, symmetrical gait with a polycentric hydraulic mechanism that mimics natural hip rotation.": "صُمم هذا المفصل الصناعي لحالات بتر مفصل الورك بالكامل، ويساعد على استعادة مشية متوازنة ومتناظرة بآلية هيدروليكية متعددة المحاور تحاكي دوران الورك الطبيعي.",
    "Polycentric hydraulic hip mechanism": "آلية ورك هيدروليكية متعددة المحاور",
    "Symmetrical, balanced gait pattern": "نمط مشي متوازن ومتناظر",
    "Stance-phase stability control": "تحكم بالثبات أثناء مرحلة الارتكاز",
    "Adjustable swing resistance": "مقاومة تأرجح قابلة للضبط",
    "Lightweight titanium frame": "هيكل تيتانيوم خفيف الوزن",
    "Compatible with above-knee components": "متوافق مع مكونات الأطراف فوق الركبة",
    "Low-maintenance sealed hydraulics": "نظام هيدروليكي محكم قليل الصيانة",
    "Custom socket fitting available": "يتوفر تجهيز تجويف مخصص",
    "Engineered for maximum mobility and comfort, our prosthetic leg features advanced carbon fiber technology and an adaptive knee joint that mimics natural movement patterns for walking, running, and everyday activities.": "صُممت ساقنا الصناعية لتوفير أقصى قدر من الحركة والراحة، وتتميز بتقنية متطورة من ألياف الكربون ومفصل ركبة متكيف يحاكي الحركة الطبيعية للمشي والجري والأنشطة اليومية.",
    "Carbon fiber construction for ultra-lightweight design": "هيكل من ألياف الكربون لتصميم فائق الخفة",
    "Adaptive microprocessor knee joint": "مفصل ركبة متكيف يتحكم به معالج دقيق",
    "Energy return technology for natural gait": "تقنية لإعادة الطاقة من أجل مشية طبيعية",
    "Terrain adaptation system": "نظام للتكيف مع التضاريس",
    "Stumble recovery mechanism": "آلية لاستعادة التوازن عند التعثر",
    "Water-resistant and durable": "مقاومة للماء ومتينة",
    "Custom socket fitting for optimal comfort": "تجهيز تجويف مخصص لراحة مثالية",
    "Multiple activity modes available": "تتوفر أوضاع متعددة للنشاط",
    "Our five-finger robotic hand offers unprecedented dexterity and control. With individual finger movement and advanced haptic feedback, this device enables fine motor skills for delicate tasks and everyday activities.": "توفر اليد الروبوتية ذات الأصابع الخمسة مهارة وتحكمًا متقدمين. وتتيح حركة مستقلة لكل إصبع واستجابة لمسية متطورة أداء الحركات الدقيقة والمهام اليومية.",
    "Five independently articulated fingers": "خمسة أصابع مفصلية تعمل بشكل مستقل",
    "Haptic feedback for sensory perception": "استجابة لمسية لتحسين الإحساس",
    "Adjustable grip strength control": "تحكم قابل للضبط بقوة القبضة",
    "Multiple grip patterns (pinch, power, precision)": "أنماط قبض متعددة (التقاط وقوة ودقة)",
    "Myoelectric muscle signal sensing": "استشعار الإشارات الكهربائية العضلية",
    "Self-calibrating sensors": "مستشعرات ذاتية المعايرة",
    "Low-profile design for natural appearance": "تصميم منخفض الظهور لمظهر طبيعي",
    "Smartphone app for customization": "تطبيق هاتف ذكي للتخصيص",
    "A high-performance J-shaped carbon fiber running blade engineered for sprint and long-distance athletes, storing and returning energy with every stride for maximum propulsion.": "قدم جري عالية الأداء على شكل حرف J من ألياف الكربون، صُممت للعدائين لمسافات قصيرة وطويلة لتخزين الطاقة وإعادتها مع كل خطوة لتحقيق دفع أقوى.",
    "J-shaped carbon fiber energy-storing blade": "قدم على شكل J من ألياف الكربون تخزن الطاقة",
    "Optimized for sprint and distance running": "محسنة لسباقات السرعة والجري لمسافات طويلة",
    "Multiple stiffness categories by body weight/speed": "درجات صلابة متعددة حسب الوزن والسرعة",
    "Lightweight single-piece construction": "تصميم خفيف من قطعة واحدة",
    "Interchangeable running-specific socket adapter": "وصلة تجويف قابلة للتبديل ومخصصة للجري",
    "Weather-resistant carbon layup": "طبقات كربون مقاومة للعوامل الجوية",
    "Used by competitive para-athletes": "يستخدمها رياضيو الألعاب البارالمبية التنافسيون",
    "Custom category (foot length/category) sizing": "مقاس مخصص حسب طول القدم والفئة",
    "Designed for shoulder disarticulation and forequarter amputations, this passive-position, lockable shoulder joint provides multi-axis positioning to support arm and hand components.": "صُمم مفصل الكتف القابل للقفل لحالات بتر الكتف أو الطرف العلوي، ويوفر أوضاعًا متعددة المحاور لدعم مكونات الذراع واليد.",
    "Multi-axis lockable positioning": "أوضاع متعددة المحاور قابلة للقفل",
    "Friction-adjustable abduction and flexion": "ضبط حركة الإبعاد والثني بالاحتكاك",
    "Low-profile design under clothing": "تصميم منخفض الظهور تحت الملابس",
    "Supports full arm and hand component chain": "يدعم سلسلة مكونات الذراع واليد كاملة",
    "Lightweight titanium housing": "هيكل تيتانيوم خفيف الوزن",
    "Compatible with body-powered or myoelectric arms": "متوافق مع الأذرع التي تعمل بحركة الجسم أو كهربائيًا عضليًا",
    "Custom harness integration": "إمكانية دمجه مع حزام تثبيت مخصص",
    "Comfortable padded socket interface": "واجهة تجويف مبطنة ومريحة",
    "A powered wrist rotation and flexion module that pairs with any myoelectric hand to add natural pouring, reaching, and turning motions controlled through app-programmable gestures.": "وحدة معصم تعمل بالطاقة للدوران والثني، تتصل بأي يد كهربائية عضلية وتضيف حركات طبيعية للسكب والوصول والإدارة، ويمكن التحكم بها بإيماءات قابلة للبرمجة عبر التطبيق.",
    "Powered wrist rotation and flexion/extension": "دوران وثني ومد للمعصم بالطاقة",
    "App-programmable gesture control": "تحكم بالإيماءات قابل للبرمجة عبر التطبيق",
    "Compatible with most myoelectric hand systems": "متوافق مع معظم أنظمة الأيدي الكهربائية العضلية",
    "Quick-disconnect wrist unit for easy swapping": "وحدة معصم سريعة الفصل لسهولة التبديل",
    "Silent, low-vibration motor design": "محرك هادئ منخفض الاهتزاز",
    "Battery life: 1.5 days on single charge": "عمر البطارية: يوم ونصف للشحنة الواحدة",
    "Auto-return to neutral position": "عودة تلقائية إلى الوضع المحايد",
    "Firmware updates via companion app": "تحديثات البرنامج الثابت عبر التطبيق المرافق",
    "Designed for athletes and active individuals, our sports prosthetic line delivers high performance for running, swimming, and various athletic activities. Engineered with energy-return technology and lightweight materials for maximum speed and agility.": "صُممت مجموعة الأطراف الصناعية الرياضية للرياضيين والأشخاص النشطين، وتوفر أداءً عاليًا للجري والسباحة ومختلف الأنشطة. تجمع بين تقنية إعادة الطاقة والمواد خفيفة الوزن لتحقيق السرعة والرشاقة.",
    "Carbon fiber blade design for energy return": "تصميم قدم من ألياف الكربون لإعادة الطاقة",
    "Specialized running and swimming models": "طرازات متخصصة للجري والسباحة",
    "Impact absorption technology": "تقنية لامتصاص الصدمات",
    "Quick-release mechanism for easy changes": "آلية سريعة للفصل والتبديل بسهولة",
    "Weather-resistant and durable": "مقاوم للعوامل الجوية ومتين",
    "Customizable for specific sports": "قابل للتخصيص حسب نوع الرياضة",
    "Lightweight construction (under 1 kg)": "تصميم خفيف الوزن (أقل من 1 كجم)",
    "Competition-certified design": "تصميم معتمد للمنافسات",
    "A lightweight, fin-like swim prosthesis that attaches quickly to an existing socket, providing efficient propulsion and buoyancy control in the pool or open water.": "طرف صناعي خفيف للسباحة يشبه الزعنفة، يثبت بسرعة بالتجويف الموجود ويوفر دفعًا فعالًا وتحكمًا بالطفو في المسبح أو المياه المفتوحة.",
    "Flexible fin-style foot for propulsion": "قدم مرنة شبيهة بالزعنفة لتوفير الدفع",
    "Rapid quick-release attachment to socket": "وصلة سريعة الفصل للتثبيت بالتجويف",
    "Buoyant, corrosion-proof materials": "مواد طافية ومقاومة للتآكل",
    "No electronics — fully mechanical and safe in water": "بلا مكونات إلكترونية — ميكانيكي بالكامل وآمن في الماء",
    "Reduces drag with hydrodynamic shaping": "يقلل مقاومة الماء بتصميم انسيابي",
    "Lightweight for easy transport": "خفيف لسهولة النقل",
    "Compatible with existing below or above-knee sockets": "متوافق مع تجاويف الأطراف الموجودة تحت الركبة أو فوقها",
    "Freshwater and saltwater safe": "مناسب للمياه العذبة والمالحة",
    "Fully sealed for swimming, showering, and wet environments, this prosthetic leg pairs a corrosion-resistant hydraulic knee with a sealed foot module rated for complete submersion.": "ساق صناعية محكمة بالكامل للسباحة والاستحمام والبيئات الرطبة، تجمع بين ركبة هيدروليكية مقاومة للتآكل ووحدة قدم محكمة مناسبة للغمر الكامل.",
    "Fully sealed, submersible construction (IP68)": "هيكل محكم قابل للغمر بالكامل (IP68)",
    "Corrosion-resistant hydraulic knee unit": "وحدة ركبة هيدروليكية مقاومة للتآكل",
    "Marine-grade titanium and stainless hardware": "مكونات من التيتانيوم والفولاذ المقاوم للصدأ بدرجة بحرية",
    "Quick-drain drainage ports": "منافذ تصريف سريعة",
    "Non-slip textured foot sole": "نعل قدم محكم مانع للانزلاق",
    "Suitable for pool, beach, and shower use": "مناسبة للمسبح والشاطئ والاستحمام",
    "Rust-proof pyramid connectors": "وصلات هرمية مقاومة للصدأ",
    "Lightweight despite full waterproofing": "خفيفة الوزن رغم عزلها الكامل للماء",
    "All days": "طوال أيام الأسبوع",
    "123 Innovation Drive": "123 شارع الابتكار",
    "Tech City, TC 12345": "مدينة التقنية، TC 12345",
    "Schedule a free consultation to see if the Above-Knee Prosthetic Leg is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كانت الساق الصناعية فوق الركبة مناسبة لك.",
    "Schedule a free consultation to see if the Advanced Knee Joint is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كان مفصل الركبة المتطور مناسبًا لك.",
    "Schedule a free consultation to see if the Adaptive Ankle Joint is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كان مفصل الكاحل المتكيف مناسبًا لك.",
    "Schedule a free consultation to see if the Below-Knee Prosthetic Leg is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كانت الساق الصناعية تحت الركبة مناسبة لك.",
    "Schedule a free consultation to see if the Bionic Arm is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كان الذراع الحيوي مناسبًا لك.",
    "Schedule a free consultation to see if the Bionic Foot is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كانت القدم الحيوية مناسبة لك.",
    "Schedule a free consultation to see if the Cosmetic Silicone Hand is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كانت اليد التجميلية المصنوعة من السيليكون مناسبة لك.",
    "Schedule a free consultation to see if the Partial Hand Prosthetic is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كان الطرف الصناعي الجزئي لليد مناسبًا لك.",
    "Schedule a free consultation to see if the Myoelectric Device is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كان الجهاز الكهربائي العضلي مناسبًا لك.",
    "Schedule a free consultation to see if the Pediatric Prosthetic Arm is right for your child.": "احجز استشارة مجانية لمعرفة ما إذا كان الذراع الصناعي للأطفال مناسبًا لطفلك.",
    "Schedule a free consultation to see if the Pediatric Prosthetic Leg is right for your child.": "احجز استشارة مجانية لمعرفة ما إذا كانت الساق الصناعية للأطفال مناسبة لطفلك.",
    "Schedule a free consultation to see if the Prosthetic Hip Joint is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كان مفصل الورك الصناعي مناسبًا لك.",
    "Schedule a free consultation to see if the Prosthetic Leg is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كانت الساق الصناعية مناسبة لك.",
    "Schedule a free consultation to see if the Robotic Hand is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كانت اليد الروبوتية مناسبة لك.",
    "Schedule a free consultation to see if the Running Blade is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كانت قدم الجري الصناعية مناسبة لك.",
    "Schedule a free consultation to see if the Prosthetic Shoulder Joint is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كان مفصل الكتف الصناعي مناسبًا لك.",
    "Schedule a free consultation to see if the Smart Prosthetic Wrist is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كان المعصم الصناعي الذكي مناسبًا لك.",
    "Schedule a free consultation to see if the Sports Prosthetic is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كان الطرف الصناعي الرياضي مناسبًا لك.",
    "Schedule a free consultation to see if the Swim Prosthetic Leg is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كانت ساق السباحة الصناعية مناسبة لك.",
    "Schedule a free consultation to see if the Waterproof Prosthetic Leg is right for you.": "احجز استشارة مجانية لمعرفة ما إذا كانت الساق الصناعية المقاومة للماء مناسبة لك.",
    "Titanium, carbon fiber": "تيتانيوم وألياف كربون",
    "Titanium, carbon fiber, aluminum": "تيتانيوم وألياف كربون وألومنيوم",
    "Carbon fiber, titanium": "ألياف كربون وتيتانيوم",
    "Carbon fiber, titanium, silicone": "ألياف كربون وتيتانيوم وسيليكون",
    "Carbon fiber, titanium, aluminum": "ألياف كربون وتيتانيوم وألومنيوم",
    "Carbon fiber, titanium, polymer": "ألياف كربون وتيتانيوم وبوليمر",
    "Carbon fiber, thermoplastic": "ألياف كربون ومواد لدائنية حرارية",
    "Carbon fiber composite, silicone": "مركب ألياف كربون وسيليكون",
    "Carbon fiber, silicone, polymers": "ألياف كربون وسيليكون وبوليمرات",
    "Medical-grade silicone, titanium": "سيليكون بدرجة طبية وتيتانيوم",
    "Lightweight polymer, aluminum": "بوليمر خفيف وألومنيوم",
    "Lightweight polymer, silicone": "بوليمر خفيف وسيليكون",
    "Titanium, high-strength polymer": "تيتانيوم وبوليمر عالي المتانة",
    "Titanium, carbon fiber, steel core": "تيتانيوم وألياف كربون وقلب فولاذي",
    "Aluminum, stainless steel": "ألومنيوم وفولاذ مقاوم للصدأ",
    "Titanium, stainless steel, marine polymer": "تيتانيوم وفولاذ مقاوم للصدأ وبوليمر بحري",
    "Marine-grade polymer, silicone": "بوليمر بحري وسيليكون",
    "Lithium-ion rechargeable": "بطارية ليثيوم أيون قابلة لإعادة الشحن",
    "Microprocessor-controlled hydraulic": "نظام هيدروليكي يتحكم به معالج دقيق",
    "Sealed hydraulic cylinder": "أسطوانة هيدروليكية محكمة",
    "Hydraulic, polycentric": "هيدروليكي متعدد المحاور",
    "Friction-locking, multi-axis": "قفل احتكاكي متعدد المحاور",
    "Sealed hydraulic, single-axis": "نظام هيدروليكي محكم أحادي المحور",
    "Total surface bearing (TSB)": "توزيع الضغط على كامل السطح (TSB)",
    "Carbon fiber energy-return": "ألياف كربون مع إعادة الطاقة",
    "Universal pyramid connector": "وصلة هرمية عامة",
    "Standard forearm/hand adapters": "وصلات قياسية للساعد واليد",
    "Standard pyramid adapter": "وصلة هرمية قياسية",
    "Quick-release pyramid adapter": "وصلة هرمية سريعة الفصل",
    "Suction or adhesive suspension": "تثبيت بالشفط أو بمادة لاصقة",
    "Annual hydraulic check": "فحص هيدروليكي سنوي",
    "Annual hydraulic service": "صيانة هيدروليكية سنوية",
    "Rinse and air-dry after use": "اشطفه واتركه ليجف في الهواء بعد الاستخدام",
    "Freshwater rinse after saltwater use": "اشطفه بالماء العذب بعد استخدامه في المياه المالحة",
    "Mild soap and water": "ماء وصابون لطيف",
    "Pool, lake, ocean swimming": "السباحة في المسبح والبحيرة والبحر",
    "Swimming, showering, beach, boating": "السباحة والاستحمام والشاطئ وركوب القوارب",
    "Track, field, and sprint training": "المضمار والملعب وتدريبات السرعة",
    "Running, swimming, cycling, more": "الجري والسباحة وركوب الدراجة وغيرها",
    "2 years comprehensive": "ضمان شامل لمدة سنتين",
    "3 years comprehensive": "ضمان شامل لمدة 3 سنوات",
    "4 years comprehensive": "ضمان شامل لمدة 4 سنوات",
    "1 year on material defects": "سنة واحدة على عيوب المواد",
    "1 year against manufacturing defects": "سنة واحدة ضد عيوب التصنيع",
    "2 years against manufacturing defects": "سنتان ضد عيوب التصنيع",
    "2 years, includes free resizing": "سنتان، يشمل تعديل المقاس مجانًا",
    "3 years comprehensive": "ضمان شامل لمدة 3 سنوات",
    "4 years comprehensive": "ضمان شامل لمدة 4 سنوات",
    "K2–K3 (household to community)": "K2–K3 (من الاستخدام المنزلي إلى المجتمعي)",
    "High — designed for play and sport": "مرتفع — مصمم للعب والرياضة",
    "Category 1–6 (by weight/activity)": "الفئات 1–6 (حسب الوزن والنشاط)",
    "Up to 95%": "حتى 95٪",
    "Up to 95% efficiency": "كفاءة تصل إلى 95٪",
    "IP68 (fully submersible)": "IP68 (قابل للغمر بالكامل)",
    "High-impact certified": "معتمد لتحمل الصدمات العالية",
    "Annual hydraulic check": "فحص هيدروليكي سنوي",
    "Bluetooth 5.0": "بلوتوث 5.0",
    "None (fully mechanical)": "لا يوجد (ميكانيكي بالكامل)",
    "Fresh and saltwater": "المياه العذبة والمالحة",
    "Universal pyramid connector": "وصلة هرمية عامة",
    "Adjustable 0.5-2 m/s": "قابل للضبط من 0.5 إلى 2 متر/ثانية",
    "0-145 degrees": "من 0 إلى 145 درجة",
    "0-135 degrees flexion": "ثني من 0 إلى 135 درجة",
    "360° continuous": "دوران مستمر بزاوية 360°",
    "±10° adaptive": "تكيف بمقدار ±10°",
    "1–4 configurable": "من 1 إلى 4 أصابع قابلة للتهيئة",
    "3–5 weeks": "من 3 إلى 5 أسابيع",
    "2–3 weeks": "من أسبوعين إلى 3 أسابيع",
    "1–2 weeks": "من أسبوع إلى أسبوعين",
    "4–6 weeks (including gait training)": "من 4 إلى 6 أسابيع (بما في ذلك تدريب المشي)",
    "2–14 years": "من سنتين إلى 14 سنة",
    "3–12 years": "من 3 إلى 12 سنة",
    "2–3 days": "من يومين إلى 3 أيام",
    "5–7 days": "من 5 إلى 7 أيام",
    "7–10 days": "من 7 إلى 10 أيام",
    "1 hour": "ساعة واحدة",
    "1.5 hours": "ساعة ونصف",
    "2 hours": "ساعتان",
    "3 hours": "3 ساعات",
    "1.9 kg (4.2 lbs)": "1.9 كجم (4.2 رطل)",
    "136 kg (300 lbs)": "136 كجم (300 رطل)",
    "125 kg (275 lbs)": "125 كجم (275 رطل)",
    "150 kg (330 lbs)": "150 كجم (330 رطل)",
    "115 kg (254 lbs)": "115 كجم (254 رطل)",
    "110 kg (243 lbs)": "110 كجم (243 رطل)",
    "135 kg (297 lbs)": "135 كجم (297 رطل)"
  });

  var originalText = new WeakMap();
  var originalAttributes = new WeakMap();
  var language = "en";
  try {
    language = localStorage.getItem("elna3om-language") || "en";
  } catch (error) {
    // The switch still works when storage is unavailable; it just won't persist between pages.
  }

  function rememberText(node) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    return originalText.get(node);
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    var arabic = language === "ar";
    document.documentElement.lang = arabic ? "ar" : "en";
    document.documentElement.dir = "ltr";
    document.body.classList.toggle("arabic-language", arabic);

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var original = rememberText(node);
      var key = original.trim();
      if (!key) return;
      var translated = translations[key];
      if (arabic && translated) {
        node.nodeValue = original.replace(key, translated);
      } else if (!arabic) {
        node.nodeValue = original;
      }
    });

    var title = document.querySelector("title");
    if (title) {
      if (!title.hasAttribute("data-original-title")) title.setAttribute("data-original-title", title.textContent);
      var englishTitle = title.getAttribute("data-original-title");
      title.textContent = arabic ? (translations[englishTitle.trim()] || englishTitle) : englishTitle;
    }

    document.querySelectorAll("input[placeholder], textarea[placeholder], [aria-label]").forEach(function (element) {
      var attrs = originalAttributes.get(element) || {};
      ["placeholder", "aria-label"].forEach(function (name) {
        if (!element.hasAttribute(name)) return;
        if (!(name in attrs)) attrs[name] = element.getAttribute(name);
        var value = attrs[name];
        element.setAttribute(name, arabic ? (translations[value] || value) : value);
      });
      originalAttributes.set(element, attrs);
    });

    var toggle = document.getElementById("cyber-toggle");
    if (toggle) {
      toggle.checked = arabic;
      toggle.setAttribute("aria-label", arabic ? "Switch language to English" : "تغيير اللغة إلى العربية");
    }
    try {
      localStorage.setItem("elna3om-language", language);
    } catch (error) {
      // Keep the current page usable when storage is unavailable.
    }
  }

  function init() {
    var themeWrapper = document.createElement("div");
    themeWrapper.className = "theme-toggle-wrapper";
    themeWrapper.innerHTML = '<label class="switch" aria-label="Toggle light and dark theme"><input id="theme-toggle" type="checkbox"><div class="slider round"><div class="sun-moon"><svg id="moon-dot-1" class="moon-dot" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg><svg id="moon-dot-2" class="moon-dot" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg><svg id="moon-dot-3" class="moon-dot" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg><svg id="light-ray-1" class="light-ray" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg><svg id="light-ray-2" class="light-ray" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg><svg id="light-ray-3" class="light-ray" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg><svg id="cloud-1" class="cloud-dark" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg><svg id="cloud-2" class="cloud-dark" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg><svg id="cloud-3" class="cloud-dark" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg><svg id="cloud-4" class="cloud-light" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg><svg id="cloud-5" class="cloud-light" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg><svg id="cloud-6" class="cloud-light" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg></div><div class="stars"><svg id="star-1" class="star" viewBox="0 0 20 20"><path d="M0 10C10 10 10 10 0 10C10 10 10 10 10 20C10 10 10 10 20 10C10 10 10 10 10 0C10 10 10 10 0 10Z"></path></svg><svg id="star-2" class="star" viewBox="0 0 20 20"><path d="M0 10C10 10 10 10 0 10C10 10 10 10 10 20C10 10 10 10 20 10C10 10 10 10 10 0C10 10 10 10 0 10Z"></path></svg><svg id="star-3" class="star" viewBox="0 0 20 20"><path d="M0 10C10 10 10 10 0 10C10 10 10 10 10 20C10 10 10 10 20 10C10 10 10 10 10 0C10 10 10 10 0 10Z"></path></svg><svg id="star-4" class="star" viewBox="0 0 20 20"><path d="M0 10C10 10 10 10 0 10C10 10 10 10 10 20C10 10 10 10 20 10C10 10 10 10 10 0C10 10 10 10 0 10Z"></path></svg></div></div></label>';
    document.body.appendChild(themeWrapper);
    var appointmentLink = Array.prototype.find.call(
      document.querySelectorAll("nav a"),
      function (link) { return link.textContent.trim() === "Request Appointment"; }
    );
    if (appointmentLink && appointmentLink.parentElement && appointmentLink.parentElement.tagName === "LI") {
      themeWrapper.classList.add("theme-toggle-in-nav");
      appointmentLink.parentElement.classList.add("theme-toggle-nav-item");
      appointmentLink.parentElement.appendChild(themeWrapper);
    }
    var themeToggle = themeWrapper.querySelector("#theme-toggle");
    themeToggle.checked = document.documentElement.classList.contains("dark-theme");
    themeToggle.addEventListener("change", function (event) {
      var darkMode = event.target.checked;
      document.documentElement.classList.toggle("dark-theme", darkMode);
      try {
        localStorage.setItem("elna3om-theme", darkMode ? "dark" : "light");
      } catch (error) {
        // The theme still switches for this page when storage is unavailable.
      }
    });

    var toggleStylesheet = document.createElement("link");
    toggleStylesheet.rel = "stylesheet";
    toggleStylesheet.href = "cyber-toggle.css";
    document.head.appendChild(toggleStylesheet);

    var wrapper = document.createElement("div");
    wrapper.className = "cyber-toggle-wrapper";
    wrapper.innerHTML = '<input class="cyber-toggle-checkbox" id="cyber-toggle" type="checkbox" aria-label="Switch language to Arabic"><label class="cyber-toggle" for="cyber-toggle"><div class="cyber-toggle-track"><div class="cyber-toggle-track-glow"></div><div class="cyber-toggle-track-dots"><span class="cyber-toggle-track-dot"></span><span class="cyber-toggle-track-dot"></span><span class="cyber-toggle-track-dot"></span></div></div><div class="cyber-toggle-thumb"><div class="cyber-toggle-thumb-shadow"></div><div class="cyber-toggle-thumb-highlight"></div><div class="cyber-toggle-thumb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.5 12c0-2.48-2.02-4.5-4.5-4.5s-4.5 2.02-4.5 4.5 2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5zm-4.5 7.5c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5zm0-16.5c-4.97 0-9 4.03-9 9h-3l3.89 3.89.07.14 4.04-4.03h-3c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42c1.63 1.63 3.87 2.64 6.36 2.64 4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></svg></div></div><div class="cyber-toggle-particles"><span class="cyber-toggle-particle"></span><span class="cyber-toggle-particle"></span><span class="cyber-toggle-particle"></span><span class="cyber-toggle-particle"></span></div></label><div class="cyber-toggle-labels"><span class="cyber-toggle-label-off">EN</span><span class="cyber-toggle-label-on">AR</span></div>';
    document.body.appendChild(wrapper);
    wrapper.querySelector("#cyber-toggle").addEventListener("change", function (event) {
      setLanguage(event.target.checked ? "ar" : "en");
    });
    setLanguage(language);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
