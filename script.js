// --- ข้อมูลรูน Elder Futhark ทั้ง 24 ตัว ---
const runes = [
  { symbol: 'ᚠ', name: 'Fehu', meaning: 'ความมั่งคั่ง, ทรัพย์สิน, ความอุดมสมบูรณ์, การเริ่มต้นใหม่, พลังชีวิต, การเติบโต', reversed: 'การสูญเสีย, ความโลภ, การติดขัด, การสิ้นเปลือง, ความยากจน', element: 'ไฟ', deity: 'Freyr', power: 'การสร้างสรรค์, การเติบโต, ความอุดมสมบูรณ์', advice: 'ใช้ทรัพยากรอย่างชาญฉลาด, ลงทุนในอนาคต, แบ่งปันความมั่งคั่ง', intensity: 7 },
  { symbol: 'ᚢ', name: 'Uruz', meaning: 'พลัง, ความแข็งแกร่ง, ความกล้าหาญ, การเปลี่ยนแปลง, พลังดิบ, ความดื้อรั้น', reversed: 'ความอ่อนแอ, การสูญเสียพลัง, ความกลัว, การยอมแพ้, ความไม่มั่นใจ', element: 'ดิน', deity: 'Thor', power: 'ความแข็งแกร่ง, การป้องกัน, การเปลี่ยนแปลง', advice: 'ใช้พลังอย่างชาญฉลาด, อย่ากลัวการเปลี่ยนแปลง, เชื่อมั่นในตัวเอง', intensity: 8 },
  { symbol: 'ᚦ', name: 'Thurisaz', meaning: 'การป้องกัน, การโจมตี, พลังแห่งธรรมชาติ, การตัดสินใจ, หนาม, การตื่นตัว', reversed: 'การป้องกันที่อ่อนแอ, การถูกโจมตี, ความลังเล, การไม่พร้อม', element: 'ไฟ', deity: 'Thor', power: 'การป้องกัน, การโจมตี, การตัดสินใจ', advice: 'ระวังภัยรอบตัว, ตัดสินใจอย่างเด็ดขาด, ใช้พลังอย่างชาญฉลาด', intensity: 6 },
  { symbol: 'ᚨ', name: 'Ansuz', meaning: 'การสื่อสาร, ปัญญา, คำแนะนำ, การเรียนรู้, เอาเซอร์, การเปิดเผย', reversed: 'การสื่อสารที่ผิดพลาด, การหลอกลวง, ความไม่เข้าใจ, การปิดบัง', element: 'อากาศ', deity: 'Odin', power: 'ปัญญา, การสื่อสาร, การเรียนรู้', advice: 'ฟังคำแนะนำ, เรียนรู้จากประสบการณ์, สื่อสารอย่างชัดเจน', intensity: 7 },
  { symbol: 'ᚱ', name: 'Raidho', meaning: 'การเดินทาง, การเปลี่ยนแปลง, การพัฒนา, การเคลื่อนไหว, การเดินทางทางจิตวิญญาณ', reversed: 'การเดินทางที่ล่าช้า, การติดขัด, การถอยหลัง, การสูญเสียทิศทาง', element: 'อากาศ', deity: 'Odin', power: 'การเคลื่อนไหว, การเปลี่ยนแปลง, การพัฒนา', advice: 'เดินทางอย่างมีเป้าหมาย, เปิดรับการเปลี่ยนแปลง, พัฒนาตัวเอง', intensity: 6 },
  { symbol: 'ᚲ', name: 'Kenaz', meaning: 'ไฟ, ความรู้, การสร้างสรรค์, การเปิดเผย, แสงสว่าง, การเปลี่ยนแปลง', reversed: 'การสูญเสียความรู้, ความมืด, การทำลาย, การสูญเสียแรงบันดาลใจ', element: 'ไฟ', deity: 'Loki', power: 'การสร้างสรรค์, ความรู้, การเปิดเผย', advice: 'แสวงหาความรู้, ใช้ความคิดสร้างสรรค์, เปิดเผยความจริง', intensity: 8 },
  { symbol: 'ᚷ', name: 'Gebo', meaning: 'การให้, การแลกเปลี่ยน, ความสมดุล, ความสัมพันธ์, ของขวัญ, การเสียสละ', reversed: 'การไม่สมดุล, การเอาเปรียบ, ความขัดแย้ง, การเห็นแก่ตัว', element: 'อากาศ', deity: 'Freya', power: 'ความสมดุล, การแลกเปลี่ยน, ความสัมพันธ์', advice: 'ให้และรับอย่างสมดุล, สร้างความสัมพันธ์ที่ดี, เสียสละเพื่อผู้อื่น', intensity: 5 },
  { symbol: 'ᚹ', name: 'Wunjo', meaning: 'ความสุข, ความสำเร็จ, ความสมหวัง, การเฉลิมฉลอง, ความสมบูรณ์, ความปรารถนา', reversed: 'ความเศร้า, ความล้มเหลว, ความผิดหวัง, การสูญเสีย', element: 'อากาศ', deity: 'Freya', power: 'ความสุข, ความสำเร็จ, ความสมหวัง', advice: 'เฉลิมฉลองความสำเร็จ, อย่ายอมแพ้, ตามหาความสุข', intensity: 7 },
  { symbol: 'ᚺ', name: 'Hagalaz', meaning: 'การเปลี่ยนแปลงที่รุนแรง, พายุ, การทำลาย, การเริ่มต้นใหม่, พลังธรรมชาติ', reversed: 'การเปลี่ยนแปลงที่ช้า, การฟื้นฟู, การรักษา, การเติบโตใหม่', element: 'น้ำแข็ง', deity: 'Hel', power: 'การเปลี่ยนแปลง, การทำลาย, การเริ่มต้นใหม่', advice: 'ยอมรับการเปลี่ยนแปลง, เรียนรู้จากความสูญเสีย, เริ่มต้นใหม่', intensity: 9 },
  { symbol: 'ᚾ', name: 'Naudhiz', meaning: 'ความต้องการ, ความจำเป็น, การอดทน, การเรียนรู้, ความยากลำบาก', reversed: 'การหลีกเลี่ยงปัญหา, การไม่รับผิดชอบ, ความอ่อนแอ, การยอมแพ้', element: 'ไฟ', deity: 'Norns', power: 'ความอดทน, การเรียนรู้, การเติบโต', advice: 'อดทนต่อความยากลำบาก, เรียนรู้จากปัญหา, เติบโตผ่านความท้าทาย', intensity: 6 },
  { symbol: 'ᛁ', name: 'Isa', meaning: 'น้ำแข็ง, การหยุดนิ่ง, การรอคอย, การสะท้อน, ความเย็น, การแช่แข็ง', reversed: 'การละลาย, การเคลื่อนไหว, การเปลี่ยนแปลง, การปลดปล่อย', element: 'น้ำแข็ง', deity: 'Hel', power: 'การหยุดนิ่ง, การสะท้อน, การรอคอย', advice: 'หยุดและสะท้อน, รอเวลาที่เหมาะสม, ปล่อยวาง', intensity: 4 },
  { symbol: 'ᛃ', name: 'Jera', meaning: 'การเก็บเกี่ยว, ผลลัพธ์, การทำงานหนัก, การรอคอย, วัฏจักร, การเปลี่ยนแปลงตามฤดูกาล', reversed: 'การเก็บเกี่ยวที่ล่าช้า, การสูญเสียผลลัพธ์, การไม่ได้รับผลตอบแทน', element: 'ดิน', deity: 'Freyr', power: 'การเก็บเกี่ยว, ผลลัพธ์, วัฏจักร', advice: 'ทำงานหนักเพื่อผลลัพธ์, รอเวลาที่เหมาะสม, เก็บเกี่ยวผลงาน', intensity: 6 },
  { symbol: 'ᛇ', name: 'Eihwaz', meaning: 'การป้องกัน, ความแข็งแกร่ง, การเปลี่ยนแปลง, การเติบโต, ต้นไม้แห่งชีวิต', reversed: 'การป้องกันที่อ่อนแอ, การล้มเหลว, การไม่เติบโต', element: 'ดิน', deity: 'Yggdrasil', power: 'การป้องกัน, การเติบโต, การเปลี่ยนแปลง', advice: 'สร้างการป้องกันที่แข็งแกร่ง, เติบโตอย่างยั่งยืน, เปลี่ยนแปลงอย่างชาญฉลาด', intensity: 7 },
  { symbol: 'ᛈ', name: 'Perthro', meaning: 'โชคชะตา, การเสี่ยง, การเปิดเผย, ความลับ, การเล่น, ความไม่แน่นอน', reversed: 'โชคร้าย, การสูญเสีย, การซ่อนเร้น, การหลอกลวง', element: 'น้ำ', deity: 'Frigg', power: 'โชคชะตา, การเสี่ยง, การเปิดเผย', advice: 'เสี่ยงอย่างชาญฉลาด, เปิดเผยความลับ, รับมือกับความไม่แน่นอน', intensity: 5 },
  { symbol: 'ᛉ', name: 'Algiz', meaning: 'การป้องกัน, การคุ้มครอง, การเชื่อมต่อกับจิตวิญญาณ, การป้องกันจากภัย, การเติบโต', reversed: 'การป้องกันที่อ่อนแอ, การถูกโจมตี, การสูญเสียการคุ้มครอง', element: 'อากาศ', deity: 'Heimdall', power: 'การป้องกัน, การคุ้มครอง, การเชื่อมต่อ', advice: 'สร้างการป้องกันที่แข็งแกร่ง, เชื่อมต่อกับจิตวิญญาณ, คุ้มครองผู้อื่น', intensity: 8 },
  { symbol: 'ᛊ', name: 'Sowilo', meaning: 'ดวงอาทิตย์, ความสำเร็จ, พลังชีวิต, การรักษา, แสงสว่าง, การชนะ', reversed: 'การสูญเสียพลัง, ความล้มเหลว, ความมืด, การพ่ายแพ้', element: 'ไฟ', deity: 'Sol', power: 'ความสำเร็จ, พลังชีวิต, การรักษา', advice: 'ใช้พลังชีวิตอย่างเต็มที่, แสวงหาความสำเร็จ, รักษาตัวเองและผู้อื่น', intensity: 9 },
  { symbol: 'ᛏ', name: 'Tiwaz', meaning: 'ความยุติธรรม, การต่อสู้, ความกล้าหาญ, การตัดสินใจ, ชัยชนะ, ความซื่อสัตย์', reversed: 'ความไม่ยุติธรรม, การหลีกเลี่ยงการต่อสู้, ความขี้ขลาด', element: 'ไฟ', deity: 'Tyr', power: 'ความยุติธรรม, การต่อสู้, ความกล้าหาญ', advice: 'ต่อสู้เพื่อความยุติธรรม, ตัดสินใจอย่างกล้าหาญ, ซื่อสัตย์ต่อตัวเอง', intensity: 8 },
  { symbol: 'ᛒ', name: 'Berkano', meaning: 'การเกิดใหม่, การเติบโต, ความอุดมสมบูรณ์, การรักษา, ครอบครัว, การดูแล', reversed: 'การหยุดการเติบโต, การสูญเสีย, การทำลาย, การแตกแยก', element: 'ดิน', deity: 'Freya', power: 'การเกิดใหม่, การเติบโต, การรักษา', advice: 'เริ่มต้นใหม่, เติบโตอย่างยั่งยืน, ดูแลครอบครัวและผู้อื่น', intensity: 7 },
  { symbol: 'ᛖ', name: 'Ehwaz', meaning: 'การเคลื่อนไหว, การเปลี่ยนแปลง, การทำงานร่วมกัน, ความก้าวหน้า, ความไว้วางใจ', reversed: 'การติดขัด, ความขัดแย้ง, การถอยหลัง, การไม่ไว้วางใจ', element: 'ดิน', deity: 'Freyr', power: 'การเคลื่อนไหว, การเปลี่ยนแปลง, การทำงานร่วมกัน', advice: 'เคลื่อนไหวไปข้างหน้า, ทำงานร่วมกับผู้อื่น, สร้างความไว้วางใจ', intensity: 6 },
  { symbol: 'ᛗ', name: 'Mannaz', meaning: 'มนุษยชาติ, ความสัมพันธ์, การทำงานร่วมกัน, ปัญญา, ความเป็นชุมชน', reversed: 'ความโดดเดี่ยว, ความขัดแย้ง, การไม่เข้าใจ, การแตกแยก', element: 'อากาศ', deity: 'Heimdall', power: 'มนุษยชาติ, ความสัมพันธ์, ปัญญา', advice: 'สร้างความสัมพันธ์ที่ดี, ทำงานร่วมกับชุมชน, ใช้ปัญญาในการตัดสินใจ', intensity: 6 },
  { symbol: 'ᛚ', name: 'Laguz', meaning: 'น้ำ, อารมณ์, สัญชาตญาณ, การรักษา, การไหล, การเปลี่ยนแปลง', reversed: 'อารมณ์ที่สับสน, การสูญเสียสัญชาตญาณ, การติดขัด', element: 'น้ำ', deity: 'Njord', power: 'อารมณ์, สัญชาตญาณ, การรักษา', advice: 'เชื่อมั่นในสัญชาตญาณ, ปล่อยให้อารมณ์ไหล, รักษาตัวเอง', intensity: 7 },
  { symbol: 'ᛜ', name: 'Ingwaz', meaning: 'การเกิดใหม่, การเปลี่ยนแปลง, การเติบโต, การเริ่มต้นใหม่, พลังภายใน', reversed: 'การหยุดการเติบโต, การสูญเสียโอกาส, การไม่เปลี่ยนแปลง', element: 'ดิน', deity: 'Freyr', power: 'การเกิดใหม่, การเปลี่ยนแปลง, พลังภายใน', advice: 'เริ่มต้นใหม่, ใช้พลังภายใน, เปลี่ยนแปลงอย่างกล้าหาญ', intensity: 8 },
  { symbol: 'ᛞ', name: 'Dagaz', meaning: 'การเปลี่ยนแปลง, การเริ่มต้นใหม่, การเปิดเผย, ความสมดุล, การตื่นตัว', reversed: 'การเปลี่ยนแปลงที่ล่าช้า, การไม่สมดุล, การไม่ตื่นตัว', element: 'อากาศ', deity: 'Odin', power: 'การเปลี่ยนแปลง, การเริ่มต้นใหม่, ความสมดุล', advice: 'ตื่นตัวต่อการเปลี่ยนแปลง, สร้างความสมดุล, เริ่มต้นใหม่', intensity: 7 },
  { symbol: 'ᛟ', name: 'Othala', meaning: 'มรดก, บ้าน, ครอบครัว, การเชื่อมต่อกับรากเหง้า, ความปลอดภัย, การสืบทอด', reversed: 'การสูญเสียมรดก, การแตกแยกในครอบครัว, การสูญเสียบ้าน', element: 'ดิน', deity: 'Odin', power: 'มรดก, ครอบครัว, การสืบทอด', advice: 'รักษามรดกของครอบครัว, สร้างบ้านที่ปลอดภัย, เชื่อมต่อกับรากเหง้า', intensity: 6 }
];

