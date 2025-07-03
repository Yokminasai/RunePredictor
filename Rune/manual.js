// ข้อมูลอักษรรูนโบราณที่ลึกซึ้งและแม่นยำ
const runes = [
    {
        symbol: 'ᚠ', name: 'Fehu', meaning: 'ความมั่งคั่ง, ทรัพย์สิน, ความอุดมสมบูรณ์, การเริ่มต้นใหม่, พลังชีวิต, การเติบโต',
        reversed: 'การสูญเสีย, ความโลภ, การติดขัด, การสิ้นเปลือง, ความยากจน',
        element: 'ไฟ', deity: 'Freyr', power: 'การสร้างสรรค์, การเติบโต, ความอุดมสมบูรณ์',
        advice: 'ใช้ทรัพยากรอย่างชาญฉลาด, ลงทุนในอนาคต, แบ่งปันความมั่งคั่ง',
        intensity: 7
    },
    {
        symbol: 'ᚢ', name: 'Uruz', meaning: 'พลัง, ความแข็งแกร่ง, ความกล้าหาญ, การเปลี่ยนแปลง, พลังดิบ, ความดื้อรั้น',
        reversed: 'ความอ่อนแอ, การสูญเสียพลัง, ความกลัว, การยอมแพ้, ความไม่มั่นใจ',
        element: 'ดิน', deity: 'Thor', power: 'ความแข็งแกร่ง, การป้องกัน, การเปลี่ยนแปลง',
        advice: 'ใช้พลังอย่างชาญฉลาด, อย่ากลัวการเปลี่ยนแปลง, เชื่อมั่นในตัวเอง',
        intensity: 8
    },
    {
        symbol: 'ᚦ', name: 'Thurisaz', meaning: 'การป้องกัน, การโจมตี, พลังแห่งธรรมชาติ, การตัดสินใจ, หนาม, การตื่นตัว',
        reversed: 'การป้องกันที่อ่อนแอ, การถูกโจมตี, ความลังเล, การไม่พร้อม',
        element: 'ไฟ', deity: 'Thor', power: 'การป้องกัน, การโจมตี, การตัดสินใจ',
        advice: 'ระวังภัยรอบตัว, ตัดสินใจอย่างเด็ดขาด, ใช้พลังอย่างชาญฉลาด',
        intensity: 6
    },
    {
        symbol: 'ᚨ', name: 'Ansuz', meaning: 'การสื่อสาร, ปัญญา, คำแนะนำ, การเรียนรู้, เอาเซอร์, การเปิดเผย',
        reversed: 'การสื่อสารที่ผิดพลาด, การหลอกลวง, ความไม่เข้าใจ, การปิดบัง',
        element: 'อากาศ', deity: 'Odin', power: 'ปัญญา, การสื่อสาร, การเรียนรู้',
        advice: 'ฟังคำแนะนำ, เรียนรู้จากประสบการณ์, สื่อสารอย่างชัดเจน',
        intensity: 7
    },
    {
        symbol: 'ᚱ', name: 'Raidho', meaning: 'การเดินทาง, การเปลี่ยนแปลง, การพัฒนา, การเคลื่อนไหว, การเดินทางทางจิตวิญญาณ',
        reversed: 'การเดินทางที่ล่าช้า, การติดขัด, การถอยหลัง, การสูญเสียทิศทาง',
        element: 'อากาศ', deity: 'Odin', power: 'การเคลื่อนไหว, การเปลี่ยนแปลง, การพัฒนา',
        advice: 'เดินทางอย่างมีเป้าหมาย, เปิดรับการเปลี่ยนแปลง, พัฒนาตัวเอง',
        intensity: 6
    },
    {
        symbol: 'ᚲ', name: 'Kenaz', meaning: 'ไฟ, ความรู้, การสร้างสรรค์, การเปิดเผย, แสงสว่าง, การเปลี่ยนแปลง',
        reversed: 'การสูญเสียความรู้, ความมืด, การทำลาย, การสูญเสียแรงบันดาลใจ',
        element: 'ไฟ', deity: 'Loki', power: 'การสร้างสรรค์, ความรู้, การเปิดเผย',
        advice: 'แสวงหาความรู้, ใช้ความคิดสร้างสรรค์, เปิดเผยความจริง',
        intensity: 8
    },
    {
        symbol: 'ᚷ', name: 'Gebo', meaning: 'การให้, การแลกเปลี่ยน, ความสมดุล, ความสัมพันธ์, ของขวัญ, การเสียสละ',
        reversed: 'การไม่สมดุล, การเอาเปรียบ, ความขัดแย้ง, การเห็นแก่ตัว',
        element: 'อากาศ', deity: 'Freya', power: 'ความสมดุล, การแลกเปลี่ยน, ความสัมพันธ์',
        advice: 'ให้และรับอย่างสมดุล, สร้างความสัมพันธ์ที่ดี, เสียสละเพื่อผู้อื่น',
        intensity: 5
    },
    {
        symbol: 'ᚹ', name: 'Wunjo', meaning: 'ความสุข, ความสำเร็จ, ความสมหวัง, การเฉลิมฉลอง, ความสมบูรณ์, ความปรารถนา',
        reversed: 'ความเศร้า, ความล้มเหลว, ความผิดหวัง, การสูญเสีย',
        element: 'อากาศ', deity: 'Freya', power: 'ความสุข, ความสำเร็จ, ความสมหวัง',
        advice: 'เฉลิมฉลองความสำเร็จ, อย่ายอมแพ้, ตามหาความสุข',
        intensity: 7
    },
    {
        symbol: 'ᚺ', name: 'Hagalaz', meaning: 'การเปลี่ยนแปลงที่รุนแรง, พายุ, การทำลาย, การเริ่มต้นใหม่, พลังธรรมชาติ',
        reversed: 'การเปลี่ยนแปลงที่ช้า, การฟื้นฟู, การรักษา, การเติบโตใหม่',
        element: 'น้ำแข็ง', deity: 'Hel', power: 'การเปลี่ยนแปลง, การทำลาย, การเริ่มต้นใหม่',
        advice: 'ยอมรับการเปลี่ยนแปลง, เรียนรู้จากความสูญเสีย, เริ่มต้นใหม่',
        intensity: 9
    },
    {
        symbol: 'ᚾ', name: 'Naudhiz', meaning: 'ความต้องการ, ความจำเป็น, การอดทน, การเรียนรู้, ความยากลำบาก',
        reversed: 'การหลีกเลี่ยงปัญหา, การไม่รับผิดชอบ, ความอ่อนแอ, การยอมแพ้',
        element: 'ไฟ', deity: 'Norns', power: 'ความอดทน, การเรียนรู้, การเติบโต',
        advice: 'อดทนต่อความยากลำบาก, เรียนรู้จากปัญหา, เติบโตผ่านความท้าทาย',
        intensity: 6
    },
    {
        symbol: 'ᛁ', name: 'Isa', meaning: 'น้ำแข็ง, การหยุดนิ่ง, การรอคอย, การสะท้อน, ความเย็น, การแช่แข็ง',
        reversed: 'การละลาย, การเคลื่อนไหว, การเปลี่ยนแปลง, การปลดปล่อย',
        element: 'น้ำแข็ง', deity: 'Hel', power: 'การหยุดนิ่ง, การสะท้อน, การรอคอย',
        advice: 'หยุดและสะท้อน, รอเวลาที่เหมาะสม, ปล่อยวาง',
        intensity: 4
    },
    {
        symbol: 'ᛃ', name: 'Jera', meaning: 'การเก็บเกี่ยว, ผลลัพธ์, การทำงานหนัก, การรอคอย, วัฏจักร, การเปลี่ยนแปลงตามฤดูกาล',
        reversed: 'การเก็บเกี่ยวที่ล่าช้า, การสูญเสียผลลัพธ์, การไม่ได้รับผลตอบแทน',
        element: 'ดิน', deity: 'Freyr', power: 'การเก็บเกี่ยว, ผลลัพธ์, วัฏจักร',
        advice: 'ทำงานหนักเพื่อผลลัพธ์, รอเวลาที่เหมาะสม, เก็บเกี่ยวผลงาน',
        intensity: 6
    },
    {
        symbol: 'ᛇ', name: 'Eihwaz', meaning: 'การป้องกัน, ความแข็งแกร่ง, การเปลี่ยนแปลง, การเติบโต, ต้นไม้แห่งชีวิต',
        reversed: 'การป้องกันที่อ่อนแอ, การล้มเหลว, การไม่เติบโต',
        element: 'ดิน', deity: 'Yggdrasil', power: 'การป้องกัน, การเติบโต, การเปลี่ยนแปลง',
        advice: 'สร้างการป้องกันที่แข็งแกร่ง, เติบโตอย่างยั่งยืน, เปลี่ยนแปลงอย่างชาญฉลาด',
        intensity: 7
    },
    {
        symbol: 'ᛈ', name: 'Perthro', meaning: 'โชคชะตา, การเสี่ยง, การเปิดเผย, ความลับ, การเล่น, ความไม่แน่นอน',
        reversed: 'โชคร้าย, การสูญเสีย, การซ่อนเร้น, การหลอกลวง',
        element: 'น้ำ', deity: 'Frigg', power: 'โชคชะตา, การเสี่ยง, การเปิดเผย',
        advice: 'เสี่ยงอย่างชาญฉลาด, เปิดเผยความลับ, รับมือกับความไม่แน่นอน',
        intensity: 5
    },
    {
        symbol: 'ᛉ', name: 'Algiz', meaning: 'การป้องกัน, การคุ้มครอง, การเชื่อมต่อกับจิตวิญญาณ, การป้องกันจากภัย, การเติบโต',
        reversed: 'การป้องกันที่อ่อนแอ, การถูกโจมตี, การสูญเสียการคุ้มครอง',
        element: 'อากาศ', deity: 'Heimdall', power: 'การป้องกัน, การคุ้มครอง, การเชื่อมต่อ',
        advice: 'สร้างการป้องกันที่แข็งแกร่ง, เชื่อมต่อกับจิตวิญญาณ, คุ้มครองผู้อื่น',
        intensity: 8
    },
    {
        symbol: 'ᛊ', name: 'Sowilo', meaning: 'ดวงอาทิตย์, ความสำเร็จ, พลังชีวิต, การรักษา, แสงสว่าง, การชนะ',
        reversed: 'การสูญเสียพลัง, ความล้มเหลว, ความมืด, การพ่ายแพ้',
        element: 'ไฟ', deity: 'Sol', power: 'ความสำเร็จ, พลังชีวิต, การรักษา',
        advice: 'ใช้พลังชีวิตอย่างเต็มที่, แสวงหาความสำเร็จ, รักษาตัวเองและผู้อื่น',
        intensity: 9
    },
    {
        symbol: 'ᛏ', name: 'Tiwaz', meaning: 'ความยุติธรรม, การต่อสู้, ความกล้าหาญ, การตัดสินใจ, ชัยชนะ, ความซื่อสัตย์',
        reversed: 'ความไม่ยุติธรรม, การหลีกเลี่ยงการต่อสู้, ความขี้ขลาด',
        element: 'ไฟ', deity: 'Tyr', power: 'ความยุติธรรม, การต่อสู้, ความกล้าหาญ',
        advice: 'ต่อสู้เพื่อความยุติธรรม, ตัดสินใจอย่างกล้าหาญ, ซื่อสัตย์ต่อตัวเอง',
        intensity: 8
    },
    {
        symbol: 'ᛒ', name: 'Berkano', meaning: 'การเกิดใหม่, การเติบโต, ความอุดมสมบูรณ์, การรักษา, ครอบครัว, การดูแล',
        reversed: 'การหยุดการเติบโต, การสูญเสีย, การทำลาย, การแตกแยก',
        element: 'ดิน', deity: 'Freya', power: 'การเกิดใหม่, การเติบโต, การรักษา',
        advice: 'เริ่มต้นใหม่, เติบโตอย่างยั่งยืน, ดูแลครอบครัวและผู้อื่น',
        intensity: 7
    },
    {
        symbol: 'ᛖ', name: 'Ehwaz', meaning: 'การเคลื่อนไหว, การเปลี่ยนแปลง, การทำงานร่วมกัน, ความก้าวหน้า, ความไว้วางใจ',
        reversed: 'การติดขัด, ความขัดแย้ง, การถอยหลัง, การไม่ไว้วางใจ',
        element: 'ดิน', deity: 'Freyr', power: 'การเคลื่อนไหว, การเปลี่ยนแปลง, การทำงานร่วมกัน',
        advice: 'เคลื่อนไหวไปข้างหน้า, ทำงานร่วมกับผู้อื่น, สร้างความไว้วางใจ',
        intensity: 6
    },
    {
        symbol: 'ᛗ', name: 'Mannaz', meaning: 'มนุษยชาติ, ความสัมพันธ์, การทำงานร่วมกัน, ปัญญา, ความเป็นชุมชน',
        reversed: 'ความโดดเดี่ยว, ความขัดแย้ง, การไม่เข้าใจ, การแตกแยก',
        element: 'อากาศ', deity: 'Heimdall', power: 'มนุษยชาติ, ความสัมพันธ์, ปัญญา',
        advice: 'สร้างความสัมพันธ์ที่ดี, ทำงานร่วมกับชุมชน, ใช้ปัญญาในการตัดสินใจ',
        intensity: 6
    },
    {
        symbol: 'ᛚ', name: 'Laguz', meaning: 'น้ำ, อารมณ์, สัญชาตญาณ, การรักษา, การไหล, การเปลี่ยนแปลง',
        reversed: 'อารมณ์ที่สับสน, การสูญเสียสัญชาตญาณ, การติดขัด',
        element: 'น้ำ', deity: 'Njord', power: 'อารมณ์, สัญชาตญาณ, การรักษา',
        advice: 'เชื่อมั่นในสัญชาตญาณ, ปล่อยให้อารมณ์ไหล, รักษาตัวเอง',
        intensity: 7
    },
    {
        symbol: 'ᛜ', name: 'Ingwaz', meaning: 'การเกิดใหม่, การเปลี่ยนแปลง, การเติบโต, การเริ่มต้นใหม่, พลังภายใน',
        reversed: 'การหยุดการเติบโต, การสูญเสียโอกาส, การไม่เปลี่ยนแปลง',
        element: 'ดิน', deity: 'Freyr', power: 'การเกิดใหม่, การเปลี่ยนแปลง, พลังภายใน',
        advice: 'เริ่มต้นใหม่, ใช้พลังภายใน, เปลี่ยนแปลงอย่างกล้าหาญ',
        intensity: 8
    },
    {
        symbol: 'ᛞ', name: 'Dagaz', meaning: 'การเปลี่ยนแปลง, การเริ่มต้นใหม่, การเปิดเผย, ความสมดุล, การตื่นตัว',
        reversed: 'การเปลี่ยนแปลงที่ล่าช้า, การไม่สมดุล, การไม่ตื่นตัว',
        element: 'อากาศ', deity: 'Odin', power: 'การเปลี่ยนแปลง, การเริ่มต้นใหม่, ความสมดุล',
        advice: 'ตื่นตัวต่อการเปลี่ยนแปลง, สร้างความสมดุล, เริ่มต้นใหม่',
        intensity: 7
    },
    {
        symbol: 'ᛟ', name: 'Othala', meaning: 'มรดก, บ้าน, ครอบครัว, การเชื่อมต่อกับรากเหง้า, ความปลอดภัย, การสืบทอด',
        reversed: 'การสูญเสียมรดก, การแตกแยกในครอบครัว, การสูญเสียบ้าน',
        element: 'ดิน', deity: 'Odin', power: 'มรดก, ครอบครัว, การสืบทอด',
        advice: 'รักษามรดกของครอบครัว, สร้างบ้านที่ปลอดภัย, เชื่อมต่อกับรากเหง้า',
        intensity: 6
    }
];

