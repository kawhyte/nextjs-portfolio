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
            href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap"
          />

          {/* Load the font stylesheet for print initially, then for all media */}
          {/* Note: This onLoad technique can sometimes cause hydration issues. Consider Next.js font optimization if possible. */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap"
            media="print"
            onLoad={(e) => (e.currentTarget.media = 'all')} // Use React's synthetic event handler
          />

          {/* Fallback for users with JavaScript disabled */}
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap"
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