// --- ข้อมูลการจัดเรียงรูน (Spreads) ---
const spreads = {
    one: {
        title: 'One Rune Spread - คำตอบแห่งจิตวิญญาณ',
        description: [
            '<strong>รูนที่ 1:</strong> คำตอบหลัก - สิ่งที่คุณต้องรู้และเข้าใจ'
        ],
        positions: ['คำตอบหลัก'],
        interpretation: 'การทำนายแบบง่ายและตรงไปตรงมา เหมาะสำหรับคำถามที่ต้องการคำตอบชัดเจน'
    },
    three: {
        title: 'Three Rune Spread - การเดินทางแห่งจิตวิญญาณ',
        description: [
            '<strong>รูนที่ 1:</strong> สถานการณ์ปัจจุบัน - สิ่งที่กำลังเกิดขึ้นในชีวิตของคุณ',
            '<strong>รูนที่ 2:</strong> ความท้าทาย - สิ่งที่คุณต้องเผชิญและเรียนรู้',
            '<strong>รูนที่ 3:</strong> คำแนะนำ - วิธีที่คุณควรดำเนินการต่อไป'
        ],
        positions: ['ปัจจุบัน', 'ความท้าทาย', 'คำแนะนำ'],
        interpretation: 'การเดินทางแห่งจิตวิญญาณที่แสดงให้เห็นเส้นทางจากปัจจุบันสู่การเติบโต'
    },
    five: {
        title: 'Five Rune Spread - การวิเคราะห์ลึกซึ้ง',
        description: [
            '<strong>รูนที่ 1:</strong> สถานการณ์ปัจจุบัน - สิ่งที่กำลังเกิดขึ้น',
            '<strong>รูนที่ 2:</strong> อดีตที่ส่งผล - สิ่งที่นำมาสู่สถานการณ์ปัจจุบัน',
            '<strong>รูนที่ 3:</strong> อนาคตที่เป็นไปได้ - สิ่งที่อาจเกิดขึ้น',
            '<strong>รูนที่ 4:</strong> สาเหตุของปัญหา - รากเหง้าของความท้าทาย',
            '<strong>รูนที่ 5:</strong> วิธีแก้ไข - หนทางสู่การแก้ปัญหา'
        ],
        positions: ['ปัจจุบัน', 'อดีต', 'อนาคต', 'สาเหตุ', 'วิธีแก้ไข'],
        interpretation: 'การวิเคราะห์ที่ครอบคลุมทั้งอดีต ปัจจุบัน และอนาคต'
    },
    cross: {
        title: 'Cross Rune Spread - การวิเคราะห์ข้าม',
        description: [
            '<strong>รูนที่ 1:</strong> กลาง - สถานการณ์หลัก',
            '<strong>รูนที่ 2:</strong> บน - อิทธิพลจากภายนอก',
            '<strong>รูนที่ 3:</strong> ล่าง - รากฐานและพื้นฐาน',
            '<strong>รูนที่ 4:</strong> ซ้าย - อดีตและประสบการณ์',
            '<strong>รูนที่ 5:</strong> ขวา - อนาคตและโอกาส'
        ],
        positions: ['กลาง', 'บน', 'ล่าง', 'ซ้าย', 'ขวา'],
        interpretation: 'การวิเคราะห์แบบข้ามที่แสดงความสัมพันธ์ระหว่างปัจยยต่างๆ'
    },
    wheel: {
        title: 'Wheel Rune Spread - วงล้อแห่งชีวิต',
        description: [
            '<strong>รูนที่ 1:</strong> เริ่มต้น - จุดเริ่มต้นของวัฏจักร',
            '<strong>รูนที่ 2:</strong> พัฒนา - การเติบโตและการเรียนรู้',
            '<strong>รูนที่ 3:</strong> ทดสอบ - ความท้าทายและการทดสอบ',
            '<strong>รูนที่ 4:</strong> บรรลุ - ความสำเร็จและการบรรลุเป้าหมาย',
            '<strong>รูนที่ 5:</strong> สะท้อน - การไตร่ตรองและเรียนรู้',
            '<strong>รูนที่ 6:</strong> เริ่มต้นใหม่ - การเริ่มต้นวัฏจักรใหม่'
        ],
        positions: ['เริ่มต้น', 'พัฒนา', 'ทดสอบ', 'บรรลุ', 'สะท้อน', 'เริ่มต้นใหม่'],
        interpretation: 'วงล้อแห่งชีวิตที่แสดงวัฏจักรการเติบโตและการเปลี่ยนแปลง'
    }
};

