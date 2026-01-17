// Language switching functionality
// Default language: Traditional Chinese (zh-HK)

const translations = {
    'zh-HK': {
        // Page Titles (for browser tab)
        'pageTitle.home': '斑馬線ZebraGo',
        'pageTitle.about': '關於我們 - 斑馬線ZebraGo',
        'pageTitle.contact': '查詢服務 - 斑馬線ZebraGo',
        'pageTitle.news': '新聞發佈 - 斑馬線ZebraGo',
        'pageTitle.support': '支持我們 - 斑馬線ZebraGo',
        'pageTitle.products': '周邊產品 - 斑馬線ZebraGo',
        'pageTitle.specialProjects': '特別項目 - 斑馬線ZebraGo',
        'pageTitle.individual': '個人服務',
        'pageTitle.school': '學校服務',
        'pageTitle.corporate': '企業服務',
        'pageTitle.privacy': '私隱聲明',
        'pageTitle.disclaimer': '免責條款',
        'pageTitle.copyright': '版權聲明',
        'pageTitle.ipProtection': '保護知識產權',
        'pageTitle.donation': '愛心捐獻 - 斑馬線ZebraGo',

        // Navigation
        'nav.about': '關於我們',
        'nav.services': '我們的服務',
        'nav.individual': '個人服務',
        'nav.school': '學校服務',
        'nav.corporate': '企業服務',
        'nav.news': '新聞發佈',
        'nav.support': '支持我們',
        'nav.donation': '愛心捐獻',
        'nav.products': '周邊產品',
        'nav.specialProjects': '特別項目',
        'nav.contact': '查詢服務',
        
        // Contact page
        'contact.title': '查詢服務',
        'contact.office.title': '總辦事處',
        'contact.address': '大埔富亨邨亨昌樓地下',
        'contact.showMap': '顯示詳細地圖',

        // Carousel
        'carousel.slide1.title': 'ZebraGo 流動精神健康及共融服務車',
        'carousel.slide1.text1': '服務學校及企業，建構共融環境及精神健康空間',
        'carousel.slide1.text2': '高度客製化方案，結合沉浸式科技、多感官體驗與專業治療',
        'carousel.slide1.button': '了解更多',
        'carousel.slide2.title': '百變空間 高度客製化',
        'carousel.slide2.text1': '車廂可變間隔設計，提供私密安靜的治療環境',
        'carousel.slide2.text2': '靈活配合不同機構需求，量身訂造專屬服務方案',
        'carousel.slide2.button': '認識我們',
        'carousel.slide3.title': '守護學校及企業團隊身心靈健康',
        'carousel.slide3.text1': '為學校師生、企業員工及照顧者提供全方位支援',
        'carousel.slide3.text2': '高度客製化方案，以 ICE 手法打造沉浸式、協作式、體驗式服務',
        'carousel.slide3.button': '立即預約',
        
        // Stats
        'stats.title': 'ZebraGo 流動服務車 為學校及企業提供專業精神健康及共融支援',
        'stats.schools': '服務學校',
        'stats.students': '累計受惠學生',
        'stats.treatments': '治療項目',
        'stats.hours': '沉浸式體驗時數',
        'stats.hoursUnit': '小時',
        
        // Sections
        'section.partners': '過往合作機構',
        'section.services': '我們的服務',
        'section.support': '支持我們',
        'section.news': '新聞發佈',
        
        // Services
        'service.mentalHealth': '全方位 4R<br>精神健康系列',
        'service.inclusion': '全方位<br>共融系列',
        'service.training': '百變練功房<br>專業訓練系列',
        
        // Support
        'support.donation': '愛心捐獻',
        'support.products': '周邊產品',
        'support.specialProjects': '特別項目',
        
        // Footer
        'footer.privacy': '私隱聲明',
        'footer.ip': '保護知識產權',
        'footer.disclaimer': '免責條款',
        'footer.copyright': '版權聲明',
        'footer.contact': '聯絡我們',
        
        // Disclaimer Page
        'disclaimer.paragraph1': '本網站所載資料及內容均由 「ZebraGo-斑馬線」（以下簡稱本機構）編製，僅供參考。本機構所提供的資料，尤其是關於法律詮釋或問題處理，基於一般情況而非針對個別人士的具體情況，故不應取代專業意見。在依據本網站資料採取行動之前，使用者應尋求獨立的法律或其他專業意見。',
        'disclaimer.paragraph2': '對於因使用或未能使用本網站，或因使用或引用本網站資料而直接或間接導致的任何損失、損害、費用或開支，本機構不承擔任何法律責任。',
        'disclaimer.paragraph3': '儘管本機構力求確保本網站資料在登載時準確無誤，但不保證內容的完全正確或詳盡。因資料錯誤或內容疏漏而導致的任何損失、損害、費用或開支，本機構亦不承擔任何形式的法律責任。',
        'disclaimer.paragraph4': '使用者應注意，鏈接至其他網站的資料（無論是從該網站鏈接至本網站，或反之）並非由本機構編製。本機構對該等資料不負責，並且不對其準確性、完整性或其他方面作出任何陳述，亦無須對因使用該等資料而引致的任何損失、損害、費用或開支承擔法律責任。即使本網站與其他網站設有連結，也不表示本機構認同該等網站的內容。',
        
        // Copyright Page
        'copyright.paragraph1': '除另有註明外，「ZebraGo-斑馬線」（以下簡稱本機構）擁有本網站所載內容的版權，包括但不限於文字、映像、圖像、動畫、短片、數據或其他資料的匯編。',
        'copyright.paragraph2': '使用者獲准使用、下載或在沒有修改的情況下準確複製本網站的材料，但僅限於作個人用途或非商業性質的用途。除非事先獲得本機構書面同意，否則不得複製、複印、分發或以任何形式使用本網站任何內容作商業用途。',
        'copyright.paragraph3': '然而，上文所述准許並不引伸至連結至外界網站的任何材料，該等材料的版權由第三者擁有。使用有關內容前，必須取得有關版權擁有人的授權或准許。',
        'copyright.paragraph4': '使用者登入本機構網站及本網站任何網頁，即表示無條件同意本版權告示的條款及條件。本機構可在無須事先通知使用者的情況下，不時對條款及條件作出修改及／或增補。',
        'copyright.paragraph5': '註：若本版權告示的英文版本與中文版本有任何抵觸或不相符之處，應以中文版本為準。若繁體中文版本與簡體中文版本有任何相異之處，應以繁體中文版本為準。',
        
        // Privacy Page
        'privacy.intro': '非常歡迎您光臨「ZebraGo-斑馬線網站」（以下簡稱本網站），為了讓您能夠安心使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：',
        'privacy.section1.title': '一、隱私權保護政策的適用範圍',
        'privacy.section1.content': '隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。',
        'privacy.section2.title': '二、個人資料的蒐集、處理及利用方式',
        'privacy.section2.paragraph1': '當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。',
        'privacy.section2.paragraph2': '本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。',
        'privacy.section2.paragraph3': '於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。',
        'privacy.section2.paragraph4': '為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。',
        'privacy.section2.paragraph5': '您可以隨時向我們提出請求，以更正或刪除您的帳戶或本網站所蒐集的個人資料等隱私資訊。聯繫方式請見最下方聯繫管道。',
        'privacy.section3.title': '三、資料之保護',
        'privacy.section3.paragraph1': '本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。',
        'privacy.section3.paragraph2': '如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。',
        'privacy.section4.title': '四、網站對外的相關連結',
        'privacy.section4.content': '本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。',
        'privacy.section5.title': '五、與第三人共用個人資料之政策',
        'privacy.section5.paragraph1': '本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。',
        'privacy.section5.paragraph2': '前項但書之情形包括不限於：',
        'privacy.section5.list1': '經由您書面同意。',
        'privacy.section5.list2': '法律明文規定。',
        'privacy.section5.list3': '為免除您生命、身體、自由或財產上之危險。',
        'privacy.section5.list4': '與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集著依其揭露方式無從識別特定之當事人。',
        'privacy.section5.list5': '當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。',
        'privacy.section5.list6': '有利於您的權益。',
        'privacy.section5.paragraph3': '本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。',
        'privacy.section6.title': '六、Cookie之使用',
        'privacy.section6.content': '為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導至網站某些功能無法正常執行。',
        'privacy.section7.title': '七、隱私權保護政策之修正',
        'privacy.section7.content': '本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。',
        'privacy.section8.title': '八、聯繫管道',
        'privacy.section8.content': '對於本站之隱私權政策有任何疑問，或者想提出變更、移除個人資料之請求，請前往本站「<a href="contact.html" style="color: var(--primary-color); text-decoration: underline;">聯絡我們</a>」頁面提交表單。',
        
        // News
        'news.title': 'ZebraGo 流動車：客製化的流動精神健康服務',
        'news.intro': 'ZebraGo 是一輛專為學校及企業設計的流動服務車，可直接駛入校園或企業場所提供服務。車廂採用創新的可變間隔設計，能靈活分隔為兩個獨立訓練室，同時為不同使用者提供私密、安靜的治療環境。我們提供高度客製化的服務方案，可根據不同機構的需求量身訂造專屬計劃。',
        'news.tech.title': '沉浸式科技配合專業治療',
        'news.tech.content': '車內配備先進的沉浸式技術，結合多感官體驗、靜觀及表達藝術元素。我們的專業團隊包括語言治療師、職業治療師及遊戲治療師，為學校的學童提供語言治療、職業治療及遊戲治療等一對一或小組訓練，同時亦為企業員工提供壓力管理、團隊建設及心理健康支援服務。所有服務方案均可高度客製化，靈活配合不同機構的特定需求。',
        'news.sdg.title': '回應可持續發展目標',
        'news.sdg.content': 'ZebraGo 流動服務車致力回應聯合國可持續發展目標，透過流動服務模式推動共融教育及企業社會責任，為學校及企業提供可持續的精神健康支援方案。',
        'news.readMore': '查看更多',
        
        // Common
        'button.learnMore': '了解更多',
        'button.contact': '聯絡我們',
        
        // Products Page
        'products.title': '周邊產品',
        'products.intro1': '斑馬象徵合作、適應力與好奇心——這些力量同樣適用於校園、家庭、社區，以至企業團隊。ZebraGo 透過沉浸式與多感官體驗，推動共融、同理與身心健康。',
        'products.intro2': '你選購的每一件商品，都是對共融與精神健康推廣的一份支持。',
        'products.item1.name': '多功能斑馬晴雨傘',
        'products.item1.price': 'HK$ 100',
        'products.item1.description': '一把可晴可雨的斑馬晴雨傘，採用特潤傘面與加厚傘布設計，遇水成珠不易滲透；同時具防 UV 功能，晴天外出也能安心遮擋。傘骨結實耐用，不易反傘，日常通勤與外出都實用可靠。',
        'products.item2.name': '輕奢毛毯手挽袋',
        'products.item2.price': 'HK$ 150',
        'products.item2.description': '輕奢毛毯手挽袋以柔軟親膚的毛毯感材質打造，外形時尚亮麗，同時兼具耐用度，日常攜帶更安心。無論上班、聚會或外出，它都能陪你出席不同場合，為每個精彩時刻增添質感。',
        'products.addToCart': '立即購買',
        'products.comingSoon': '更多商品即將推出，敬請期待！',
        
        // Special Projects Page
        'specialProjects.title': '特別項目',
        'specialProjects.intro': '探索「特別項目」，了解最新活動、招募與限定企劃，把握參與機會！',
        'specialProjects.event1.title': '斑馬繪畫比賽',
        'specialProjects.event2.title': '校園共融大使',
        'specialProjects.apply': '立即報名',
        'specialProjects.comingSoon': '更多項目即將推出，敬請期待！',
        
        // About Page
        'about.title': '關於我們',
        'about.videoCaption': '全港首部電動共融體驗車，結合沉浸式科技與專業治療，為學校與企業提供全方位精神健康解決方案',
        
        // Vision & Mission
        'about.vm.title': '願景與使命',
        'about.vm.subtitle': 'Vision & Mission',
        'about.vision.title': '我們的願景',
        'about.vision.subtitle': 'Our Vision',
        'about.vision.highlight': '「構建全方位的共融與精神健康文化，讓身心靈支援流動至社會每一個角落。」',
        'about.vision.description': '致力於創造一個「和而不同」的社會環境，讓學生、教育工作者及職場人士皆能提升自我覺察，在互相尊重與支持的氛圍中，展現韌性，達致身心平衡。',
        
        'about.mission.title': '我們的使命',
        'about.mission.subtitle': 'Our Mission',
        'about.mission1.title': '打破界限，主動支援',
        'about.mission1.subtitle': 'Accessibility & Mobility',
        'about.mission1.description': '透過特製的流動服務車，突破傳統服務的地域限制。無論是偏遠學校或繁忙的商業區，我們將專業治療與培訓直接送達，讓支援觸手可及。',
        'about.mission2.title': '科技賦能，創新體驗',
        'about.mission2.subtitle': 'Innovation through ICE',
        'about.mission2.description': '結合沉浸式 (Immersive)、協作式 (Collaborative) 及體驗式 (Experiential) 手法，運用多感官科技、靜觀及表達藝術，為服務使用者提供傳統講座以外的嶄新互動體驗，有效提升學習動機與舒壓效果。',
        'about.mission3.title': '推動共融，強化韌性',
        'about.mission3.subtitle': 'Inclusion & Resilience',
        'about.mission3.school': '在校園：',
        'about.mission3.schoolText': '支援 SEN 學童融入校園，並為照顧者及教師提供喘息空間，建立關愛校園。',
        'about.mission3.corporate': '在企業：',
        'about.mission3.corporateText': '推廣多元共融 (D&I) 文化，關注員工精神健康，透過團隊協作體驗提升企業的抗逆力與凝聚力。',
        
        'about.values.title': '核心價值',
        'about.values.subtitle': 'Core Values',
        'about.value1.title': '共融',
        'about.value1.subtitle': 'Inclusion',
        'about.value1.description': '尊重差異，欣賞每個人的獨特價值。',
        'about.value2.title': '創新',
        'about.value2.subtitle': 'Innovation',
        'about.value2.description': '善用科技，開創身心靈服務的新模式。',
        'about.value3.title': '協作',
        'about.value3.subtitle': 'Cooperation',
        'about.value3.description': '如斑馬般發揮群體力量，建立互助支援網絡。',
        'about.value4.title': '全人健康',
        'about.value4.subtitle': 'Holistic Wellness',
        'about.value4.description': '關注身、心、社、靈的全面發展。',
        
        // Partners & Organizations
        'about.partners.title': '機構與合作夥伴',
        'about.partners.host': '主辦機構',
        'about.partners.hostName': '浸信會欣悅社會服務處',
        'about.partners.strategic': '策略夥伴及贊助',
        'about.partners.strategicName': '利希慎基金',
        'about.partners.funding': '撥款資助',
        'about.partners.fundingName': '社創基金',
        'about.partners.support': '培育及支援',
        'about.partners.supportName': '創新園',
        
        // Core Values & Impact
        'about.coreValues.title': '核心價值與可持續發展目標',
        'about.zebra.title': '斑馬的象徵',
        'about.zebra.description': '在非洲文化中，斑馬條紋常被視為平衡與和諧的象徵。斑馬的優點是群體合作、適應能力強以及好奇心旺盛，這些特質幫助牠們在自然界中生存並展現韌性與智慧。「斑馬綫 ZebraGo」以此為靈感，作為全港首個結合流動車概念與沉浸式科技 (ICE) 的身心靈支援平台。為學校及企業提供專業、創新且具溫度的全方位支援。',
        'about.zebra.credits': '斑馬插畫師：黎紫瓏同學、Kambang Miksen同學、符皓鈞同學、蕭誌江同學、黎雨楠同學、溫溢馨同學',
        'about.sdg.title': '回應聯合國可持續發展目標',
        'about.sdg3.title': '良好健康與福祉',
        'about.sdg3.subtitle': 'Good Health and Well-being',
        'about.sdg4.title': '優質教育',
        'about.sdg4.subtitle': 'Quality Education',
        'about.sdg10.title': '減少不平等',
        'about.sdg10.subtitle': 'Reduced Inequalities',
        'about.design.title': '設計理念',
        'about.design.description': '採用 ICE 手法，結合多感官、靜觀及表達藝術等方式',
        'about.ice.immersive': 'Immersive',
        'about.ice.immersiveDesc': '沉浸式',
        'about.ice.collaborative': 'Collaborative',
        'about.ice.collaborativeDesc': '協作式',
        'about.ice.experiential': 'Experiential',
        'about.ice.experientialDesc': '體驗式',
        'about.consultants.title': '專業顧問團隊',
        'about.consultant1.name': '冼權鋒教授',
        'about.consultant1.title1': '香港教育大學特殊教育與輔導學系教授',
        'about.consultant1.title2': '香港教育大學特殊學習需要與融合教育研究所執行所長',
        'about.consultant2.name': '呂昀俠先生',
        'about.consultant2.title1': '資深教育心理學家',
        'about.consultant2.title2': '中文大學教育心理學系專業顧問',
        'about.consultant2.title3': '香港大學心理學系教育心理學家',
        'about.consultant3.name': '李子軒先生',
        'about.consultant3.title1': '註冊職業治療師',
        'about.consultant3.title2': '香港教育大學兼任講師',
        'about.consultant4.name': '李詠嘉姑娘',
        'about.consultant4.title1': '高級言語治療師',
        'about.consultant4.title2': '香港大學言語及聽覺科學系榮譽助理教授',
        
        // Services
        'about.services.title': '我們的服務',
        'about.services.activitiesTitle': '活動內容',
        
        // Inclusion Series
        'about.services.inclusion.title': '全方位共融系列',
        'about.services.inclusion.subtitle': '',
        'about.services.inclusion.coreLabel': '核心手法：',
        'about.services.inclusion.coreMethod': '採用 ICE 手法（沉浸式、協作式、體驗式）',
        'about.services.inclusion.activity1.name': '共融講座/工作坊',
        'about.services.inclusion.activity1.desc': '以班級為單位，學生進入 ZebraGo 車廂內的沉浸式環境。活動包括：繪本故事、名著典故、校園情境模擬及角色扮演。',
        'about.services.inclusion.activity2.name': '共融大使培訓',
        'about.services.inclusion.activity2.desc': '以小組方式進行，讓 SEN 學童與普通學生共同參與。活動包括：繪本共創、創意藝術、中國文化傳統體驗、共融實驗。完成後會向全校師生分享作品。',
        'about.services.inclusion.activity3.name': 'Soul Power 植物花園校園展覽',
        'about.services.inclusion.activity3.desc': '面向全校師生。內容包括：共融展板、學生作品展示、共融實驗裝置。',
        'about.services.inclusion.activity4.name': '沉浸式共融繪本心間',
        'about.services.inclusion.activity4.desc': '面向全校學生。活動包括：透過繪本故事、校園情境、互動遊戲，讓學生以「主角」身份分享作品及創作心得。',
        'about.services.inclusion.activity5.name': '教師共融工作坊',
        'about.services.inclusion.activity5.desc': '面向教職員。形式：以工作坊形式交流與 SEN 學童相處及課堂管理的技巧心得，講解 SEN 學童特性。',
        'about.services.inclusion.activity6.name': '共融節 — 校園共融攤位體驗',
        'about.services.inclusion.activity6.desc': '面向全校。形式：透過攤位遊戲，讓學生親身體驗 SEN 或不同種族人士的特性及需要。',
        
        // 4R Series
        'about.services.4r.title': '全方位 4R 系列',
        'about.services.4r.subtitle': '',
        'about.services.4r.coreLabel': '核心概念：',
        'about.services.4r.coreMethod': '休息、人際關係、放鬆、抗逆力',
        'about.services.4r.activity1.name': '教師講座/工作坊',
        'about.services.4r.activity1.desc': '交流學童及照顧者的精神健康需要，教授回應技巧，預防學童自殺。',
        'about.services.4r.activity2.name': '教師沉浸式鬆 Zone',
        'about.services.4r.activity2.desc': '利用 ZebraGo 車廂的密閉空間。活動：結合多感官體驗、靜觀及表達藝術，提供身心放鬆的空間。',
        'about.services.4r.activity3.name': '照顧者移動會所之無憂舒壓茶聚',
        'about.services.4r.activity3.desc': '利用車廂密閉空間。活動：多感官靜觀、表達藝術、品茶連繫。建立家長/照顧者之間的互助支援網絡。',
        'about.services.4r.activity4.name': '4R 照顧心靈講座/工作坊',
        'about.services.4r.activity4.desc': '以班級方式進行。活動：繪本故事、校園情境、互動遊戲等多元體驗式學習，加強學童對精神健康的覺察。',
        'about.services.4r.activity5.name': 'Soul Power 大使培訓',
        'about.services.4r.activity5.desc': '挑選學生培訓成為大使，在校內推廣精神健康訊息及籌備展覽。',
        'about.services.4r.activity6.name': 'Soul Power 校園展覽',
        'about.services.4r.activity6.desc': '展示 4R Soul Power 展板、學生作品及實驗裝置。',
        'about.services.4r.activity7.name': '4R Soul Power 沉浸式情緒社交小組',
        'about.services.4r.activity7.desc': '以小組形式在車廂內進行。活動：利用沉浸式技術結合多感官、靜觀及表達藝術，訓練社交技巧及自我調節情緒能力。',
        'about.services.4r.activity8.name': '4R 精神健康校園攤位體驗',
        'about.services.4r.activity8.desc': '以攤位體驗形式讓全校學生了解精神健康的重要性。',
        'about.services.4r.activity9.name': '4R Soul Power 多感官沉浸體驗',
        'about.services.4r.activity9.desc': '以班級方式在車廂內進行。活動：透過繪本故事、手繪轉換動畫技術、互動遊戲，提升對身心靈需要的覺察。',
        
        // Training Series
        'about.services.training.title': '百變練功房 — 專業訓練系列',
        'about.services.training.subtitle': '',
        'about.services.training.coreLabel': '核心特點：',
        'about.services.training.coreFeature': '車廂空間可改變間隔，變身為兩個獨立訓練室',
        'about.services.training.targetLabel': '對象：',
        'about.services.training.targetAudience': '語言障礙、專注力不足、過度活躍症學童',
        'about.services.training.activity1.name': '個別化專業訓練',
        'about.services.training.activity1.desc': '在 ZebraGo 車廂內進行。內容：一對一的個別化言語治療、職業治療或遊戲治療訓練。',
        'about.services.training.activity2.name': '2人同行小組',
        'about.services.training.activity2.desc': '在 ZebraGo 車廂內進行。內容：二人的言語治療、職業治療或遊戲治療訓練小組。',
        'about.services.training.activity3.name': '治療小組',
        'about.services.training.activity3.desc': '可選擇在 ZebraGo 車廂或校內進行。內容：言語治療、職業治療或遊戲治療的訓練小組。',
        'about.services.training.teamLabel': '專業團隊配置：',
        'about.services.training.teamDesc': '服務由顧問團隊支持，包括特殊教育與輔導學系教授、資深教育心理學家、註冊職業治療師及高級言語治療師。',
        
        // Individual Services Page
        'individual.hero.title': '百變練功房 —— 您的流動專業支援站',
        'individual.hero.subtitle': '結合專業治療團隊與高私隱度流動空間，將言語及職業治療服務直接帶到您身邊。',
        'individual.why.title': '為什麼選擇流動訓練？',
        'individual.why.intro': '我們的流動訓練服務為學童及家長提供更靈活、更私密的專業支援，讓治療效果更顯著。',
        'individual.why.benefit1.title': '高私隱度，減少標籤',
        'individual.why.benefit1.desc': '我們的訓練於 ZebraGo 車廂內的獨立隔音空間進行，外觀活潑，讓孩子在無壓力的環境下學習，避免傳統標籤效應。',
        'individual.why.benefit2.title': '靈活便利',
        'individual.why.benefit2.desc': '服務地點具彈性，能配合學校或社區安排，節省家長與學童舟車勞頓的時間。',
        'individual.why.benefit3.title': '專業團隊',
        'individual.why.benefit3.desc': '由合資格的言語治療師、職業治療師及註冊社工組成的跨專業團隊全程跟進。',
        'individual.training.title': '核心訓練範疇',
        'individual.training.intro': '針對不同需要，提供專業且全面的治療服務，協助學童健康成長。',
        'individual.training.st.title': 'A. 言語治療',
        'individual.training.st.desc': '針對有語言發展遲緩、發音問題或社交溝通障礙的學童。透過車廂內的互動情境，改善口語表達、理解能力及社交對答技巧。',
        'individual.training.ot.title': 'B. 職業治療',
        'individual.training.ot.desc': '針對專注力不足、小肌肉發展或感覺統合失調的學童。利用車廂內的多元感官設備，進行針對性的大小肌肉訓練及感統調節，提升學習效能。',
        'individual.training.pt.title': 'C. 遊戲治療',
        'individual.training.pt.desc': '為受情緒困擾的學童提供安全的表達空間。透過遊戲作為媒介，協助孩子宣洩情緒、建立自信及學習解決問題。',
        'individual.formats.title': '服務形式',
        'individual.formats.intro': '根據學童的個別需要，提供最適合的訓練模式，確保治療效果最大化。',
        'individual.formats.individual.title': '一對一深造',
        'individual.formats.individual.desc': '針對學童獨特需要，制定個別化教育計劃，提供最密集的關注與指導。',
        'individual.formats.group.title': '雙人/小組互動',
        'individual.formats.group.desc': '在治療師引導下，安排能力相若的學童進行配對訓練，模擬真實社交場景，提升同儕互動技巧。',
        'individual.support.title': '家長及照顧者支援',
        'individual.support.intro': '我們深信「家長好，孩子才會好」。除了學童訓練，我們亦提供全面的家長支援服務。',
        'individual.support.home.title': '家居訓練指導',
        'individual.support.home.desc': '讓治療效果延伸至家中，協助家長在日常生活中持續支援孩子的發展。',
        'individual.support.counseling.title': '情緒輔導與諮詢',
        'individual.support.counseling.desc': '為照顧者提供喘息空間與專業建議，減輕照顧壓力，建立更健康的親子關係。',
        'individual.cta.button': '查詢/預約服務',
        
        // School Services Page
        'school.hero.title': '全校參與．共建身心靈健康校園',
        'school.hero.subtitle': 'ZebraGo 駛入校園，以沉浸式科技支援學校發展「精神健康」與「共融文化」，全方位照顧學生、老師及家長。',
        'school.mentalHealth.title': '精神健康支援',
        'school.mentalHealth.intro': '深化 4R 系列內容，強調不同持份者的得著，全方位支援學生、教職員及家長的精神健康需要。',
        'school.mentalHealth.student.title': '學生層面',
        'school.mentalHealth.student.subtitle': '提升抗逆力',
        'school.mentalHealth.student.point1': 'Soul Power 沉浸式體驗：',
        'school.mentalHealth.student.point1.desc': '不同於傳統講座，我們利用車廂內的 270 度投影與體感互動，讓學生「走進」繪本故事，學習辨識情緒與求助。',
        'school.mentalHealth.student.point2': '社交小組訓練：',
        'school.mentalHealth.student.point2.desc': '在安全環境下練習社交技巧，特別針對內向或有社交焦慮的學生。',
        'school.mentalHealth.student.point3': '校園氛圍營造：',
        'school.mentalHealth.student.point3.desc': '透過培訓「Soul Power 大使」及舉辦大型展覽，由學生主導推廣精神健康，讓關愛文化在朋輩間流動。',
        'school.mentalHealth.staff.title': '教職員層面',
        'school.mentalHealth.staff.subtitle': '減壓與賦能',
        'school.mentalHealth.staff.point1': '教師加油站：',
        'school.mentalHealth.staff.point1.desc': '老師也需要休息。我們將車廂變身為專屬的「減壓艙」，提供短暫的靜觀與多感官放鬆體驗，讓老師重拾教學動力。',
        'school.mentalHealth.staff.point2': '危機識別培訓：',
        'school.mentalHealth.staff.point2.desc': '透過工作坊裝備老師識別高危學生的技巧，建立校園安全網。',
        'school.mentalHealth.parent.title': '家長層面',
        'school.mentalHealth.parent.subtitle': '連結與喘息',
        'school.mentalHealth.parent.point1': '家長充電站：',
        'school.mentalHealth.parent.point1.desc': '結合品茶與藝術創作，讓家長在校園內找到專屬的 Me Time，並建立家長互助網絡。',
        'school.inclusion.title': '共融文化推廣',
        'school.inclusion.intro': '深化共融系列內容，透過體驗式學習推動校園內的接納與尊重。',
        'school.inclusion.experiential.title': '體驗式學習',
        'school.inclusion.experiential.desc': '模擬體驗攤位：',
        'school.inclusion.experiential.desc.text': '讓一般學生親身感受讀寫障礙、自閉症或肢體障礙人士的日常挑戰，從「認知」昇華至「同理」。',
        'school.inclusion.ambassador.title': '共融大使計劃',
        'school.inclusion.ambassador.desc': '培訓學生策劃共融活動，推動校園內的接納與尊重。',
        'school.process.title': '學校合作流程',
        'school.process.intro': '我們提供一站式支援服務，從諮詢到執行，全程專業跟進。',
        'school.process.step1.title': '校本諮詢',
        'school.process.step1.desc': '了解學校關注事項（如：學童自殺、欺凌、SEN 支援）。',
        'school.process.step2.title': '方案設計',
        'school.process.step2.desc': '組合適合的 4R 或共融活動（班級活動/小組/全校性）。',
        'school.process.step3.title': '到校服務',
        'school.process.step3.desc': 'ZebraGo 流動車及專業團隊按時到校執行。',
        'school.process.step4.title': '成效評估',
        'school.process.step4.desc': '提供活動報告及學生反饋。',
        'school.cta.button': '查詢/預約服務',
        
        // Corporate Services Page
        'corporate.hero.title': '成為 ZebraGo 企業身心靈夥伴 (Wellness Partner)',
        'corporate.hero.subtitle': '結合流動科技與專業治療，助您實踐 ESG 職業健康指標，打造具抗逆力的幸福職場。',
        'corporate.why.title': '超越福利，更是企業永續的關鍵',
        'corporate.why.intro': '在現今的商業環境，員工的身心健康是企業最大的資產。ZebraGo 提供全港首創的流動身心支援，協助企業直接回應港交所 ESG 報告指引 (HKEX ESG Reporting Guide) 中關於「層面 B2：健康與安全」的要求。',
        'corporate.why.kpi.title': '滿足 KPI B2.3 指標',
        'corporate.why.kpi.desc': '透過我們系統化的課程與活動，具體描述及執行職業健康與安全措施。',
        'corporate.why.brand.title': '提升僱主品牌',
        'corporate.why.brand.desc': '獲得「ZebraGo Wellness Partner」認證，展現企業對員工的承擔。',
        'corporate.why.flexible.title': '靈活流動體驗',
        'corporate.why.flexible.desc': '無需騰出固定辦公空間，ZebraGo 流動車直接駛達，提供即時支援。',
        'corporate.program.title': '模組化認證計劃 —— 4R 全方位支援',
        'corporate.program.intro': '企業可根據需求選擇單一模組，或完成全套 4R 系列以獲得年度認證夥伴資格。',
        'corporate.program.rest.title': 'Module 1: Rest',
        'corporate.program.rest.subtitle': '休息與充電',
        'corporate.program.rest.form': '形式：',
        'corporate.program.rest.form.text': 'ZebraGo 流動車體驗',
        'corporate.program.rest.content': '內容：',
        'corporate.program.rest.content.text': '將流動車停泊於公司樓下，提供「午間快充」服務。員工可於獨立空間內進行 15-20 分鐘的深層休息，暫時抽離工作壓力，恢復精力。',
        'corporate.program.relaxation.title': 'Module 2: Relaxation',
        'corporate.program.relaxation.subtitle': '放鬆與減壓',
        'corporate.program.relaxation.form': '形式：',
        'corporate.program.relaxation.form.text': '沉浸式工作坊 / 流動體驗',
        'corporate.program.relaxation.content': '內容：',
        'corporate.program.relaxation.content.text': '利用車內或會議室的沉浸式投影，進行靜觀 (Mindfulness) 引導、肌肉放鬆練習及呼吸訓練，有效降低職場焦慮。',
        'corporate.program.relationship.title': 'Module 3: Relationship',
        'corporate.program.relationship.subtitle': '連結與共融',
        'corporate.program.relationship.form': '形式：',
        'corporate.program.relationship.form.text': '團隊建立 (Team Building)',
        'corporate.program.relationship.content': '內容：',
        'corporate.program.relationship.content.text': '透過「神經多樣性 (Neurodiversity)」體驗活動，讓員工理解不同特質（如 SEN）的同事或客戶，學習非暴力溝通，建立更包容的團隊文化。',
        'corporate.program.resilience.title': 'Module 4: Resilience',
        'corporate.program.resilience.subtitle': '抗逆力與成長',
        'corporate.program.resilience.form': '形式：',
        'corporate.program.resilience.form.text': '專業培訓講座',
        'corporate.program.resilience.content': '內容：',
        'corporate.program.resilience.content.text': '由心理學家或治療師主講，教授情緒急救 (Mental Health First Aid)、壓力管理及危機應對技巧，提升員工面對挑戰的心理韌性。',
        'corporate.certification.title': '獲取您的「ZebraGo Wellness Partner」認證',
        'corporate.certification.intro': '當企業完成上述 4R 模組培訓後，將獲頒發年度「ZebraGo Institutional Partner」證書。',
        'corporate.certification.usage.title': '證書用途',
        'corporate.certification.usage.desc': '可用於企業年報、ESG 報告及網站展示。',
        'corporate.certification.benefits.title': '夥伴權益',
        'corporate.certification.benefits.desc': '優先預約 ZebraGo 流動車服務、獲邀出席年度夥伴峰會 (Partner Summit)，與業界交流健康職場心得。',
        'corporate.csr.title': '商業與社會價值的共贏',
        'corporate.csr.intro': '除了照顧內部員工，您的參與亦能支持 ZebraGo 服務更多基層學童。',
        'corporate.csr.sponsor.title': '配對贊助',
        'corporate.csr.sponsor.desc': '企業每完成一個模組，部分收益將支持我們為一間資源匱乏的學校提供免費服務。',
        'corporate.csr.volunteer.title': '企業義工',
        'corporate.csr.volunteer.desc': '安排員工參與我們的社區共融活動，身體力行回饋社會。',
        'corporate.cta.button': '查詢/預約服務'
    },
    'zh-CN': {
        // Page Titles (for browser tab)
        'pageTitle.home': '斑马线ZebraGo',
        'pageTitle.about': '关于我们 - 斑马线ZebraGo',
        'pageTitle.contact': '查询服务 - 斑马线ZebraGo',
        'pageTitle.news': '新闻发布 - 斑马线ZebraGo',
        'pageTitle.support': '支持我们 - 斑马线ZebraGo',
        'pageTitle.products': '周边产品 - 斑马线ZebraGo',
        'pageTitle.specialProjects': '特别项目 - 斑马线ZebraGo',
        'pageTitle.individual': '个人服务',
        'pageTitle.school': '学校服务',
        'pageTitle.corporate': '企业服务',
        'pageTitle.privacy': '隐私声明',
        'pageTitle.disclaimer': '免责条款',
        'pageTitle.copyright': '版权声明',
        'pageTitle.ipProtection': '保护知识产权',
        'pageTitle.donation': '爱心捐献 - 斑马线ZebraGo',

        // Navigation
        'nav.about': '关于我们',
        'nav.services': '我们的服务',
        'nav.individual': '个人服务',
        'nav.school': '学校服务',
        'nav.corporate': '企业服务',
        'nav.news': '新闻发布',
        'nav.support': '支持我们',
        'nav.donation': '爱心捐献',
        'nav.products': '周边产品',
        'nav.specialProjects': '特别项目',
        'nav.contact': '查询服务',
        
        // Contact page
        'contact.title': '查询服务',
        'contact.office.title': '总办事处',
        'contact.address': '大埔富亨邨亨昌楼地下',
        'contact.showMap': '显示详细地图',

        // Carousel
        'carousel.slide1.title': 'ZebraGo 流动精神健康及共融服务车',
        'carousel.slide1.text1': '服务学校及企业，建构共融环境及精神健康空间',
        'carousel.slide1.text2': '高度客制化方案，结合沉浸式科技、多感官体验与专业治疗',
        'carousel.slide1.button': '了解更多',
        'carousel.slide2.title': '百变空间 高度客制化',
        'carousel.slide2.text1': '车厢可变间隔设计，提供私密安静的治疗环境',
        'carousel.slide2.text2': '灵活配合不同机构需求，量身订造专属服务方案',
        'carousel.slide2.button': '认识我们',
        'carousel.slide3.title': '守护学校及企业团队身心灵健康',
        'carousel.slide3.text1': '为学校师生、企业员工及照顾者提供全方位支援',
        'carousel.slide3.text2': '高度客制化方案，以 ICE 手法打造沉浸式、协作式、体验式服务',
        'carousel.slide3.button': '立即预约',
        
        // Stats
        'stats.title': 'ZebraGo 流动服务车 为学校及企业提供专业精神健康及共融支援',
        'stats.schools': '服务学校',
        'stats.students': '累计受惠学生',
        'stats.treatments': '治疗项目',
        'stats.hours': '沉浸式体验时数',
        'stats.hoursUnit': '小时',
        
        // Sections
        'section.partners': '合作伙伴',
        'section.services': '我们的服务',
        'section.support': '支持我们',
        'section.news': '新闻发布',
        
        // Services
        'service.mentalHealth': '全方位 4R<br>精神健康系列',
        'service.inclusion': '全方位<br>共融系列',
        'service.training': '百变练功房<br>专业训练系列',
        
        // Support
        'support.donation': '爱心捐献',
        'support.products': '周边产品',
        'support.specialProjects': '特别项目',
        
        // Footer
        'footer.privacy': '隐私声明',
        'footer.ip': '保护知识产权',
        'footer.disclaimer': '免责条款',
        'footer.copyright': '版权声明',
        'footer.contact': '联络我们',
        
        // Disclaimer Page
        'disclaimer.paragraph1': '本网站所载资料及内容均由 「ZebraGo-斑马线」（以下简称本机构）编制，仅供参考。本机构所提供的资料，尤其是关于法律诠释或问题处理，基于一般情况而非针对个别人士的具体情况，故不应取代专业意见。在依据本网站资料采取行动之前，使用者应寻求独立的法律或其他专业意见。',
        'disclaimer.paragraph2': '对于因使用或未能使用本网站，或因使用或引用本网站资料而直接或间接导致的任何损失、损害、费用或开支，本机构不承担任何法律责任。',
        'disclaimer.paragraph3': '尽管本机构力求确保本网站资料在登载时准确无误，但不保证内容的完全正确或详尽。因资料错误或内容疏漏而导致的任何损失、损害、费用或开支，本机构亦不承担任何形式的法律责任。',
        'disclaimer.paragraph4': '使用者应注意，链接至其他网站的资料（无论从该网站链接至本网站，或反之）并非由本机构编制。本机构对该等资料不负责，并且不对其准确性、完整性或其他方面作出任何陈述，亦无须对因使用该等资料而引致的任何损失、损害、费用或开支承担法律责任。即使本网站与其他网站设有连结，也不表示本机构认同该等网站的内容。',
        
        // Copyright Page
        'copyright.paragraph1': '除另有注明外，「ZebraGo-斑马线」（以下简称本机构）拥有本网站所载内容的版权，包括但不限于文字、映像、图像、动画、短片、数据或其他资料的汇编。',
        'copyright.paragraph2': '使用者获准使用、下载或在没有修改的情况下准确复制本网站的材料，但仅限于作个人用途或非商业性质的用途。除非事先获得本机构书面同意，否则不得复制、复印、分发或以任何形式使用本网站任何内容作商业用途。',
        'copyright.paragraph3': '然而，上文所述准许并不引伸至连结至外界网站的任何材料，该等材料的版权由第三者拥有。使用有关内容前，必须取得有关版权拥有人的授权或准许。',
        'copyright.paragraph4': '使用者登入本机构网站及本网站任何网页，即表示无条件同意本版权告示的条款及条件。本机构可在无须事先通知使用者的情况下，不时对条款及条件作出修改及／或增补。',
        'copyright.paragraph5': '注：若本版权告示的英文版本与中文版本有任何抵触或不相符之处，应以中文版本为准。若繁体中文版本与简体中文版本有任何相异之处，应以繁体中文版本为准。',
        
        // Privacy Page
        'privacy.intro': '非常欢迎您光临「ZebraGo-斑马线网站」（以下简称本网站），为了让您能够安心使用本网站的各项服务与资讯，特此向您说明本网站的隐私权保护政策，以保障您的权益，请您详阅下列内容：',
        'privacy.section1.title': '一、隐私权保护政策的适用范围',
        'privacy.section1.content': '隐私权保护政策内容，包括本网站如何处理在您使用网站服务时收集到的个人识别资料。隐私权保护政策不适用于本网站以外的相关链接网站，也不适用于非本网站所委托或参与管理的人员。',
        'privacy.section2.title': '二、个人资料的搜集、处理及利用方式',
        'privacy.section2.paragraph1': '当您造访本网站或使用本网站所提供之功能服务时，我们将视该服务功能性质，请您提供必要的个人资料，并在该特定目的范围内处理及利用您的个人资料；非经您书面同意，本网站不会将个人资料用于其他用途。',
        'privacy.section2.paragraph2': '本网站在您使用服务信箱、问卷调查等互动性功能时，会保留您所提供的姓名、电子邮件地址、联络方式及使用时间等。',
        'privacy.section2.paragraph3': '于一般浏览时，服务器会自行记录相关行径，包括您使用连线设备的IP地址、使用时间、使用的浏览器、浏览及点选资料记录等，做为增进网站服务的参考依据，此记录为内部应用，决不对外公佈。',
        'privacy.section2.paragraph4': '为提供精确的服务，我们会将收集的问卷调查内容进行统计与分析，分析结果之统计数据或说明文字呈现，除供内部研究外，我们会视需要公佈统计数据及说明文字，但不涉及特定个人之资料。',
        'privacy.section2.paragraph5': '您可以随时向我们提出请求，以更正或删除您的账户或本网站所搜集的个人资料等隐私资讯。联系方式请见最下方联系管道。',
        'privacy.section3.title': '三、资料之保护',
        'privacy.section3.paragraph1': '本网站主机均设有防火墙、防毒系统等相关各项资讯安全设备及必要的安全防护措施，加以保护网站及您的个人资料采用严格的保护措施，只由经过授权的人员才能接触您的个人资料，相关处理人员皆签有保密合约，如有违反保密义务者，将会受到相关的法律处分。',
        'privacy.section3.paragraph2': '如因业务需要有必要委托其他单位提供服务时，本网站亦会严格要求其遵守保密义务，并且采取必要检查程序以确定其将确实遵守。',
        'privacy.section4.title': '四、网站对外的相关链接',
        'privacy.section4.content': '本网站的网页提供其他网站的网络链接，您也可经由本网站所提供的链接，点选进入其他网站。但该链接网站不适用于本网站的隐私权保护政策，您必须参考该链接网站中的隐私权保护政策。',
        'privacy.section5.title': '五、与第三人共用个人资料之政策',
        'privacy.section5.paragraph1': '本网站绝不会提供、交换、出租或出售任何您的个人资料给其他个人、团体、私人企业或公务机关，但有法律依据或合约义务者，不在此限。',
        'privacy.section5.paragraph2': '前项但书之情形包括不限于：',
        'privacy.section5.list1': '经由您书面同意。',
        'privacy.section5.list2': '法律明文规定。',
        'privacy.section5.list3': '为免除您生命、身体、自由或财产上之危险。',
        'privacy.section5.list4': '与公务机关或学术研究机构合作，基于公共利益为统计或学术研究而有必要，且资料经过提供者处理或搜集著依其揭露方式无从识别特定之当事人。',
        'privacy.section5.list5': '当您在网站的行为，违反服务条款或可能损害或妨碍网站与其他使用者权益或导致任何人遭受损害时，经网站管理单位研析揭露您的个人资料是为了辨识、联络或采取法律行动所必要者。',
        'privacy.section5.list6': '有利于您的权益。',
        'privacy.section5.paragraph3': '本网站委托厂商协助搜集、处理或利用您的个人资料时，将对委外厂商或个人善尽监督管理之责。',
        'privacy.section6.title': '六、Cookie之使用',
        'privacy.section6.content': '为了提供您最佳的服务，本网站会在您的电脑中放置并取用我们的Cookie，若您不愿接受Cookie的写入，您可在您使用的浏览器功能项中设定隐私权等级为高，即可拒绝Cookie的写入，但可能会导至网站某些功能无法正常执行。',
        'privacy.section7.title': '七、隐私权保护政策之修正',
        'privacy.section7.content': '本网站隐私权保护政策将因应需求随时进行修正，修正后的条款将刊登于网站上。',
        'privacy.section8.title': '八、联系管道',
        'privacy.section8.content': '对于本站之隐私权政策有任何疑问，或者想提出变更、移除个人资料之请求，请前往本站「<a href="contact.html" style="color: var(--primary-color); text-decoration: underline;">联络我们</a>」页面提交表单。',
        
        // News
        'news.title': 'ZebraGo 流动车：高度客制化的流动精神健康服务',
        'news.intro': 'ZebraGo 是一辆专为学校及企业设计的流动服务车，可直接驶入校园或企业场所提供服务。车厢采用创新的可变间隔设计，能灵活分隔为两个独立训练室，同时为不同使用者提供私密、安静的治疗环境。我们提供高度客制化的服务方案，可根据不同机构的需求量身订造专属计划。',
        'news.tech.title': '沉浸式科技配合专业治疗',
        'news.tech.content': '车内配备先进的沉浸式技术，结合多感官体验、静观及表达艺术元素。我们的专业团队包括语言治疗师、职业治疗师及游戏治疗师，为学校的学童提供语言治疗、职业治疗及游戏治疗等一对一或小组训练，同时亦为企业员工提供压力管理、团队建设及心理健康支援服务。所有服务方案均可高度客制化，灵活配合不同机构的特定需求。',
        'news.sdg.title': '回应可持续发展目标',
        'news.sdg.content': 'ZebraGo 流动服务车致力回应联合国可持续发展目标，透过流动服务模式推动共融教育及企业社会责任，为学校及企业提供可持续的精神健康支援方案。',
        'news.readMore': '查看更多',
        
        // Common
        'button.learnMore': '了解更多',
        'button.contact': '联络我们',
        
        // Products Page
        'products.title': '周边产品',
        'products.intro1': '斑马象征合作、适应力与好奇心——这些力量同样适用于校园、家庭、社区，以至企业团队。ZebraGo 透过沉浸式与多感官体验，推动共融、同理与身心健康。',
        'products.intro2': '你选购的每一件商品，都是对共融与精神健康推广的一份支持。',
        'products.item1.name': '多功能斑马晴雨伞',
        'products.item1.price': 'HK$ 100',
        'products.item1.description': '一把可晴可雨的斑马晴雨伞，采用特润伞面与加厚伞布设计，遇水成珠不易渗透；同时具防 UV 功能，晴天外出也能安心遮挡。伞骨结实耐用，不易反伞，日常通勤与外出都实用可靠。',
        'products.item2.name': '轻奢毛毯手挽袋',
        'products.item2.price': 'HK$ 150',
        'products.item2.description': '轻奢毛毯手挽袋以柔软亲肤的毛毯感材质打造，外形时尚亮丽，同时兼具耐用度，日常携带更安心。无论上班、聚会或外出，它都能陪你出席不同场合，为每个精彩时刻增添质感。',
        'products.addToCart': '立即购买',
        'products.comingSoon': '更多商品即将推出，敬请期待！',
        
        // Special Projects Page
        'specialProjects.title': '特别项目',
        'specialProjects.intro': '探索「特别项目」，了解最新活动、招募与限定企划，把握参与机会！',
        'specialProjects.event1.title': '斑马绘画比赛',
        'specialProjects.event2.title': '校园共融大使',
        'specialProjects.apply': '立即报名',
        'specialProjects.comingSoon': '更多项目即将推出，敬请期待！',
        
        // About Page
        'about.title': '关于我们',
        'about.videoCaption': '全港首部电动共融体验车，结合沉浸式科技与专业治疗，为学校与企业提供全方位精神健康解决方案',
        
        // Vision & Mission
        'about.vm.title': '愿景与使命',
        'about.vm.subtitle': 'Vision & Mission',
        'about.vision.title': '我们的愿景',
        'about.vision.subtitle': 'Our Vision',
        'about.vision.highlight': '「构建全方位的共融与精神健康文化，让身心灵支援流动至社会每一个角落。」',
        'about.vision.description': '致力于创造一个「和而不同」的社会环境，让学生、教育工作者及职场人士皆能提升自我觉察，在互相尊重与支持的氛围中，展现韧性，达致身心平衡。',
        
        'about.mission.title': '我们的使命',
        'about.mission.subtitle': 'Our Mission',
        'about.mission1.title': '打破界限，主动支援',
        'about.mission1.subtitle': 'Accessibility & Mobility',
        'about.mission1.description': '透过特制的流动服务车，突破传统服务的地域限制。无论是偏远学校或繁忙的商业区，我们将专业治疗与培训直接送达，让支援触手可及。',
        'about.mission2.title': '科技赋能，创新体验',
        'about.mission2.subtitle': 'Innovation through ICE',
        'about.mission2.description': '结合沉浸式 (Immersive)、协作式 (Collaborative) 及体验式 (Experiential) 手法，运用多感官科技、静观及表达艺术，为服务使用者提供传统讲座以外的崭新互动体验，有效提升学习动机与舒压效果。',
        'about.mission3.title': '推动共融，强化韧性',
        'about.mission3.subtitle': 'Inclusion & Resilience',
        'about.mission3.school': '在校园：',
        'about.mission3.schoolText': '支援 SEN 学童融入校园，并为照顾者及教师提供喘息空间，建立关爱校园。',
        'about.mission3.corporate': '在企业：',
        'about.mission3.corporateText': '推广多元共融 (D&I) 文化，关注员工精神健康，透过团队协作体验提升企业的抗逆力与凝聚力。',
        
        'about.values.title': '核心价值',
        'about.values.subtitle': 'Core Values',
        'about.value1.title': '共融',
        'about.value1.subtitle': 'Inclusion',
        'about.value1.description': '尊重差异，欣赏每个人的独特价值。',
        'about.value2.title': '创新',
        'about.value2.subtitle': 'Innovation',
        'about.value2.description': '善用科技，开创身心灵服务的新模式。',
        'about.value3.title': '协作',
        'about.value3.subtitle': 'Cooperation',
        'about.value3.description': '如斑马般发挥群体力量，建立互助支援网络。',
        'about.value4.title': '全人健康',
        'about.value4.subtitle': 'Holistic Wellness',
        'about.value4.description': '关注身、心、社、灵的全面发展。',
        
        // Partners & Organizations
        'about.partners.title': '机构与合作伙伴',
        'about.partners.host': '主办机构',
        'about.partners.hostName': '浸信会欣悦社会服务处',
        'about.partners.strategic': '策略伙伴及赞助',
        'about.partners.strategicName': '利希慎基金',
        'about.partners.funding': '拨款资助',
        'about.partners.fundingName': '社创基金',
        'about.partners.support': '培育及支援',
        'about.partners.supportName': '创新园',
        
        // Core Values & Impact
        'about.coreValues.title': '核心价值与可持续发展目标',
        'about.zebra.title': '斑马的象征',
        'about.zebra.description': '在非洲文化中，斑马条纹常被视为平衡与和谐的象征。斑马的优点是群体合作、适应能力强以及好奇心旺盛，这些特质帮助牠们在自然界中生存并展现韧性与智慧。「斑马线 ZebraGo」以此为灵感，作为全港首个结合流动车概念与沉浸式科技 (ICE) 的身心灵支援平台。为学校及企业提供专业、创新且具温度的全方位支援。',
        'about.zebra.credits': '斑马插画师：黎紫珑同学、Kambang Miksen同学、符皓钧同学、萧志江同学、黎雨楠同学、温溢馨同学',
        'about.sdg.title': '回应联合国可持续发展目标',
        'about.sdg3.title': '良好健康与福祉',
        'about.sdg3.subtitle': 'Good Health and Well-being',
        'about.sdg4.title': '优质教育',
        'about.sdg4.subtitle': 'Quality Education',
        'about.sdg10.title': '减少不平等',
        'about.sdg10.subtitle': 'Reduced Inequalities',
        'about.design.title': '设计理念',
        'about.design.description': '采用 ICE 手法，结合多感官、静观及表达艺术等方式',
        'about.ice.immersive': 'Immersive',
        'about.ice.immersiveDesc': '沉浸式',
        'about.ice.collaborative': 'Collaborative',
        'about.ice.collaborativeDesc': '协作式',
        'about.ice.experiential': 'Experiential',
        'about.ice.experientialDesc': '体验式',
        'about.consultants.title': '专业顾问团队',
        'about.consultant1.name': '冼权锋教授',
        'about.consultant1.title1': '香港教育大学特殊教育与辅导学系教授',
        'about.consultant1.title2': '香港教育大学特殊学习需要与融合教育研究所执行所长',
        'about.consultant2.name': '吕昀侠先生',
        'about.consultant2.title1': '资深教育心理学家',
        'about.consultant2.title2': '中文大学教育心理学系专业顾问',
        'about.consultant2.title3': '香港大学心理学系教育心理学家',
        'about.consultant3.name': '李子轩先生',
        'about.consultant3.title1': '注册职业治疗师',
        'about.consultant3.title2': '香港教育大学兼任讲师',
        'about.consultant4.name': '李咏嘉姑娘',
        'about.consultant4.title1': '高级言语治疗师',
        'about.consultant4.title2': '香港大学言语及听觉科学系荣誉助理教授',
        
        // Services
        'about.services.title': '我们的服务',
        'about.services.activitiesTitle': '活动内容',
        
        // Inclusion Series
        'about.services.inclusion.title': '全方位共融系列',
        'about.services.inclusion.subtitle': '',
        'about.services.inclusion.coreLabel': '核心手法：',
        'about.services.inclusion.coreMethod': '采用 ICE 手法（沉浸式、协作式、体验式）',
        'about.services.inclusion.activity1.name': '共融讲座/工作坊',
        'about.services.inclusion.activity1.desc': '以班级为单位，学生进入 ZebraGo 车厢内的沉浸式环境。活动包括：绘本故事、名著典故、校园情境模拟及角色扮演。',
        'about.services.inclusion.activity2.name': '共融大使培训',
        'about.services.inclusion.activity2.desc': '以小组方式进行，让 SEN 学童与普通学生共同参与。活动包括：绘本共创、创意艺术、中国文化传统体验、共融实验。完成后会向全校师生分享作品。',
        'about.services.inclusion.activity3.name': 'Soul Power 植物花园校园展览',
        'about.services.inclusion.activity3.desc': '面向全校师生。内容包括：共融展板、学生作品展示、共融实验装置。',
        'about.services.inclusion.activity4.name': '沉浸式共融绘本心间',
        'about.services.inclusion.activity4.desc': '面向全校学生。活动包括：透过绘本故事、校园情境、互动游戏，让学生以「主角」身份分享作品及创作心得。',
        'about.services.inclusion.activity5.name': '教师共融工作坊',
        'about.services.inclusion.activity5.desc': '面向教职员。形式：以工作坊形式交流与 SEN 学童相处及课堂管理的技巧心得，讲解 SEN 学童特性。',
        'about.services.inclusion.activity6.name': '共融节 — 校园共融摊位体验',
        'about.services.inclusion.activity6.desc': '面向全校。形式：透过摊位游戏，让学生亲身体验 SEN 或不同种族人士的特性及需要。',
        
        // 4R Series
        'about.services.4r.title': '全方位 4R 系列',
        'about.services.4r.subtitle': '',
        'about.services.4r.coreLabel': '核心概念：',
        'about.services.4r.coreMethod': '休息、人际关系、放松、抗逆力',
        'about.services.4r.activity1.name': '教师讲座/工作坊',
        'about.services.4r.activity1.desc': '交流学童及照顾者的精神健康需要，教授回应技巧，预防学童自杀。',
        'about.services.4r.activity2.name': '教师沉浸式松 Zone',
        'about.services.4r.activity2.desc': '利用 ZebraGo 车厢的密闭空间。活动：结合多感官体验、静观及表达艺术，提供身心放松的空间。',
        'about.services.4r.activity3.name': '照顾者移动会所之无忧舒压茶聚',
        'about.services.4r.activity3.desc': '利用车厢密闭空间。活动：多感官静观、表达艺术、品茶连系。建立家长/照顾者之间的互助支援网络。',
        'about.services.4r.activity4.name': '4R 照顾心灵讲座/工作坊',
        'about.services.4r.activity4.desc': '以班级方式进行。活动：绘本故事、校园情境、互动游戏等多元体验式学习，加强学童对精神健康的觉察。',
        'about.services.4r.activity5.name': 'Soul Power 大使培训',
        'about.services.4r.activity5.desc': '挑选学生培训成为大使，在校内推广精神健康讯息及筹备展览。',
        'about.services.4r.activity6.name': 'Soul Power 校园展览',
        'about.services.4r.activity6.desc': '展示 4R Soul Power 展板、学生作品及实验装置。',
        'about.services.4r.activity7.name': '4R Soul Power 沉浸式情绪社交小组',
        'about.services.4r.activity7.desc': '以小组形式在车厢内进行。活动：利用沉浸式技术结合多感官、静观及表达艺术，训练社交技巧及自我调节情绪能力。',
        'about.services.4r.activity8.name': '4R 精神健康校园摊位体验',
        'about.services.4r.activity8.desc': '以摊位体验形式让全校学生了解精神健康的重要性。',
        'about.services.4r.activity9.name': '4R Soul Power 多感官沉浸体验',
        'about.services.4r.activity9.desc': '以班级方式在车厢内进行。活动：透过绘本故事、手绘转换动画技术、互动游戏，提升对身心灵需要的觉察。',
        
        // Training Series
        'about.services.training.title': '百变练功房 — 专业训练系列',
        'about.services.training.subtitle': '',
        'about.services.training.coreLabel': '核心特点：',
        'about.services.training.coreFeature': '车厢空间可改变间隔，变身为两个独立训练室',
        'about.services.training.targetLabel': '对象：',
        'about.services.training.targetAudience': '语言障碍、专注力不足、过度活跃症学童',
        'about.services.training.activity1.name': '个别化专业训练',
        'about.services.training.activity1.desc': '在 ZebraGo 车厢内进行。内容：一对一的个别化言语治疗、职业治疗或游戏治疗训练。',
        'about.services.training.activity2.name': '2人同行小组',
        'about.services.training.activity2.desc': '在 ZebraGo 车厢内进行。内容：二人的言语治疗、职业治疗或游戏治疗训练小组。',
        'about.services.training.activity3.name': '治疗小组',
        'about.services.training.activity3.desc': '可选择在 ZebraGo 车厢或校内进行。内容：言语治疗、职业治疗或游戏治疗的训练小组。',
        'about.services.training.teamLabel': '专业团队配置：',
        'about.services.training.teamDesc': '服务由顾问团队支持，包括特殊教育与辅导学系教授、资深教育心理学家、注册职业治疗师及高级言语治疗师。',
        
        // Individual Services Page
        'individual.hero.title': '百变练功房 —— 您的流动专业支援站',
        'individual.hero.subtitle': '结合专业治疗团队与高私隐度流动空间，将言语及职业治疗服务直接带到您身边。',
        'individual.why.title': '为什么选择流动训练？',
        'individual.why.intro': '我们的流动训练服务为学童及家长提供更灵活、更私密的专业支援，让治疗效果更显著。',
        'individual.why.benefit1.title': '高私隐度，减少标签',
        'individual.why.benefit1.desc': '我们的训练于 ZebraGo 车厢内的独立隔音空间进行，外观活泼，让孩子在无压力的环境下学习，避免传统标签效应。',
        'individual.why.benefit2.title': '灵活便利',
        'individual.why.benefit2.desc': '服务地点具弹性，能配合学校或社区安排，节省家长与学童舟车劳顿的时间。',
        'individual.why.benefit3.title': '专业团队',
        'individual.why.benefit3.desc': '由合资格的言语治疗师、职业治疗师及注册社工组成的跨专业团队全程跟进。',
        'individual.training.title': '核心训练范畴',
        'individual.training.intro': '针对不同需要，提供专业且全面的治疗服务，协助学童健康成长。',
        'individual.training.st.title': 'A. 言语治疗',
        'individual.training.st.desc': '针对有语言发展迟缓、发音问题或社交沟通障碍的学童。透过车厢内的互动情境，改善口语表达、理解能力及社交对答技巧。',
        'individual.training.ot.title': 'B. 职业治疗',
        'individual.training.ot.desc': '针对专注力不足、小肌肉发展或感觉统合失调的学童。利用车厢内的多元感官设备，进行针对性的大小肌肉训练及感统调节，提升学习效能。',
        'individual.training.pt.title': 'C. 游戏治疗',
        'individual.training.pt.desc': '为受情绪困扰的学童提供安全的表达空间。透过游戏作为媒介，协助孩子宣泄情绪、建立自信及学习解决问题。',
        'individual.formats.title': '服务形式',
        'individual.formats.intro': '根据学童的个别需要，提供最适合的训练模式，确保治疗效果最大化。',
        'individual.formats.individual.title': '一对一深造',
        'individual.formats.individual.desc': '针对学童独特需要，制定个别化教育计划，提供最密集的关注与指导。',
        'individual.formats.group.title': '双人/小组互动',
        'individual.formats.group.desc': '在治疗师引导下，安排能力相若的学童进行配对训练，模拟真实社交场景，提升同侪互动技巧。',
        'individual.support.title': '家长及照顾者支援',
        'individual.support.intro': '我们深信「家长好，孩子才会好」。除了学童训练，我们亦提供全面的家长支援服务。',
        'individual.support.home.title': '家居训练指导',
        'individual.support.home.desc': '让治疗效果延伸至家中，协助家长在日常生活中持续支援孩子的发展。',
        'individual.support.counseling.title': '情绪辅导与咨询',
        'individual.support.counseling.desc': '为照顾者提供喘息空间与专业建议，减轻照顾压力，建立更健康的亲子关系。',
        'individual.cta.button': '查询/预约服务',
        
        // School Services Page
        'school.hero.title': '全校参与．共建身心灵健康校园',
        'school.hero.subtitle': 'ZebraGo 驶入校园，以沉浸式科技支援学校发展「精神健康」与「共融文化」，全方位照顾学生、老师及家长。',
        'school.mentalHealth.title': '精神健康支援',
        'school.mentalHealth.intro': '深化 4R 系列内容，强调不同持份者的得着，全方位支援学生、教职员及家长的精神健康需要。',
        'school.mentalHealth.student.title': '学生层面',
        'school.mentalHealth.student.subtitle': '提升抗逆力',
        'school.mentalHealth.student.point1': 'Soul Power 沉浸式体验：',
        'school.mentalHealth.student.point1.desc': '不同于传统讲座，我们利用车厢内的 270 度投影与体感互动，让学生「走进」绘本故事，学习辨识情绪与求助。',
        'school.mentalHealth.student.point2': '社交小组训练：',
        'school.mentalHealth.student.point2.desc': '在安全环境下练习社交技巧，特别针对内向或有社交焦虑的学生。',
        'school.mentalHealth.student.point3': '校园氛围营造：',
        'school.mentalHealth.student.point3.desc': '透过培训「Soul Power 大使」及举办大型展览，由学生主导推广精神健康，让关爱文化在朋辈间流动。',
        'school.mentalHealth.staff.title': '教职员层面',
        'school.mentalHealth.staff.subtitle': '减压与赋能',
        'school.mentalHealth.staff.point1': '教师加油站：',
        'school.mentalHealth.staff.point1.desc': '老师也需要休息。我们将车厢变身为专属的「减压舱」，提供短暂的静观与多感官放松体验，让老师重拾教学动力。',
        'school.mentalHealth.staff.point2': '危机识别培训：',
        'school.mentalHealth.staff.point2.desc': '透过工作坊装备老师识别高危学生的技巧，建立校园安全网。',
        'school.mentalHealth.parent.title': '家长层面',
        'school.mentalHealth.parent.subtitle': '连结与喘息',
        'school.mentalHealth.parent.point1': '家长充电站：',
        'school.mentalHealth.parent.point1.desc': '结合品茶与艺术创作，让家长在校园内找到专属的 Me Time，并建立家长互助网络。',
        'school.inclusion.title': '共融文化推广',
        'school.inclusion.intro': '深化共融系列内容，透过体验式学习推动校园内的接纳与尊重。',
        'school.inclusion.experiential.title': '体验式学习',
        'school.inclusion.experiential.desc': '模拟体验摊位：',
        'school.inclusion.experiential.desc.text': '让一般学生亲身感受读写障碍、自闭症或肢体障碍人士的日常挑战，从「认知」升华至「同理」。',
        'school.inclusion.ambassador.title': '共融大使计划',
        'school.inclusion.ambassador.desc': '培训学生策划共融活动，推动校园内的接纳与尊重。',
        'school.process.title': '学校合作流程',
        'school.process.intro': '我们提供一站式支援服务，从咨询到执行，全程专业跟进。',
        'school.process.step1.title': '校本咨询',
        'school.process.step1.desc': '了解学校关注事项（如：学童自杀、欺凌、SEN 支援）。',
        'school.process.step2.title': '方案设计',
        'school.process.step2.desc': '组合适合的 4R 或共融活动（班级活动/小组/全校性）。',
        'school.process.step3.title': '到校服务',
        'school.process.step3.desc': 'ZebraGo 流动车及专业团队按时到校执行。',
        'school.process.step4.title': '成效评估',
        'school.process.step4.desc': '提供活动报告及学生反馈。',
        'school.cta.button': '查询/预约服务',
        
        // Corporate Services Page
        'corporate.hero.title': '成为 ZebraGo 企业身心灵伙伴 (Wellness Partner)',
        'corporate.hero.subtitle': '结合流动科技与专业治疗，助您实践 ESG 职业健康指标，打造具抗逆力的幸福职场。',
        'corporate.why.title': '超越福利，更是企业永续的关键',
        'corporate.why.intro': '在现今的商业环境，员工的身心健康是企业最大的资产。ZebraGo 提供全港首创的流动身心支援，协助企业直接回应港交所 ESG 报告指引 (HKEX ESG Reporting Guide) 中关于「层面 B2：健康与安全」的要求。',
        'corporate.why.kpi.title': '满足 KPI B2.3 指标',
        'corporate.why.kpi.desc': '透过我们系统化的课程与活动，具体描述及执行职业健康与安全措施。',
        'corporate.why.brand.title': '提升雇主品牌',
        'corporate.why.brand.desc': '获得「ZebraGo Wellness Partner」认证，展现企业对员工的承担。',
        'corporate.why.flexible.title': '灵活流动体验',
        'corporate.why.flexible.desc': '无需腾出固定办公空间，ZebraGo 流动车直接驶达，提供即时支援。',
        'corporate.program.title': '模块化认证计划 —— 4R 全方位支援',
        'corporate.program.intro': '企业可根据需求选择单一模块，或完成全套 4R 系列以获得年度认证伙伴资格。',
        'corporate.program.rest.title': 'Module 1: Rest',
        'corporate.program.rest.subtitle': '休息与充电',
        'corporate.program.rest.form': '形式：',
        'corporate.program.rest.form.text': 'ZebraGo 流动车体验',
        'corporate.program.rest.content': '内容：',
        'corporate.program.rest.content.text': '将流动车停泊于公司楼下，提供「午间快充」服务。员工可于独立空间内进行 15-20 分钟的深层休息，暂时抽离工作压力，恢复精力。',
        'corporate.program.relaxation.title': 'Module 2: Relaxation',
        'corporate.program.relaxation.subtitle': '放松与减压',
        'corporate.program.relaxation.form': '形式：',
        'corporate.program.relaxation.form.text': '沉浸式工作坊 / 流动体验',
        'corporate.program.relaxation.content': '内容：',
        'corporate.program.relaxation.content.text': '利用车内或会议室的沉浸式投影，进行静观 (Mindfulness) 引导、肌肉放松练习及呼吸训练，有效降低职场焦虑。',
        'corporate.program.relationship.title': 'Module 3: Relationship',
        'corporate.program.relationship.subtitle': '连结与共融',
        'corporate.program.relationship.form': '形式：',
        'corporate.program.relationship.form.text': '团队建立 (Team Building)',
        'corporate.program.relationship.content': '内容：',
        'corporate.program.relationship.content.text': '透过「神经多样性 (Neurodiversity)」体验活动，让员工理解不同特质（如 SEN）的同事或客户，学习非暴力沟通，建立更包容的团队文化。',
        'corporate.program.resilience.title': 'Module 4: Resilience',
        'corporate.program.resilience.subtitle': '抗逆力与成长',
        'corporate.program.resilience.form': '形式：',
        'corporate.program.resilience.form.text': '专业培训讲座',
        'corporate.program.resilience.content': '内容：',
        'corporate.program.resilience.content.text': '由心理学家或治疗师主讲，教授情绪急救 (Mental Health First Aid)、压力管理及危机应对技巧，提升员工面对挑战的心理韧性。',
        'corporate.certification.title': '获取您的「ZebraGo Wellness Partner」认证',
        'corporate.certification.intro': '当企业完成上述 4R 模块培训后，将获颁发年度「ZebraGo Institutional Partner」证书。',
        'corporate.certification.usage.title': '证书用途',
        'corporate.certification.usage.desc': '可用于企业年报、ESG 报告及网站展示。',
        'corporate.certification.benefits.title': '伙伴权益',
        'corporate.certification.benefits.desc': '优先预约 ZebraGo 流动车服务、获邀出席年度伙伴峰会 (Partner Summit)，与业界交流健康职场心得。',
        'corporate.csr.title': '商业与社会价值的共赢',
        'corporate.csr.intro': '除了照顾内部员工，您的参与亦能支持 ZebraGo 服务更多基层学童。',
        'corporate.csr.sponsor.title': '配对赞助',
        'corporate.csr.sponsor.desc': '企业每完成一个模块，部分收益将支持我们为一间资源匮乏的学校提供免费服务。',
        'corporate.csr.volunteer.title': '企业义工',
        'corporate.csr.volunteer.desc': '安排员工参与我们的社区共融活动，身体力行回馈社会。',
        'corporate.cta.button': '查询/预约服务'
    },
    'en': {
        // Page Titles (for browser tab)
        'pageTitle.home': 'ZebraGo',
        'pageTitle.about': 'About Us - ZebraGo',
        'pageTitle.contact': 'Inquiry Service - ZebraGo',
        'pageTitle.news': 'News - ZebraGo',
        'pageTitle.support': 'Support Us - ZebraGo',
        'pageTitle.products': 'Merchandise - ZebraGo',
        'pageTitle.specialProjects': 'Special Projects - ZebraGo',
        'pageTitle.individual': 'Individual Services',
        'pageTitle.school': 'School Services',
        'pageTitle.corporate': 'Corporate Services',
        'pageTitle.privacy': 'Privacy Statement',
        'pageTitle.disclaimer': 'Disclaimer',
        'pageTitle.copyright': 'Copyright Statement',
        'pageTitle.ipProtection': 'Intellectual Property Protection',
        'pageTitle.donation': 'Donations - ZebraGo',

        // Navigation
        'nav.about': 'About Us',
        'nav.services': 'Our Services',
        'nav.individual': 'Individual Services',
        'nav.school': 'School Services',
        'nav.corporate': 'Corporate Services',
        'nav.news': 'News',
        'nav.support': 'Support Us',
        'nav.donation': 'Donations',
        'nav.products': 'Merchandise',
        'nav.specialProjects': 'Special Projects',
        'nav.contact': 'Inquiry Service',
        
        // Contact page
        'contact.title': 'Inquiry Service',
        'contact.office.title': 'Head Office',
        'contact.address': 'G/F, Hang Cheong House, Fu Heng Estate, Tai Po',
        'contact.showMap': 'Show Detailed Map',

        // Carousel
        'carousel.slide1.title': 'ZebraGo Mobile Mental Health and Inclusion Service Vehicle',
        'carousel.slide1.text1': 'Serving schools and enterprises, building inclusive environments and mental health spaces',
        'carousel.slide1.text2': 'Highly customized solutions combining immersive technology, multi-sensory experiences and professional therapy',
        'carousel.slide1.button': 'Learn More',
        'carousel.slide2.title': 'Flexible Space, Highly Customized',
        'carousel.slide2.text1': 'Variable compartment design provides private and quiet therapy environments',
        'carousel.slide2.text2': 'Flexibly adapts to different institutional needs, tailor-made service plans',
        'carousel.slide2.button': 'Get to Know Us',
        'carousel.slide3.title': 'Protecting the Physical and Mental Health of School and Corporate Teams',
        'carousel.slide3.text1': 'Providing comprehensive support for school teachers and students, corporate employees and caregivers',
        'carousel.slide3.text2': 'Highly customized solutions using ICE approach to create immersive, collaborative, and experiential services',
        'carousel.slide3.button': 'Book Now',
        
        // Stats
        'stats.title': 'ZebraGo Mobile Service Vehicle Providing Professional Mental Health and Inclusion Support for Schools and Enterprises',
        'stats.schools': 'Schools Served',
        'stats.students': 'Total Beneficiaries',
        'stats.treatments': 'Treatment Programs',
        'stats.hours': 'Immersive Experience Hours',
        'stats.hoursUnit': 'hours',
        
        // Sections
        'section.partners': 'Partners',
        'section.services': 'Our Services',
        'section.support': 'Support Us',
        'section.news': 'News',
        
        // Services
        'service.mentalHealth': 'Comprehensive 4R<br>Mental Health Series',
        'service.inclusion': 'Comprehensive<br>Inclusion Series',
        'service.training': 'Flexible Training Room<br>Professional Training Series',
        
        // Support
        'support.donation': 'Donations',
        'support.products': 'Merchandise',
        'support.specialProjects': 'Special Projects',
        
        // Footer
        'footer.privacy': 'Privacy Statement',
        'footer.ip': 'Intellectual Property Protection',
        'footer.disclaimer': 'Disclaimer',
        'footer.copyright': 'Copyright Statement',
        'footer.contact': 'Contact Us',
        
        // Disclaimer Page
        'disclaimer.paragraph1': 'All information and content on this website are compiled by "ZebraGo" (hereinafter referred to as "this organization") for reference purposes only. The information provided by this organization, particularly regarding legal interpretation or issue handling, is based on general circumstances rather than specific individual situations, and should not replace professional advice. Before taking any action based on the information on this website, users should seek independent legal or other professional advice.',
        'disclaimer.paragraph2': 'This organization assumes no legal liability for any losses, damages, costs, or expenses directly or indirectly caused by the use or inability to use this website, or by the use or citation of information from this website.',
        'disclaimer.paragraph3': 'Although this organization strives to ensure the accuracy of the information on this website at the time of publication, it does not guarantee the complete correctness or comprehensiveness of the content. This organization also assumes no legal liability of any form for any losses, damages, costs, or expenses caused by information errors or content omissions.',
        'disclaimer.paragraph4': 'Users should note that information linked to other websites (whether linking from those websites to this website, or vice versa) is not compiled by this organization. This organization is not responsible for such information, makes no representations regarding its accuracy, completeness, or other aspects, and assumes no legal liability for any losses, damages, costs, or expenses arising from the use of such information. Even if this website has links with other websites, this does not indicate that this organization endorses the content of those websites.',
        
        // Copyright Page
        'copyright.paragraph1': 'Unless otherwise stated, "ZebraGo" (hereinafter referred to as "this organization") owns the copyright of all content on this website, including but not limited to text, images, graphics, animations, short videos, data, or compilations of other materials.',
        'copyright.paragraph2': 'Users are permitted to use, download, or accurately reproduce materials from this website without modification, but only for personal use or non-commercial purposes. Unless prior written consent is obtained from this organization, no content from this website may be copied, reproduced, distributed, or used in any form for commercial purposes.',
        'copyright.paragraph3': 'However, the above permission does not extend to any materials linked to external websites, the copyright of which is owned by third parties. Authorization or permission from the relevant copyright owner must be obtained before using such content.',
        'copyright.paragraph4': 'By accessing this organization\'s website and any webpage of this website, users unconditionally agree to the terms and conditions of this copyright notice. This organization may modify and/or supplement the terms and conditions from time to time without prior notice to users.',
        'copyright.paragraph5': 'Note: In case of any conflict or inconsistency between the English version and the Chinese version of this copyright notice, the Chinese version shall prevail. In case of any difference between the Traditional Chinese version and the Simplified Chinese version, the Traditional Chinese version shall prevail.',
        
        // Privacy Page
        'privacy.intro': 'Welcome to the "ZebraGo" website (hereinafter referred to as "this website"). To ensure you can use the services and information on this website with peace of mind, we hereby explain this website\'s privacy protection policy to safeguard your rights. Please read the following content carefully:',
        'privacy.section1.title': 'I. Scope of Privacy Protection Policy',
        'privacy.section1.content': 'The privacy protection policy includes how this website handles personally identifiable information collected when you use the website services. The privacy protection policy does not apply to related linked websites outside this website, nor does it apply to personnel not commissioned or involved in the management of this website.',
        'privacy.section2.title': 'II. Collection, Processing, and Use of Personal Data',
        'privacy.section2.paragraph1': 'When you visit this website or use the functional services provided by this website, we will request necessary personal data from you based on the nature of the service function, and process and use your personal data within the scope of that specific purpose. Without your written consent, this website will not use personal data for other purposes.',
        'privacy.section2.paragraph2': 'When you use interactive functions such as service mailboxes and questionnaires, this website will retain the name, email address, contact information, and usage time you provide.',
        'privacy.section2.paragraph3': 'During general browsing, the server will automatically record relevant activities, including the IP address of your connected device, usage time, browser used, browsing and click data records, etc., as reference for improving website services. These records are for internal use only and will never be publicly disclosed.',
        'privacy.section2.paragraph4': 'To provide accurate services, we will conduct statistics and analysis on the collected questionnaire content. The statistical data or explanatory text of the analysis results will be presented. In addition to internal research, we will publish statistical data and explanatory text as needed, but will not involve specific individual data.',
        'privacy.section2.paragraph5': 'You can request at any time to correct or delete your account or personal data collected by this website and other privacy information. Please refer to the contact channel at the bottom for contact information.',
        'privacy.section3.title': 'III. Data Protection',
        'privacy.section3.paragraph1': 'This website\'s servers are equipped with firewalls, antivirus systems, and other related information security equipment and necessary security protection measures to protect the website and your personal data with strict protection measures. Only authorized personnel can access your personal data. All relevant processing personnel have signed confidentiality agreements, and those who violate confidentiality obligations will be subject to relevant legal penalties.',
        'privacy.section3.paragraph2': 'When it is necessary to commission other units to provide services due to business needs, this website will also strictly require them to comply with confidentiality obligations and take necessary inspection procedures to ensure they will indeed comply.',
        'privacy.section4.title': 'IV. External Links on the Website',
        'privacy.section4.content': 'The web pages of this website provide links to other websites. You can also click to enter other websites through the links provided by this website. However, the privacy protection policy of this website does not apply to those linked websites. You must refer to the privacy protection policy of those linked websites.',
        'privacy.section5.title': 'V. Policy on Sharing Personal Data with Third Parties',
        'privacy.section5.paragraph1': 'This website will never provide, exchange, rent, or sell any of your personal data to other individuals, groups, private enterprises, or public institutions, except where there is a legal basis or contractual obligation.',
        'privacy.section5.paragraph2': 'The circumstances mentioned in the preceding proviso include but are not limited to:',
        'privacy.section5.list1': 'With your written consent.',
        'privacy.section5.list2': 'As required by law.',
        'privacy.section5.list3': 'To prevent danger to your life, body, freedom, or property.',
        'privacy.section5.list4': 'Cooperation with public institutions or academic research institutions, necessary for statistics or academic research based on public interest, and the data has been processed or collected by the provider in a way that makes it impossible to identify specific individuals based on the disclosure method.',
        'privacy.section5.list5': 'When your behavior on the website violates the terms of service or may harm or hinder the rights and interests of the website and other users or cause harm to anyone, and the website management unit determines that disclosing your personal data is necessary for identification, contact, or legal action.',
        'privacy.section5.list6': 'Beneficial to your rights and interests.',
        'privacy.section5.paragraph3': 'When this website commissions vendors to assist in collecting, processing, or using your personal data, it will exercise proper supervision and management responsibilities over the outsourced vendors or individuals.',
        'privacy.section6.title': 'VI. Use of Cookies',
        'privacy.section6.content': 'To provide you with the best service, this website will place and access our cookies on your computer. If you do not wish to accept cookie writing, you can set the privacy level to high in your browser\'s function settings to reject cookie writing, but this may cause some website functions to fail to operate normally.',
        'privacy.section7.title': 'VII. Amendments to Privacy Protection Policy',
        'privacy.section7.content': 'This website\'s privacy protection policy will be amended as needed from time to time. The amended terms will be published on the website.',
        'privacy.section8.title': 'VIII. Contact Channel',
        'privacy.section8.content': 'If you have any questions about this website\'s privacy policy, or wish to make a request to change or remove personal data, please go to this website\'s "<a href="contact.html" style="color: var(--primary-color); text-decoration: underline;">Contact Us</a>" page to submit a form.',
        
        // News
        'news.title': 'ZebraGo Mobile Vehicle: Highly Customized Mobile Mental Health Services',
        'news.intro': 'ZebraGo is a mobile service vehicle designed for schools and enterprises, capable of directly entering campuses or corporate premises to provide services. The interior features an innovative variable partition design, allowing it to be flexibly divided into two independent training rooms, providing private and quiet therapeutic environments for different users. We offer highly customized service solutions, tailoring exclusive plans according to the specific needs of different organizations.',
        'news.tech.title': 'Immersive Technology Combined with Professional Treatment',
        'news.tech.content': 'The vehicle is equipped with advanced immersive technology, combining multi-sensory experiences, mindfulness, and expressive arts elements. Our professional team includes speech therapists, occupational therapists, and play therapists, providing one-on-one or group training such as speech therapy, occupational therapy, and play therapy for school children. Simultaneously, we offer stress management, team building, and mental health support services for corporate employees. All service solutions are highly customizable, flexibly adapting to the specific needs of different organizations.',
        'news.sdg.title': 'Responding to Sustainable Development Goals',
        'news.sdg.content': 'The ZebraGo mobile service vehicle is committed to responding to the United Nations Sustainable Development Goals, promoting inclusive education and corporate social responsibility through its mobile service model, and providing sustainable mental health support solutions for schools and enterprises.',
        'news.readMore': 'Read More',
        
        // Common
        'button.learnMore': 'Learn More',
        'button.contact': 'Contact Us',
        
        // Products Page
        'products.title': 'Merchandise',
        'products.intro1': 'Zebras symbolize cooperation, adaptability, and curiosity—these strengths apply equally to schools, families, communities, and even corporate teams. ZebraGo promotes inclusion, empathy, and mental well-being through immersive and multi-sensory experiences.',
        'products.intro2': 'Every item you purchase is a form of support for the promotion of inclusion and mental health.',
        'products.item1.name': 'Multi-Functional Zebra Umbrella',
        'products.item1.price': 'HK$ 100',
        'products.item1.description': 'A versatile zebra umbrella suitable for both sunny and rainy days, featuring a specially treated umbrella surface and thickened fabric design that forms water beads and resists penetration. Equipped with UV protection, it provides safe coverage on sunny days. The sturdy frame is durable and resistant to inversion, making it practical and reliable for daily commuting and outings.',
        'products.item2.name': 'Luxury Blanket Tote Bag',
        'products.item2.price': 'HK$ 150',
        'products.item2.description': 'The luxury blanket tote bag is crafted from soft, skin-friendly blanket-like material with a stylish and elegant appearance, while maintaining durability for worry-free daily carrying. Whether for work, gatherings, or outings, it accompanies you to various occasions, adding quality to every wonderful moment.',
        'products.addToCart': 'Buy Now',
        'products.comingSoon': 'More merchandise coming soon, stay tuned!',
        
        // Special Projects Page
        'specialProjects.title': 'Special Projects',
        'specialProjects.intro': 'Explore "Special Projects" to learn about the latest activities, recruitment opportunities, and limited initiatives. Seize the opportunity to participate!',
        'specialProjects.event1.title': 'Zebra Drawing Competition',
        'specialProjects.event2.title': 'Campus Inclusion Ambassador',
        'specialProjects.apply': 'Apply Now',
        'specialProjects.comingSoon': 'More projects coming soon, stay tuned!',
        
        // About Page
        'about.title': 'About Us',
        'about.videoCaption': 'Hong Kong\'s first electric inclusive experience vehicle, combining immersive technology and professional therapy to provide comprehensive mental health solutions for schools and enterprises',
        
        // Vision & Mission
        'about.vm.title': 'Vision & Mission',
        'about.vm.subtitle': '',
        'about.vision.title': 'Our Vision',
        'about.vision.subtitle': '',
        'about.vision.highlight': '"Building a comprehensive culture of inclusion and mental health, bringing mind-body-spirit support to every corner of society."',
        'about.vision.description': 'Committed to creating a society of "harmony in diversity," enabling students, educators, and professionals to enhance self-awareness, demonstrate resilience, and achieve mind-body balance in an atmosphere of mutual respect and support.',
        
        'about.mission.title': 'Our Mission',
        'about.mission.subtitle': '',
        'about.mission1.title': 'Breaking Boundaries, Proactive Support',
        'about.mission1.subtitle': 'Accessibility & Mobility',
        'about.mission1.description': 'Through our specially designed mobile service vehicle, we break through the geographical limitations of traditional services. Whether it\'s remote schools or busy business districts, we deliver professional therapy and training directly, making support readily accessible.',
        'about.mission2.title': 'Technology Empowerment, Innovative Experience',
        'about.mission2.subtitle': 'Innovation through ICE',
        'about.mission2.description': 'Combining Immersive, Collaborative, and Experiential (ICE) approaches, utilizing multi-sensory technology, mindfulness, and expressive arts to provide service users with innovative interactive experiences beyond traditional lectures, effectively enhancing learning motivation and stress relief.',
        'about.mission3.title': 'Promoting Inclusion, Strengthening Resilience',
        'about.mission3.subtitle': 'Inclusion & Resilience',
        'about.mission3.school': 'In Schools:',
        'about.mission3.schoolText': 'Supporting SEN students to integrate into campus, providing respite for caregivers and teachers, and building a caring school.',
        'about.mission3.corporate': 'In Enterprises:',
        'about.mission3.corporateText': 'Promoting diversity and inclusion (D&I) culture, focusing on employee mental health, and enhancing corporate resilience and cohesion through team collaboration experiences.',
        
        'about.values.title': 'Core Values',
        'about.values.subtitle': '',
        'about.value1.title': 'Inclusion',
        'about.value1.subtitle': '',
        'about.value1.description': 'Respecting differences and appreciating the unique value of each individual.',
        'about.value2.title': 'Innovation',
        'about.value2.subtitle': '',
        'about.value2.description': 'Leveraging technology to create new models of mind-body-spirit services.',
        'about.value3.title': 'Cooperation',
        'about.value3.subtitle': '',
        'about.value3.description': 'Like zebras, leveraging collective strength to build mutual support networks.',
        'about.value4.title': 'Holistic Wellness',
        'about.value4.subtitle': '',
        'about.value4.description': 'Focusing on the comprehensive development of body, mind, society, and spirit.',
        
        // Partners & Organizations
        'about.partners.title': 'Organizations & Partners',
        'about.partners.host': 'Host Organization',
        'about.partners.hostName': 'Baptist Oi Kwan Social Service',
        'about.partners.strategic': 'Strategic Partner & Sponsor',
        'about.partners.strategicName': 'Lee Hysan Foundation',
        'about.partners.funding': 'Grant Funding',
        'about.partners.fundingName': 'Social Innovation and Entrepreneurship Development Fund',
        'about.partners.support': 'Incubation & Support',
        'about.partners.supportName': 'Innovator',
        
        // Core Values & Impact
        'about.coreValues.title': 'Core Values & Sustainable Development Goals',
        'about.zebra.title': 'The Zebra Symbolism',
        'about.zebra.description': 'In African culture, zebra stripes are often seen as symbols of balance and harmony. Zebras\' strengths include group cooperation, strong adaptability, and keen curiosity—qualities that help them survive in nature and demonstrate resilience and wisdom. Inspired by this, "ZebraGo" serves as Hong Kong\'s first mind-body-spirit support platform combining mobile vehicle concepts with immersive technology (ICE), providing professional, innovative, and warm comprehensive support for schools and enterprises.',
        'about.zebra.credits': 'Zebra Illustrators: Lai Tsz-lung, Kambang Miksen, Fu Ho-chun, Siu Chi-kong, Lai Yu-nam, Wan Yat-hing',
        'about.sdg.title': 'Responding to UN Sustainable Development Goals (SDGs)',
        'about.sdg3.title': 'Good Health and Well-being',
        'about.sdg3.subtitle': '',
        'about.sdg4.title': 'Quality Education',
        'about.sdg4.subtitle': '',
        'about.sdg10.title': 'Reduced Inequalities',
        'about.sdg10.subtitle': '',
        'about.design.title': 'Design Concept',
        'about.design.description': 'Adopting the ICE approach, combining multi-sensory, mindfulness, and expressive arts methods',
        'about.ice.immersive': 'Immersive',
        'about.ice.immersiveDesc': '',
        'about.ice.collaborative': 'Collaborative',
        'about.ice.collaborativeDesc': '',
        'about.ice.experiential': 'Experiential',
        'about.ice.experientialDesc': '',
        'about.consultants.title': 'Professional Consultant Team',
        'about.consultant1.name': '冼權鋒教授',
        'about.consultant1.title1': 'Professor, Department of Special Education and Counselling, The Education University of Hong Kong',
        'about.consultant1.title2': 'Executive Director, Centre for Special Educational Needs and Inclusive Education, The Education University of Hong Kong',
        'about.consultant2.name': '呂昀俠先生',
        'about.consultant2.title1': 'Senior Educational Psychologist',
        'about.consultant2.title2': 'Professional Consultant, Department of Educational Psychology, The Chinese University of Hong Kong',
        'about.consultant2.title3': 'Educational Psychologist, Department of Psychology, The University of Hong Kong',
        'about.consultant3.name': '李子軒先生',
        'about.consultant3.title1': 'Registered Occupational Therapist',
        'about.consultant3.title2': 'Part-time Lecturer, The Education University of Hong Kong',
        'about.consultant4.name': '李詠嘉姑娘',
        'about.consultant4.title1': 'Senior Speech Therapist',
        'about.consultant4.title2': 'Honorary Assistant Professor, Department of Speech and Hearing Sciences, The University of Hong Kong',
        
        // Services
        'about.services.title': 'Our Services',
        'about.services.activitiesTitle': 'Activities',
        
        // Inclusion Series
        'about.services.inclusion.title': 'All-round Inclusion Series',
        'about.services.inclusion.subtitle': '',
        'about.services.inclusion.coreLabel': 'Core Approach:',
        'about.services.inclusion.coreMethod': 'ICE Approach (Immersive, Collaborative, Experiential)',
        'about.services.inclusion.activity1.name': 'Inclusion Workshops/Seminars',
        'about.services.inclusion.activity1.desc': 'Class-based activities where students enter the immersive environment inside the ZebraGo vehicle. Activities include: picture book stories, famous literary references, school situation simulations and role-playing.',
        'about.services.inclusion.activity2.name': 'Inclusion Ambassador Training',
        'about.services.inclusion.activity2.desc': 'Small group activities where SEN students and general students participate together. Activities include: collaborative picture book creation, creative arts, traditional Chinese cultural experiences, and inclusion experiments. Completed works will be shared with the entire school.',
        'about.services.inclusion.activity3.name': 'Soul Power Plant Garden Campus Exhibition',
        'about.services.inclusion.activity3.desc': 'For all school staff and students. Content includes: inclusion display boards, student artwork exhibitions, and inclusion experimental installations.',
        'about.services.inclusion.activity4.name': 'Immersive Inclusion Picture Book Session',
        'about.services.inclusion.activity4.desc': 'For all students. Activities include: through picture book stories, school situations, and interactive games, students share their works and creative insights as "protagonists."',
        'about.services.inclusion.activity5.name': 'Teachers Inclusion Workshop',
        'about.services.inclusion.activity5.desc': 'For teaching staff. Format: workshop-style exchange of tips and insights on interacting with SEN students and classroom management, explaining SEN student characteristics.',
        'about.services.inclusion.activity6.name': 'Inclusion Festival — Campus Inclusion Booth Experience',
        'about.services.inclusion.activity6.desc': 'For the entire school. Format: through booth games, students personally experience the characteristics and needs of SEN individuals or people of different ethnicities.',
        
        // 4R Series
        'about.services.4r.title': 'All-round 4R Series',
        'about.services.4r.subtitle': '',
        'about.services.4r.coreLabel': 'Core Concepts:',
        'about.services.4r.coreMethod': 'Rest, Relationship, Relaxation, Resilience',
        'about.services.4r.activity1.name': 'Teacher Workshops/Seminars',
        'about.services.4r.activity1.desc': 'Exchange on mental health needs of students and caregivers, teaching response skills, and preventing student suicide.',
        'about.services.4r.activity2.name': 'Teacher Immersive Zone Out',
        'about.services.4r.activity2.desc': 'Utilizing the enclosed space of the ZebraGo vehicle. Activities: combining multi-sensory experiences, mindfulness, and expressive arts to provide a space for physical and mental relaxation.',
        'about.services.4r.activity3.name': 'Caregiver Mobile Clubhouse Stress-Free Tea Gathering',
        'about.services.4r.activity3.desc': 'Utilizing the enclosed space of the vehicle. Activities: multi-sensory mindfulness, expressive arts, tea connection. Building mutual support networks among parents/caregivers.',
        'about.services.4r.activity4.name': '4R Caring for the Mind Workshops/Seminars',
        'about.services.4r.activity4.desc': 'Conducted class-by-class. Activities: picture book stories, school situations, interactive games and other diverse experiential learning to strengthen students\' awareness of mental health.',
        'about.services.4r.activity5.name': 'Soul Power Ambassador Training',
        'about.services.4r.activity5.desc': 'Select students to train as ambassadors to promote mental health messages and organize exhibitions within the school.',
        'about.services.4r.activity6.name': 'Soul Power Campus Exhibition',
        'about.services.4r.activity6.desc': 'Display 4R Soul Power boards, student works and experimental installations.',
        'about.services.4r.activity7.name': '4R Soul Power Immersive Emotional Social Skills Group',
        'about.services.4r.activity7.desc': 'Small group format conducted inside the vehicle. Activities: using immersive technology combined with multi-sensory, mindfulness, and expressive arts to train social skills and emotional self-regulation abilities.',
        'about.services.4r.activity8.name': '4R Mental Health Campus Booth Experience',
        'about.services.4r.activity8.desc': 'Booth experience format to help all students understand the importance of mental health.',
        'about.services.4r.activity9.name': '4R Soul Power Multi-Sensory Immersive Experience',
        'about.services.4r.activity9.desc': 'Conducted class-by-class inside the vehicle. Activities: through picture book stories, hand-drawn animation conversion technology, and interactive games to enhance awareness of mind-body-spirit needs.',
        
        // Training Series
        'about.services.training.title': 'Flexible Training Room — Professional Training Series',
        'about.services.training.subtitle': '',
        'about.services.training.coreLabel': 'Core Features:',
        'about.services.training.coreFeature': 'Vehicle space with variable partitions, transforming into two independent training rooms',
        'about.services.training.targetLabel': 'Target Audience:',
        'about.services.training.targetAudience': 'Students with speech disorders, attention deficit, or ADHD',
        'about.services.training.activity1.name': 'Individualized Professional Training (1-on-1)',
        'about.services.training.activity1.desc': 'Conducted inside the ZebraGo vehicle. Content: one-on-one individualized speech therapy, occupational therapy, or play therapy training.',
        'about.services.training.activity2.name': '2-Person Group',
        'about.services.training.activity2.desc': 'Conducted inside the ZebraGo vehicle. Content: two-person speech therapy, occupational therapy, or play therapy training group.',
        'about.services.training.activity3.name': 'Therapy Group',
        'about.services.training.activity3.desc': 'Can be conducted inside the ZebraGo vehicle or on campus. Content: speech therapy, occupational therapy, or play therapy training groups.',
        'about.services.training.teamLabel': 'Professional Team Configuration:',
        'about.services.training.teamDesc': 'Services supported by a consultant team including professors of special education and counseling, senior educational psychologists, registered occupational therapists, and senior speech therapists.',
        
        // Individual Services Page
        'individual.hero.title': 'Flexible Training Room — Your Mobile Professional Support Station',
        'individual.hero.subtitle': 'Combining professional therapy teams with high-privacy mobile spaces, bringing speech and occupational therapy services directly to you.',
        'individual.why.title': 'Why Choose Mobile Training?',
        'individual.why.intro': 'Our mobile training services provide more flexible and private professional support for students and parents, making treatment more effective.',
        'individual.why.benefit1.title': 'High Privacy, Reduced Labeling',
        'individual.why.benefit1.desc': 'Our training takes place in independent soundproof compartments within the ZebraGo vehicle, with a lively appearance that allows children to learn in a stress-free environment and avoid traditional labeling effects.',
        'individual.why.benefit2.title': 'Flexible and Convenient',
        'individual.why.benefit2.desc': 'Service locations are flexible and can be arranged to suit schools or communities, saving parents and children time and effort traveling.',
        'individual.why.benefit3.title': 'Professional Team',
        'individual.why.benefit3.desc': 'A multidisciplinary professional team consisting of qualified speech therapists, occupational therapists, and registered social workers provides full follow-up.',
        'individual.training.title': 'Core Training Areas',
        'individual.training.intro': 'Addressing different needs, providing professional and comprehensive therapy services to assist children in healthy growth.',
        'individual.training.st.title': 'A. Speech Therapy',
        'individual.training.st.desc': 'For students with language development delays, pronunciation issues, or social communication disorders. Through interactive scenarios in the vehicle, we improve oral expression, comprehension, and social communication skills.',
        'individual.training.ot.title': 'B. Occupational Therapy',
        'individual.training.ot.desc': 'For students with attention deficits, fine motor development issues, or sensory integration disorders. Using multi-sensory equipment in the vehicle, we conduct targeted gross and fine motor training and sensory regulation to enhance learning effectiveness.',
        'individual.training.pt.title': 'C. Play Therapy',
        'individual.training.pt.desc': 'Providing a safe expression space for students experiencing emotional difficulties. Through play as a medium, we help children express emotions, build confidence, and learn problem-solving.',
        'individual.formats.title': 'Service Formats',
        'individual.formats.intro': 'According to individual student needs, providing the most suitable training model to ensure maximum treatment effectiveness.',
        'individual.formats.individual.title': 'One-on-One Intensive',
        'individual.formats.individual.desc': 'Tailored to each student\'s unique needs, developing individualized education plans (IEP) and providing the most intensive attention and guidance.',
        'individual.formats.group.title': 'Pair/Group Interaction',
        'individual.formats.group.desc': 'Under therapist guidance, pairing students with similar abilities for training, simulating real social scenarios to enhance peer interaction skills.',
        'individual.support.title': 'Parent and Caregiver Support',
        'individual.support.intro': 'We firmly believe that "when parents are well, children will be well." In addition to student training, we also provide comprehensive parent support services.',
        'individual.support.home.title': 'Home Training Guidance',
        'individual.support.home.desc': 'Extending treatment effectiveness to the home, assisting parents in continuously supporting their children\'s development in daily life.',
        'individual.support.counseling.title': 'Emotional Counseling and Consultation',
        'individual.support.counseling.desc': 'Providing caregivers with respite space and professional advice, reducing caregiving stress, and building healthier parent-child relationships.',
        'individual.cta.button': 'Inquiry/Book Service',
        
        // School Services Page
        'school.hero.title': 'Whole School Participation · Building a Healthy Mind-Body-Spirit Campus Together',
        'school.hero.subtitle': 'ZebraGo drives into campuses, using immersive technology to support schools in developing "mental health" and "inclusion culture," providing comprehensive care for students, teachers, and parents.',
        'school.mentalHealth.title': 'Mental Health Support',
        'school.mentalHealth.intro': 'Deepening 4R series content, emphasizing benefits for different stakeholders, providing comprehensive support for the mental health needs of students, faculty, and parents.',
        'school.mentalHealth.student.title': 'Student Level',
        'school.mentalHealth.student.subtitle': 'Enhancing Resilience',
        'school.mentalHealth.student.point1': 'Soul Power Immersive Experience:',
        'school.mentalHealth.student.point1.desc': 'Unlike traditional lectures, we use 270-degree projection and haptic interaction within the vehicle to allow students to "step into" picture book stories, learning to identify emotions and seek help.',
        'school.mentalHealth.student.point2': 'Social Group Training:',
        'school.mentalHealth.student.point2.desc': 'Practice social skills in a safe environment, specifically targeting introverted students or those with social anxiety.',
        'school.mentalHealth.student.point3': 'Campus Atmosphere Creation:',
        'school.mentalHealth.student.point3.desc': 'Through training "Soul Power Ambassadors" and organizing large-scale exhibitions, students lead the promotion of mental health, allowing a culture of care to flow among peers.',
        'school.mentalHealth.staff.title': 'Faculty & Staff Level',
        'school.mentalHealth.staff.subtitle': 'Stress Relief & Empowerment',
        'school.mentalHealth.staff.point1': 'Teacher Refueling Station:',
        'school.mentalHealth.staff.point1.desc': 'Teachers also need rest. We transform the vehicle into an exclusive "decompression cabin," providing brief mindfulness and multi-sensory relaxation experiences, allowing teachers to regain teaching motivation.',
        'school.mentalHealth.staff.point2': 'Crisis Identification Training:',
        'school.mentalHealth.staff.point2.desc': 'Equip teachers with skills to identify high-risk students through workshops, establishing a campus safety net.',
        'school.mentalHealth.parent.title': 'Parent Level',
        'school.mentalHealth.parent.subtitle': 'Connection & Respite',
        'school.mentalHealth.parent.point1': 'Parent Charging Station:',
        'school.mentalHealth.parent.point1.desc': 'Combining tea tasting and art creation, allowing parents to find their exclusive "Me Time" on campus and establish a parent mutual aid network.',
        'school.inclusion.title': 'Inclusion Culture Promotion',
        'school.inclusion.intro': 'Deepening inclusion series content, promoting acceptance and respect on campus through experiential learning.',
        'school.inclusion.experiential.title': 'Experiential Learning',
        'school.inclusion.experiential.desc': 'Simulation Experience Booths:',
        'school.inclusion.experiential.desc.text': 'Allow general students to personally experience the daily challenges of people with dyslexia, autism, or physical disabilities, elevating from "cognition" to "empathy."',
        'school.inclusion.ambassador.title': 'Inclusion Ambassador Program',
        'school.inclusion.ambassador.desc': 'Train students to plan inclusion activities, promoting acceptance and respect on campus.',
        'school.process.title': 'School Collaboration Process',
        'school.process.intro': 'We provide one-stop support services, from consultation to execution, with professional follow-up throughout.',
        'school.process.step1.title': 'School-based Consultation',
        'school.process.step1.desc': 'Understand school concerns (e.g., child suicide, bullying, SEN support).',
        'school.process.step2.title': 'Program Design',
        'school.process.step2.desc': 'Combine suitable 4R or inclusion activities (class activities/small groups/school-wide).',
        'school.process.step3.title': 'On-site Service',
        'school.process.step3.desc': 'ZebraGo mobile vehicle and professional team execute on-site as scheduled.',
        'school.process.step4.title': 'Effectiveness Evaluation',
        'school.process.step4.desc': 'Provide activity reports and student feedback.',
        'school.cta.button': 'Inquiry/Book Service',
        
        // Corporate Services Page
        'corporate.hero.title': 'Become a ZebraGo Corporate Wellness Partner',
        'corporate.hero.subtitle': 'Combining mobile technology with professional therapy to help you achieve ESG occupational health indicators and create a resilient and happy workplace.',
        'corporate.why.title': 'Beyond Benefits — The Key to Corporate Sustainability',
        'corporate.why.intro': 'In today\'s business environment, employees\' physical and mental health is a company\'s greatest asset. ZebraGo provides Hong Kong\'s first mobile physical and mental support, helping companies directly respond to the requirements of "Aspect B2: Health and Safety" in the HKEX ESG Reporting Guide.',
        'corporate.why.kpi.title': 'Meet KPI B2.3 Indicators',
        'corporate.why.kpi.desc': 'Through our systematic courses and activities, specifically describe and implement occupational health and safety measures.',
        'corporate.why.brand.title': 'Enhance Employer Brand',
        'corporate.why.brand.desc': 'Obtain "ZebraGo Wellness Partner" certification, demonstrating the company\'s commitment to employees.',
        'corporate.why.flexible.title': 'Flexible Mobile Experience',
        'corporate.why.flexible.desc': 'No need to allocate fixed office space. The ZebraGo mobile vehicle arrives directly, providing immediate support.',
        'corporate.program.title': 'Modular Certification Program — 4R Comprehensive Support',
        'corporate.program.intro': 'Enterprises can choose a single module according to their needs, or complete the full set of 4R series to obtain annual certification partner qualifications.',
        'corporate.program.rest.title': 'Module 1: Rest',
        'corporate.program.rest.subtitle': 'Rest and Recharge',
        'corporate.program.rest.form': 'Format:',
        'corporate.program.rest.form.text': 'ZebraGo Mobile Vehicle Experience',
        'corporate.program.rest.content': 'Content:',
        'corporate.program.rest.content.text': 'The mobile vehicle is parked downstairs at the company, providing "midday quick charge" service. Employees can take 15-20 minutes of deep rest in a private space, temporarily disengaging from work pressure and restoring energy.',
        'corporate.program.relaxation.title': 'Module 2: Relaxation',
        'corporate.program.relaxation.subtitle': 'Relaxation and Stress Reduction',
        'corporate.program.relaxation.form': 'Format:',
        'corporate.program.relaxation.form.text': 'Immersive Workshop / Mobile Experience',
        'corporate.program.relaxation.content': 'Content:',
        'corporate.program.relaxation.content.text': 'Utilizing immersive projections inside the vehicle or meeting rooms, conducting Mindfulness guidance, muscle relaxation exercises, and breathing training to effectively reduce workplace anxiety.',
        'corporate.program.relationship.title': 'Module 3: Relationship',
        'corporate.program.relationship.subtitle': 'Connection and Inclusion',
        'corporate.program.relationship.form': 'Format:',
        'corporate.program.relationship.form.text': 'Team Building',
        'corporate.program.relationship.content': 'Content:',
        'corporate.program.relationship.content.text': 'Through "Neurodiversity" experiential activities, employees learn to understand colleagues or clients with different characteristics (such as SEN), practice non-violent communication, and build a more inclusive team culture.',
        'corporate.program.resilience.title': 'Module 4: Resilience',
        'corporate.program.resilience.subtitle': 'Resilience and Growth',
        'corporate.program.resilience.form': 'Format:',
        'corporate.program.resilience.form.text': 'Professional Training Lecture',
        'corporate.program.resilience.content': 'Content:',
        'corporate.program.resilience.content.text': 'Led by psychologists or therapists, teaching Mental Health First Aid, stress management, and crisis response skills to enhance employees\' psychological resilience in facing challenges.',
        'corporate.certification.title': 'Obtain Your "ZebraGo Wellness Partner" Certification',
        'corporate.certification.intro': 'After enterprises complete the above 4R module training, they will be awarded the annual "ZebraGo Institutional Partner" certificate.',
        'corporate.certification.usage.title': 'Certificate Usage',
        'corporate.certification.usage.desc': 'Can be used for corporate annual reports, ESG reports, and website display.',
        'corporate.certification.benefits.title': 'Partner Benefits',
        'corporate.certification.benefits.desc': 'Priority booking for ZebraGo mobile vehicle services, invited to attend the annual Partner Summit, and exchange insights on healthy workplaces with industry peers.',
        'corporate.csr.title': 'Win-Win for Business and Social Value',
        'corporate.csr.intro': 'In addition to caring for internal employees, your participation can also support ZebraGo in serving more underprivileged students.',
        'corporate.csr.sponsor.title': 'Matching Sponsorship',
        'corporate.csr.sponsor.desc': 'For each module completed by the enterprise, a portion of the proceeds will support us in providing free services to a resource-deprived school.',
        'corporate.csr.volunteer.title': 'Corporate Volunteering',
        'corporate.csr.volunteer.desc': 'Arrange employees to participate in our community inclusion activities, giving back to society through action.',
        'corporate.cta.button': 'Inquiry/Book Service'
    }
};

