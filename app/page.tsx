"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowDown,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  GraduationCap,
  BookOpen,
  Award,
  Users,
} from "lucide-react"
import { SocialLinks } from "@/components/social-links"
import { Navigation } from "@/components/navigation"
import { GraduationSection } from "@/components/graduation-section"
import Link from "next/link"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-orange-400/10"
        />

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1"
            >
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <GraduationCap className="w-16 h-16 text-purple-600" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6"
            >
              Nicole Hendah
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              Recent Graduate | Aspiring Professional | Passionate Learner
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </motion.div>

            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I am a digital marketing strategist with proven expertise in scaling brands across fintech, proptech,
                and edtech in emerging markets. My work has driven measurable growth for companies like YADAN Ventures,
                Kalabash, and ALX, with campaigns that have doubled customer bases and earned industry recognition.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From speaking at Social Media Week Lagos to 300+ attendees to being featured in TechPoint Africa's
                "Women Driving Innovation in African Fintech," I combine behavioral science, data analytics, and
                cultural insight to build trust and drive adoption in complex markets.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My approach centers on understanding the "generic user" - everyday people who need technology to work
                for them, not against them. Through this lens, I've helped transform skeptical audiences into loyal
                customers across Nigeria's dynamic tech ecosystem.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Industry Recognition</h4>
                  <p className="text-sm text-gray-600 mt-1">Featured speaker & award finalist</p>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <Users className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Growth Expert</h4>
                  <p className="text-sm text-gray-600 mt-1">100%+ customer base growth</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border-l-4 border-l-purple-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-purple-600" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Recent Graduate - University Degree</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Completed comprehensive academic program with focus on practical skills and theoretical knowledge.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-pink-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-pink-600" />
                    Core Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Digital Marketing</Badge>
                    <Badge variant="secondary">Data Analytics</Badge>
                    <Badge variant="secondary">Brand Strategy</Badge>
                    <Badge variant="secondary">Behavioral Targeting</Badge>
                    <Badge variant="secondary">Growth Hacking</Badge>
                    <Badge variant="secondary">Fintech</Badge>
                    <Badge variant="secondary">PropTech</Badge>
                    <Badge variant="secondary">EdTech</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Graduation Section */}
      <GraduationSection />

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Latest Articles</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Insights from my experience in digital marketing, fintech, proptech, and edtech across emerging markets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-t-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-xl">RE</span>
                    </div>
                    <span className="text-purple-600 font-semibold">Real Estate</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">PropTech</Badge>
                    <span className="text-sm text-gray-500">March 2024</span>
                  </div>
                  <CardTitle className="group-hover:text-purple-600 transition-colors line-clamp-2">
                    Redefining Real Estate Marketing: How Data-Driven Storytelling Helped YADAN Ventures Double Its
                    Customer Base
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    How a lean team, clear vision, and data-first approach helped grow our customer base by over 100% in
                    just six months in Nigeria's competitive real estate market.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">8 min read</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/redefining-real-estate-marketing-yadan-ventures`}>
                        Read More <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Article 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-t-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-xl">SP</span>
                    </div>
                    <span className="text-green-600 font-semibold">FinTech</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">FinTech</Badge>
                    <span className="text-sm text-gray-500">January 2024</span>
                  </div>
                  <CardTitle className="group-hover:text-purple-600 transition-colors line-clamp-2">
                    The Science Behind SplitPay: How Data-Driven Campaigns Are Driving Fintech Adoption in Nigeria
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    Launching and scaling a deferred payment solution that achieved 65% growth in sign-ups through
                    behavioral segmentation and psychology-driven campaigns.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">7 min read</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/science-behind-splitpay-fintech-adoption`}>
                        Read More <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Article 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 rounded-t-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-xl">SMW</span>
                    </div>
                    <span className="text-orange-600 font-semibold">Speaking</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">Conference</Badge>
                    <span className="text-sm text-gray-500">February 2020</span>
                  </div>
                  <CardTitle className="group-hover:text-purple-600 transition-colors line-clamp-2">
                    Why Data-Driven Marketing is the Backbone of Fintech Growth in Emerging Economies
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    Insights from my Social Media Week Lagos presentation to 300+ attendees on building trust through
                    data in Africa's fintech ecosystem.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">6 min read</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/data-driven-marketing-backbone-fintech-growth`}>
                        Read More <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Article 4 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 rounded-t-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-xl">YV</span>
                    </div>
                    <span className="text-purple-600 font-semibold">Brand Building</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">PropTech</Badge>
                    <span className="text-sm text-gray-500">December 2022</span>
                  </div>
                  <CardTitle className="group-hover:text-purple-600 transition-colors line-clamp-2">
                    Building a Proptech Brand from the Ground Up: How YADAN Ventures Doubled Its Customer Base
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    Strategic brand positioning and user-obsessed marketing execution that transformed an unknown
                    startup into a market-leading proptech brand.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">9 min read</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/building-proptech-brand-yadan-ventures`}>
                        Read More <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Article 5 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-teal-100 to-cyan-100 rounded-t-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-xl">KS</span>
                    </div>
                    <span className="text-teal-600 font-semibold">Case Study</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">FinTech</Badge>
                    <span className="text-sm text-gray-500">October 2020</span>
                  </div>
                  <CardTitle className="group-hover:text-purple-600 transition-colors line-clamp-2">
                    Driving Fintech Adoption in Emerging Markets: Lessons from the Kalabash SplitPay Campaign
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    How behavioral insight, agile testing, and localized messaging grew fintech adoption by 65% and
                    earned industry recognition.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">8 min read</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/driving-fintech-adoption-kalabash-splitpay`}>
                        Read More <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Article 6 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-rose-100 to-pink-100 rounded-t-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-xl">ALX</span>
                    </div>
                    <span className="text-rose-600 font-semibold">EdTech</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">EdTech</Badge>
                    <span className="text-sm text-gray-500">September 2023</span>
                  </div>
                  <CardTitle className="group-hover:text-purple-600 transition-colors line-clamp-2">
                    Scaling EdTech in Africa: How Strategic Branding Propelled ALX to the Forefront
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    Strategic branding initiatives that transformed ALX's market position, achieving 35% enrollment
                    growth and industry recognition as Africa's most innovative edtech company.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">6 min read</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/scaling-edtech-africa-alx-strategic-branding`}>
                        Read More <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">View All Articles</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm always open to new opportunities and interesting conversations. Feel free to reach out!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">nicholehendah@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-pink-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">+447399656211</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Location</h4>
                        <p className="text-gray-600">Available for opportunities</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>

                    <Button variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </Button>

                    <div className="pt-4">
                      <p className="text-sm text-gray-500 text-center mb-4">Connect with me</p>
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Nicole Hendah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
