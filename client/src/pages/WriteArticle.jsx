import React, { useState } from 'react';
import {
  FileText,
  Wand2,
  Copy,
  Download,
  Save,
  RefreshCw,
  Settings,
  BookOpen,
  Target,
  Clock,
  Users,
  Lightbulb,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

const WriteArticle = () => {
  const [formData, setFormData] = useState({
    topic: '',
    tone: 'professional',
    length: 'medium',
    audience: 'general',
    keywords: '',
    outline: '',
    language: 'english'
  });

  const [generatedArticle, setGeneratedArticle] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activeTab, setActiveTab] = useState('write');

  const toneOptions = [
    { value: 'professional', label: 'Professional', icon: '💼' },
    { value: 'casual', label: 'Casual', icon: '😊' },
    { value: 'formal', label: 'Formal', icon: '🎩' },
    { value: 'friendly', label: 'Friendly', icon: '👋' },
    { value: 'authoritative', label: 'Authoritative', icon: '📚' },
    { value: 'conversational', label: 'Conversational', icon: '💬' }
  ];

  const lengthOptions = [
    { value: 'short', label: 'Short (300-500 words)', duration: '~1 min' },
    { value: 'medium', label: 'Medium (500-1000 words)', duration: '~2 min' },
    { value: 'long', label: 'Long (1000-2000 words)', duration: '~3 min' },
    { value: 'very-long', label: 'Very Long (2000+ words)', duration: '~5 min' }
  ];

  const audienceOptions = [
    { value: 'general', label: 'General Public', icon: '🌍' },
    { value: 'beginners', label: 'Beginners', icon: '🌱' },
    { value: 'experts', label: 'Experts', icon: '🎯' },
    { value: 'students', label: 'Students', icon: '🎓' },
    { value: 'professionals', label: 'Professionals', icon: '💼' },
    { value: 'researchers', label: 'Researchers', icon: '🔬' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateArticle = async () => {
    if (!formData.topic.trim()) {
      alert('Please enter a topic for your article');
      return;
    }

    setIsGenerating(true);

    // Simulate API call
    setTimeout(() => {
      const sampleArticle = `# ${formData.topic}

## Introduction

In today's rapidly evolving digital landscape, understanding ${formData.topic.toLowerCase()} has become increasingly important. This comprehensive guide will explore the key aspects, benefits, and practical applications that you need to know.

## What is ${formData.topic}?

${formData.topic} represents a fundamental concept that impacts various aspects of our daily lives. By examining its core principles, we can better understand how to leverage its potential for maximum benefit.

## Key Benefits

1. **Enhanced Understanding**: Gain deeper insights into the subject matter
2. **Practical Applications**: Learn how to apply concepts in real-world scenarios  
3. **Strategic Advantages**: Develop competitive benefits through knowledge
4. **Future Preparedness**: Stay ahead of emerging trends and developments

## Best Practices

When working with ${formData.topic.toLowerCase()}, consider these essential practices:

- **Research Thoroughly**: Always start with comprehensive research
- **Plan Strategically**: Develop a clear roadmap for implementation
- **Monitor Progress**: Track results and adjust strategies accordingly
- **Stay Updated**: Keep abreast of latest developments and trends

## Common Challenges

While ${formData.topic.toLowerCase()} offers numerous benefits, there are several challenges to be aware of:

### Challenge 1: Complexity
The multifaceted nature of ${formData.topic.toLowerCase()} can be overwhelming for newcomers.

### Challenge 2: Implementation
Translating theoretical knowledge into practical application requires careful planning.

### Challenge 3: Maintenance
Ongoing attention and updates are necessary for sustained success.

## Future Outlook

The future of ${formData.topic.toLowerCase()} looks promising, with emerging technologies and methodologies continuing to expand possibilities. As we move forward, staying informed and adaptable will be crucial for success.

## Conclusion

${formData.topic} represents an important area of focus in today's world. By understanding its principles, benefits, and challenges, we can make informed decisions and achieve better outcomes. Remember to stay curious, keep learning, and apply these insights to your specific context.

---

*This article was generated based on your specifications: ${formData.tone} tone, targeting ${formData.audience} audience, with ${formData.length} length.*`;

      setGeneratedArticle(sampleArticle);
      setIsGenerating(false);
      setActiveTab('preview');
    }, 3000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedArticle);
    // You could add a toast notification here
  };

  const downloadArticle = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedArticle], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${formData.topic.replace(/\s+/g, '-').toLowerCase()}-article.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">AI Article Writer</h1>
            <p className="text-gray-600">Create engaging, high-quality articles with AI assistance</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('write')}
            className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-colors ${activeTab === 'write'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            <Wand2 className="w-4 h-4" />
            <span>Write</span>
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-colors ${activeTab === 'preview'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
              }`}
            disabled={!generatedArticle}
          >
            <BookOpen className="w-4 h-4" />
            <span>Preview</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Configuration Panel */}
        {activeTab === 'write' && (
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Article Configuration</h2>

              {/* Topic Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Article Topic *
                </label>
                <input
                  type="text"
                  placeholder="e.g., The Future of Artificial Intelligence"
                  value={formData.topic}
                  onChange={(e) => handleInputChange('topic', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Tone Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Writing Tone
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {toneOptions.map((tone) => (
                    <button
                      key={tone.value}
                      onClick={() => handleInputChange('tone', tone.value)}
                      className={`p-3 text-left rounded-lg border transition-colors ${formData.tone === tone.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span>{tone.icon}</span>
                        <span className="text-sm font-medium">{tone.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Length Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Article Length
                </label>
                <div className="space-y-2">
                  {lengthOptions.map((length) => (
                    <button
                      key={length.value}
                      onClick={() => handleInputChange('length', length.value)}
                      className={`w-full p-3 text-left rounded-lg border transition-colors ${formData.length === length.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{length.label}</span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {length.duration}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Audience
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {audienceOptions.map((audience) => (
                    <button
                      key={audience.value}
                      onClick={() => handleInputChange('audience', audience.value)}
                      className={`p-3 text-left rounded-lg border transition-colors ${formData.audience === audience.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span>{audience.icon}</span>
                        <span className="text-sm font-medium">{audience.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Advanced Options Toggle */}
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-4"
              >
                <Settings className="w-4 h-4" />
                <span>Advanced Options</span>
              </button>

              {/* Advanced Options */}
              {showAdvanced && (
                <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Keywords (comma-separated)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., AI, machine learning, technology"
                      value={formData.keywords}
                      onChange={(e) => handleInputChange('keywords', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Article Outline (optional)
                    </label>
                    <textarea
                      placeholder="Enter your article outline or key points..."
                      value={formData.outline}
                      onChange={(e) => handleInputChange('outline', e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* Generate Button */}
              <button
                onClick={generateArticle}
                disabled={isGenerating || !formData.topic.trim()}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Generating Article...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    <span>Generate Article</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Article Output */}
        <div className={`${activeTab === 'write' ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
          {activeTab === 'write' && !generatedArticle && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Create</h3>
              <p className="text-gray-600 mb-6">
                Configure your article settings and click "Generate Article" to get started.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
                <div className="flex items-center justify-center space-x-2">
                  <Target className="w-4 h-4" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Audience-Focused</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>SEO-Optimized</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'write' && isGenerating && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Generating Your Article</h3>
              <p className="text-gray-600 mb-6">
                Our AI is crafting a high-quality article based on your specifications...
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
              </div>
            </div>
          )}

          {(activeTab === 'preview' && generatedArticle) && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              {/* Article Actions */}
              <div className="border-b border-gray-200 p-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-900">Article Generated Successfully</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center space-x-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </button>
                  <button
                    onClick={downloadArticle}
                    className="flex items-center space-x-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('write')}
                    className="flex items-center space-x-2 px-3 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="prose max-w-none">
                  <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                    {generatedArticle}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WriteArticle;