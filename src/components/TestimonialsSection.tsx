export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Readers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied readers who trust AI Insights for their AI knowledge.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              "AI Insights has been my go-to resource for understanding complex AI concepts. The articles are well-written and easy to follow."
            </p>
            <div className="font-semibold text-gray-900">- Sarah Chen</div>
            <div className="text-sm text-gray-500">AI Researcher</div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              "The practical tutorials and real-world examples make learning AI accessible to everyone, regardless of technical background."
            </p>
            <div className="font-semibold text-gray-900">- Michael Rodriguez</div>
            <div className="text-sm text-gray-500">Software Engineer</div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              "I appreciate the balanced approach to AI topics, covering both technical details and ethical considerations."
            </p>
            <div className="font-semibold text-gray-900">- Dr. Emily Watson</div>
            <div className="text-sm text-gray-500">AI Ethics Professor</div>
          </div>
        </div>
      </div>
    </section>
  );
}
