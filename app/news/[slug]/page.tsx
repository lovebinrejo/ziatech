import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { newsPosts } from "@/lib/data/news";
import { formatDate } from "@/lib/utils";
import { CTASection } from "@/components/home/CTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Convert simple markdown-like content to paragraphs
  const paragraphs = post.content.trim().split(/\n\n+/);

  return (
    <>
      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <Button asChild variant="ghost" size="sm" className="mb-8 -ml-2">
            <Link href="/news">
              <ArrowLeft className="w-4 h-4" />
              All News
            </Link>
          </Button>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="teal">{post.category}</Badge>
            <span className="text-sm text-gray-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="text-sm text-gray-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
            <span className="text-sm text-gray-400 flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 border-l-4 border-teal-500 pl-4 mb-8 italic">
            {post.excerpt}
          </p>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {paragraphs.map((para, i) => {
              if (para.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">
                    {para.replace("## ", "")}
                  </h2>
                );
              }
              if (para.startsWith("- ")) {
                const items = para.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 mb-4">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^- \*\*(.+?)\*\*:/, (_, t) => `${t}:`).replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {para.replace(/\*\*(.+?)\*\*/g, "$1")}
                </p>
              );
            })}
          </div>

          {/* Back to news */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Button asChild variant="outline">
              <Link href="/news">
                <ArrowLeft className="w-4 h-4" />
                Back to All News
              </Link>
            </Button>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