// ตัวแปรสำหรับการจัดการ spread
let currentSpread = 'one';

// ฟังก์ชันเปลี่ยนการจัดเรียงรูน
function changeSpread(spreadType) {
    currentSpread = spreadType;
    
    // อัปเดตปุ่มที่เลือก
    document.querySelectorAll('.spread-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-spread="${spreadType}"]`).classList.add('active');
    
    // อัปเดตคำอธิบาย spread
    const spread = spreads[spreadType];
    const descriptionDiv = document.getElementById('spreadDescription');
    if (descriptionDiv) {
        descriptionDiv.innerHTML = spread.description.map(desc => `<p>${desc}</p>`).join('');
    }
    
    // ซ่อนผลลัพธ์ก่อนหน้า
    document.getElementById('runeDisplay').style.display = 'none';
    document.getElementById('interpretation').style.display = 'none';
    document.getElementById('actionButtons').style.display = 'none';
}

// ฟังก์ชันสับไพ่รูน
function shuffleRunes() {
    const arr = [...runes];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ฟังก์ชันสุ่มรูนแบบกลับหัว
function shuffleRunesWithReversed() {
    const arr = [...runes];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    // เพิ่มการสุ่มรูนแบบกลับหัว (ประมาณ 30% ของรูนทั้งหมด)
    const shuffledRunes = arr.map(rune => {
        const isReversed = Math.random() < 0.3; // 30% โอกาสที่จะกลับหัว
        return {
            ...rune,
            isReversed: isReversed
        };
    });
    
    return shuffledRunes;
}

function displayInterpretation(question) {
    const interpretation = document.getElementById('interpretation');
    const interpretationContent = document.getElementById('interpretationContent');
    const spread = spreads[currentSpread];

    let html = `<h2 style="margin-bottom: 1.5rem;">${spread.title}</h2>`;
    html += '<div class="rune-list" style="display:grid;gap:1.5rem;">';
    selectedRunes.forEach((rune, index) => {
        const position = spread.positions[index] ? `<div style='font-size:1em;color:#4b5563;margin-bottom:0.2em;font-weight:600;'>${spread.positions[index]}</div>` : '';
        const isReversed = rune.isReversed;
        const reversedIndicator = isReversed ? '<span style="color:#e53e3e;font-weight:500;background:#fee2e2;padding:0.2em 0.5em;border-radius:4px;font-size:0.9em;">กลับหัว</span>' : '';
        const meaning = isReversed ? rune.reversed : rune.meaning;
        const meaningColor = isReversed ? '#dc2626' : '#222';
        const adviceColor = isReversed ? '#dc2626' : '#2563eb';
        
        html += `
            <div class="rune-box ${isReversed ? 'reversed-rune' : ''}" style="background:#fff;border-radius:14px;box-shadow:0 2px 12px #0001;padding:1.2rem 1.3rem 1.1rem 1.3rem;${isReversed ? 'border-left:4px solid #e53e3e;' : ''}">
                ${position}
                <div class="rune-title" style="font-weight:700;font-size:1.15em;color:#222;margin-bottom:0.2em;">
                    ${rune.name} ${reversedIndicator}
                </div>
                <div style="margin:0.3em 0 0.2em 0;color:#374151;">
                    <span style="font-weight:500;">ความหมาย:</span> 
                    <span style="color:${meaningColor};font-weight:500;">${meaning.split(',')[0]}</span>
                </div>
                <div style="margin-bottom:0.2em;color:#374151;">
                    <span style="font-weight:500;">คำแนะนำ:</span> 
                    <span style="color:${adviceColor};font-weight:500;">${rune.advice}</span>
                </div>
                <div style="color:#666;font-size:0.97em;margin-bottom:0.3em;">
                    พลัง: <span style="font-weight:600;">${rune.intensity}/10</span> | 
                    ธาตุ: <span style="font-weight:600;color:${getElementColor(rune.element)};">${rune.element}</span>
                </div>
                <a href="#" onclick="showRuneDetailModal('${runeKeyMap[rune.name]}');return false;" class="rune-detail-link" style="display:inline-block;margin-top:0.3em;font-size:0.97em;color:#2563eb;text-decoration:underline;opacity:0.85;transition:color 0.2s;">อ่านความหมายเพิ่มเติม</a>
            </div>
        `;
    });
    html += '</div>';

    // สรุปการวิเคราะห์
    html += `<div class="summary-box" style="margin-top:2.2rem;padding:1.2rem 1.5rem;background:linear-gradient(90deg,#f7fafc 60%,#e0e7ff 100%);border-radius:12px;font-weight:600;line-height:1.8;box-shadow:0 2px 12px #0001;font-size:1.08em;color:#222;">
        <span style="color:#1e293b;font-weight:700;">สรุป:</span> <span style="color:#374151;">${getDetailedSummary(selectedRunes, spread, question)}</span>
    </div>`;

    // การวิเคราะห์ธาตุ
    html += `<div class="elemental-analysis" style="margin-top:1.5rem;padding:1.2rem 1.5rem;background:linear-gradient(90deg,#f0f9ff 60%,#dbeafe 100%);border-radius:12px;box-shadow:0 2px 12px #0001;">
        <h3 style="margin:0 0 1rem 0;color:#1e40af;font-size:1.1em;">การวิเคราะห์ธาตุ</h3>
        ${getElementalAnalysis(selectedRunes)}
    </div>`;

    interpretationContent.innerHTML = html;
    interpretation.style.display = 'block';
    document.getElementById('actionButtons').style.display = 'block';
}

// ฟังก์ชันช่วยสำหรับสีของธาตุ
function getElementColor(element) {
    const colorMap = {
        'ไฟ': '#dc2626',
        'น้ำ': '#2563eb',
        'ดิน': '#059669',
        'อากาศ': '#7c3aed',
        'น้ำแข็ง': '#0891b2'
    };
    return colorMap[element] || '#6b7280';
}

// ฟังก์ชันสร้างสรุปที่ละเอียดขึ้น
function getDetailedSummary(runes, spread, question) {
    const reversedCount = runes.filter(r => r.isReversed).length;
    const totalRunes = runes.length;
    const reversedPercentage = Math.round((reversedCount / totalRunes) * 100);
    
    let summary = `การอ่านไพ่ชุดนี้เน้นเรื่อง${getMinimalSummary(runes, spread)}`;
    
    if (reversedCount > 0) {
        summary += ` มีรูนกลับหัว ${reversedCount} ตัว (${reversedPercentage}%) ซึ่งบ่งบอกถึงความท้าทายหรืออุปสรรคที่ต้องระวัง`;
    }
    
    // เพิ่มคำแนะนำตามประเภทคำถาม
    const questionType = getQuestionType(question);
    if (questionType) {
        summary += ` สำหรับคำถามเกี่ยวกับ${questionType} ควร${getQuestionSpecificAdvice(questionType, runes)}`;
    }
    
    return summary;
}

// ฟังก์ชันวิเคราะห์ธาตุ
function getElementalAnalysis(runes) {
    const elementCount = {};
    runes.forEach(rune => {
        elementCount[rune.element] = (elementCount[rune.element] || 0) + 1;
    });
    
    let analysis = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;">';
    
    Object.entries(elementCount).forEach(([element, count]) => {
        const percentage = Math.round((count / runes.length) * 100);
        const color = getElementColor(element);
        analysis += `
            <div style="text-align:center;padding:0.8rem;background:white;border-radius:8px;border-left:3px solid ${color};">
                <div style="font-weight:600;color:${color};margin-bottom:0.3em;">${element}</div>
                <div style="font-size:1.2em;font-weight:700;">${count} ตัว</div>
                <div style="font-size:0.9em;color:#666;">${percentage}%</div>
            </div>
        `;
    });
    
    analysis += '</div>';
    
    // เพิ่มการวิเคราะห์ความสมดุล
    const dominantElement = Object.entries(elementCount).reduce((a, b) => elementCount[a] > elementCount[b] ? a : b);
    analysis += `<div style="margin-top:1rem;padding:0.8rem;background:white;border-radius:8px;font-size:0.95em;">
        <strong>การวิเคราะห์:</strong> ธาตุ${dominantElement[0]}เป็นธาตุหลัก (${dominantElement[1]} ตัว) ซึ่งบ่งบอกถึง${getElementalMeaning(dominantElement[0])}
    </div>`;
    
    return analysis;
}

// ฟังก์ชันความหมายของธาตุ
function getElementalMeaning(element) {
    const meanings = {
        'ไฟ': 'พลังการเปลี่ยนแปลง ความกล้าหาญ และการเริ่มต้นใหม่',
        'น้ำ': 'อารมณ์ สัญชาตญาณ และการรักษา',
        'ดิน': 'ความมั่นคง การเติบโต และการสร้างรากฐาน',
        'อากาศ': 'ความคิด การสื่อสาร และการเคลื่อนไหว',
        'น้ำแข็ง': 'การหยุดนิ่ง การสะท้อน และการรอคอย'
    };
    return meanings[element] || 'พลังพิเศษที่ต้องพิจารณา';
}

// ฟังก์ชันช่วยสำหรับฟังก์ชันความหมายของธาตุ
function getQuestionType(question) {
    const questionLower = question.toLowerCase();
    if (questionLower.includes('รัก') || questionLower.includes('ความสัมพันธ์') || questionLower.includes('แฟน')) {
        return 'ความรัก';
    } else if (questionLower.includes('งาน') || questionLower.includes('อาชีพ') || questionLower.includes('ธุรกิจ')) {
        return 'การงาน';
    } else if (questionLower.includes('เงิน') || questionLower.includes('การเงิน') || questionLower.includes('ลงทุน')) {
        return 'การเงิน';
    } else if (questionLower.includes('เดินทาง') || questionLower.includes('ท่องเที่ยว') || questionLower.includes('ย้าย')) {
        return 'การเดินทาง';
    } else if (questionLower.includes('สุขภาพ') || questionLower.includes('ร่างกาย') || questionLower.includes('ป่วย')) {
        return 'สุขภาพ';
    }
    return null;
}

function getQuestionSpecificAdvice(type, runes) {
    const adviceMap = {
        'ความรัก': 'รักษาความสัมพันธ์ด้วยความรักและเข้าถึงด้วยความเคารพ',
        'การงาน': 'ทำงานด้วยความรับผิดชอบและความกระตือรือร้น',
        'การเงิน': 'ลงทุนด้วยความมั่นใจและความรู้ความเข้าใจ',
        'การเดินทาง': 'เดินทางด้วยความมั่นใจและความสุขุม',
        'สุขภาพ': 'ดูแลสุขภาพด้วยความรักและความเอาใจใส่'
    };
    return adviceMap[type] || 'ควรพิจารณาด้วยความสุขุมและสติ';
}

// ฟังก์ชันเพิ่มประวัติการอ่าน
function addToHistory(question, runes) {
    const history = JSON.parse(localStorage.getItem('runeHistory') || '[]');
    const reading = {
        id: Date.now(),
        date: new Date().toLocaleString('th-TH'),
        question: question,
        spread: currentSpread,
        runes: runes.map(rune => ({
            name: rune.name,
            symbol: rune.symbol,
            isReversed: rune.isReversed,
            meaning: rune.isReversed ? rune.reversed : rune.meaning,
            element: rune.element,
            intensity: rune.intensity
        }))
    };
    
    history.unshift(reading);
    if (history.length > 20) history.pop(); // เก็บแค่ 20 รายการล่าสุด
    localStorage.setItem('runeHistory', JSON.stringify(history));
}

// --- Modal UI for Rune Detail ---
function showRuneDetailModal(runeKey) {
    const detail = runeDetailsTH[runeKey];
    if (!detail) return;
    let html = `
      <div class="rune-detail-modal-bg" onclick="closeRuneDetailModal()"></div>
      <div class="rune-detail-modal">
        <div class="rune-detail-title">${detail.name}</div>
        <div class="rune-detail-main">${detail.main}</div>
        <div class="rune-detail-section">
          <ul class="rune-detail-list">
            <li><span>ความรัก:</span> ${detail.love} </li>
            <li><span>การงาน:</span> ${detail.work} </li>
            <li><span>การเงิน:</span> ${detail.money} </li>
            <li><span>การเดินทาง:</span> ${detail.travel} </li>
            <li><span>สุขภาพ:</span> ${detail.health} </li>
            <li><span>คำแนะนำ:</span> ${detail.advice} </li>
          </ul>
        </div>
        <button class="rune-detail-close" onclick="closeRuneDetailModal()">ปิด</button>
      </div>
    `;
    let modal = document.createElement('div');
    modal.id = 'runeDetailModalContainer';
    modal.innerHTML = html;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}
function closeRuneDetailModal() {
    let modal = document.getElementById('runeDetailModalContainer');
    if (modal) modal.remove();
    document.body.style.overflow = '';
}
// --- Add minimal CSS for modal ---
(function(){
  const style = document.createElement('style');
  style.innerHTML = `
  .rune-detail-modal-bg {
    position: fixed; left:0; top:0; width:100vw; height:100vh; background:rgba(0,0,0,0.35); z-index:1000;
  }
  .rune-detail-modal {
    position: fixed; left:50%; top:50%; transform:translate(-50%,-50%);
    background: #fff; color: #222; max-width: 420px; width: 92vw; border-radius: 14px; box-shadow: 0 8px 32px #0003;
    z-index:1001; padding:2rem 1.5rem 1.5rem 1.5rem; font-family: inherit;
    animation: fadeInModal 0.2s;
  }
  @keyframes fadeInModal { from { opacity:0; transform:translate(-50%,-40%);} to { opacity:1; transform:translate(-50%,-50%);} }
  .rune-detail-title { font-size:1.35em; font-weight:700; margin-bottom:0.7em; text-align:center; }
  .rune-detail-main { font-size:1.05em; margin-bottom:1.1em; color:#444; line-height:1.7; }
  .rune-detail-section { margin-bottom:1.2em; }
  .rune-detail-list { list-style:none; padding:0; margin:0; }
  .rune-detail-list li { margin-bottom:0.6em; line-height:1.6; }
  .rune-detail-list span { display:inline-block; min-width:4.5em; font-weight:500; color:#1a237e; }
  .rune-detail-close {
    display:block; margin:1.2em auto 0 auto; padding:0.5em 2.5em; border:none; background:#222; color:#fff; border-radius:6px; font-size:1em; cursor:pointer;
    transition: background 0.2s;
  }
  .rune-detail-close:hover { background:#444; }
  @media (max-width: 600px) {
    .rune-detail-modal { padding:1.2rem 0.5rem 1rem 0.5rem; }
    .rune-detail-title { font-size:1.1em; }
  }
  `;
  document.head.appendChild(style);
})();
// --- Add "อ่านความหมายเพิ่มเติม" link to each rune in displayInterpretation ---
const runeKeyMap = {
  'Fehu': 'FEHU', 'Uruz': 'URUZ', 'Thurisaz': 'THURISAZ', 'Ansuz': 'ANSUZ', 'Raidho': 'RAIDHO', 'Kenaz': 'KENAZ', 'Gebo': 'GEBO', 'Wunjo': 'WUNJO',
  'Hagalaz': 'HAGALAZ', 'Naudhiz': 'NAUDHIZ', 'Isa': 'ISA', 'Jera': 'JERA', 'Eihwaz': 'EIHWAZ', 'Perthro': 'PERTHRO', 'Algiz': 'ALGIZ', 'Sowilo': 'SOWILO',
  'Tiwaz': 'TIWAZ', 'Berkano': 'BERKANO', 'Ehwaz': 'EHWAZ', 'Mannaz': 'MANNAZ', 'Laguz': 'LAGUZ', 'Ingwaz': 'INGWAZ', 'Dagaz': 'DAGAZ', 'Othala': 'OTHALA'
};

// --- เพิ่มฟังก์ชันโยนไพ่รูนและเชื่อมปุ่ม ---
let selectedRunes = [];

function castRunes() {
    const question = document.getElementById('question').value.trim();
    if (!question) {
        alert('กรุณาใส่คำถามก่อนทำนาย');
        return;
    }

    // ใช้ฟังก์ชันใหม่ที่รองรับการกลับหัว
    const shuffledRunes = shuffleRunesWithReversed();
    const spread = spreads[currentSpread];
    
    // เลือกรูนตามจำนวนตำแหน่งใน spread
    selectedRunes = shuffledRunes.slice(0, spread.positions.length);
    
    // แสดงผลรูน
    renderRunes();
    
    // แสดงการตีความ
    displayInterpretation(question);
    
    // เพิ่มคำถามลงในประวัติ
    addToHistory(question, selectedRunes);
}

function renderRunes() {
    const runeDisplay = document.getElementById('runeDisplay');
    const spread = spreads[currentSpread];
    
    let html = `<div class="rune-grid" data-spread="${currentSpread}">`;
    
    selectedRunes.forEach((rune, index) => {
        const position = spread.positions[index];
        const isReversed = rune.isReversed;
        const reversedClass = isReversed ? 'reversed' : '';
        const reversedText = isReversed ? ' (กลับหัว)' : '';
        
        html += `
            <div class="rune-card ${reversedClass}" data-position="${position}">
                <div class="rune-symbol ${reversedClass}">${rune.symbol}</div>
                <div class="rune-name">${rune.name}${reversedText}</div>
                <div class="rune-position">${position}</div>
                <div class="rune-meaning">
                    ${isReversed ? rune.reversed.split(',')[0] : rune.meaning.split(',')[0]}
                </div>
                <div class="rune-element ${getElementClass(rune.element)}">${rune.element}</div>
            </div>
        `;
    });
    
    html += '</div>';
    runeDisplay.innerHTML = html;
    runeDisplay.style.display = 'block';
}

// ฟังก์ชันช่วยสำหรับ CSS class ของธาตุ
function getElementClass(element) {
    const elementMap = {
        'ไฟ': 'element-fire',
        'น้ำ': 'element-water', 
        'ดิน': 'element-earth',
        'อากาศ': 'element-air',
        'น้ำแข็ง': 'element-ice'
    };
    return elementMap[element] || 'element-default';
}

// --- เชื่อมโยงปุ่มโยนไพ่ ---
document.addEventListener('DOMContentLoaded', function() {
    console.log('Rune Divination App loaded');
    
    // เพิ่ม event listeners สำหรับปุ่มเลือก spread
    document.querySelectorAll('.spread-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const spreadType = btn.dataset.spread;
            changeSpread(spreadType);
        });
    });
    
    // เพิ่ม event listener สำหรับปุ่มโยนไพ่
    const castRunesBtn = document.getElementById('castRunesBtn');
    if (castRunesBtn) {
        castRunesBtn.addEventListener('click', castRunes);
    }
    
    // เพิ่ม event listeners สำหรับปุ่ม action
    const shareBtn = document.getElementById('shareBtn');
    const saveBtn = document.getElementById('saveBtn');
    const newReadingBtn = document.getElementById('newReadingBtn');
    
    if (shareBtn) {
        shareBtn.addEventListener('click', shareResults);
    }
    if (saveBtn) {
        saveBtn.addEventListener('click', saveResults);
    }
    if (newReadingBtn) {
        newReadingBtn.addEventListener('click', newReading);
    }
    
    // เริ่มต้นด้วย spread แรก
    changeSpread('one');
});

