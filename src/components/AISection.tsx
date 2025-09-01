export function AISection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Technology Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the cutting-edge technologies shaping the future of artificial intelligence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Machine Learning & Deep Learning
            </h3>
            <p className="text-gray-600 mb-4">
              Discover how neural networks and machine learning algorithms are revolutionizing industries.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Neural Network Architectures</li>
              <li>• Training and Optimization</li>
              <li>• Real-world Applications</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Natural Language Processing
            </h3>
            <p className="text-gray-600 mb-4">
              Learn about the technologies behind language understanding and generation.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Large Language Models</li>
              <li>• Text Analysis</li>
              <li>• Conversational AI</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