// การกำหนดค่าการจัดเรียงรูนที่ลึกซึ้ง
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
        interpretation: 'การวิเคราะห์แบบข้ามที่แสดงความสัมพันธ์ระหว่างปัจัยต่างๆ'
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

// ฟังก์ชันสำหรับการเลือกไพ่รูนด้วยตัวเอง
let manualShuffled = [];
let manualSelected = [];
let manualCount = 3;
let manualFlipped = false;
let currentSpread = 'three';

// ฟังก์ชันสับไพ่รูนแบบกลับหัว
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
    const descriptionDiv = document.getElementById('spread-description');
    if (descriptionDiv) {
        descriptionDiv.innerHTML = spread.description.map(desc => `<p>${desc}</p>`).join('');
    }
    
    // อัปเดตจำนวนไพ่
    const countSelect = document.getElementById('manual-count');
    if (countSelect) {
        countSelect.value = spread.positions.length;
        manualCount = spread.positions.length;
    }
    
    // เริ่มใหม่
    resetManual();
}

// ฟังก์ชันแสดงกระดานไพ่
function renderBoard() {
    const board = document.getElementById('manualRuneBoard');
    if (!board) return;
    
    board.innerHTML = '';
    manualShuffled.forEach((rune, idx) => {
        const card = document.createElement('div');
        card.className = 'manual-rune-card';
        card.dataset.idx = idx;
        
        if (manualSelected.includes(idx)) {
            card.classList.add('selected');
        }
        if (manualFlipped && manualSelected.includes(idx)) {
            card.classList.add('flipped');
            // เพิ่ม class สำหรับรูนกลับหัว
            if (rune.isReversed) {
                card.classList.add('reversed');
            }
        }
        
        card.onclick = () => {
            if (manualFlipped) return;
            if (manualSelected.length < manualCount && !manualSelected.includes(idx)) {
                manualSelected.push(idx);
                renderBoard();
                updateSelectedList();
                if (manualSelected.length === manualCount) {
                    const flipBtn = document.getElementById('manual-flip');
                    if (flipBtn) flipBtn.disabled = false;
                }
            }
        };
        
        // แสดงหลังไพ่ (หรือหน้าถ้าถูกพลิก)
        if (manualFlipped && manualSelected.includes(idx)) {
            const reversedClass = rune.isReversed ? 'reversed' : '';
            card.innerHTML = `<div class="rune-symbol ${reversedClass}" style="font-size: 2em; color: white;">${rune.symbol}</div>`;
        } else {
            card.innerHTML = '<div style="font-size: 2em; color: transparent;">?</div>';
        }
        
        board.appendChild(card);
    });
}