// ฟังก์ชันแชร์ผลลัพธ์
function shareResults() {
    const question = document.getElementById('question').value;
    const spread = spreads[currentSpread];
    let text = `🔮 การทำนายรูน: ${spread.title}\n`;
    text += `คำถาม: ${question}\n\n`;
    
    selectedRunes.forEach((rune, index) => {
        const position = spread.positions[index];
        text += `${position}: ${rune.name}${rune.isReversed ? ' (กลับด้าน)' : ''}\n`;
    });
    
    if (navigator.share) {
        navigator.share({
            title: 'ผลการทำนายรูน',
            text: text
        });
    } else {
        // Fallback สำหรับเบราว์เซอร์ที่ไม่รองรับ Web Share API
        navigator.clipboard.writeText(text).then(() => {
            alert('คัดลอกผลลัพธ์ไปยังคลิปบอร์ดแล้ว');
        });
    }
}

// ฟังก์ชันบันทึกผลลัพธ์
function saveResults() {
    const question = document.getElementById('question').value;
    const spread = spreads[currentSpread];
    const timestamp = new Date().toLocaleString('th-TH');
    
    let result = {
        timestamp: timestamp,
        spread: spread.title,
        question: question,
        runes: selectedRunes.map((rune, index) => ({
            position: spread.positions[index],
            name: rune.name,
            isReversed: rune.isReversed,
            meaning: rune.isReversed ? rune.reversed : rune.meaning
        }))
    };
    
    // บันทึกลง localStorage
    let history = JSON.parse(localStorage.getItem('runeHistory') || '[]');
    history.unshift(result);
    history = history.slice(0, 50); // เก็บแค่ 50 รายการล่าสุด
    localStorage.setItem('runeHistory', JSON.stringify(history));
    
    alert('บันทึกผลลัพธ์เรียบร้อยแล้ว');
}

