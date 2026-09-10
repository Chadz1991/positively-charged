import { quotes } from '../data/quotes';

export function getDailyQuote() {
  const categories = Object.keys(quotes).filter(key => key !== 'seasonal');
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const categoryQuotes = quotes[randomCategory];

  const randomQuote = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];

  return {
    quote: randomQuote,
    category: randomCategory
  };
}

export function getSeasonalQuote(season) {
  return quotes.seasonal[season] || "Rise gently, grow bravely.";
}
