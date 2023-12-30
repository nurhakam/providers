import { mp4uploadScraper } from '@/providers/embeds/mp4upload';
import { vidmolyScraper } from '@/providers/embeds/vidmoly';

export const kissasianBase = 'https://kissasian.lu';

export const embedProviders = [
  {
    type: mp4uploadScraper.id,
    id: 'mp',
  },
  {
    type: vidmolyScraper.id,
    id: 'vm',
  },
];
