import React, { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  path: string;
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage';
  serviceName?: string;
  faqJson?: FAQItem[];
}

const SEO: React.FC<SEOProps> = ({ title, description, path, pageType = 'WebPage', serviceName, faqJson }) => {
  const baseURL = 'https://zealousdigital.solutions';
  // Standardize path to ensure leading slash and handle root
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const fullURL = `${baseURL}${cleanPath === '/' ? '/' : cleanPath}`;
  const brandName = 'Zealous Digital Solutions';

  useEffect(() => {
    // 1. Set Document Title
    document.title = `${title} | ${brandName}`;

    // 2. Helper to upsert meta tags
    const upsertMeta = (name: string, content: string, isProperty = false) => {
      let el = document.querySelector(isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    upsertMeta('description', description);
    upsertMeta('og:title', title, true);
    upsertMeta('og:description', description, true);
    upsertMeta('og:url', fullURL, true);
    upsertMeta('og:type', 'website', true);
    upsertMeta('og:image', `${baseURL}/og.jpg`, true);
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', title);
    upsertMeta('twitter:description', description);

    // 3. Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullURL);

    // 4. JSON-LD @graph construction
    const knowsAbout = [
      "SEO", "technical SEO", "programmatic SEO", "entity optimization", "schema markup",
      "AEO/GEO", "LLM visibility", "revenue operations", "CRM automation", "conversion optimization"
    ];

    const organizationId = `${baseURL}/#organization`;
    const websiteId = `${baseURL}/#website`;
    const areaServed = {
      "@type": "Place",
      "name": "Vancouver, BC, Canada"
    };

    const graph: any[] = [
      {
        "@type": "Organization",
        "@id": organizationId,
        "name": brandName,
        "url": `${baseURL}/`,
        "logo": {
          "@type": "ImageObject",
          "@id": `${baseURL}/#logo`,
          "url": `${baseURL}/logo.webp`
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vancouver",
          "addressRegion": "BC",
          "addressCountry": "CA"
        },
        "areaServed": areaServed,
        "knowsAbout": knowsAbout
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        "url": `${baseURL}/`,
        "name": brandName,
        "publisher": { "@id": organizationId }
      },
      {
        "@type": pageType,
        "@id": `${fullURL}#webpage`,
        "url": fullURL,
        "name": title,
        "description": description,
        "isPartOf": { "@id": websiteId },
        "breadcrumb": { "@id": `${fullURL}#breadcrumb` },
        "inLanguage": "en-CA"
      }
    ];

    // BreadcrumbList
    const itemListElement = [{ "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseURL}/` }];
    if (cleanPath !== '/') {
      const parts = cleanPath.split('/').filter(Boolean);
      parts.forEach((part, idx) => {
        const itemURL = `${baseURL}/${parts.slice(0, idx + 1).join('/')}`;
        const name = part.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        itemListElement.push({
          "@type": "ListItem",
          "position": idx + 2,
          "name": name,
          "item": itemURL
        });
      });
    }
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${fullURL}#breadcrumb`,
      "itemListElement": itemListElement
    });

    // Service node
    if (serviceName) {
      graph.push({
        "@type": "Service",
        "serviceType": serviceName,
        "provider": { "@id": organizationId },
        "areaServed": areaServed,
        "description": description
      });
    }

    // FAQ node
    if (faqJson && faqJson.length > 0) {
      graph.push({
        "@type": "FAQPage",
        "mainEntity": faqJson.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": { "@type": "Answer", "text": item.answer }
        }))
      });
    }

    let ldJsonScript = document.getElementById('ld-json') as HTMLScriptElement;
    if (!ldJsonScript) {
      ldJsonScript = document.createElement('script');
      ldJsonScript.id = 'ld-json';
      ldJsonScript.type = 'application/ld+json';
      document.head.appendChild(ldJsonScript);
    }
    ldJsonScript.text = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });

  }, [title, description, path, pageType, serviceName, faqJson, cleanPath, fullURL]);

  return null;
};

export default SEO;