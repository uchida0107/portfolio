"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"];
const works = [
  { id: 1, title: "Web Landing Page", desc: "企業向けランディングページ制作。レスポンシブ対応、アニメーション導入。" },
  { id: 2, title: "Portfolio Site", desc: "クリエイター向けポートフォリオサイト構築。モダンデザイン。" },
  { id: 3, title: "E-commerce Site", desc: "小規模ECサイト。カート機能と決済導入済み。" },
  { id: 4, title: "UI Design System", desc: "デザインシステム構築。再利用可能なコンポーネント多数。" },
];

export default function Home() {
  return (
    <main className="font-sans text-gray-800">

      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-gray-900">Rikuya</div>
          <nav className="flex gap-4 sm:gap-6 text-gray-700 font-medium">
            <a href="#about" className="hover:text-black transition">About</a>
            <a href="#works" className="hover:text-black transition">Works</a>
            <a href="#contact" className="hover:text-black transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-50 to-blue-200 -z-10"></div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight z-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Crafting Digital Experiences
        </motion.h1>

        <motion.p
          className="text-gray-700 text-base sm:text-lg md:text-xl mb-10 max-w-3xl z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Minimal, Modern & Professional Web Design. Creating interactive, responsive, and user-friendly websites.
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap justify-center z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Button className="bg-black text-white rounded-full px-6 py-3 hover:bg-white hover:text-black border border-black shadow-md transition-colors">
            <a href="#contact">Contact Me</a>
          </Button>
          <Button className="bg-gray-100 text-gray-900 rounded-full px-6 py-3 hover:bg-gray-900 hover:text-white transition-colors border border-gray-300 shadow-md">
            <a href="https://github.com/uchida0107" target="_blank">GitHub</a>
          </Button>
          <Button className="bg-indigo-100 text-indigo-800 rounded-full px-6 py-3 hover:bg-indigo-300 transition-colors border border-indigo-200 shadow-md">
            My Works
          </Button>
        </motion.div>

        {/* パララックス丸 */}
        <motion.div
          className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-blue-200 opacity-40 -z-10"
          initial={{ y: -50 }}
          whileInView={{ y: 50 }}
          viewport={{ once: false }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-48 h-48 rounded-full bg-blue-300 opacity-30 -z-10"
          initial={{ y: 50 }}
          whileInView={{ y: -50 }}
          viewport={{ once: false }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />
      </section>

      {/* About */}
      <section id="about" className="w-full bg-purple-50 py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto flex flex-col items-center space-y-12 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-purple-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>

          <motion.div className="space-y-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              フロントエンドエンジニアとして、モダンでミニマルなデザインを得意としています。
              高品質なUI、UXにこだわり、React / Next.js / TypeScript / Tailwind CSS を駆使して、ユーザーに最適な体験を提供します。
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              過去には企業のランディングページ、ポートフォリオサイト、ECサイト、デザインシステムなど幅広く制作経験があります。
              デザインとコードの両面で価値を提供することを目指しています。
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {skills.map(skill => (
              <span key={skill} className="border px-4 py-2 rounded-full text-sm sm:text-base text-gray-800 hover:scale-105 transform transition-transform bg-gray-100 shadow-sm">{skill}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WORKS セクション */}
<section id="works" className="w-full bg-gradient-to-b from-purple-50 to-pink-50 py-32 px-6 md:px-12">
  <div className="max-w-6xl mx-auto text-center space-y-12">
    <h2 className="text-4xl font-bold text-purple-700 mb-8">Works</h2>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      これまで手がけたデザインや制作物の一部を紹介します。ビジュアルだけでなく、体験としての心地よさを意識しています。
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {[
        {
          title: "Portfolio Site Design",
          desc: "淡い配色と柔らかなアニメーションで印象的なポートフォリオサイト。",
          icon: "🎨",
          color: "from-pink-200 to-purple-200",
        },
        {
          title: "Brand Visual Identity",
          desc: "ロゴとカラーパレット設計でブランドの個性を明確化。",
          icon: "✨",
          color: "from-purple-200 to-blue-200",
        },
        {
          title: "UI/UX Prototype",
          desc: "ユーザー体験を最優先にしたFigmaプロトタイプ。",
          icon: "🧩",
          color: "from-blue-200 to-green-200",
        },
        {
          title: "Landing Page Concept",
          desc: "見やすく、伝わる。スクロールに合わせた動きのある構成。",
          icon: "🚀",
          color: "from-yellow-200 to-pink-200",
        },
        {
          title: "Illustration Work",
          desc: "優しい線と淡い色彩で温かみのあるイラスト表現。",
          icon: "🌸",
          color: "from-pink-100 to-yellow-100",
        },
        {
          title: "Music & Visual Fusion",
          desc: "サウンドとビジュアルの調和をテーマにした実験的作品。",
          icon: "🎧",
          color: "from-green-100 to-blue-100",
        },
      ].map((work, i) => (
        <motion.div
          key={i}
          className={`p-8 rounded-2xl shadow-md bg-gradient-to-br ${work.color} transition-transform transform hover:-translate-y-2 hover:shadow-xl`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="text-5xl mb-4">{work.icon}</div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">{work.title}</h3>
          <p className="text-gray-600 leading-relaxed">{work.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Contact */}
      <section id="contact" className="w-full bg-pink-50 py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start gap-12">
          {/* 左の文章 */}
          <motion.div className="flex-1 space-y-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-pink-600">Contact</h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              お仕事のご依頼やご相談はこちらからお気軽にご連絡ください。  
              ご希望の内容をできるだけ詳しくご記入いただけるとスムーズに対応できます。
            </p>
          </motion.div>

          {/* 右のフォーム */}
          <motion.form
            className="flex flex-col gap-4 flex-1 w-full max-w-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col text-left w-full">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your Name" className="rounded-lg border-gray-300 shadow-sm" />
            </div>
            <div className="flex flex-col text-left w-full">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="your@mail.com" className="rounded-lg border-gray-300 shadow-sm" />
            </div>
            <div className="flex flex-col text-left w-full">
              <Label htmlFor="message">Message</Label>
              <Input id="message" placeholder="" className="rounded-lg border-gray-300 shadow-sm h-40" />
            </div>
            <Button type="submit" className="bg-pink-600 text-white rounded-full px-4 py-2 hover:bg-pink-800 transition-colors self-start text-sm shadow-md">
              Send Message
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-gray-500 text-sm text-center py-8 border-t border-gray-200">
        © 2025 Rikuya
 Portfol href="#" className="hover:text-gray-900 transition">Twitter</a> | <a href="#" className="hover:text-gray-900 transition">LinkedIn</a>
      </footer>
    </main>
  );
}
