import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Sparkles,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { resumeData } from '../data/resumeData';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 1000);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-500/30 bg-cyber-500/10 text-xs font-mono text-cyber-400 mb-4">
            <span>09 // INQUIRIES &amp; CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Build Something Exceptional Together
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Open to software engineering internships, technical collaborations, and full-time opportunities.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-500 to-electric-violet mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-200 dark:border-white/10 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Direct Communication</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Feel free to reach out directly via email, phone, or LinkedIn. I usually respond within a few hours.
                </p>
              </div>

              {/* Contact Pills */}
              <div className="space-y-3">
                {/* Email */}
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyber-500/20 text-cyber-400 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${resumeData.personal.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-cyber-400 transition-colors"
                      >
                        {resumeData.personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(resumeData.personal.email, 'email')}
                    aria-label="Copy email"
                    className="p-2 text-slate-400 hover:text-cyber-400 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                        Phone Number
                      </div>
                      <a
                        href={`tel:${resumeData.personal.phone}`}
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-400 transition-colors"
                      >
                        {resumeData.personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(resumeData.personal.phone, 'phone')}
                    aria-label="Copy phone"
                    className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-electric-violet/20 text-purple-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                      Location
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {resumeData.personal.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-slate-200 dark:border-white/5">
                <div className="text-xs font-mono uppercase text-slate-400 mb-3">
                  Professional Profiles
                </div>
                <div className="flex gap-3">
                  <a
                    href={resumeData.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    id="contact-github-btn"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass-card border border-slate-200 dark:border-white/10 hover:border-cyber-500/50 hover:text-cyber-400 text-xs font-mono transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={resumeData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    id="contact-linkedin-btn"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass-card border border-slate-200 dark:border-white/10 hover:border-cyber-500/50 hover:text-cyber-400 text-xs font-mono transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-200 dark:border-white/10 text-left">
              <div className="mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyber-400" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
              </div>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-2"
                >
                  <Sparkles className="w-8 h-8 mx-auto text-emerald-400 animate-bounce" />
                  <h4 className="text-lg font-bold">Message Dispatched!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out! I will review your note and get back to you promptly at your email.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl text-sm glass-card border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-cyber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@example.com"
                        className="w-full px-4 py-2.5 rounded-xl text-sm glass-card border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-cyber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Subject / Role
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Software Engineering Internship / Discussion"
                      className="w-full px-4 py-2.5 rounded-xl text-sm glass-card border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-cyber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hello Spoorti, I reviewed your portfolio and would like to discuss an opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl text-sm glass-card border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-cyber-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={status === 'submitting'}
                    className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-cyber-500 to-electric-violet hover:from-cyber-400 hover:to-electric-purple shadow-glow-cyan transition-all flex items-center justify-center gap-2 transform active:scale-[0.99]"
                  >
                    {status === 'submitting' ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
