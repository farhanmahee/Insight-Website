import React from 'react';

const variants = [
  { id: 'variant-modern', name: 'Modern', desc: 'Bold colors, large type' },
  { id: 'variant-minimal', name: 'Minimal', desc: 'Muted tones, airy spacing' },
  { id: 'variant-contrast', name: 'High Contrast', desc: 'Strong contrast, vibrant accents' },
  { id: 'variant-warm-playful', name: 'Warm Playful', desc: 'Saturated accents, rounded, bouncy micro-interactions' },
];

export default function DesignSwitcher({ variant, setVariant }) {
  function setReducedMotion(enabled) {
    const el = document.documentElement;
    if (enabled) el.classList.add('reduced-motion');
    else el.classList.remove('reduced-motion');
  }

  return (
    <div className="design-switcher fixed top-4 right-4 z-50 bg-black/40 backdrop-blur rounded-lg p-3 text-sm">
      <div className="flex items-center gap-2 mb-2">
        {variants.map(v => (
          <button
            key={v.id}
            onClick={() => setVariant(v.id)}
            className={`px-3 py-1 rounded-md border ${variant === v.id ? 'border-white' : 'border-transparent'} hover:opacity-90`}
            title={v.desc}
          >
            {v.name}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 text-xs">
        <label className="flex items-center gap-2">
          <input defaultChecked type="checkbox" onChange={(e) => setReducedMotion(!e.target.checked)} />
          Animations
        </label>
        <a href="#design-notes" className="ml-2 opacity-80 hover:underline">Refine</a>
      </div>
      <style jsx>{`
        .design-switcher input { width: 1rem; height: 1rem; }
      `}</style>
    </div>
  );
}
