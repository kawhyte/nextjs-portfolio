import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext, // Import context type for getInitialProps
  DocumentInitialProps // Import return type for getInitialProps
} from 'next/document';
import React from 'react'; // Import React for React.ReactNode (optional but good practice)

class MyDocument extends Document {
  // Type the context parameter and the Promise return value
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  // Optional: Type the return value of the render method
  render() {
    return (
      // The lang attribute helps screen readers and search engines
      <Html lang="en">
        <Head>
          {/* Link to the web app manifest file */}
          <link rel="manifest" href="/manifest.json" />

          {/* Preconnect to Google Fonts */}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous" // Use camelCase for crossOrigin in React
          />

          {/* Preload the font stylesheet */}
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
          />

          {/* Load the font stylesheet for print initially, then for all media */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
            media="print"
            onLoad={(e) => (e.currentTarget.media = 'all')}
          />

          {/* Fallback for users with JavaScript disabled */}
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