// ฟังก์ชันอัปเดตรายการไพ่ที่เลือก
function updateSelectedList() {
    const list = document.getElementById('manualSelectedList');
    const selectedSection = document.getElementById('selectedSection');
    if (!list) return;
    
    if (manualSelected.length === 0) {
        selectedSection.style.display = 'none';
        return;
    }
    
    selectedSection.style.display = 'block';
    list.innerHTML = '';
    const spread = spreads[currentSpread];
    
    manualSelected.forEach((idx, i) => {
        const rune = manualShuffled[idx];
        const position = spread.positions[i];
        const div = document.createElement('div');
        div.className = 'manual-selected-item';
        
        if (manualFlipped) {
            const reversedText = rune.isReversed ? ' (กลับหัว)' : '';
            const reversedClass = rune.isReversed ? 'reversed' : '';
            div.innerHTML = `
                <div class="rune-symbol ${reversedClass}" style="font-size: 2em; margin-bottom: 5px;">${rune.symbol}</div>
                <div style="font-weight: bold; color: white;">${rune.name}${reversedText}</div>
                <div style="font-size: 0.8em; color: #e2e8f0;">${position}</div>
            `;
        } else {
            div.innerHTML = `
                <div style="font-size: 2em; margin-bottom: 5px;">?</div>
                <div style="font-weight: bold; color: white;">${position}</div>
            `;
        }
        
        list.appendChild(div);
    });
}

