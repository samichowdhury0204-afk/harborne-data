import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X } from 'lucide-react';
import { useTheme, VARIANTS, VARIANT_CONFIG } from '@/src/ThemeContext';

export default function VariantSwitcher() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { variant, setVariant } = useTheme();

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-muted-sage hover:bg-muted-sage/90 text-white shadow-lg flex items-center justify-center transition-all duration-200"
        aria-label="Switch homepage variant"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Palette className="w-5 h-5" />}
      </motion.button>

      {/* Variant Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-white border border-cinnamon-slate/10 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 bg-cinnamon-slate/5 border-b border-cinnamon-slate/10">
              <div className="font-mono text-xs text-cinnamon-slate tracking-wider mb-1">
                HOMEPAGE VARIANT
              </div>
              <div className="font-sans text-sm text-cinnamon-slate/60">
                Choose your preferred visual style
              </div>
            </div>

            <div className="p-4 space-y-3">
              {Object.entries(VARIANTS).map(([key, value]) => {
                const config = VARIANT_CONFIG[value];
                const isActive = variant === value;

                return (
                  <button
                    key={value}
                    onClick={() => {
                      setVariant(value);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                      isActive
                        ? 'border-muted-sage bg-muted-sage/5'
                        : 'border-cinnamon-slate/10 hover:border-cinnamon-slate/20 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-sans font-medium text-sm text-cinnamon-slate">
                        {config.name}
                      </div>
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-muted-sage"></div>
                      )}
                    </div>
                    <div className="font-sans text-xs text-cinnamon-slate/60">
                      {config.description}
                    </div>

                    {/* Color preview */}
                    <div className="flex gap-2 mt-3">
                      <div
                        className="w-6 h-6 rounded border border-cinnamon-slate/20"
                        style={{ backgroundColor: config.colors.background }}
                      />
                      <div
                        className="w-6 h-6 rounded border border-cinnamon-slate/20"
                        style={{ backgroundColor: config.colors.surface }}
                      />
                      <div
                        className="w-6 h-6 rounded border border-cinnamon-slate/20"
                        style={{ backgroundColor: config.colors.accent }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 bg-cinnamon-slate/5 border-t border-cinnamon-slate/10">
              <div className="font-sans text-xs text-cinnamon-slate/60 text-center">
                All variants share core infrastructure messaging
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
