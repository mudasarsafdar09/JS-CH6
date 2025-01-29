// 🌟 جب ویب سائٹ کھلے گی، زبان کا انتخاب پوچھے گا
let userLanguage = prompt("آپ کس زبان میں پڑھنا چاہتے ہیں؟ (Which language do you want to read in?) \n\nType 'English' or 'Urdu'").toLowerCase();

// 🌟 انگلش اور اردو کا مواد
const content = {
    english: {
        title: "🔥 Never Give Up! 🔥",
        heading1: "🚀 Believe in Yourself!",
        paragraph1: "In moments of exhaustion, when your mind feels like shutting down, take a deep breath and imagine yourself exactly where you want to be. Then, start again!",
        heading2: "💡 The Formula of Success",
        paragraph2: "Hard Work + Dedication + Persistence = Success",
        paragraph3: "Embrace challenges, push beyond your limits, and say, 'I love this journey!'",
        heading3: "📜 Read, Reflect & Grow",
        scrollText: "Never give up. In difficult moments, when everything tells you to quit, embrace the struggle and say, 'This is my chance to grow.' You must do this because success is waiting for you.",
        heading4: "💪 Keep Pushing Forward!",
        paragraph4: "Live this life in preparation for your biggest success. So that one day, when you look back, you have no regrets.",
        button: "🔥 Stay Motivated! 🔥"
    },
    urdu: {
        title: "🔥 کبھی ہمت نہ ہارو! 🔥",
        heading1: "🚀 خود پر یقین رکھو!",
        paragraph1: "جب تھکن محسوس ہو اور دماغ کام کرنا چھوڑ دے، ایک گہری سانس لو اور خود کو اپنے خوابوں میں پہنچا ہوا تصور کرو۔ پھر، دوبارہ آغاز کرو!",
        heading2: "💡 کامیابی کا فارمولا",
        paragraph2: "محنت + لگن + استقامت = کامیابی",
        paragraph3: "چیلنجز کو گلے لگاؤ، اپنی حدوں سے آگے بڑھو، اور کہو، 'مجھے یہ سفر پسند ہے!'",
        heading3: "📜 پڑھو، سوچو اور آگے بڑھو",
        scrollText: "کبھی ہمت نہ ہارو۔ جب ہر چیز چھوڑنے کا کہے، اس لمحے کو اپناؤ اور کہو، 'یہی موقع ہے آگے بڑھنے کا!' تمہیں یہ کرنا ہوگا کیونکہ کامیابی تمہاری منتظر ہے۔",
        heading4: "💪 ہمیشہ آگے بڑھتے رہو!",
        paragraph4: "زندگی کو اس طرح جیو کہ جب پلٹ کر دیکھو، کوئی پچھتاوا نہ ہو!",
        button: "🔥 متحرک رہو! 🔥"
    }
};

// 🌟 زبان کے مطابق ویب سائٹ کا مواد تبدیل کرنا
if (userLanguage === "urdu") {
    document.getElementById("main-title").innerText = content.urdu.title;
    document.getElementById("heading1").innerText = content.urdu.heading1;
    document.getElementById("paragraph1").innerText = content.urdu.paragraph1;
    document.getElementById("scroll-text").innerText = content.urdu.scrollText;
    document.getElementById("but1").innerText = content.urdu.button;
}
