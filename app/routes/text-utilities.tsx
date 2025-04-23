export default function TextUtilities() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold mb-6">Text Utilities Demo</h1>

      {/* Font Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Font Sizes</h2>
        <div className="space-y-2">
          <p className="text-xs">Extra Small (16px) - text-xs</p>
          <p className="text-sm">Small (20px) - text-sm</p>
          <p className="text-base">Base (20px) - text-base</p>
          <p className="text-lg">Large (24px) - text-lg</p>
          <p className="text-xl">Extra Large (20px) - text-xl</p>
          <p className="text-2xl">2X Large (20px) - text-2xl</p>
          <p className="text-3xl">3X Large (60px) - text-3xl</p>
          <p className="text-4xl">4X Large (48px) - text-4xl</p>
        </div>
      </section>

      {/* Font Weights */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Font Weights</h2>
        <div className="space-y-2">
          <p className="text-lg font-light">Light (300) - font-light</p>
          <p className="text-lg font-normal">Normal (400) - font-normal</p>
          <p className="text-lg font-medium">Medium (500) - font-medium</p>
          <p className="text-lg font-semibold">
            Semi Bold (600) - font-semibold
          </p>
          <p className="text-lg font-bold">Bold (700) - font-bold</p>
        </div>
      </section>

      {/* Font Families */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Font Families</h2>
        <div className="space-y-2">
          <p className="text-lg font-sans">Sans (Poppins) - font-sans</p>
          <p className="text-lg font-sans">Mono (JetBrains Mono) - font-mono</p>
        </div>
      </section>

      {/* Text Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Text Colors</h2>
        <div className="space-y-2">
          <p className="text-lg text-black">Black - text-black</p>
          <p className="text-lg text-black-40">Black 40% - text-black-40</p>
          <p className="text-lg text-white bg-neutral-900 p-2">
            White - text-white
          </p>
          <p className="text-lg text-white-60 bg-neutral-900 p-2">
            White 60% - text-white-60
          </p>
          <p className="text-lg text-neutral-900">
            Neutral 900 - text-neutral-900
          </p>
          <p className="text-lg text-neutral-800">
            Neutral 800 - text-neutral-800
          </p>
          <p className="text-lg text-neutral-700">
            Neutral 700 - text-neutral-700
          </p>
          <p className="text-lg text-neutral-500">
            Neutral 500 - text-neutral-500
          </p>
          <p className="text-lg text-neutral-400">
            Neutral 400 - text-neutral-400
          </p>
          <p className="text-lg text-neutral-300">
            Neutral 300 - text-neutral-300
          </p>
          <p className="text-lg text-primary-500">
            Primary 500 - text-primary-500
          </p>
          <p className="text-lg text-primary-600">
            Primary 600 - text-primary-600
          </p>
          <p className="text-lg text-primary-200">
            Primary 200 - text-primary-200
          </p>
          <p className="text-lg text-primary-900">
            Primary 900 - text-primary-900
          </p>
          <p className="text-lg text-primary-100">
            Primary 100 - text-primary-100
          </p>
          <p className="text-lg text-primary-50">
            Primary 50 - text-primary-50
          </p>
          <p className="text-lg text-primary-10">
            Primary 10 - text-primary-10
          </p>
          <p className="text-lg text-primary-800">
            Primary 800 - text-primary-800
          </p>
        </div>
      </section>

      {/* Combinations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Combinations</h2>
        <div className="space-y-2">
          <p className="text-3xl font-bold text-primary-500">
            Bold Primary Large
          </p>
          <p className="text-xl font-medium text-neutral-700">
            Medium Neutral Extra Large
          </p>
          <p className="text-lg font-light text-neutral-500">
            Light Neutral Large
          </p>
          <p className="text-2xl font-semibold text-primary-900">
            Semi Bold Primary 2X Large
          </p>
          <p className="text-base font-normal text-neutral-900">
            Normal Neutral Base
          </p>
        </div>
      </section>
    </div>
  );
}
