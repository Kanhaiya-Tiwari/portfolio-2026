'use client';
import "../styles/globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Kanhaiya Tiwari — DevOps & Cloud Engineer</title>
        <meta name="description" content="DevOps & Cloud Engineer specializing in Kubernetes, AWS, Terraform, and CI/CD pipelines. Building scalable infrastructure for the modern web." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Kanhaiya Tiwari — DevOps & Cloud Engineer" />
        <meta property="og:description" content="Building scalable cloud infrastructure with Kubernetes, AWS, and Terraform." />
        <meta name="theme-color" content="#07CB6C" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="grid-bg" aria-hidden="true" />
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
