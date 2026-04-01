import { Star } from 'lucide-react';

interface StarRatingProps {
  value: number | null;
  onChange: (value: number) => void;
  label?: string;
}

export function StarRating({ value, onChange, label }: StarRatingProps) {
  return (
    <div className="flex items-center gap-2">
      {label && <span className="text-sm text-text-muted">{label}</span>}
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onChange(star)}
            className="p-0.5 transition-colors"
            aria-label={`${star} etoile${star > 1 ? 's' : ''}`}
          >
            <Star
              size={20}
              className={
                value !== null && star <= value
                  ? 'fill-lecko-orange text-lecko-orange'
                  : 'text-border-light'
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}
