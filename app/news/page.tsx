import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { newsPosts } from "@/lib/data/news";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Latest news for e-commerce, IT consultancy, technical installations, and computer equipment solutions from ZIA Tech Solutions.",
};

export default function NewsPage() {
  const [featured, ...rest] = newsPosts;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-900 text-white py-24 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="teal" className="mb-4 text-xs px-3 py-1">Latest Updates</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">News &amp; Industry Updates</h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Stay up to date with the latest trends in e-commerce, IT consultancy, technical installations, and business technology services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <div className="mb-14">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow md:flex">
              {/* Placeholder image */}
              <div className="bg-gradient-to-br from-primary-100 to-teal-100 dark:from-primary-950 dark:to-teal-950 md:w-2/5 flex items-center justify-center min-h-48 md:min-h-0">
                <div className="text-center p-8">
                  <div className="text-6xl mb-2">🚛</div>
                  <span className="text-xs text-primary-500 font-medium uppercase tracking-widest">Featured Story</span>
                </div>
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="teal">{featured.category}</Badge>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featured.readingTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {featured.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                  {featured.excerpt}
                </p>
                <Button asChild variant="teal" className="self-start">
                  <Link href={`/news/${featured.slug}`}>
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>

          {/* Other posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow flex flex-col">
                {/* Placeholder image */}
                <div className="bg-gradient-to-br from-gray-100 to-primary-50 dark:from-gray-800 dark:to-primary-950 h-44 flex items-center justify-center rounded-t-xl">
                  <div className="text-4xl">{post.category === "Product News" ? "⚙️" : "📰"}</div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">
                      <Tag className="w-2.5 h-2.5 mr-1" />
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
                  </div>
                  <CardTitle className="text-lg leading-snug">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/news/${post.slug}`}>
                        Read more
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
