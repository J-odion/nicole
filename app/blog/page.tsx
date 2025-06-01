"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { getAllBlogPosts } from "@/lib/blog-data"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = getAllBlogPosts()

  const getCategoryColor = (category: string) => {
    const colors = {
      PropTech: "from-purple-100 to-pink-100",
      FinTech: "from-green-100 to-blue-100",
      Conference: "from-orange-100 to-red-100",
      EdTech: "from-rose-100 to-pink-100",
    }
    return colors[category as keyof typeof colors] || "from-gray-100 to-gray-200"
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      PropTech: "RE",
      FinTech: "FT",
      Conference: "SMW",
      EdTech: "ALX",
    }
    return icons[category as keyof typeof icons] || "BL"
  }

  const getCategoryIconColor = (category: string) => {
    const colors = {
      PropTech: "bg-purple-600",
      FinTech: "bg-green-600",
      Conference: "bg-orange-600",
      EdTech: "bg-rose-600",
    }
    return colors[category as keyof typeof colors] || "bg-gray-600"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation />

      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Blog</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights from my experience in digital marketing, fintech, proptech, and edtech across emerging markets.
              Real stories, proven strategies, and lessons learned from scaling brands in Africa's dynamic tech
              ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <Link href={`/blog/${post.slug}`}>
                    <div
                      className={`aspect-video bg-gradient-to-br ${getCategoryColor(
                        post.category,
                      )} rounded-t-lg flex items-center justify-center`}
                    >
                      <div className="text-center p-4">
                        <div
                          className={`w-16 h-16 ${getCategoryIconColor(
                            post.category,
                          )} rounded-full flex items-center justify-center mx-auto mb-2`}
                        >
                          <span className="text-white font-bold text-xl">{getCategoryIcon(post.category)}</span>
                        </div>
                        <span
                          className={`${getCategoryIconColor(post.category).replace("bg-", "text-")} font-semibold`}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-sm text-gray-500">{post.publishedAt}</span>
                      </div>
                      <CardTitle className="group-hover:text-purple-600 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <Button variant="ghost" size="sm">
                          Read More <ExternalLink className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
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
