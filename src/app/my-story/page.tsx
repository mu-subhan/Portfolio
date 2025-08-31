import React from 'react';
import { FaCode, FaUsers, FaTrophy, FaHeart, FaMicrochip } from 'react-icons/fa';


const MyStory = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">My Story</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            From curiosity to impact: A journey through software engineering
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* About Me Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <FaCode className="text-blue-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
<p className="text-lg text-gray-700 leading-relaxed mb-4">
  I am <span className="font-semibold text-slate-900">Muhammad Subhan</span>, a passionate 
  <strong> Software Engineer </strong> specializing in the 
  <strong> MERN Stack and modern frontend frameworks </strong>.  
  I thrive on solving problems, building scalable applications, 
  and exploring how technology can create real-world impact.
</p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I chose this field because of my curiosity about how software really works what goes on behind the screen, how systems are built, and how they impact people&apos;s daily lives. From the beginning, T&apos;ve always been eager to learn new technologies and explore their potential to solve real-world problems.
            </p>
          </div>
        </section>

        {/* Early Inspiration */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <FaHeart className="text-blue-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-slate-900">Early Inspiration</h2>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
            <blockquote className="text-lg italic text-slate-800">
              Be the kind of Software Engineer who creates change and builds something useful for people.
            </blockquote>
            <p className="text-sm text-gray-600 mt-2"> A teacher who changed my perspective</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            That single sentence inspired me to look at programming not just as a subject, but as a path to impact lives.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I began with C programming during my I.C.S. studies. It was my first experience with logic and coding, and it built my foundation. Later, at university, I was mentored by seniors who motivated me to start learning Web Development.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At first, I struggled with consistency  things felt difficult to understand and problems seemed overwhelming. But with guidance, I learned the value of daily practice in small steps. Slowly, I gained confidence by creating my first static pages using HTML and CSS, which gave me a sense of achievement and made me even more curious about the field.
          </p>
        </section>

        {/* Growing as a Developer */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <FaMicrochip className="text-blue-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-slate-900">Growing as a Developer</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              After HTML and CSS, I moved to JavaScript, which challenged me with deeper questions: <em className='font-semibold'>Why do we need it? How does it really work?</em> I spent time experimenting, joined a university bootcamp, and started building projects. These projects solidified my JavaScript skills, and soon, I transitioned into React.js for building modern, dynamic applications.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Later, I expanded into backend technologies like <strong>Node.js, Express.js, and MongoDB,</strong>  allowing me to become a MERN Stack developer. During this phase, I also got the chance to explore AI and Machine Learning during a <strong>6-week fellowship</strong>.
            </p>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center mb-3">
                <FaTrophy className="text-green-600 mr-2" size={20} />
                <span className="font-semibold text-green-800">Achievement Highlight</span>
              </div>
              <p className="text-gray-700">
                With my teammates, I participated in a hackathon where we built a React-based library and won <strong>3rd place</strong>. I contributed as a Frontend Developer, while also gaining exposure to Next.js and backend tasks.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <FaUsers className="text-blue-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-slate-900">Professional Experience</h2>
          </div>
          <div className="space-y-6">
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              {/* Wanile Technology */}
              <div className="relative pl-12 pb-8">
                <div className="absolute left-2 w-4 h-4 bg-blue-600 rounded-full -translate-x-2"></div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">MERN Stack Intern</h3>
                  <p className="text-blue-600 font-medium mb-3">Wanile Technology • 3 months</p>
                 <p className="text-gray-700">
  At <strong>Wanile Technology</strong>, I developed scalable modules 
  for a Hospital Management System using <strong>React.js and Next.js</strong>.  
  This improved UI responsiveness and enhanced user workflows.
</p>
                </div>
              </div>

              {/* DigiU */}
              <div className="relative pl-12">
                <div className="absolute left-2 w-4 h-4 bg-blue-600 rounded-full -translate-x-2"></div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Junior Software Engineer</h3>
                  <p className="text-blue-600 font-medium mb-3">DigiU • Current</p>
                 <p className="text-gray-700">
  At <strong>DigiU</strong>, I worked on <strong>Digi Collect</strong> 
  handling API integrations, optimizing cron jobs, and fixing 
  production-level bugs. Gained strong exposure to 
  <strong> Python and backend systems </strong> in a 
  high impact environment.
</p>
                  <p className="text-gray-600 text-sm italic">
                    This role taught me how to manage production-level code and ensure reliability at scale.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Community Impact:</strong> I am also a Core Team Member at Dev Weekend, where I mentor juniors, share my learnings, and help guide aspiring developers  a way of giving back the same mentorship that once guided me.
              </p>
            </div>
          </div>
        </section>

        {/* Skills & Strengths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Skills & Strengths</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Frontend Development</h3>
              <p className="text-gray-700">React.js, Next.js, Tailwind CSS, UI/UX, Framer Motion</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Backend Development</h3>
              <p className="text-gray-700">Node.js, Express.js, Python</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Databases</h3>
              <p className="text-gray-700">MongoDB, MySQL, PostgreSQL, SQLite, MongoDB</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Other Strengths</h3>
              <p className="text-gray-700">Problem-solving, consistency, teamwork, mentoring</p>
            </div>
          </div>
        </section>

        {/* Personal Side */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Personal Side</h2>
          <div className="bg-green-50 p-8 rounded-lg border border-green-200">
            <p className="text-gray-700 leading-relaxed">
              Beyond coding, I&apos;m passionate about cricket. Every Sunday morning, I play matches with my cousins. Cricket helps me recharge my energy, clear my mind, and regain focus. Whenever I feel tired or low on motivation, a quick game refreshes me and enables me to return to my work with a fresh mindset and higher productivity.
            </p>
          </div>
        </section>

        {/* Future Goals */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <FaTrophy className="text-blue-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-slate-900">Future Goals</h2>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-lg">
            <p className="text-lg leading-relaxed">
              My long-term goal is not just to become a developer restricted to one stack, but a <span className="text-blue-400 font-semibold">well-rounded Software Engineer</span> who adapts to new technologies, contributes to impactful projects, and helps others grow along the way. I&apos;m passionate about mentorship and want to continue supporting junior developers, just as mentors supported me at the start of my journey.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default MyStory;