// Language switcher class
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('preferred-language') || 'zh-HK';
        this.init();
    }
    
    init() {
        // Set up language switch buttons with simple click handlers
        const engButton = document.querySelector('.lang-switch');
        const simpleChineseButton = document.querySelector('.simple-chinese');
        const traditionalChineseButton = document.querySelector('.traditional-chinese');
        
        if (engButton) {
            engButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchLanguage('en');
            });
        }
        
        if (simpleChineseButton) {
            simpleChineseButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchLanguage('zh-CN');
            });
        }
        
        if (traditionalChineseButton) {
            traditionalChineseButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchLanguage('zh-HK');
            });
        }
        
        // Apply saved language on page load
        this.applyLanguage(this.currentLang);
    }
    
    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('preferred-language', lang);
        this.applyLanguage(lang);
    }
    
    applyLanguage(lang) {
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update page title based on data-page-title attribute on body
        const pageTitleKey = document.body.getAttribute('data-page-title');
        if (pageTitleKey && translations[lang] && translations[lang][pageTitleKey]) {
            document.title = translations[lang][pageTitleKey];
        }
        
        // Translate all elements with data-lang attribute
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang].hasOwnProperty(key)) {
                const translation = translations[lang][key];
                
                // Hide element if translation is empty, show if not
                if (translation === '' || translation === null || translation === undefined) {
                    element.style.display = 'none';
                } else {
                    // Show element and restore display
                    if (element.style.display === 'none') {
                        element.style.display = '';
                    }
                    
                    // Check if element contains a dropdown arrow - preserve it
                    const dropdownArrow = element.querySelector('.dropdown-arrow');
                    if (dropdownArrow) {
                        // Preserve the arrow when updating text
                        const arrowHTML = dropdownArrow.outerHTML;
                        element.innerHTML = translation + ' ' + arrowHTML;
                    } else {
                        // No arrow, just update text content
                        element.textContent = translation;
                    }
                }
            }
        });
        
        // Translate elements with data-lang-html (for HTML content)
        document.querySelectorAll('[data-lang-html]').forEach(element => {
            const key = element.getAttribute('data-lang-html');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        
        // Update language switch button visibility/state
        this.updateLanguageButtons(lang);
    }
    
    updateLanguageButtons(lang) {
        // Get the 3 original buttons
        const engButton = document.querySelector('.lang-switch[data-lang-switch="en"]');
        const simpleChineseButton = document.querySelector('.simple-chinese[data-lang-switch="zh-CN"]');
        const traditionalChineseButton = document.querySelector('.traditional-chinese[data-lang-switch="zh-HK"]');
        
        // Show/hide based on current language - always show the 2 that are NOT current
        if (engButton) {
            engButton.style.display = (lang === 'en') ? 'none' : '';
        }
        if (simpleChineseButton) {
            simpleChineseButton.style.display = (lang === 'zh-CN') ? 'none' : '';
        }
        if (traditionalChineseButton) {
            traditionalChineseButton.style.display = (lang === 'zh-HK') ? 'none' : '';
        }
    }
    
    getCurrentLanguage() {
        return this.currentLang;
    }
    
    getTranslation(key) {
        return translations[this.currentLang]?.[key] || key;
    }
}

// Initialize language switcher when DOM is ready
let languageSwitcher;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        languageSwitcher = new LanguageSwitcher();
    });
} else {
    languageSwitcher = new LanguageSwitcher();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageSwitcher;
}
