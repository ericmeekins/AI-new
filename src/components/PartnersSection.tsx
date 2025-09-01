export function PartnersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading organizations to bring you the most accurate and up-to-date AI insights.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            Our partnerships ensure that you receive information from the most reliable sources in the AI industry.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-gray-500">Partner 1</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-gray-500">Partner 2</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-gray-500">Partner 3</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-gray-500">Partner 4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
