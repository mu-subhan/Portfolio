'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  FiSend, FiCheckCircle 
} from 'react-icons/fi';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'consultation'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with your actual API call)
    setTimeout(() => {
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '', projectType: 'consultation' });
      setTimeout(() => setIsSuccess(false), 4000);
      setIsSubmitting(false);
    }, 1500);
  };

  // const contactInfo = [
  //   {
  //     icon: <FiMail className="text-blue-600" />,
  //     label: 'Email',
  //     value: 'muhammadsubhan8934@gmail.com',
  //     link: 'mailto:muhammadsubhan8934@gmail.com',
  //     description: 'Best way to reach me',
  //     bgColor: 'bg-blue-50 border-blue-200'
  //   },
  //   {
  //     icon: <FiMapPin className="text-green-600" />,
  //     label: 'Location',
  //     value: 'Lahore, Pakistan',
  //     link: null,
  //     description: 'Available remotely worldwide',
  //     bgColor: 'bg-green-50 border-green-200'
  //   },
  //   {
  //     icon: <FiClock className="text-purple-600" />,
  //     label: 'Availability',
  //     value: 'Open to Opportunities',
  //     link: null,
  //     description: 'Flexible with time zones',
  //     bgColor: 'bg-purple-50 border-purple-200'
  //   },
  //   {
  //     icon: <FiCalendar className="text-orange-600" />,
  //     label: 'Response Time',
  //     value: 'Within 24 hours',
  //     link: null,
  //     description: 'Usually much faster',
  //     bgColor: 'bg-orange-50 border-orange-200'
  //   }
  // ];

  // const socialLinks = [
  //   {
  //     icon: <FiLinkedin />,
  //     url: 'https://www.linkedin.com/in/muhammad-subhan-321821231/',
  //     label: 'LinkedIn',
  //     color: 'hover:bg-blue-100 hover:text-blue-600'
  //   },
  //   {
  //     icon: <FiGithub />,
  //     url: 'https://github.com/mu-subhan',
  //     label: 'GitHub',
  //     color: 'hover:bg-gray-100 hover:text-gray-900'
  //   }
  // ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const}
    }
  };

return (
  <section
    id="contact"
    className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 relative"
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(45deg,transparent,white,transparent)] -z-10" />

    <div className="max-w-3xl mx-auto px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-sm font-medium">
            Let&apos;s Collaborate
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
        >
          Start Your{" "}
          <span className="relative mx-3">
            <span className="text-blue-600">Project</span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-200/60 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Ready to build something amazing together? Let&apos;s discuss your project
          requirements, technical challenges, or explore potential collaboration opportunities.
        </motion.p>
      </motion.div>

      {/* Centered Form Only */}
      <motion.div
        variants={itemVariants}
        className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-slate-200"
      >
        <div className="mb-8 text-center">
          <h4 className="text-xl font-bold text-slate-900 mb-2">Send me a message</h4>
          <p className="text-slate-600 text-sm">
            Fill out the form below and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-semibold text-slate-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-slate-50 hover:bg-white"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-semibold text-slate-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-slate-50 hover:bg-white"
                placeholder="Your Email"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-semibold text-slate-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-slate-50 hover:bg-white"
                placeholder="Project Discussion"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block mb-2 text-sm font-semibold text-slate-700">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-slate-50 hover:bg-white"
              >
                <option value="consultation">Technical Consultation</option>
                <option value="webapp">Web Application</option>
                <option value="fullstack">Full-Stack Development</option>
                <option value="frontend">Frontend Development</option>
                <option value="backend">Backend Development</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-semibold text-slate-700">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-slate-50 hover:bg-white resize-none"
              placeholder="Tell me about your project, requirements, timeline, and any specific technical challenges you're facing..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
              isSubmitting
                ? 'bg-blue-400 cursor-not-allowed'
                : isSuccess
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-slate-900 hover:bg-slate-800'
            }`}
          >
            {isSuccess ? (
              <>
                <FiCheckCircle className="text-xl" />
                Message Sent Successfully!
              </>
            ) : (
              <>
                <FiSend className={`text-lg ${isSubmitting ? 'animate-pulse' : ''}`} />
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </>
            )}
          </motion.button>

          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center p-4 bg-green-50 border border-green-200 rounded-lg"
            >
              <p className="text-green-800 text-sm">
                Thank you for reaching out! I&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  </section>
);

}