import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';

interface StarRatingProps {
  value: number | null;
  onChange: (value: number) => void;
  label?: string;
}

export function StarRating({ value, onChange, label }: StarRatingProps) {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-2" role="group" aria-label={t('rating.label')}>
      {label && <span className="text-sm text-text-muted">{label || t('rating.label')}</span>}
      <div className="flex gap-0.5" onMouseLeave={() => setHovered(null)}>
        {[1, 2, 3, 4, 5].map((star) => {
          const active = hovered !== null ? star <= hovered : value !== null && star <= value;
          return (
            <button
              key={star}
              onClick={() => onChange(star)}
              onMouseEnter={() => setHovered(star)}
              className="p-1 transition-transform duration-fast hover:scale-125"
              aria-label={`${star} ${star > 1 ? t('rating.star_other') : t('rating.star_one')}`}
              aria-pressed={value === star}
            >
              <Star
                size={20}
                className={`transition-colors duration-fast ${
                  active
                    ? 'fill-lecko-orange text-lecko-orange'
                    : 'text-text-muted/60 hover:text-lecko-orange/50'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