// ฟังก์ชันพลิกไพ่ที่เลือก
function flipSelected() {
    manualFlipped = true;
    renderBoard();
    updateSelectedList();
    showManualInterpretation();
}

// ฟังก์ชันแสดงการตีความ
function showManualInterpretation() {
    const container = document.getElementById('manual-interpretation');
    const interpretationSection = document.getElementById('interpretationSection');
    if (!container) return;
    
    if (!manualFlipped) {
        interpretationSection.style.display = 'none';
        return;
    }
    
    interpretationSection.style.display = 'block';
    const spread = spreads[currentSpread];
    const runesPicked = manualSelected.map(idx => manualShuffled[idx]);
    
    let html = '';
    html += `<h3 style="color: white; text-align: center; margin-bottom: 20px;">🔮 ${spread.title}</h3>`;
    
    runesPicked.forEach((rune, i) => {
        const position = spread.positions[i];
        const elementColor = getElementColor(rune.element);
        const isReversed = rune.isReversed;
        const reversedIndicator = isReversed ? '<span style="color:#e53e3e;font-weight:500;background:#fee2e2;padding:0.2em 0.5em;border-radius:4px;font-size:0.9em;">กลับหัว</span>' : '';
        const meaning = isReversed ? rune.reversed : rune.meaning;
        const meaningColor = isReversed ? '#dc2626' : '#e2e8f0';
        const adviceColor = isReversed ? '#dc2626' : '#e2e8f0';
        const borderColor = isReversed ? '#e53e3e' : elementColor;
        
        html += `
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; margin-bottom: 15px; border-left: 4px solid ${borderColor};">
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <span class="rune-symbol ${isReversed ? 'reversed' : ''}" style="font-size: 2em; margin-right: 15px; ${isReversed ? 'transform: rotate(180deg); color: #dc2626;' : 'color: white;'}">${rune.symbol}</span>
                    <div>
                        <strong style="color: white; font-size: 1.1em;">${rune.name} ${reversedIndicator}</strong>
                        <div style="color: #e2e8f0; font-size: 0.9em;">${position}</div>
                    </div>
                </div>
                <div style="color: ${meaningColor}; margin-bottom: 8px;"><strong>ความหมาย:</strong> ${meaning}</div>
                <div style="color: ${adviceColor}; margin-bottom: 8px;"><strong>คำแนะนำ:</strong> ${rune.advice}</div>
                <div style="color: #e2e8f0; font-size: 0.9em;">
                    <strong>ธาตุ:</strong> <span style="color: ${elementColor};">${rune.element}</span> | <strong>พลัง:</strong> ${rune.power} | <strong>ความเข้มข้น:</strong> ${rune.intensity}/10
                </div>
            </div>
        `;
    });
    
    // การวิเคราะห์ธาตุ
    const elementCount = {};
    runesPicked.forEach(rune => {
        elementCount[rune.element] = (elementCount[rune.element] || 0) + 1;
    });
    
    const reversedCount = runesPicked.filter(r => r.isReversed).length;
    const totalRunes = runesPicked.length;
    const reversedPercentage = Math.round((reversedCount / totalRunes) * 100);
    
    html += `
        <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; margin-top: 20px;">
            <h4 style="color: white; margin-bottom: 10px;">🔍 การวิเคราะห์</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px; margin-bottom: 15px;">
    `;
    
    Object.entries(elementCount).forEach(([element, count]) => {
        const percentage = Math.round((count / totalRunes) * 100);
        const color = getElementColor(element);
        html += `
            <div style="text-align: center; padding: 8px; background: rgba(255,255,255,0.1); border-radius: 8px; border-left: 3px solid ${color};">
                <div style="font-weight: 600; color: ${color}; margin-bottom: 3px;">${element}</div>
                <div style="font-size: 1.2em; font-weight: 700;">${count} ตัว</div>
                <div style="font-size: 0.9em; color: #ccc;">${percentage}%</div>
            </div>
        `;
    });
    
    html += '</div>';
    
    if (reversedCount > 0) {
        html += `<p style="color: #e53e3e; font-weight: 500; margin-bottom: 10px;">⚠️ มีรูนกลับหัว ${reversedCount} ตัว (${reversedPercentage}%) ซึ่งบ่งบอกถึงความท้าทายหรืออุปสรรคที่ต้องระวัง</p>`;
    }
    
    // สรุปแบบภาษามนุษย์
    html += `
        <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; margin-top: 20px;">
            <h4 style="color: white; margin-bottom: 10px;">📝 สรุปการตีความ</h4>
            <p style="color: #e2e8f0; line-height: 1.6;">
                คุณได้เลือกไพ่รูนด้วยตัวเองโดยใช้ <strong>${spread.title}</strong> ซึ่งแสดงถึงการเชื่อมต่อที่ลึกซึ้งระหว่างจิตใต้สำนึกของคุณกับพลังแห่งอักษรรูนโบราณ 
                ผลลัพธ์นี้สะท้อนถึงสถานการณ์ปัจจุบัน ความท้าทาย และคำแนะนำที่เหมาะสมกับจิตวิญญาณของคุณมากที่สุด
            </p>
            <p style="color: #e2e8f0; line-height: 1.6;">
                <strong>💡 คำแนะนำ:</strong> ใช้พลังแห่งรูนเหล่านี้เป็นแนวทางในการตัดสินใจและเดินทางต่อไปในชีวิต 
                จำไว้ว่าคุณมีพลังในการเปลี่ยนแปลงและสร้างอนาคตที่คุณต้องการ
            </p>
        </div>
    `;
    
    container.innerHTML = html;
}

