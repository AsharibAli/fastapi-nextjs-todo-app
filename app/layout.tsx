import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    template: "%s | Todo Application",
    default: "Todo Application",
  },
  description: "Full-stack Todo-App Build with Nextjs and latest tech-stack.",
  metadataBase: new URL("https://nextjs-dashboard-delta-kohl.vercel.app"),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