// ฟังก์ชันทำนายใหม่
function newReading() {
    // ซ่อนผลลัพธ์ทั้งหมด
    document.getElementById('runeDisplay').style.display = 'none';
    document.getElementById('interpretation').style.display = 'none';
    document.getElementById('actionButtons').style.display = 'none';
    
    // ล้างคำถาม
    document.getElementById('question').value = '';
    
    // รีเซ็ต selectedRunes
    selectedRunes = [];
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    changeSpread('one');
    
    // Event listeners
    document.getElementById('castRunesBtn').addEventListener('click', castRunes);
    document.getElementById('randomQuestionBtn').addEventListener('click', generateRandomQuestion);
    document.getElementById('shareBtn').addEventListener('click', shareResults);
    document.getElementById('saveBtn').addEventListener('click', saveResults);
    document.getElementById('newReadingBtn').addEventListener('click', newReading);
    document.getElementById('historyBtn').addEventListener('click', showHistory);
    document.getElementById('closeModal').addEventListener('click', closeHistoryModal);
    document.getElementById('exportHistoryBtn').addEventListener('click', exportHistory);
    document.getElementById('clearHistoryBtn').addEventListener('click', clearHistory);
    
    // Spread button listeners
    document.querySelectorAll('.spread-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            changeSpread(this.dataset.spread);
        });
    });
});

