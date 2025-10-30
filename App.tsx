import React, { useState } from 'react';
import { BrainIcon, DnaIcon, ShieldIcon, RocketIcon } from './components/icons';

// Component defined outside the main component to prevent re-renders
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
    <div className="mb-4 text-teal-400">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, icon }) => (
  <div className="relative mb-8 flex items-center w-full">
    <div className="hidden md:flex w-20 pr-4 items-center">
      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-teal-400 shadow-md">
        {icon}
      </div>
    </div>
    <div className="border-r-2 border-teal-500/30 px-8 py-4 relative bg-gray-900/40 rounded-lg flex-1">
      <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-teal-500 rounded-full"></div>
      <p className="text-teal-400 font-semibold text-sm mb-1">{year}</p>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);


function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    expertise: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate API call
    console.log("Form submitted:", formData);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('תודה! פנייתך התקבלה ונחזור אליך בהקדם.');
      setFormData({ name: '', email: '', expertise: '', message: '' });
    }, 1500);
  };
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1539627831859-a91122424cd1?q=80&w=1920&auto=format&fit=crop')"}}
      ></div>

      <div className="relative z-10">
        <header className="p-4 md:px-8 border-b border-gray-700/50 backdrop-blur-sm sticky top-0">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">אחי קראוס</h1>
            <button 
              onClick={scrollToContact}
              className="px-4 py-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-colors"
            >
              צור קשר
            </button>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center text-center md:text-right">
            <div className="md:w-1/2 md:pl-10">
              <div className="inline-block bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-4">
                <p className="text-teal-400 text-sm font-semibold">20+ שנות ניסיון בפתרון האתגרים הבלתי פתירים</p>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                מהסייבר הצבאי לחזית המאבק בפרקינסון
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                אחי קראוס - יזם טכנולוגי, מדען מחשב, וחלוץ בחשיבה בלתי שגרתית - מגייס צוות עולמי לפריצת דרך רפואית. 
              </p>
              <p className="text-base md:text-lg text-teal-400 font-semibold mb-8">
                כשהמערכות המסורתיות נכשלות, גישה מולטי-דיסציפלינרית יוצאת דופן היא המפתח.
              </p>
              <button 
                onClick={scrollToContact}
                className="px-8 py-3 bg-teal-500 text-white font-bold text-lg rounded-lg hover:bg-teal-600 transition-transform transform hover:scale-105 shadow-lg shadow-teal-500/30"
              >
                הצטרפו למשימה
              </button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
              <div 
                className="w-64 h-64 md:w-96 md:h-96 rounded-full shadow-2xl shadow-teal-500/20 border-4 border-teal-500/30 bg-cover bg-center"
                style={{backgroundImage: "url('/Achi_.png')"}}
                role="img"
                aria-label="אחי קראוס"
              >
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-black/40">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">20+</div>
                  <p className="text-gray-400 text-sm md:text-base">שנות ניסיון בסייבר וטכנולוגיה</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">3</div>
                  <p className="text-gray-400 text-sm md:text-base">תחומי מומחיות: סייבר, ביולוגיה, AI</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">מייסד</div>
                  <p className="text-gray-400 text-sm md:text-base">SpaceIL - המשימה הישראלית לירח</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">10M+</div>
                  <p className="text-gray-400 text-sm md:text-base">חולי פרקינסון בעולם שנציל</p>
                </div>
              </div>
            </div>
          </section>

          {/* Intro to the mission */}
          <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <div className="container mx-auto px-4 text-center max-w-4xl">
              <div className="bg-gray-800/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-xl">
                <h3 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6">המשימה החדשה: הפיכת האישי לגלובלי</h3>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                  <span className="text-teal-400 font-bold">מאי 2025:</span> אובחנתי עם מחלת פרקינסון. במקום להיכנע, בחרתי להילחם - אבל לא בדרך המסורתית.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed mb-6">
                  במשך שנים פתרתי אתגרים בלתי אפשריים: הצלחתי במשימות סייבר קריטיות שאחרים נכשלו בהן, הובלתי חזון הירח הישראלי, ובניתי טכנולוגיות שאנשים טענו שאינן ריאליות. <span className="text-white font-bold">עכשיו, אני מיישם את אותה שיטה חשיבה יוצאת דופן על מחלת הפרקינסון.</span>
                </p>
                <div className="bg-gray-900/50 border border-teal-500/30 rounded-xl p-6 mt-8">
                  <p className="text-base md:text-lg text-gray-100 leading-relaxed italic">
                    "הרפואה המסורתית מטפלת בתסמינים. אני מחפש לשבור את המחלה ממקורה - באמצעות שילוב של AI, ביולוגיה מולקולרית, הבנת מערכות מורכבות, וגישות טיפוליות בלתי קונבנציונליות. זו משימה שדורשת צוות מהטובים בעולם."
                  </p>
                  <p className="text-teal-400 font-bold mt-4">- אחי קראוס</p>
                </div>
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">למה דווקא אני?</h2>
              <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 text-lg">
                הצלחה במשימה הזו דורשת שילוב נדיר של כישורים. הנה מה אני מביא לשולחן:
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                  icon={<ShieldIcon className="w-12 h-12" />}
                  title="סייבר ברמה לאומית"
                  description="20+ שנות הובלת מבצעים קריטיים במשרד ראש הממשלה ובמערכות הביטחון. פתרתי בעיות שנחשבו בלתי פתירות תחת לחץ קיצוני."
                />
                <FeatureCard 
                  icon={<DnaIcon className="w-12 h-12" />}
                  title="מדע רב-תחומי"
                  description="השכלה ומחקר בביולוגיה מולקולרית, פילוסופיה של המדע, ומדעי המחשב. מבין את השפה של כל תחום ויודע לחבר נקודות."
                />
                <FeatureCard 
                  icon={<BrainIcon className="w-12 h-12" />}
                  title="AI ומערכות מורכבות"
                  description="בניית פלטפורמות טכנולוגיות מתקדמות ומינוף בינה מלאכותית לפתרון בעיות בעלות אינספור משתנים. הטכנולוגיה כנשק למלחמה במחלה."
                />
              </div>
              <div className="mt-12 max-w-4xl mx-auto bg-teal-500/5 border border-teal-500/20 rounded-xl p-6">
                <p className="text-center text-gray-300 text-lg leading-relaxed">
                  <span className="text-teal-400 font-bold">הגישה הבלתי שגרתית:</span> אני לא מאמין בפתרונות קונבנציונליים. אני בונה צוות שיחבר רפואה, הנדסת רקמות, AI, נוירוביולוגיה, וגישות טיפוליות אלטרנטיביות מוכחות - ויוצר מהן משהו שלא קיים היום.
                </p>
              </div>
            </div>
          </section>

          {/* About/Timeline Section */}
          <section className="py-20 bg-black/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">רקורד הוכח של הצלחות</h2>
              <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
                כל אתגר שהתמודדתי מולו לימד אותי שאין דבר בלתי אפשרי - רק בעיות שטרם נפתרו.
              </p>
              <div className="relative">
                <div className="absolute right-1/2 md:right-[5.5rem] h-full w-0.5 bg-teal-500/30"></div>
                <TimelineItem 
                  year="2005 - 2015"
                  title="מוביל סייבר במשרד ראש הממשלה"
                  description="ניהול והובלת מבצעים קריטיים בביטחון הלאומי. פיתחתי מתודולוגיות פריצת דרך בתקיפה והגנה סייברנטית שעדיין בשימוש היום. הוכחתי יכולת לפתור את הבלתי אפשרי."
                  icon={<ShieldIcon className="w-5 h-5" />}
                />
                <TimelineItem 
                  year="2010"
                  title="ממייסדי SpaceIL - החלום הישראלי לירח"
                  description="חלק ממעגל המייסדים של הפרויקט שהוביל את ישראל להיות אחת משבע המדינות שהגיעו לירח. הוכחה שחזונות גדולים ניתנים למימוש עם החשיבה הנכונה."
                  icon={<RocketIcon className="w-5 h-5" />}
                />
                 <TimelineItem 
                  year="2015 - היום"
                  title="מייסד ומנכ'ל, Halo Digital"
                  description="יצירת פלטפורמה טכנולוגית שמדגיטלת תהליכי ייצור מורכבים בתעשיות מתקדמות. שילוב AI, למידת מכונה וניתוח מערכות מורכבות - אותן שיטות שיוחלו על הפרקינסון."
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
                />
                <TimelineItem 
                  year="מאי 2025"
                  title="המשימה החשובה ביותר מתחילה"
                  description="אבחון עם פרקינסון הפך למנוע לפעולה. כעת, כל הניסיון, הידע והקשרים מופנים למטרה אחת: פריצת דרך רפואית שתציל מיליונים. זה כבר לא רק אישי - זו מלחמה גלובלית."
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                />
              </div>
            </div>
          </section>

          {/* Partners Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">השותפים לדרך</h2>
              <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 text-lg">
                חוקרים מובילים וארגונים מהשורה הראשונה שמצטרפים למהפכה הרפואית
              </p>
              
              {/* Researchers */}
              <div className="max-w-5xl mx-auto mb-16">
                <h3 className="text-xl font-bold text-teal-400 text-center mb-8">חוקרים מובילים</h3>
                <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gray-700 border-2 border-teal-500/30 mb-4 overflow-hidden">
                      <img 
                        src="https://www.weizmann.ac.il/photos/20132_L.jpg" 
                        alt="פרופסור איתן גרוס" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-white font-semibold text-center text-lg">פרופסור איתן גרוס</p>
                    <p className="text-gray-400 text-sm text-center">מכון ויצמן למדע</p>
                  </div>
                </div>
              </div>

              {/* Partner Companies */}
              <div className="max-w-4xl mx-auto">
                <h3 className="text-xl font-bold text-teal-400 text-center mb-8">שותפים אסטרטגיים</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
                  <div className="bg-white/95 p-8 rounded-xl shadow-lg flex items-center justify-center w-full max-w-sm h-40">
                    <img 
                      src="https://minova.lon1.cdn.digitaloceanspaces.com/assets/logos/minova_logo_colour.png" 
                      alt="Minova" 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  <div className="bg-white/95 p-8 rounded-xl shadow-lg flex items-center justify-center w-full max-w-sm h-40">
                    <img 
                      src="https://www.parkinson.org.il/wp-content/uploads/elementor/thumbs/LOGO_MEDIUM-obol182xzfk9osw74ov3msk3nujrlft6dj7d9e9ck0.d110a0.webp" 
                      alt="האיגוד הישראלי לפרקינסון" 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4 max-w-3xl text-center">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">מגייסים את המוחות המבריקים</h2>
                <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-6 mb-8">
                  <p className="text-lg md:text-xl text-gray-200 mb-4 leading-relaxed">
                    אני מחפש אנשים יוצאי דופן: <span className="text-teal-400 font-bold">מדענים, רופאים, ביולוגים, מהנדסי AI, חוקרים, ויזמים</span> שלא מפחדים לחשוב אחרת.
                  </p>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    זו לא עבודה רגילה. זו הזדמנות להיות חלק ממשהו גדול מאיתנו - <span className="text-white font-semibold">משימה שתשנה את פני הרפואה</span> ותציל מיליוני חיים. אם אתם מוכנים לעבוד קשה, לחשוב יצירתית, ולהיות חלק מצוות שמאמין שהבלתי אפשרי הוא רק נקודת התחלה - אני רוצה לשמוע מכם.
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 p-8 md:p-10 rounded-2xl shadow-2xl text-right">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">שם מלא</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">כתובת אימייל</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="expertise" className="block text-gray-300 font-semibold mb-2">תחום התמחות</label>
                  <input type="text" id="expertise" name="expertise" value={formData.expertise} onChange={handleInputChange} required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">איך תוכל/י לתרום למשימה?</label>
                  <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
                </div>
                <div className="text-center">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 py-3 bg-teal-500 text-white font-bold text-lg rounded-lg hover:bg-teal-600 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'שולח...' : 'שליחה'}
                  </button>
                </div>
                {submitMessage && (
                  <p className="mt-4 text-green-400">{submitMessage}</p>
                )}
              </form>
            </div>
          </section>
        </main>

        <footer className="border-t border-gray-800 py-6">
            <div className="container mx-auto text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} אחי קראוס. כל הזכויות שמורות.</p>
            </div>
        </footer>
      </div>
    </div>
  );
}

export default App;