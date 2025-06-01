"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter, Facebook } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { getBlogPost } from "@/lib/blog-data"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const formatContent = (content: string) => {
    return content
      .split("\n")
      .map((paragraph, index) => {
        if (paragraph.trim() === "") return null

        if (paragraph.startsWith("## ")) {
          return (
            <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {paragraph.replace("## ", "")}
            </h2>
          )
        }

        if (paragraph.startsWith("### ")) {
          return (
            <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              {paragraph.replace("### ", "")}
            </h3>
          )
        }

        if (paragraph.startsWith("- ")) {
          return (
            <li key={index} className="text-gray-700 leading-relaxed ml-4">
              {paragraph.replace("- ", "")}
            </li>
          )
        }

        if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
          return (
            <p key={index} className="font-semibold text-gray-900 mt-4 mb-2">
              {paragraph.replace(/\*\*/g, "")}
            </p>
          )
        }

        if (paragraph.includes("📈")) {
          return (
            <div key={index} className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
              <p className="text-green-800 font-medium">{paragraph}</p>
            </div>
          )
        }

        if (paragraph.startsWith("*") && paragraph.endsWith("*")) {
          return (
            <p key={index} className="text-gray-600 italic text-center mt-8 border-t pt-6">
              {paragraph.replace(/\*/g, "")}
            </p>
          )
        }

        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {paragraph}
          </p>
        )
      })
      .filter(Boolean)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation />

      {/* Header Section */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.publishedAt}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center justify-between border-b pb-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">NH</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Nicole Hendah</p>
                    <p className="text-gray-600 text-sm">Digital Marketing Strategist</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image Section */}
      {post.image && (
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-4">{formatContent(post.content)}</div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
              </div>
            </div>

            {/* Author Bio */}
            <Card className="mt-12 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl">NH</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Nicole Hendah</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Digital marketing strategist with proven expertise in scaling brands across fintech, proptech, and
                      edtech in emerging markets. Featured speaker at Social Media Week Lagos and recognized by
                      TechPoint Africa for driving innovation in African fintech.
                    </p>
                    <SocialLinks />
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
