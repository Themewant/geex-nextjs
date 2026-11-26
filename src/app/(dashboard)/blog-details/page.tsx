import { permanentRedirect } from "next/navigation";
import { blogPosts, blogPostPath } from "@/data/blog-posts";

export default function LegacyBlogDetailsPage() {
  permanentRedirect(blogPostPath(blogPosts[0].slug));
}
