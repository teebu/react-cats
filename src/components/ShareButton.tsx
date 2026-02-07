import React, { useState } from 'react';
import '../styles/ShareButton.css';

interface ShareButtonProps {
  url: string;
  title: string;
  text?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url, title, text }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title,
      text: text || title,
      url,
    };

    // Try Web Share API first (mobile)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <button
      className="share-button"
      onClick={handleShare}
      aria-label="Share"
      title={copied ? 'Copied!' : 'Share'}
    >
      {copied ? '✓ Copied!' : '🔗 Share'}
    </button>
  );
};

export default ShareButton;
