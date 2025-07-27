import React, { useState } from 'react';
import {
    Hash,
    Wand2,
    Copy,
    RefreshCw,
    Heart,
    TrendingUp,
    Target,
    Zap,
    Lightbulb,
    Eye,
    Share2,
    BookOpen,
    Users,
    Clock,
    Star,
    ThumbsUp,
    Loader2,
    CheckCircle,
    Filter,
    Search
} from 'lucide-react';

const BlogTitles = () => {
    const [formData, setFormData] = useState({
        topic: '',
        audience: 'general',
        tone: 'engaging',
        category: 'general',
        keywords: '',
        includeNumbers: true,
        includeQuestions: true,
        includeEmotional: true
    });

    const [generatedTitles, setGeneratedTitles] = useState([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const audienceOptions = [
        { value: 'general', label: 'General Audience', icon: '🌍', desc: 'Broad appeal' },
        { value: 'beginners', label: 'Beginners', icon: '🌱', desc: 'Simple & accessible' },
        { value: 'experts', label: 'Experts', icon: '🎯', desc: 'Technical & detailed' },
        { value: 'entrepreneurs', label: 'Entrepreneurs', icon: '💼', desc: 'Business-focused' },
        { value: 'students', label: 'Students', icon: '🎓', desc: 'Educational content' },
        { value: 'professionals', label: 'Professionals', icon: '👔', desc: 'Industry-specific' }
    ];

    const toneOptions = [
        { value: 'engaging', label: 'Engaging', icon: '⚡', color: 'text-yellow-600' },
        { value: 'professional', label: 'Professional', icon: '💼', color: 'text-blue-600' },
        { value: 'casual', label: 'Casual', icon: '😊', color: 'text-green-600' },
        { value: 'urgent', label: 'Urgent', icon: '🚨', color: 'text-red-600' },
        { value: 'inspiring', label: 'Inspiring', icon: '🌟', color: 'text-purple-600' },
        { value: 'curious', label: 'Curious', icon: '🤔', color: 'text-indigo-600' }
    ];

    const categoryOptions = [
        { value: 'general', label: 'General', icon: '📝' },
        { value: 'technology', label: 'Technology', icon: '💻' },
        { value: 'business', label: 'Business', icon: '📊' },
        { value: 'lifestyle', label: 'Lifestyle', icon: '🌿' },
        { value: 'health', label: 'Health & Fitness', icon: '💪' },
        { value: 'finance', label: 'Finance', icon: '💰' },
        { value: 'education', label: 'Education', icon: '📚' },
        { value: 'travel', label: 'Travel', icon: '✈️' }
    ];

    const titleTypes = [
        { id: 'how-to', name: 'How-To', icon: BookOpen, color: 'bg-blue-100 text-blue-700' },
        { id: 'list', name: 'List', icon: Hash, color: 'bg-green-100 text-green-700' },
        { id: 'question', name: 'Question', icon: Target, color: 'bg-purple-100 text-purple-700' },
        { id: 'guide', name: 'Guide', icon: Users, color: 'bg-orange-100 text-orange-700' },
        { id: 'tips', name: 'Tips', icon: Lightbulb, color: 'bg-yellow-100 text-yellow-700' },
        { id: 'trending', name: 'Trending', icon: TrendingUp, color: 'bg-red-100 text-red-700' }
    ];

    const generateTitles = async () => {
        if (!formData.topic.trim()) {
            alert('Please enter a topic for your blog titles');
            return;
        }

        setIsGenerating(true);

        // Simulate API call with realistic delay
        setTimeout(() => {
            const sampleTitles = [
                {
                    id: 1,
                    title: `The Ultimate Guide to ${formData.topic}: Everything You Need to Know`,
                    type: 'guide',
                    engagement: 92,
                    readability: 85,
                    seo: 88
                },
                {
                    id: 2,
                    title: `10 Proven ${formData.topic} Strategies That Actually Work in 2024`,
                    type: 'list',
                    engagement: 89,
                    readability: 90,
                    seo: 85
                },
                {
                    id: 3,
                    title: `How to Master ${formData.topic} in 30 Days (Step-by-Step Guide)`,
                    type: 'how-to',
                    engagement: 87,
                    readability: 88,
                    seo: 90
                },
                {
                    id: 4,
                    title: `Why ${formData.topic} is Changing Everything: What Experts Won't Tell You`,
                    type: 'trending',
                    engagement: 94,
                    readability: 82,
                    seo: 87
                },
                {
                    id: 5,
                    title: `${formData.topic} Secrets: 7 Game-Changing Tips from Industry Leaders`,
                    type: 'tips',
                    engagement: 91,
                    readability: 86,
                    seo: 89
                },
                {
                    id: 6,
                    title: `Is ${formData.topic} Worth Your Time? An Honest Review`,
                    type: 'question',
                    engagement: 85,
                    readability: 92,
                    seo: 84
                },
                {
                    id: 7,
                    title: `The ${formData.topic} Revolution: Transform Your Life Today`,
                    type: 'trending',
                    engagement: 88,
                    readability: 84,
                    seo: 86
                },
                {
                    id: 8,
                    title: `From Zero to Hero: Your Complete ${formData.topic} Journey`,
                    type: 'guide',
                    engagement: 90,
                    readability: 89,
                    seo: 88
                },
                {
                    id: 9,
                    title: `5 ${formData.topic} Mistakes That Are Costing You Success`,
                    type: 'list',
                    engagement: 93,
                    readability: 87,
                    seo: 91
                },
                {
                    id: 10,
                    title: `What Nobody Tells You About ${formData.topic}: The Truth Revealed`,
                    type: 'question',
                    engagement: 86,
                    readability: 83,
                    seo: 85
                }
            ];

            setGeneratedTitles(sampleTitles);
            setIsGenerating(false);
        }, 2500);
    };

    const copyTitle = (title) => {
        navigator.clipboard.writeText(title);
        // You could add a toast notification here
    };

    const toggleFavorite = (titleId) => {
        setFavorites(prev =>
            prev.includes(titleId)
                ? prev.filter(id => id !== titleId)
                : [...prev, titleId]
        );
    };

    const getFilteredTitles = () => {
        let filtered = generatedTitles;

        if (selectedFilter !== 'all') {
            if (selectedFilter === 'favorites') {
                filtered = filtered.filter(title => favorites.includes(title.id));
            } else {
                filtered = filtered.filter(title => title.type === selectedFilter);
            }
        }

        if (searchTerm) {
            filtered = filtered.filter(title =>
                title.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        return filtered;
    };

    const getScoreColor = (score) => {
        if (score >= 90) return 'text-green-600';
        if (score >= 80) return 'text-yellow-600';
        return 'text-red-600';
    };

    const getTypeInfo = (type) => {
        return titleTypes.find(t => t.id === type) || titleTypes[0];
    };

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <Hash className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Blog Title Generator</h1>
                        <p className="text-gray-600">Create compelling, click-worthy titles that drive engagement</p>
                    </div>
                </div>

                {/* Configuration Form */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                        {/* Topic Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Blog Topic *
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., Digital Marketing, AI Tools, Productivity"
                                value={formData.topic}
                                onChange={(e) => setFormData(prev => ({ ...prev, topic: e.target.value }))}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Target Audience */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Target Audience
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {audienceOptions.map((audience) => (
                                    <button
                                        key={audience.value}
                                        onClick={() => setFormData(prev => ({ ...prev, audience: audience.value }))}
                                        className={`p-3 text-left rounded-lg border transition-colors ${formData.audience === audience.value
                                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-2 mb-1">
                                            <span>{audience.icon}</span>
                                            <span className="text-sm font-medium">{audience.label}</span>
                                        </div>
                                        <p className="text-xs text-gray-500">{audience.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Keywords */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Keywords (optional)
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., beginner, 2024, tips, guide"
                                value={formData.keywords}
                                onChange={(e) => setFormData(prev => ({ ...prev, keywords: e.target.value }))}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        {/* Writing Tone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Writing Tone
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {toneOptions.map((tone) => (
                                    <button
                                        key={tone.value}
                                        onClick={() => setFormData(prev => ({ ...prev, tone: tone.value }))}
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

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Category
                            </label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {categoryOptions.map((category) => (
                                    <option key={category.value} value={category.value}>
                                        {category.icon} {category.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Title Options */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Include Title Types
                            </label>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={formData.includeNumbers}
                                        onChange={(e) => setFormData(prev => ({ ...prev, includeNumbers: e.target.checked }))}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="text-sm">Number-based titles (e.g., "10 Ways to...")</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={formData.includeQuestions}
                                        onChange={(e) => setFormData(prev => ({ ...prev, includeQuestions: e.target.checked }))}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="text-sm">Question-based titles (e.g., "Why do...")</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={formData.includeEmotional}
                                        onChange={(e) => setFormData(prev => ({ ...prev, includeEmotional: e.target.checked }))}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="text-sm">Emotional triggers (e.g., "Secrets", "Ultimate")</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Generate Button */}
                <button
                    onClick={generateTitles}
                    disabled={isGenerating || !formData.topic.trim()}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2"
                >
                    {isGenerating ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Generating Titles...</span>
                        </>
                    ) : (
                        <>
                            <Wand2 className="w-4 h-4" />
                            <span>Generate Blog Titles</span>
                        </>
                    )}
                </button>
            </div>

            {/* Loading State */}
            {isGenerating && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Creating Engaging Titles</h3>
                    <p className="text-gray-600 mb-6">
                        Our AI is analyzing trends and crafting compelling titles for your topic...
                    </p>
                    <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                    </div>
                </div>
            )}

            {/* Results */}
            {generatedTitles.length > 0 && !isGenerating && (
                <div className="space-y-6">
                    {/* Results Header */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                <span className="font-medium text-gray-900">
                                    {getFilteredTitles().length} titles generated
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Search */}
                                <div className="relative">
                                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search titles..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                {/* Filter */}
                                <select
                                    value={selectedFilter}
                                    onChange={(e) => setSelectedFilter(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="all">All Types</option>
                                    <option value="favorites">Favorites ({favorites.length})</option>
                                    {titleTypes.map(type => (
                                        <option key={type.id} value={type.id}>{type.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Title Cards */}
                    <div className="grid grid-cols-1 gap-4">
                        {getFilteredTitles().map((titleData) => {
                            const typeInfo = getTypeInfo(titleData.type);
                            const IconComponent = typeInfo.icon;

                            return (
                                <div
                                    key={titleData.id}
                                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-2 mb-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeInfo.color}`}>
                                                    <IconComponent className="w-3 h-3 inline mr-1" />
                                                    {typeInfo.name}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-relaxed">
                                                {titleData.title}
                                            </h3>

                                            {/* Metrics */}
                                            <div className="flex items-center space-x-6 text-sm">
                                                <div className="flex items-center space-x-1">
                                                    <Eye className="w-4 h-4 text-gray-400" />
                                                    <span className="text-gray-600">Engagement:</span>
                                                    <span className={`font-medium ${getScoreColor(titleData.engagement)}`}>
                                                        {titleData.engagement}%
                                                    </span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <BookOpen className="w-4 h-4 text-gray-400" />
                                                    <span className="text-gray-600">Readability:</span>
                                                    <span className={`font-medium ${getScoreColor(titleData.readability)}`}>
                                                        {titleData.readability}%
                                                    </span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <TrendingUp className="w-4 h-4 text-gray-400" />
                                                    <span className="text-gray-600">SEO:</span>
                                                    <span className={`font-medium ${getScoreColor(titleData.seo)}`}>
                                                        {titleData.seo}%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => toggleFavorite(titleData.id)}
                                                className={`p-2 rounded-lg transition-colors ${favorites.includes(titleData.id)
                                                    ? 'text-red-500 bg-red-50 hover:bg-red-100'
                                                    : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                                                    }`}
                                            >
                                                <Heart className={`w-4 h-4 ${favorites.includes(titleData.id) ? 'fill-current' : ''}`} />
                                            </button>
                                            <button
                                                onClick={() => copyTitle(titleData.title)}
                                                className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                                            >
                                                <Copy className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {getFilteredTitles().length === 0 && (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                            <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No titles found</h3>
                            <p className="text-gray-600">
                                Try adjusting your search term or filter settings.
                            </p>
                        </div>
                    )}

                    {/* Generate More Button */}
                    <div className="text-center">
                        <button
                            onClick={generateTitles}
                            disabled={isGenerating}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2 mx-auto"
                        >
                            <RefreshCw className="w-4 h-4" />
                            <span>Generate More Titles</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Empty State */}
            {generatedTitles.length === 0 && !isGenerating && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Hash className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Generate</h3>
                    <p className="text-gray-600 mb-6">
                        Enter your blog topic and preferences to get started with AI-powered title generation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
                        <div className="flex items-center justify-center space-x-2">
                            <Zap className="w-4 h-4" />
                            <span>AI-Powered</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <Target className="w-4 h-4" />
                            <span>SEO-Optimized</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <TrendingUp className="w-4 h-4" />
                            <span>Engagement-Focused</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogTitles;