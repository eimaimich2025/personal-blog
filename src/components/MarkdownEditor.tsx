'use client';

import { useState, useEffect } from 'react';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function MarkdownEditor({ 
  value, 
  onChange, 
  placeholder = "Write your post content in Markdown...",
  className = ""
}: MarkdownEditorProps) {
  const [isPreview, setIsPreview] = useState(false);
  const [previewContent, setPreviewContent] = useState('');

  // Simple markdown to HTML converter
  const markdownToHtml = (markdown: string) => {
    return markdown
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold text-gray-900 mb-3 mt-6">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold text-gray-900 mb-4 mt-8">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold text-gray-900 mb-4 mt-8">$1</h1>')
      // Bold
      .replace(/\*\*(.*)\*\*/gim, '<strong class="font-semibold text-gray-900">$1</strong>')
      // Italic
      .replace(/\*(.*)\*/gim, '<em class="italic">$1</em>')
      // Code blocks
      .replace(/```([\s\S]*?)```/gim, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6"><code class="text-sm font-mono">$1</code></pre>')
      // Inline code
      .replace(/`([^`]*)`/gim, '<code class="bg-gray-100 text-pink-600 px-2 py-1 rounded text-sm font-mono">$1</code>')
      // Links
      .replace(/\[([^\]]*)\]\(([^\)]*)\)/gim, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline">$1</a>')
      // Line breaks
      .replace(/\n/gim, '<br>')
      // Lists
      .replace(/^\* (.*$)/gim, '<li class="ml-4 list-disc">$1</li>')
      .replace(/^- (.*$)/gim, '<li class="ml-4 list-disc">$1</li>')
      .replace(/^\d+\. (.*$)/gim, '<li class="ml-4 list-decimal">$1</li>');
  };

  useEffect(() => {
    if (isPreview) {
      setPreviewContent(markdownToHtml(value));
    }
  }, [value, isPreview]);

  return (
    <div className={`border border-gray-300 rounded-lg overflow-hidden ${className}`}>
      {/* Toolbar */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setIsPreview(false)}
            className={`px-3 py-1 text-sm rounded ${
              !isPreview 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Write
          </button>
          <button
            type="button"
            onClick={() => setIsPreview(true)}
            className={`px-3 py-1 text-sm rounded ${
              isPreview 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Preview
          </button>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>{value.length} characters</span>
          <span>•</span>
          <span>{value.split('\n').length} lines</span>
        </div>
      </div>

      {/* Editor/Preview */}
      <div className="relative">
        {!isPreview ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full h-96 px-4 py-3 border-0 focus:ring-0 focus:outline-none font-mono text-sm resize-none"
            style={{ minHeight: '400px' }}
          />
        ) : (
          <div 
            className="w-full h-96 px-4 py-3 prose prose-sm max-w-none overflow-y-auto"
            style={{ minHeight: '400px' }}
            dangerouslySetInnerHTML={{ __html: previewContent }}
          />
        )}
      </div>

      {/* Markdown Help */}
      {!isPreview && (
        <div className="bg-gray-50 border-t border-gray-200 px-4 py-2">
          <details className="text-xs text-gray-600">
            <summary className="cursor-pointer hover:text-gray-900">Markdown Help</summary>
            <div className="mt-2 grid grid-cols-2 gap-4 text-xs">
              <div>
                <strong>Headers:</strong><br />
                # H1<br />
                ## H2<br />
                ### H3
              </div>
              <div>
                <strong>Text:</strong><br />
                **bold**<br />
                *italic*<br />
                `code`
              </div>
              <div>
                <strong>Lists:</strong><br />
                - Item 1<br />
                - Item 2<br />
                1. Numbered
              </div>
              <div>
                <strong>Links:</strong><br />
                [text](url)<br />
                ```code block```
              </div>
            </div>
          </details>
        </div>
      )}
    </div>
  );
}