// ฟังก์ชันเริ่มใหม่
function resetManual() {
    manualShuffled = shuffleRunesWithReversed();
    manualSelected = [];
    manualFlipped = false;
    
    const flipBtn = document.getElementById('manual-flip');
    if (flipBtn) flipBtn.disabled = true;
    
    renderBoard();
    updateSelectedList();
    showManualInterpretation();
}

// ฟังก์ชันสำหรับสีธาตุ
function getElementColor(element) {
    const colors = {
        'ไฟ': '#ff6b6b',
        'น้ำ': '#74b9ff',
        'ดิน': '#a29bfe',
        'อากาศ': '#81ecec',
        'น้ำแข็ง': '#dfe6e9'
    };
    return colors[element] || '#667eea';
}

// เริ่มต้นเมื่อโหลดหน้า
document.addEventListener('DOMContentLoaded', () => {
    console.log('Manual page loaded');
    
    // เพิ่ม event listeners สำหรับปุ่มการจัดเรียง
    document.querySelectorAll('.spread-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const spreadType = btn.dataset.spread;
            changeSpread(spreadType);
        });
    });
    
    const countSelect = document.getElementById('manual-count');
    const resetBtn = document.getElementById('manual-reset');
    const flipBtn = document.getElementById('manual-flip');
    
    if (countSelect) {
        countSelect.onchange = (e) => {
            manualCount = parseInt(e.target.value);
            resetManual();
        };
    }
    
    if (resetBtn) {
        resetBtn.onclick = resetManual;
    }
    
    if (flipBtn) {
        flipBtn.onclick = flipSelected;
    }
    
    // เริ่มต้นครั้งแรก
    changeSpread('three');
}); 