// ฟังก์ชันสร้างคำถามสุ่ม
function generateRandomQuestion() {
    const questions = [
        "ฉันควรจะเปลี่ยนงานหรือไม่?",
        "ความสัมพันธ์ของฉันจะเป็นอย่างไร?",
        "อนาคตของธุรกิจจะเป็นอย่างไร?",
        "ฉันควรจะย้ายบ้านหรือไม่?",
        "สุขภาพของฉันจะเป็นอย่างไร?",
        "ฉันจะพบความรักที่แท้จริงเมื่อไหร่?",
        "การลงทุนของฉันจะประสบความสำเร็จหรือไม่?",
        "ฉันควรจะเรียนต่อหรือไม่?",
        "ความฝันของฉันจะเป็นจริงหรือไม่?",
        "ฉันควรจะเริ่มต้นสิ่งใหม่หรือไม่?"
    ];
    
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('question').value = randomQuestion;
}

// ฟังก์ชันแสดงประวัติ
function showHistory() {
    const history = JSON.parse(localStorage.getItem('runeHistory') || '[]');
    const modal = document.getElementById('historyModal');
    const content = document.getElementById('historyContent');
    
    if (history.length === 0) {
        content.innerHTML = '<p class="text-center">ไม่มีประวัติการทำนาย</p>';
    } else {
        let html = '<div class="history-list">';
        history.forEach((reading, index) => {
            const reversedCount = reading.runes.filter(r => r.isReversed).length;
            html += `
                <div class="history-item" style="border:1px solid #e5e7eb;border-radius:8px;padding:1rem;margin-bottom:1rem;background:white;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
                        <strong>${reading.date}</strong>
                        <span style="color:#6b7280;font-size:0.9em;">${reading.spread}</span>
                    </div>
                    <p style="margin-bottom:0.5rem;"><strong>คำถาม:</strong> ${reading.question}</p>
                    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                        ${reading.runes.map(rune => `
                            <span style="background:#f3f4f6;padding:0.25rem 0.5rem;border-radius:4px;font-size:0.9em;">
                                ${rune.symbol} ${rune.name}${rune.isReversed ? ' (กลับหัว)' : ''}
                            </span>
                        `).join('')}
                    </div>
                    ${reversedCount > 0 ? `<p style="color:#dc2626;font-size:0.9em;margin-top:0.5rem;">มีรูนกลับหัว ${reversedCount} ตัว</p>` : ''}
                </div>
            `;
        });
        html += '</div>';
        content.innerHTML = html;
    }
    
    modal.style.display = 'block';
}

// ฟังก์ชันปิดประวัติ
function closeHistoryModal() {
    document.getElementById('historyModal').style.display = 'none';
}

// ฟังก์ชันส่งออกประวัติ
function exportHistory() {
    const history = JSON.parse(localStorage.getItem('runeHistory') || '[]');
    if (history.length === 0) {
        alert('ไม่มีประวัติการทำนาย');
        return;
    }
    
    const blob = new Blob([JSON.stringify(history, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rune-history-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// ฟังก์ชันล้างประวัติ
function clearHistory() {
    if (confirm('คุณแน่ใจหรือไม่ที่จะล้างประวัติการทำนายทั้งหมด?')) {
        localStorage.removeItem('runeHistory');
        closeHistoryModal();
        alert('ล้างประวัติเรียบร้อยแล้ว');
    }
} 